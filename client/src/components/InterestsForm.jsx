import { Plus, X } from "lucide-react";
import { useState } from "react";

const InterestsForm = ({ data, onChange }) => {
  const [professional, setProfessional] = useState({
    title: "",
    website: "",
    description: "",
  });

  const [personalInput, setPersonalInput] = useState("");

  /* ---------------- Professional Interest ---------------- */

  const addProfessional = () => {
    if (!professional.title.trim()) return;

    onChange({
      ...data,
      professional: [...data.professional, professional],
    });

    setProfessional({
      title: "",
      website: "",
      description: "",
    });
  };

  const removeProfessional = (index) => {
    onChange({
      ...data,
      professional: data.professional.filter((_, i) => i !== index),
    });
  };

  /* ---------------- Personal Interest ---------------- */

  const addPersonal = () => {
    if (!personalInput.trim()) return;

    onChange({
      ...data,
      personal: [...data.personal, personalInput.trim()],
    });

    setPersonalInput("");
  };

  const removePersonal = (index) => {
    onChange({
      ...data,
      personal: data.personal.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">

      {/* PROFESSIONAL INTEREST */}
      <div>
        <h3 className="text-lg font-semibold">Professional Interests</h3>

        <input
          type="text"
          placeholder="Title (Founder - Technical Blog)"
          value={professional.title}
          onChange={(e) =>
            setProfessional({ ...professional, title: e.target.value })
          }
          className="w-full px-3 py-2 text-sm mt-2"
        />

        <input
          type="text"
          placeholder="Website (optional)"
          value={professional.website}
          onChange={(e) =>
            setProfessional({ ...professional, website: e.target.value })
          }
          className="w-full px-3 py-2 text-sm mt-2"
        />

        <textarea
          placeholder="Short Description"
          value={professional.description}
          onChange={(e) =>
            setProfessional({
              ...professional,
              description: e.target.value,
            })
          }
          className="w-full px-3 py-2 text-sm mt-2"
        />

        <button
          onClick={addProfessional}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded mt-2"
        >
          <Plus size={16} /> Add Professional Interest
        </button>

        {/* List */}
        {data.professional.length > 0 && (
          <div className="space-y-2 mt-3">
            {data.professional.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border p-2 rounded"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.website}</p>
                </div>

                <button onClick={() => removeProfessional(index)}>
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PERSONAL INTEREST */}
      <div>
        <h3 className="text-lg font-semibold">Personal Interests</h3>

        <div className="flex gap-2 mt-2">
          <input
            type="text"
            placeholder="Add personal interest"
            value={personalInput}
            onChange={(e) => setPersonalInput(e.target.value)}
            className="flex-1 px-3 py-2 text-sm"
            onKeyDown={(e) => e.key === "Enter" && addPersonal()}
          />

          <button
            onClick={addPersonal}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Chips */}
        {data.personal.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {data.personal.map((item, index) => (
              <span
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {item}
                <button onClick={() => removePersonal(index)}>
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterestsForm;
