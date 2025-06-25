type OutputProps = {
  pitch: string;
};

export default function Output({ pitch }: OutputProps) {
  if (!pitch) return null;

  return (
    <div className="mt-8 bg-white shadow-md p-6 rounded-lg border border-gray-200 whitespace-pre-wrap">
      <h2 className="text-2xl font-semibold mb-4">Your AI-Generated Pitch Deck:</h2>
      <div className="text-gray-800">{pitch}</div>
    </div>
  );
}
