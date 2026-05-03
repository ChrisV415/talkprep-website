import { Router } from "express";
import { anthropic } from "@workspace/integrations-anthropic-ai";
import { GenerateResignationScriptBody } from "@workspace/api-zod";

const router = Router();

router.post("/resignation-script", async (req, res) => {
  const parsed = GenerateResignationScriptBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { scenario, managerDescription, goal } = parsed.data;

  const system = `You are TalkPrep — a private conversation coach. Give real, specific scripts for exactly this person's situation. Be concise.

Format with these EXACT headers on their own lines:
YOUR OPENING
WHAT THEY MIGHT SAY
YOUR GROUNDING THOUGHT`;

  const prompt = `Help me prepare to resign.
Situation: ${scenario}
Who my manager is: ${managerDescription}
Most important thing: ${goal || "Leave on good terms, keep the relationship"}

Give me:
1. YOUR OPENING — exact words to say to start the resignation conversation.
2. WHAT THEY MIGHT SAY — 2 specific likely responses and exactly what to say to each.
3. YOUR GROUNDING THOUGHT — one thing to hold onto mentally.

Specific to my situation. Real words, not generic advice. Be concise.`;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  try {
    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 800,
      system,
      messages: [{ role: "user", content: prompt }],
    });

    for await (const event of stream) {
      if (
        event.type === "content_block_delta" &&
        event.delta.type === "text_delta"
      ) {
        res.write(`data: ${JSON.stringify({ content: event.delta.text })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err) {
    req.log.error({ err }, "Error generating resignation script");
    res.write(`data: ${JSON.stringify({ error: "Generation failed" })}\n\n`);
    res.end();
  }
});

export default router;
