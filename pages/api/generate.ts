// pages/api/generate.ts

import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("[generate] ▶️ Handler start @", new Date().toISOString());

  try {
    // 1) Method check
    console.log("[generate] Method:", req.method);
    if (req.method !== "POST") {
      console.log("[generate] ✋ Wrong method");
      return res.status(405).json({ error: "Method not allowed" });
    }

    // 2) Body / prompt check
    console.log("[generate] Body:", req.body);
    const { prompt } = req.body;
    if (!prompt) {
      console.log("[generate] ⚠️ No prompt provided");
      return res.status(400).json({ error: "No prompt provided" });
    }

    // 3) API key check
    const apiKey = process.env.OPENAI_API_KEY;
    console.log("[generate] OPENAI_API_KEY present?", Boolean(apiKey));
    if (!apiKey) {
      console.log("[generate] ❌ Missing OPENAI_API_KEY");
      return res.status(500).json({ error: "Missing OPENAI_API_KEY" });
    }

    // 4) Call OpenAI
    console.log("[generate] Calling OpenAI…");
    const openai = new OpenAI({ apiKey });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    const text = completion.choices[0].message.content;
    console.log("[generate] ✅ OpenAI response received");

    return res.status(200).json({ text });
  } catch (err: any) {
    console.error("[generate] 💥 ERROR:", err);
    return res
      .status(500)
      .json({ error: err.message || "AI generation failed" });
  }
}
