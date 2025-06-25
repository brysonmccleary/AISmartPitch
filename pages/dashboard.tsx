import { useState } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Output from "../components/Output";

export default function Dashboard() {
  const [idea, setIdea] = useState("");
  const [pitch, setPitch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!idea) return;
    setLoading(true);
    setPitch("");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea }),
    });

    const data = await response.json();
    setPitch(data.pitch);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <Form idea={idea} setIdea={setIdea} onSubmit={handleGenerate} loading={loading} />
        <Output pitch={pitch} />
      </main>
    </div>
  );
}
