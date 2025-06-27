// pages/api/generate.ts

import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // ─── DEBUG LOGS ──────────────────────────────────────────────────────────────
  console.log("[generate] 🔔 incoming request @", new Date().toISOString());
  console.log("[generate] method:", req.method);
  console.log("[generate] body:", req.body);
  console.log("[generate] OPENAI_API_KEY loaded?", !!process.env.OPENAI_API_KEY);
  // ─────────────────────────────────────────────────────────────────────────────

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    return res.status(200).json({ text: completion.choices[0].message.content });
  } catch (err: any) {
    console.error("[generate] OpenAI error:", err);
    return res.status(500).json({ error: "AI generation failed" });
  }
}
