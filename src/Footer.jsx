import React from "react";

const Footer = () => {
  const ff = [
    {
      a: "Amazon Web Services (AWS)",
      b: "Certifications",
      c: "Six Sigma Certifications",
      d: "Microsoft Certifications",
      e: "Cisco Certifications",
      f: "Tableau Certifications",
      g: "See all Certifications",
      h: "",
      i: "Certifications by Issuer",
    },
    {
      a: "Web Development",
      b: "JavaScript",
      c: "React JS",
      d: "Angular",
      e: "Java",
      f: "",
      g: "",
      h: "",
      i: "Web Development",
    },
    {
      a: "Amazon AWS",
      b: "AWS Certified Cloud",
      c: "Practitioner",
      d: "AZ-900: Microsoft Azure",
      e: "Fundamentals",
      f: "AWS Certified Solutions",
      g: "Architect - Associate",
      h: "Kubernetes",
      i: "IT Certifications",
    },
    {
      a: "Leadership",
      b: "Management Skills",
      c: "Project Management",
      d: "Personal Productivity",
      e: "Emotional Intelligence",
      f: "",
      g: "",
      h: "",
      i: "Leadership",
    },
    {
      a: "Cybersecurity Certification",
      b: "Project Management",
      c: "Certification",
      d: "Cloud Certification",
      e: "Data Analytics Certification",
      f: "HR Management Certification",
      g: "See all Certifications",
      h: "",
      i: "Certifications by Skill",
    },
    {
      a: "Data Science",
      b: "Python",
      c: "Machine Learning",
      d: "ChatGPT",
      e: "Deep Learning",
      f: "",
      g: "",
      h: "",
      i: "Data Science",
    },
    {
      a: "Communication Skills",
      b: "Presentation Skills",
      c: "Public Speaking",
      d: "Writing",
      e: "PowerPoint",
      f: "",
      g: "",
      h: "",
      i: "Communication",
    },
    {
      a: "Microsoft Excel",
      b: "SQL",
      c: "Microsoft Power BI",
      d: "Data Analysis",
      e: "Business Analysis",
      f: "",
      g: "",
      h: "",
      i: "Business Analytics & Intelligence",
    },
  ];

  return (
    <React.Fragment>
      <section className="bg-dark text-white">
        <div className="container py-5">
          <h3 className="fw-bold auto mb-5">
            Explore top skills and certifications
          </h3>
          <div className="row mb-4">
            {ff.map((f,index) => (
              <div className=" foo col-lg-3 mb-5" key={index}>
                <h5 className="fw-bold mb-3">{f.i}</h5>
                <p>{f.a}</p>
                <p>{f.b}</p>
                <p>{f.c}</p>
                <p>{f.d}</p>
                <p>{f.e}</p>
                <p>{f.f}</p>
                <p>{f.g}</p>
                <p>{f.h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container text-center p-2">
        <p> @2025 Copyright Growlearn.com </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
