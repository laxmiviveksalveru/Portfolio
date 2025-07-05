import { personalInfo } from "@/data/personal";

export function SEOSchema() {
  const currentUrl = personalInfo.website;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${currentUrl}#person`,
        "name": personalInfo.name,
        "jobTitle": "AI ML Engineer",
        "description": `${personalInfo.tagline} - Experienced AI/ML Engineer with expertise in machine learning, deep learning, and computer vision.`,
        "url": currentUrl,
        "sameAs": [
          `https://${personalInfo.contact.linkedin}`,
          `https://${personalInfo.contact.github}`,
          personalInfo.contact.stackoverflow
        ],
        "email": personalInfo.contact.email,
        "telephone": `+91-${personalInfo.contact.phone}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "India",
          "postalCode": "500001"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": personalInfo.education[0].institution,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressCountry": "India"
            }
          }
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "Deep Learning",
          "Computer Vision",
          "Natural Language Processing",
          "Data Science",
          "Python Programming",
          "TensorFlow",
          "PyTorch",
          "AWS Cloud Services",
          "Data Analysis",
          "Neural Networks"
        ],
        "hasCredential": personalInfo.certificates.map(cert => ({
          "@type": "EducationalOccupationalCredential",
          "name": cert.name,
          "credentialCategory": "certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": cert.issuer
          }
        })),
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance AI/ML Engineer"
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "AI ML Engineer",
          "occupationLocation": {
            "@type": "City",
            "name": "Hyderabad"
          },
          "skills": "Machine Learning, Deep Learning, Computer Vision, NLP, Python, TensorFlow, AWS"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${currentUrl}#website`,
        "url": currentUrl,
        "name": `${personalInfo.name} - AI ML Engineer Portfolio`,
        "description": `Professional portfolio showcasing AI and Machine Learning projects by ${personalInfo.name}, an experienced AI/ML Engineer from Hyderabad, India.`,
        "inLanguage": "en-US",
        "about": {
          "@id": `${currentUrl}#person`
        },
        "author": {
          "@id": `${currentUrl}#person`
        },
        "copyrightHolder": {
          "@id": `${currentUrl}#person`
        },
        "copyrightYear": "2024",
        "dateCreated": "2024-01-01",
        "dateModified": "2025-07-05",
        "keywords": "AI Engineer, Machine Learning, Deep Learning, Computer Vision, Portfolio, Hyderabad"
      },
      {
        "@type": "ProfilePage",
        "@id": `${currentUrl}#profilepage`,
        "url": currentUrl,
        "name": `${personalInfo.name} - AI ML Engineer Portfolio`,
        "isPartOf": {
          "@id": `${currentUrl}#website`
        },
        "about": {
          "@id": `${currentUrl}#person`
        },
        "description": `Professional portfolio showcasing innovative AI and Machine Learning projects, certifications, and expertise by ${personalInfo.name}`,
        "inLanguage": "en-US",
        "mainEntity": {
          "@id": `${currentUrl}#person`
        }
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
