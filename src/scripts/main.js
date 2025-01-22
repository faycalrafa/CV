const cvData = {
  profile: {
    name: "Faycal Rafa",
    socialLinks: [
      {
        icon: "fab fa-linkedin",
        url: "#",
      },
      {
        icon: "fab fa-github",
        url: "#",
      },
      {
        icon: "fab fa-twitter",
        url: "#",
      },
      {
        icon: "fas fa-envelope",
        url: "mailto:rafafaycal@gmail.com",
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

function generatePDF() {
  const element = document.querySelector(".container");
  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf.jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("faycal-rafa-cv.pdf");
  });
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

function populateLanguages(data) {
  const languagesSection = document.querySelector("#languages-section");
  languagesSection.innerHTML = `
    <h2><i class="fas fa-language me-2"></i>Languages</h2>
    <ul class="languages-list">
      ${data.languages
        .map(
          (lang) => `
        <li>${lang.name}: ${lang.proficiency}</li>
      `
        )
        .join("")}
    </ul>
  `;
}

function init() {
  document.addEventListener("DOMContentLoaded", () => {
    const data = loadCVData();
    populateProfile(data);
    populateAbout(data);
    populateExperience(data);
    populateEducation(data);
    populateSkills(data);
    populateLanguages(data);

    document
      .querySelector(".download-btn")
      .addEventListener("click", generatePDF);
  });
}

init();
