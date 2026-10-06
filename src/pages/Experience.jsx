const experiences = [
  {
    date: '2025–26',
    title: 'Research Assistant',
    org: 'National Changhua University of Education',
    desc: 'Project: "Where Mountains Meet the Sea: Observation of Coastal and Foothill Social-Ecological Systems and Co-creation of Sustainable Resilience Policies in Changhua County" · Funded by the National Science and Technology Council, Taiwan.',
  },
  {
    date: '2025–26',
    title: 'Research Assistant',
    org: 'National Chengchi University',
    desc: 'Project: "Re-Making the New City: Air-Rights Governance and Value Negotiation in Peri-Urban Zones under Climate Change" · Funded by the National Science and Technology Council, Taiwan.',
  },
  {
    date: '2024–26',
    title: 'Research Assistant',
    org: 'Center of GIS, Research Center for Humanities and Social Sciences (RCHSS), Academia Sinica',
    desc: null,
  },
  {
    date: '2024–25',
    title: 'Research Assistant',
    org: 'National Chengchi University',
    desc: 'Project: "Anticipatory Innovation Governance for Sustainable Cities: Incremental Floor Area as a Fiscal Innovation Tool for Transit-Oriented Planning" · Funded by the National Science and Technology Council, Taiwan.',
  },
  {
    date: '2024',
    title: 'Intern',
    org: 'Center of GIS, Research Center for Humanities and Social Sciences (RCHSS), Academia Sinica',
    desc: null,
  },
  {
    date: '2024',
    title: 'Research Assistant',
    org: 'National Chengchi University',
    desc: 'Project: "Building the Technological and Social Foundation for an Energy Just Transition: A Cross-Regional Study on Local Energy Democracy" · Funded by the National Science and Technology Council, Taiwan.',
  },
  {
    date: '2024',
    title: 'Research Assistant',
    org: 'National Chengchi University',
    desc: 'Project: "Deep Learning-Based Automatic Extraction of Building Boundaries from Real-World Urban Images" · Funded by the National Science and Technology Council, Taiwan.',
  },
  {
    date: '2023',
    title: 'Intern',
    org: 'Earthquake Disaster Simulation Division, National Center for Research on Earthquake Engineering (NCREE), NARLabs',
    desc: null,
  },
  {
    date: '2022–26',
    title: 'Research Assistant',
    org: 'National Chengchi University',
    desc: 'Project: "Research on the Impact of Climate Change and Agricultural Environments on the Lanyang River Basin Ecosystem and Adaptation Strategies: Impact Assessment and Adaptation Strategies of Rural Community Industrial Development on Ecosystem Services" · Funded by the National Science and Technology Council, Taiwan.',
  },
];

const teaching = [
  {
    date: 'Fall 2026',
    title: 'Teaching Assistant',
    org: 'University of California, Santa Barbara',
    desc: 'Health Geography',
  },
  {
    date: 'Spring 2023',
    title: 'Teaching Assistant',
    org: 'National Chengchi University',
    desc: 'MOOC: "Application of VR and GIS in Eco-tourism"',
  },
];

const additional = [
  {
    date: '2025–present',
    title: 'Full-Stack Engineer',
    org: 'SmartGeo',
    desc: 'Intelligent Land Use Assessment System',
  },
  {
    date: '2025–26',
    title: 'Full-Stack Engineer',
    org: 'SG44 Conference 2026 Official Website, Taiwan',
    desc: null,
  },
  {
    date: '2024–25',
    title: 'Full-Stack Engineer',
    org: 'Independent Project',
    desc: '"誰敢跟我桌隊" (Table Tennis Tournament Management System)',
  },
  {
    date: '2021–26',
    title: 'Department Office Assistant',
    org: 'Department of Land Economics, National Chengchi University',
    desc: null,
  },
];

export default function Experience() {
  return (
    <>
      <div className="page-wrap page-wrap-narrow">
        <span className="section-label page-fade">Research Experience</span>

        <div className="entry-list">
          {experiences.map((e, i) => (
            <div className="entry" key={i}>
              <span className="entry-date">{e.date}</span>
              <div>
                <div className="entry-title">{e.title}</div>
                <div className="entry-sub">{e.org}</div>
                {e.desc && (
                  <div className="entry-desc">{e.desc}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <span className="section-label page-fade" style={{ animationDelay: '0.2s', marginTop: '4rem' }}>Teaching Experience</span>

        <div className="entry-list">
          {teaching.map((e, i) => (
            <div className="entry" key={i}>
              <span className="entry-date">{e.date}</span>
              <div>
                <div className="entry-title">{e.title}</div>
                <div className="entry-sub">{e.org}</div>
                {e.desc && (
                  <div className="entry-desc">{e.desc}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <span className="section-label page-fade" style={{ animationDelay: '0.25s', marginTop: '4rem' }}>Additional Experience</span>

        <div className="entry-list">
          {additional.map((e, i) => (
            <div className="entry" key={i}>
              <span className="entry-date">{e.date}</span>
              <div>
                <div className="entry-title">{e.title}</div>
                <div className="entry-sub">{e.org}</div>
                {e.desc && (
                  <div className="entry-desc">{e.desc}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Chia-Jung Lin · Department of Geography, UC Santa Barbara
      </footer>
    </>
  );
}
