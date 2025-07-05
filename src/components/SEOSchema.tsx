import { personalInfo } from "@/data/personal";

export function SEOSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://laxmiviveksalveru.github.io/#person",
        "name": personalInfo.name,
        "jobTitle": personalInfo.title,
        "description": personalInfo.tagline,
        "url": "https://laxmiviveksalveru.github.io/",
        "sameAs": [
          `https://${personalInfo.contact.linkedin}`,
          `https://${personalInfo.contact.github}`,
          personalInfo.contact.stackoverflow
        ],
        "email": personalInfo.contact.email,
        "telephone": `+91-${personalInfo.contact.phone}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": personalInfo.contact.location.split(", ")[0],
          "addressCountry": "India"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": personalInfo.education[0].institution
        },
        "knowsAbout": [
          ...personalInfo.skills["AI/ML"],
          ...personalInfo.skills["Cloud Platforms"],
          ...personalInfo.skills["Programming"]
        ],
        "hasCredential": personalInfo.certificates.map(cert => ({
          "@type": "EducationalOccupationalCredential",
          "name": cert.name,
          "credentialCategory": "certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": cert.issuer
          }
        }))
      },
      {
        "@type": "WebSite",
        "@id": "https://laxmiviveksalveru.github.io/#website",
        "url": "https://laxmiviveksalveru.github.io/",
        "name": `${personalInfo.name} - Portfolio`,
        "description": personalInfo.tagline,
        "inLanguage": "en-US",
        "about": {
          "@id": "https://laxmiviveksalveru.github.io/#person"
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://laxmiviveksalveru.github.io/#profilepage",
        "url": "https://laxmiviveksalveru.github.io/",
        "name": `${personalInfo.name} - AI ML Engineer Portfolio`,
        "isPartOf": {
          "@id": "https://laxmiviveksalveru.github.io/#website"
        },
        "about": {
          "@id": "https://laxmiviveksalveru.github.io/#person"
        },
        "description": `Portfolio showcasing AI and Machine Learning projects by ${personalInfo.name}`,
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
