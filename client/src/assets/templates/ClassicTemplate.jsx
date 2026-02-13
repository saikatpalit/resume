import { Mail, Phone, MapPin, Linkedin, Globe, Github } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
            {/* Header */}
<header
  className="mb-3 pb-3 border-b-2"
  style={{ borderColor: accentColor }}
>
  <div className="grid grid-cols-[auto_1px_1fr] items-start">

    {/* LEFT SIDE */}
    <div className="pr-6">
      <h1
        className="text-3xl font-bold tracking-wide"
        style={{ color: accentColor }}
      >
        {data.personal_info?.full_name || "Your Name"}
      </h1>

      {data.personal_info?.profession && (
        <p className="text-md text-gray-700 mt-1">
          {data.personal_info.profession}
        </p>
      )}
    </div>

    {/* DIVIDER */}
    <div
      className="w-px h-full opacity-40"
      style={{ backgroundColor: accentColor }}
    />

    {/* RIGHT SIDE */}
    <div className="pl-6 text-sm text-gray-700 space-y-1">

      {/* Email + Phone */}
      <div className="flex flex-wrap gap-x-6 gap-y-1 items-start">
        
        {data.personal_info?.email && (
          <div className="flex items-start gap-1 min-w-0">
            <Mail className="size-4 mt-0.5 shrink-0" />
            <span className="leading-snug break-all">
              {data.personal_info.email}
            </span>
          </div>
        )}

        {data.personal_info?.phone && (
          <div className="flex items-start gap-1 min-w-0">
            <Phone className="size-4 mt-0.5 shrink-0" />
            <span className="leading-snug">
              {data.personal_info.phone}
            </span>
          </div>
        )}

              {/* Location */}
      {data.personal_info?.location && (
        <div className="flex items-start gap-1 min-w-0">
          <MapPin className="size-4 mt-0.5 shrink-0" />
          <span className="leading-snug">
            {data.personal_info.location}
          </span>
        </div>
      )}

      </div>


        {data.personal_info?.website && (
          <div className="flex items-start gap-1 min-w-0">
            <Globe className="size-4 mt-0.5 shrink-0" />
            <span className="break-all leading-snug">
              {data.personal_info.website}
            </span>
          </div>
        )}


      {/* Links */}
      <div className="flex flex-wrap gap-x-6 gap-y-1 items-start">

        

        {data.personal_info?.github && (
          <div className="flex items-start gap-1 min-w-0">
            <Github className="size-4 mt-0.5 shrink-0" />
            <span className="break-all leading-snug">
              {data.personal_info.github}
            </span>
          </div>
        )}

        {data.personal_info?.linkedin && (
          <div className="flex items-start gap-1 min-w-0">
            <Linkedin className="size-4 mt-0.5 shrink-0" />
            <span className="break-all leading-snug">
              {data.personal_info.linkedin}
            </span>
          </div>
        )}



      </div>

    </div>

  </div>
</header>


 

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-3">
                    <h2 className="text-xl font-semibold mb-1" style={{ color: accentColor }}>
                        PROFESSIONAL SUMMARY :
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{data.professional_summary}</p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-3">
                    <h2 className="text-xl font-semibold mb-1" style={{ color: accentColor }}>
                        EXPERIENCE (Non Professional) :
                    </h2>

                    <div className="space-y-1.5">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="border-l-3 pl-4" style={{ borderColor: accentColor }}>
                                <div className="flex justify-between items-start mb-0">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                                        <p className="text-gray-700 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-right text-sm text-gray-600">
                                        <p>{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}</p>
                                    </div>
                                </div>
                                {exp.description && (
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {exp.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

{/* Projects */}
{data.project && data.project.length > 0 && (
  <section className="mb-3">

    <h2
      className="text-xl font-semibold mb-1"
      style={{ color: accentColor }}
    >
      PROJECTS :
    </h2>

    <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">

      {data.project.map((proj, index) => (
        <li key={index} className="text-gray-800">

          <span className="font-semibold">
            {proj.name}
          </span>

          {proj.description && (
            <span className="text-gray-600">
              {" — "}
              {proj.description}
            </span>
          )}

        </li>
      ))}

    </ul>
  </section>
)}


            
{/* Skills */}
{data.skills && data.skills.length > 0 && (
  <section className="mb-3">
    <h2
      className="text-xl font-semibold mb-2 tracking-wide"
      style={{ color: accentColor }}
    >
      CORE SKILLS :
    </h2>

    <div className="flex flex-wrap gap-2">
      {data.skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-0.5 text-sm font-medium text-gray-800 bg-gray-100 rounded-md"
        >
          • {skill}
        </span>
      ))}
    </div>
  </section>
)}

         {/* Education */}
{data.education && data.education.length > 0 && (
  <section className="mb-3">

    {data.education.map((edu, index) => (
      <div key={index} className="mb-3">

        {/* Top Row */}
        <div className="flex items-baseline">

          {/* EDUCATION Label */}
          {index === 0 && (
            <h2
              className="text-xl font-semibold min-w-[140px]"
              style={{ color: accentColor }}
            >
              EDUCATION :
            </h2>
          )}

          {/* Degree */}
          <h3 className="font-semibold text-gray-900">
            {edu.degree} {edu.field && `in ${edu.field}`}
          </h3>

          {/* Year */}
          <span className="ml-auto text-sm text-gray-600">
            ({edu.start_year || "—"} - {edu.end_year || "Present"})
          </span>

        </div>

        {/* College + CGPA */}
        <div className="mt-1">
          <p className="text-gray-700">{edu.institution}</p>

          {edu.gpa && (
            <p className="text-sm text-gray-600">
              CGPA: {edu.gpa}
            </p>
          )}
        </div>

      </div>
    ))}

  </section>
)}




            
{/* INTERESTS */}

{(data.interests?.professional?.length > 0 ||
  data.interests?.personal?.length > 0) && (
  <section className="mb-3">

    {/* Header Row (Aligned with Grid) */}
    <div className="grid grid-cols-2 gap-3 items-start mb-1">

      <h2
        className="text-xl font-semibold"
        style={{ color: accentColor }}
      >
        INTERESTS :
      </h2>

      {data.interests?.personal?.length > 0 && (
        <h3 className="font-semibold text-gray-900">
          Personal Interests :
        </h3>
      )}

    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-2 gap-3 items-start">

      {/* Professional Interests */}
      {data.interests?.professional?.length > 0 && (
        <div>
          {data.interests.professional.map((interest, index) => (
<div key={index} className="text-gray-700 mb-3">

  <div className="flex items-baseline">
    <p className="font-medium">
      {interest.title}
    </p>

    {interest.website && (
      <p className="ml-1 text-sm text-blue-600 break-all">
        {interest.website}
      </p>
    )}
  </div>

  {interest.description && (
    <p className="text-sm mt-1">
      {interest.description}
    </p>
  )}

</div>

          ))}
        </div>
      )}

      {/* Personal Interests */}
      {data.interests?.personal?.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-2">
            {data.interests.personal.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

    </div>
  </section>
)}



             {/* CERTIFICATIONS (NEW SECTION) */}
      {data.certification && data.certification.length > 0 && (
        <section className="mb-1">
          <h2 className="text-lg font-semibold" style={{ color: accentColor }}>
            CERTIFICATIONS
          </h2>

          <div className="space-y-1">
            {data.certification.map((cert, index) => {
              return (
                <div key={index} className="flex items-start">
                  <div className="grow">
                    <div className="flex justify-between items-start text-sm">
                      <h3 className="text-gray-900 font-medium leading-tight">
                        {cert.credential_url ? (
                          <div className="flex items-center">
                            {cert.certificate_name}

                            <p className="text-sm text-gray-700 italic ml-1">
                              {cert.issuer}
                            </p>
                            <a
                              href={cert.credential_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink
                                size={12}
                                className="ml-1 opacity-75 shrink-0"
                              />
                            </a>
                          </div>
                        ) : (
                          cert.certificate_name
                        )}
                      </h3>
                      <p className="text-sm text-gray-500 shrink-0">
                        {formatDate(cert.issue_date)}
                      </p>
                    </div>

                    {cert.description && (
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
        </div>
    );
}

export default ClassicTemplate;