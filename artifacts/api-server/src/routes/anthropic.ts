import { Router } from "express";
import { db, conversations as conversationsTable, messages as messagesTable } from "@workspace/db";
import { anthropic } from "@workspace/integrations-anthropic-ai";
import { eq } from "drizzle-orm";
import {
  CreateAnthropicConversationBody,
  GetAnthropicConversationParams,
  DeleteAnthropicConversationParams,
  ListAnthropicMessagesParams,
  SendAnthropicMessageBody,
  SendAnthropicMessageParams,
} from "@workspace/api-zod";

const router = Router();

router.get("/anthropic/conversations", async (req, res) => {
  const conversations = await db.select().from(conversationsTable);
  res.json(conversations);
});

router.post("/anthropic/conversations", async (req, res) => {
  const parsed = CreateAnthropicConversationBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }
  const [conv] = await db
    .insert(conversationsTable)
    .values({ title: parsed.data.title })
    .returning();
  res.status(201).json(conv);
});

router.get("/anthropic/conversations/:id", async (req, res) => {
  const params = GetAnthropicConversationParams.safeParse({
    id: Number(req.params.id),
  });
  if (!params.success) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }
  const [conv] = await db
    .select()
    .from(conversationsTable)
    .where(eq(conversationsTable.id, params.data.id));
  if (!conv) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  const messages = await db
    .select()
    .from(messagesTable)
    .where(eq(messagesTable.conversationId, conv.id));
  res.json({ ...conv, messages });
});

router.delete("/anthropic/conversations/:id", async (req, res) => {
  const params = DeleteAnthropicConversationParams.safeParse({
    id: Number(req.params.id),
  });
  if (!params.success) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }
  const [conv] = await db
    .select()
    .from(conversationsTable)
    .where(eq(conversationsTable.id, params.data.id));
  if (!conv) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  await db
    .delete(messagesTable)
    .where(eq(messagesTable.conversationId, conv.id));
  await db
    .delete(conversationsTable)
    .where(eq(conversationsTable.id, conv.id));
  res.status(204).send();
});

router.get("/anthropic/conversations/:id/messages", async (req, res) => {
  const params = ListAnthropicMessagesParams.safeParse({
    id: Number(req.params.id),
  });
  if (!params.success) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }
  const messages = await db
    .select()
    .from(messagesTable)
    .where(eq(messagesTable.conversationId, params.data.id));
  res.json(messages);
});

router.post("/anthropic/conversations/:id/messages", async (req, res) => {
  const params = SendAnthropicMessageParams.safeParse({
    id: Number(req.params.id),
  });
  const body = SendAnthropicMessageBody.safeParse(req.body);
  if (!params.success || !body.success) {
    res.status(400).json({ error: "Invalid request" });
    return;
  }

  const [conv] = await db
    .select()
    .from(conversationsTable)
    .where(eq(conversationsTable.id, params.data.id));
  if (!conv) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  await db.insert(messagesTable).values({
    conversationId: conv.id,
    role: "user",
    content: body.data.content,
  });

  const allMessages = await db
    .select()
    .from(messagesTable)
    .where(eq(messagesTable.conversationId, conv.id));

  const chatMessages = allMessages.map((m) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }));

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let fullResponse = "";

  const stream = anthropic.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    messages: chatMessages,
  });

  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      fullResponse += event.delta.text;
      res.write(`data: ${JSON.stringify({ content: event.delta.text })}\n\n`);
    }
  }

  await db.insert(messagesTable).values({
    conversationId: conv.id,
    role: "assistant",
    content: fullResponse,
  });

  res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
  res.end();
});

export default router;
