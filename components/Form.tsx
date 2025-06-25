type FormProps = {
  idea: string;
  setIdea: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
};

export default function Form({ idea, setIdea, onSubmit, loading }: FormProps) {
  return (
    <div className="mb-6">
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Describe your startup idea..."
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 resize-none"
        rows={5}
      />
      <button
        onClick={onSubmit}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Pitch Deck"}
      </button>
    </div>
  );
}
