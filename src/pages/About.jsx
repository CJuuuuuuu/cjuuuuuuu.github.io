const education = [
  {
    date: '2026–present',
    degree: 'Ph.D. in Geography',
    school: 'University of California, Santa Barbara, CA, USA',
    note: null,
  },
  {
    date: '2025–26',
    degree: 'M.A. in Land Economics (Geomatics Program)',
    school: 'National Chengchi University (NCCU), Taipei, Taiwan',
    note: 'Thesis: "Mapping Village Food Environments and Subjective Well-being in Taiwan, 2014–2022: A Multilevel Spatio-temporal Analysis of Self-rated Health and Happiness"',
  },
  {
    date: '2021–25',
    degree: 'B.A. in Land Economics (Geomatics Program)',
    school: 'National Chengchi University (NCCU), Taipei, Taiwan',
    note: 'Double Major: Global Studies · Minor: Computer Science · Certificate: Big Data Analytics Program (Completed 2025)',
  },
];

export default function About() {
  return (
    <>
      <div className="page-wrap page-wrap-narrow">
        
        {/* Education */}
        <span className="section-label page-fade">Education</span>
        <div className="entry-list" style={{ marginBottom: '3.5rem' }}>
          {education.map((e, i) => (
            <div className="entry" key={i} style={{ animationDelay: `${(i + 2) * 0.08}s` }}>
              <span className="entry-date">{e.date}</span>
              <div>
                <div className="entry-title">{e.degree}</div>
                <div className="entry-sub">{e.school}</div>
                {e.note && <div className="entry-desc">{e.note}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Biography */}
        <span className="section-label page-fade" style={{ animationDelay: '0.2s' }}>Biography</span>
        <div className="about-article page-fade" style={{ animationDelay: '0.25s', marginBottom: '4rem' }}>
          <p>
            Chia-Jung Lin is a Ph.D. student in the Department of Geography at the University of California, Santa Barbara, and a Graduate Associate of the Broom Center for Demography. Her research examines how spatial and environmental contexts shape population health, inequality, mobility, and demographic change. Trained in geomatics, global studies, computer science, and big data analytics, she uses GIS, spatial statistics, spatiotemporal modeling, remote sensing, text analysis, and computational methods to study socially relevant questions.
          </p>

          <p>
            Her work is guided by a problem-driven approach to spatial science. She identifies research questions from everyday life, public discourse, and community concerns, and translates them into rigorous spatial analysis. Her recent projects have examined food environments and subjective well-being, psychiatric service accessibility and crime, urban quietness, and the spatial relationship between fertility decline and pet ownership in Taiwan. Through these projects, she has become especially interested in how the same social and environmental contexts can shape people’s lives differently depending on their age, health, family circumstances, and life events.
          </p>

          <p>
            Her doctoral research focuses on how individuals and households navigate major life transitions through residential mobility, adaptation in place, and changes in everyday activity spaces. She is particularly interested in how these spatial strategies shape health and well-being across the life course. More broadly, she aims to develop spatial methods that better reflect lived realities and inform policies related to health, well-being, and environmental equity.
          </p>
        </div>
      </div>
      
      <footer className="footer">
        © {new Date().getFullYear()} Chia-Jung Lin · Department of Geography, UC Santa Barbara
      </footer>
    </>
  );
}
