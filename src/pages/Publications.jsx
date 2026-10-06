const articles = [
  {
    title: 'Mental illness, crime, and mental health resources: Insights from Taiwan using text analysis and spatio-temporal analysis.',
    authors: 'Chia-Jung Lin, Meng-Jung Lin*, and Jihn-Fa Jan.',
    venue: 'BMJ Public Health',
    detail: '4, e002832 (2026).',
    doi: 'https://doi.org/10.1136/bmjph-2025-002832',
    doiLabel: '10.1136/bmjph-2025-002832',
  },
  {
    title: 'Measuring and managing urban quietness: Refining the Quietness Suitability Index (QSI) model for Asia\'s densely populated cities.',
    authors: 'Chia-Jung Lin, Jia-Hong Tang, Chih-Chung Fan, and Ta-Chien Chan*.',
    venue: 'Noise Mapping',
    detail: '13(1), 20250025 (2026).',
    doi: 'https://doi.org/10.1515/noise-2025-0025',
    doiLabel: '10.1515/noise-2025-0025',
  },
  {
    title: 'Baby or pet? A spatial analysis of fertility decline and the rise of pet ownership in Taiwan.',
    authors: 'Meng-Jung Lin* and Chia-Jung Lin.',
    venue: 'Journal of Population Studies (Taiwan)',
    detail: 'In press.',
    doi: null,
    doiLabel: null,
  },
];

const presentations = [
  {
    title: '"Social and Genetic Inheritance of Educational Attainment Amid Rapid Educational Expansion: Family Trio Evidence from Taiwan."',
    authors: 'Meng-Jung Lin, Yen-Chen Feng, Xue-Yong Chang, and Chia-Jung Lin.',
    venue: 'American Sociological Association Annual Meeting, Chicago, Illinois, Aug. 8–12, 2025.',
  },
  {
    title: '"Applying Geospatial Technologies in Digital Humanities Research: A Case Study of StoryMap."',
    authors: 'Ching-Chih Lin, Chia-Jung Lin, and Jihn-Fa Jan.',
    venue: '15th International Conference of Digital Archives and Digital Humanities, Taipei, Taiwan, Dec. 1, 2024.',
  },
  {
    title: '"When GIS Meets the Law: Unraveling the Nexus of Mental Illness and Crime through Text Analysis and Spatio-Temporal Analysis."',
    authors: 'Chia-Jung Lin, Meng-Jung Lin, and Jihn-Fa Jan.',
    venue: 'Pacific Neighborhood Consortium (PNC) Conference, Seoul, South Korea, Aug. 29–31, 2024; and Taiwan Geographic Information Society (TGIS) Conference, Taipei, Taiwan, July 11–12, 2024.',
  },
];

export default function Publications() {
  return (
    <>
      <div className="page-wrap page-wrap-narrow">

        <span className="section-label page-fade">Peer-Reviewed Articles</span>

        <div className="pub-list">
          {articles.map((a, i) => (
            <div className="pub-item" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="pub-title">{a.title}</div>
              <div className="pub-meta">
                {a.authors} <em>{a.venue}</em>. {a.detail}
              </div>
              {a.doi && (
                <a href={a.doi} target="_blank" rel="noreferrer" className="pub-doi-link">
                  {a.doiLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        <span className="section-label page-fade" style={{ animationDelay: '0.25s', marginTop: '4rem' }}>Selected Conference Presentations</span>

        <div className="pub-list">
          {presentations.map((p, i) => (
            <div className="pub-item" key={i} style={{ animationDelay: `${(i + 3) * 0.08}s` }}>
              <div className="pub-title">{p.title}</div>
              <div className="pub-meta">
                {p.authors} <em>{p.venue}</em>
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
