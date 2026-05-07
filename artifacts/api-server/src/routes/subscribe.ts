import { Router } from "express";

const router = Router();

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    res.status(400).json({ error: "Valid email required" });
    return;
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    req.log.error("Mailchimp credentials missing");
    res.status(500).json({ error: "Newsletter not configured" });
    return;
  }

  const dc = apiKey.split("-").pop();

  try {
    const response = await fetch(
      `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    const data = await response.json() as { status?: string | number; title?: string; detail?: string };

    if (response.ok || data.title === "Member Exists") {
      res.json({ success: true });
      return;
    }

    req.log.warn({ status: data.status, title: data.title, detail: data.detail }, "Mailchimp error");
    res.status(400).json({ error: data.title ?? "Subscription failed" });
  } catch (err) {
    req.log.error({ err }, "Mailchimp request failed");
    res.status(500).json({ error: "Request failed" });
  }
});

export default router;
