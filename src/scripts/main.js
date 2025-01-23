const cvData = {
  profile: {
    name: "Faycal Rafa",
    socialLinks: [
      {
        icon: "fab fa-linkedin",
        url: "https://www.linkedin.com/in/faycal-rafa-89a366249",
      },
      {
        icon: "fab fa-github",
        url: "https://github.com/faycalrafa",
      },
      {
        icon: "fab fa-facebook",
        url: "https://web.facebook.com/faycalrafa96",
      },
      {
        icon: "fas fa-envelope",
        url: "mailto:rafafaycal@gmail.com",
      },
      {
        icon: "fas fa-phone",
        url: "tel:+213540980238",
      },
    ],
  },
  about: {
    description:
      "Full Stack Developer with 6+ years of experience in web and mobile development. Passionate about creating efficient and scalable solutions.",
    skills: [
      "Dart",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "jQuery",
      "React.js",
      "Next.js",
      "PHP",
      "Flutter",
      "NestJS",
      "Docker",
      "Redis",
      "JWT",
      "SQL/NoSQL",
      "Nginx",
      "Traefik",
      "Tailwind CSS",
      "Git",
      "WebSocket",
      "Linux Bash/shell",
      "Windows CMD/Powershell",
      "CI/CD",
      "Software Architecture & Design",
    ],
  },
  experience: [
    {
      company: "Sarl Finnetude",
      position: "Tech Lead",
      duration: "2024 - Present",
      description:
        "Leading a team of 3 developers in building a stock trading platform for a fintech solutions company.",
    },
    {
      company: "Piassa",
      position: "Full Stack Developer",
      duration: "2024 - mid 2024",
      description:
        "1. Maintaining current software systems <br>2. Conducting R&D activities <br>3. Developing cart parts management software <br>4. Continuously improving and optimizing existing applications",
    },
    {
      company: "InstaClean",
      position: "Mobile Developer (flutter)",
      duration: "2023 - 2024",
      description:
        "Developed an all-in-one mobile application connecting car wash agents with car owners and providing efficient order tracking for both parties.",
    },
    {
      company: "KabriAuto",
      position: "Full Stack Developer",
      duration: "2023 - 2024 (Part-time)",
      description:
        "Contributed to the development of an e-commerce platform for car parts to be launched in Dubai.",
    },
    {
      company: "Piassa",
      position: "Full Stack Developer",
      duration: "2022 - 2023",
      description:
        "1. Significantly contributed to mobile application development<br>2. Designed customer landing pages<br>3. Developed car parts and order management system<br>4. Established API connecting supplier's database with Piassa's for real-time data synchronization",
    },
    {
      company: "BFLN Technologies",
      position: "Full Stack Developer",
      duration: "2019 - 2022",
      description:
        "Led the development of a complete order tracking system and call center management system, optimizing the company's core business processes.",
    },
  ],
  education: {
    description:
      "Self-taught developer with online platforms such as Udemy and Udacity.",
    keyReadings: ["Clean Code", "Design Patterns"],
  },
  skills: {
    technical: [
      "Full Stack Web Development (Mainly Backend)",
      "mobile Development (Mainly Android)",
      "desktop Development (Mainly Windows/Linux)",
      "SQL/NoSQL Databases",
      "Data Analysis",
      "Software Architecture & Design",
    ],
  },
  languages: [
    {
      name: "French",
      proficiency: "Proficient",
    },
    {
      name: "Arabic",
      proficiency: "Proficient",
    },
    {
      name: "English",
      proficiency: "Highly Proficient",
    },
  ],
};

function loadCVData() {
  return cvData;
}

function populateProfile(data) {
  const profileHeader = document.querySelector("h1");
  profileHeader.textContent = data.profile.name;

  const socialLinks = document.querySelector(".social-links");
  socialLinks.innerHTML = data.profile.socialLinks
    .map(
      (link) => `
    <a href="${link.url}" target="_blank"><i class="${link.icon}"></i></a>
  `
    )
    .join("");
}

function populateAbout(data) {
  const aboutSection = document.querySelector(".container > .section-card");
  aboutSection.querySelector("p").textContent = data.about.description;

  const skillsContainer = aboutSection.querySelector(".skills");
  skillsContainer.innerHTML = data.about.skills
    .map(
      (skill) => `
    <span class="badge skill-badge">${skill}</span>
  `
    )
    .join("");
}

function populateExperience(data) {
  const experienceSection = document.querySelectorAll(".section-card")[1];
  experienceSection.innerHTML = `
    <h2><i class="fas fa-briefcase me-2"></i>Experience</h2>
    ${data.experience
      .map(
        (exp) => `
      <div class="timeline-item">
        <h5>${exp.position} @ ${exp.company}</h5>
        <small>${exp.duration}</small>
        <p class="mt-2">${exp.description}</p>
      </div>
    `
      )
      .join("")}
  `;
}

function populateEducation(data) {
  const educationSection = document.querySelectorAll(".section-card")[2];
  educationSection.innerHTML = `
    <h2><i class="fas fa-graduation-cap me-2"></i>Education</h2>
    <p>${data.education.description}</p>
    <p>
      <i class="fas fa-book me-2"></i>Key Readings: ${data.education.keyReadings.join(
        ", "
      )}
    </p>
  `;
}

function populateSkills(data) {
  const skillsSection = document.querySelector("#skills-section");
  skillsSection.innerHTML = `
    <h2><i class="fas fa-tools me-2"></i>Skills</h2>
    <ul class="skills-list">
      ${data.skills.technical
        .map(
          (skill) => `
        <li>${skill}</li>
      `
        )
        .join("")}
    </ul>
  `;
}

function init() {
  // Language bars animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".language-bar").forEach((bar) => {
    observer.observe(bar);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const data = loadCVData();
    populateProfile(data);
    populateAbout(data);
    populateExperience(data);
    populateEducation(data);
    populateSkills(data);

    document.querySelector(".download-cv-btn").addEventListener("click", () => {
      const data = loadCVData();
      generateCV(data);
    });
  });
}
function generateCV(cvData) {
  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cvData.profile.name} - Backend Developer</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
      @page {
          size: A4;
          margin: 0;
      }

      body {
          margin: 0;
          padding: 2cm;
          font-family: 'Calibri', sans-serif;
          color: #333;
          line-height: 1.6;
      }

      .container {
          display: flex;
          min-height: 29.7cm;
      }

      .sidebar {
          width: 30%;
          background-color: #f8f9fa;
          padding: 2rem;
      }

      .main-content {
          width: 70%;
          padding: 2rem;
      }

      h1 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
      }

      h2 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 0.3rem;
          font-size: 1.4rem;
          margin-top: 1.5rem;
      }

      .social-links {
          margin: 1rem 0;
      }

      .social-links a {
          color: #3498db;
          margin-right: 1rem;
          font-size: 1.2rem;
      }

      .skills {
          list-style: none;
          padding-left: 0;
          columns: 2;
      }

      .skills li {
          margin-bottom: 0.5rem;
      }

      .experience-item {
          margin-bottom: 1.5rem;
      }

      .company {
          font-weight: bold;
          color: #2c3e50;
      }

      .position {
          color: #3498db;
          margin: 0.3rem 0;
      }

      .duration {
          color: #7f8c8d;
          font-size: 0.9rem;
      }

      .description {
          margin: 0.5rem 0;
          font-size: 0.95rem;
      }

      .languages {
          columns: 2;
          list-style: none;
          padding-left: 0;
      }

      .language {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
      }
  </style>
</head>
<body>
  <div class="container">
      <div class="sidebar">
          <h1>${cvData.profile.name}</h1>
          
          <div class="social-links">
              ${cvData.profile.socialLinks
                .map(
                  (link) =>
                    `<a href="${link.url}"><i class="${link.icon}"></i></a>`
                )
                .join(" ")}
          </div>

          <h2>Technical Skills</h2>
          <ul class="skills">
              ${cvData.about.skills
                .slice(0, 10)
                .map((skill) => `<li>${skill}</li>`)
                .join("")}
          </ul>

          <h2>Languages</h2>
          <ul class="languages">
              ${cvData.languages
                .map(
                  (lang) => `
                  <li class="language">
                      <span>${lang.name}</span>
                      <span>${lang.proficiency}</span>
                  </li>`
                )
                .join("")}
          </ul>
      </div>

      <div class="main-content">
          <h2>Professional Experience</h2>
          <div class="experience">
              ${cvData.experience
                .map(
                  (exp) => `
                  <div class="experience-item">
                      <div class="company">${exp.company}</div>
                      <div class="position">${exp.position}</div>
                      <div class="duration">${exp.duration}</div>
                      <div class="description">${exp.description}</div>
                  </div>`
                )
                .join("")}
          </div>

          <h2>Education</h2>
          <div class="education">
              <div class="description">
                  ${cvData.education.description}
              </div>
              <div style="margin-top: 1rem;">
                  <strong>Key Readings:</strong> ${cvData.education.keyReadings.join(
                    ", "
                  )}
              </div>
          </div>

          <h2>Technical Expertise</h2>
          <ul class="skills">
              ${cvData.skills.technical
                .map((skill) => `<li>${skill}</li>`)
                .join("")}
          </ul>
      </div>
  </div>
</body>
</html>`;

  // Open in new window and print
  const printWindow = window.open("", "_blank");
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  printWindow.onload = function () {
    printWindow.focus();
    printWindow.print();
  };
}
init();
