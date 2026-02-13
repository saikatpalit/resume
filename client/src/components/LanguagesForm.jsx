import { Plus, Sparkles, X } from "lucide-react";
import { useState } from "react";

const LanguagesForm = ({ data, onChange }) => {
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");

  const addLanguage = () => {
    if (language.trim() && level.trim()) {
      const newEntry = {
        name: language.trim(),
        level: level.trim()
      };

      onChange([...data, newEntry]);

      setLanguage("");
      setLevel("");
    }
  };

  const removeLanguage = (indexToRemove) => {
    onChange(data.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addLanguage();
    }
  };

  return (
    <div className="space-y-4">

      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Languages
        </h3>
        <p className="text-sm text-gray-500">
          Add languages you know and your proficiency
        </p>
      </div>

      {/* Input Fields */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Language (e.g., English)"
          className="flex-1 px-3 py-2 text-sm"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <input
          type="text"
          placeholder="Level (e.g., Read, Write, Speak)"
          className="flex-1 px-3 py-2 text-sm"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button
          onClick={addLanguage}
          disabled={!language.trim() || !level.trim()}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="size-4" /> Add
        </button>
      </div>

      {/* Added Languages List */}
      {data.length > 0 ? (
        <div className="flex flex-col gap-2">
          {data.map((lang, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm"
            >
              <span>
                <strong>{lang.name}</strong> — {lang.level}
              </span>

              <button
                onClick={() => removeLanguage(index)}
                className="hover:bg-blue-200 rounded-full p-1 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">
          <Sparkles className="w-10 h-10 mx-auto mb-2 text-gray-300" />
          <p>No Languages added yet.</p>
          <p className="text-sm">
            Add languages and your proficiency above.
          </p>
        </div>
      )}

      {/* Tip */}
      <div className="bg-blue-50 rounded-lg p-3">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Mention languages relevant to your job profile.
          Include proficiency like Read, Write, Speak or Fluent / Intermediate.
        </p>
      </div>

    </div>
  );
};

export default LanguagesForm;
