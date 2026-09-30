type PersonalDatum = {
  label: string;
  value: string;
};

type WorkItem = {
  title: string;
  items: string[];
};

type ProjectRow = {
  period: string;
  name: string;
  location: string;
  language: string;
  description: string;
};

const personalData: PersonalDatum[] = [
  { label: 'Date of Birth', value: '32 years old' },
  { label: 'Nationality', value: 'Indonesia' },
  { label: 'Marital Status', value: 'Single' },
  { label: 'Gender', value: 'Male' },
  { label: 'Religion', value: 'Christian' },
  { label: 'Foreign Language Proficiency', value: 'English' },
  { label: 'Postal Address', value: 'Jl. Sindang Jaya, RT 03/RW 08.' },
];

const workAssignments: WorkItem[] = [
  {
    title: 'September 2022 - Present, Programmer / Developer / Software Engineer / Technical Consultant. PT EMS Paramitra.',
    items: [
      'Implemented Ellipse ERP package version upgrades and Cloud Ellipse ERP deployment for the Darma Henwa Group as a Technical Consultant, ensuring system compatibility, smooth migration, and operational continuity.',
      'Developed BIMA Lite Maintenance, a web-based SaaS application for internal company use, using React JavaScript as the Frontend. Leveraged AI-assisted development tools, including ChatGPT, OpenAI Codex, Claude AI, and GitHub Copilot, to support coding, troubleshooting, code optimization, and development productivity.',
      'Developed a Mobile Warehouse application using Flutter (Dart) as a Frontend Developer. Utilized AI-assisted development tools, including ChatGPT and GitHub Copilot, to assist with code development, debugging, problem-solving, and implementation.',
      'Built reports and dashboards using Power BI for the Baramulti Marine Group project.',
      'Developed a SmartWee web portal (a neighborhood group management application) as a Full Stack Developer using ASP.NET Core, React TypeScript, and PostgreSQL.',
      'Created a web-based e-Purchasing system (e-Sourcing module) using Mendix (Low Code platform) as a Full Stack Developer with Mendix and PostgreSQL.',
      'Built a Customer Support web portal using Mendix as a Full Stack Developer.',
      'Led the Currency Change Project (USD to IDR) as a Technical Consultant for ERP Ellipse 9, involving Java Groovy, VB.NET, Oracle, and JasperReports.',
      'Provided technical customer support for ERP Ellipse 9 as a Technical Consultant, using Java Groovy, VB.NET, Oracle, and JasperReports.',
    ],
  },
  {
    title: 'February 2019 – August 2022, Programmer (Subcontractor of Metrodata) PT Pamapersada Nusantara. Worked on ERP Ellipse 6 (Desktop) and 9 (Web), as well as the PAMAWEB web portal.',
    items: [
      'Developed the PAMAWEB web portal using ASP.NET Framework and Umbraco 8 CMS with SQL Server 2016 as the database.',
      'Created, built, designed, and documented user exits, reports, and GUI maintenance for Ellipse 6 using COBOL and Oracle Database. Developed and maintained user exits, reports, and GUI for Ellipse 9 using Java Groovy and Oracle Database, including GUI maintenance.',
      'Developed Object Connectors and Uploader Scripts for Ellipse 9 using VB.NET/C# with Oracle Database, SQL Server, or Microsoft SQL Server.',
      'Migrated Ellipse reports (RDL or Jasper) to Oracle queries using SQL Developer.',
      'Analyzed system procedures of Minbol (Mining COBOL), focusing on algorithm analysis. Analyzed database structures for software development using Oracle Database, SQL Server, or Microsoft SQL Server. Performed system testing on Ellipse 6 Minbol and Ellipse 9 Web Version.',
    ],
  },
  {
    title: 'September 2018 – January 2019, PT Mitra Integrasi Informatika – Internal Project',
    items: [
      'Created design specification documents, including database structure, use cases, and business processes.',
      'Analyzed database structures for software development using MySQL or Oracle Database.',
      'Tested the system with JUnit and created design reports using JasperReports.',
      'Designed and built systems with Java (JDBC, MVC, ORM Persistence/Hibernate, Spring Boot) using Oracle or MySQL databases.',
    ],
  },
];

const projectRows: ProjectRow[] = [
  { period: 'Jun 26 - Sep 26', name: 'MA FA Improvement', location: 'PT Mitrabara Adiperdana TBK', language: 'Power BI', description: 'Improved Ellipse reports for PT Mitrabara Adiperdana, Jakarta.' },
  { period: 'May 26 - Aug 26', name: 'BIMA Lite Maintenance a Web Based and SaaS', location: 'PT EMS Paramitra', language: 'React JavaScript', description: 'Developing BIMA Lite Maintenance, a web-based SaaS application built with React JavaScript, as an internal project for commercialization.' },
  { period: 'Nov 25 - Apr 26', name: 'PTDH Ellipse AFCO and Cloud Migration', location: 'PT Darma Henwa at SCBD', language: 'Jasper Report, Oracle, VB, Java Groovy', description: 'Implemented Ellipse 9 at PT Darma Henwa and upgraded the system with cloud migration.' },
  { period: 'Sep 25 - Dec 25', name: 'PT Baramulti Terminal Service (BTS) Ellipse Implementation', location: 'PT EMS Paramitra and PT Baramulti Terminal Service (BTS)', language: 'Power BI Report, Jasper Report, Oracle', description: 'Implemented Ellipse 9 at PT Baramulti Terminal Service.' },
  { period: 'Jun 25 - Jan 26', name: 'Mobile Warehouse and Mobile Mining Operation', location: 'PT EMS Paramitra and PT Mitra Muda Makmur (Client)', language: 'Flutter (dart), Rest API, Ellipse Service, Oracle Git, Hub Copilot', description: 'Implemented mobile warehouse and mining operations at the client site in Balikpapan.' },
  { period: 'Mar 25 - Jun 25', name: 'Report and Dashboard Plant Maintenance', location: 'PT EMS Paramitra and PT Mitra Muda Makmur (Client)', language: 'Power BI Report and Dashboard, Oracle, SQL Server, Jasper Report', description: 'Developed plant maintenance reports and dashboards, integrated with Ellipse 9.' },
  { period: 'Sep 24 - Apr 25', name: 'LDU Ellipse Implementation', location: 'PT EMS Paramitra and PT Laju Dinamika Utama (Client in Balikpapan)', language: 'Power BI Report, Jasper Report, Oracle, Jasper report', description: 'Implemented Ellipse 9 at PT Laju Dinamika Utama, with one week in Jakarta and three weeks in Balikpapan.' },
  { period: 'Agt 24 - Feb 25', name: 'Darma Henwa Ellipse Improvement', location: 'PT EMS Paramitra and PT Darma Henwa', language: 'Jasper Report, Oracle', description: 'Improved Ellipse reports for PT Darma Henwa at Bakrie Tower, Jakarta.' },
  { period: 'Sep 18 - Jan 19', name: 'Internal Project', location: 'PT Mitra Integrasi Informatika', language: 'Java, MySQL, Oracle', description: 'Created a Human Resources web-based application.' },
  { period: 'Jan 18 - Apr 18', name: 'Student Final Assignment', location: 'Universitas Kristen Satya Wacana', language: 'MS Excel 2016', description: 'Final project: Developed a Super Encryption Algorithm based on the 8-Queen Pattern in Chess, titled “Perancangan Algoritma Super Enkripsi berbasis pola 8-Queen of Fitness Chess” at Universitas Kristen Satya Wacana, as a college student.' },
  { period: 'Jan 17 - Apr 17', name: 'Information System GMKI', location: 'Universitas Kristen Satya Wacana', language: 'PHP, HTML, MySQL', description: 'Developed Sistem Informasi GMKI — a web-based application (www.gmki.or.id).' },
];

const awards = [
  'Informal Award MSBU PT. Mitra Integrasi Informatika (MSBU Division in December 2019)',
  'Employee of The Month, PT. Pamapersada Nusantara (CIS Division in November 2021)',
];

const certifications = [
  '2016 – Oracle Database 10g: Administration workshop I Release 2.',
  '2023 – Mendix Rapid Developer',
];

const organizations = [
  'Badan Perwakilan Mahasiswa Fakultas FTI UKSW 2015-2017 as Chairman',
  'Badan Perwakilan Mahasiswa Universitas UKSW 2017-2018 as General Chairman.',
];

const business = [
  { period: 'Mar 21 - Mar 25', description: 'Shrimp and milkfish ponds in Lampung, managed with one employee' },
  { period: 'Nov 23 - Nov 24', description: 'Melon farming in Pati, managed with two employees' },
  { period: 'Nov 24 - Feb 26', description: 'Coffee shop IqI Bossq in Pulojabe, Cakung, managed with three employees' },
];

const capabilityCards = [
  {
    title: 'Data & BI',
    text: 'Reporting, dashboard design, KPI tracking, and data-driven decision support.',
  },
  {
    title: 'ERP & Integration',
    text: 'Ellipse ERP upgrades, reporting migration, workflow automation, and support coordination.',
  },
  {
    title: 'Full-Stack',
    text: 'Web applications, API integration, database design, and internal business portal development.',
  },
];

const featuredProjects = projectRows.slice(0, 4);

function App() {
  return (
    <main className="page-shell">
      <div className="bg-art" aria-hidden="true">
        <svg className="bg-svg" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#d93b3b" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#0d3b82" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0d3b82" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          <circle cx="180" cy="180" r="140" fill="#d93b3b" fillOpacity="0.07" />
          <circle cx="1040" cy="240" r="200" fill="#0d3b82" fillOpacity="0.06" />
          <circle cx="860" cy="760" r="180" fill="#d93b3b" fillOpacity="0.06" />
          <path d="M90 700C260 520, 420 580, 560 500S840 340, 1110 520" fill="none" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 240C170 140, 270 180, 390 140S670 90, 980 220" fill="none" stroke="url(#lineGradient)" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="resume">
        <header className="top-header">
          <div className="title-wrap">
            <div className="eyebrow">Professional Profile</div>
            <h1>EKO SISWANTO</h1>
            <div className="headline-row">
              <span>Data Analyst</span>
              <span className="divider-dot">|</span>
              <span>Software Engineer</span>
              <span className="divider-dot">|</span>
              <span>IT Consultant</span>
            </div>
            <div className="meta-row">
              <span>Bekasi, Indonesia</span>
              <span className="divider-dot">•</span>
              <span>Open to opportunity</span>
            </div>
          </div>

          <div className="photo-frame" aria-label="Profile photo placeholder">
            <div className="photo-badge">ES</div>
          </div>
        </header>

        <section className="summary-grid">
          <div className="summary-card highlight">
            <span className="card-kicker">Profile</span>
            <p>
              Results-oriented technology professional with experience in data analysis,
              software engineering, ERP implementation, and system optimization across industrial and business environments.
            </p>
            <div className="stat-row">
              <div>
                <strong>8+</strong>
                <span>Years in system and data projects</span>
              </div>
              <div>
                <strong>15+</strong>
                <span>Business and ERP implementations</span>
              </div>
            </div>
          </div>
          <div className="summary-card">
            <span className="card-kicker">Core Strengths</span>
            <ul>
              <li>System analysis and business process optimization</li>
              <li>ERP reporting, database, and web application development</li>
              <li>Cross-functional support and technical consultancy</li>
            </ul>
          </div>
        </section>

        <section className="m-section capability-section">
          <div className="section-head-row">
            <h2>Core Capabilities</h2>
          </div>
          <div className="capability-grid">
            {capabilityCards.map((card) => (
              <article className="capability-card" key={card.title}>
                <div className="capability-icon">•</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="m-section project-highlight-section">
          <div className="section-head-row">
            <h2>Selected Projects</h2>
          </div>
          <div className="mini-project-grid">
            {featuredProjects.map((project) => (
              <div className="mini-project-card" key={`${project.name}-${project.period}`}>
                <span>{project.period}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="m-section">
          <h2>Soft Skill Competence</h2>
          <p>
            I am a self-driven and adaptable individual with strong communication, leadership,
            and problem-solving skills. I value integrity and continuous learning. Outside of
            work, I enjoy playing badminton and singing.
          </p>
        </section>

        <section className="m-section">
          <h2>Educational Qualification</h2>
          <div className="education-line">
            <strong>Bachelor of Computer Science, majoring in Information Technology</strong>
            <span>Universitas Kristen Satya Wacana | 2014-2018. GPA: 3.86</span>
          </div>
        </section>

        <section className="m-section">
          <h2>Technical Qualification</h2>

          <div className="qualification-block">
            <div className="qual-label">Programming Languages:</div>
            <div className="qual-content">
              Java (Desktop and Web), Java Persistence/Hibernate, Springboot, MVC, Jasper
              Report, Junit Test, Java Groovy, Javascript, JQuery, CSS, HTML, Bootstrap, PHP,
              Umbraco, Cobal Language, VB.Net, React Typescript or Javascript, C#, ASP.NET Core,
              Python, and Flutter (Dart).
            </div>
          </div>

          <div className="qualification-block">
            <div className="qual-label">Database Skill:</div>
            <div className="qual-content">
              SQL Server, MySQL, Mysql, Oracle, PL/SQL, Stored Procedure, Function SQL, and PostgreSQL.
            </div>
          </div>

          <div className="qualification-block">
            <div className="qual-label">Analyst:</div>
            <div className="qual-content">
              Data Analyst, System Analyst, UML, Business Analyst, Quality Assurance, Report,
              Dashboard, and SAP.
            </div>
          </div>

          <div className="qualification-block compact">
            <div className="qual-label">AI Tools:</div>
            <div className="qual-content">ChatGPT, OpenAI Codex, Claude AI, Claude Code, GitHub Copilot.</div>
          </div>

          <div className="qualification-block compact">
            <div className="qual-label">Development Tools:</div>
            <div className="qual-content">
              NetBeans, XAMPP, WampServer, Workspace Oracle, JasperSoft Studio, Git, Tfs, SSH,
              SQL Development, Eclipse Minbol, Putty Cobol, Eclipse, Remote Desktop, Winscp,
              Microsoft Power BI, Microsoft Visual Studio, Microsoft SQL Server, Eclipse, Visual
              Studio Code, pgAdmin 4, GitHub Copilot, CodeX, and Claude Code.
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="m-section work-section">
          <h2>Work Assignments</h2>

          {workAssignments.map((assignment, idx) => (
            <div className="assignment-group" key={assignment.title}>
              <div className="assignment-title">
                {idx + 1}. {assignment.title}
              </div>

              {assignment.items.map((item) => (
                <div className="check-item" key={item}>
                  <span className="check-box" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className="m-section">
          <h2 className="project-heading">Project</h2>

          <table className="project-table">
            <thead>
              <tr>
                <th>Period</th>
                <th>Name</th>
                <th>Location</th>
                <th>Programming Language</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {projectRows.map((project) => (
                <tr key={`${project.name}-${project.period}`}>
                  <td>{project.period}</td>
                  <td>{project.name}</td>
                  <td>{project.location}</td>
                  <td>{project.language}</td>
                  <td>{project.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="m-section awards-section">
          <h2>Award</h2>
          <ul className="bullet-list">
            {awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </section>

        <section className="m-section certifications-section">
          <h2>Certifications</h2>
          <ul className="bullet-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="m-section organization-section">
          <h2>Organization</h2>
          <ul className="bullet-list">
            {organizations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="m-section business-section">
          <h2>My Business</h2>
          <table className="business-table">
            <thead>
              <tr>
                <th>Period</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {business.map((entry) => (
                <tr key={entry.period}>
                  <td>{entry.period}</td>
                  <td>{entry.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="m-section">
          <h2>Analepis Flashback</h2>
          <div className="flashback-text">
            <p>
              In 2012, I created a life motto: &quot;Live to learn, learn to be trusted, and be trusted to be a
              blessing.&quot; That same year, I graduated from high school and then worked at a food industry
              company in Surabaya for two years. From 2014 to 2018, I studied at Satya Wacana Christian
              University in Salatiga. Since 2018, I have been working in Jakarta.
            </p>
            <p>
              I come from a humble family; my parents worked as farm laborers. In 2019, my father suffered a
              stroke and sadly passed away in 2023.
            </p>
            <p>
              I am the eldest child and have one younger sister. Since 2019, I have been the backbone of my family.
              I support my sister&apos;s education, from school through college. I also share my income with my mother
              and help pay off my parents&apos; debts. Additionally, I run small side businesses to supplement my income.
            </p>
            <p>I feel truly blessed by God.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
