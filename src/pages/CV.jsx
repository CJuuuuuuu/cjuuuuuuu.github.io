import { Download } from 'lucide-react';

const awards = [
  { year: '2026', name: 'Merit Award, University Division, 12th National College and High School StoryMap Campus Competition, Interactive Digital Technologies' },
  { year: '2024', name: 'College Student Research Creativity Award, National Science and Technology Council, Taiwan — "When GIS Meets the Law: Unraveling the Nexus of Mental Illness and Crime through Text Analysis and Spatio-Temporal Analysis"' },
  { year: '2024', name: 'Best Student Presentation Award, Taiwan Geographic Information Society 2024 Conference' },
  { year: '2024', name: 'Double Major and Minor Scholarship, Department of Computer Science, National Chengchi University' },
  { year: '2024', name: 'Bilingual Education for Students in College Program (BESTEP) Award, Ministry of Education, Taiwan' },
  { year: '2023–24', name: 'College Student Research Scholarship, National Science and Technology Council, Taiwan — "When GIS Meets the Law: Unraveling the Nexus of Mental Illness and Crime through Text Analysis and Spatio-Temporal Analysis"' },
  { year: '2023', name: 'Third Place, University Division, 9th National College and High School StoryMap Campus Competition, Interactive Digital Technologies' },
  { year: '2021–24', name: 'Academic Excellence Award, National Chengchi University (four times)' },
];

const skills = [
  { cat: 'Programming', val: 'R, Python, C, SQL' },
  { cat: 'GIS & Remote Sensing', val: 'ArcGIS Pro, ArcGIS Online, ArcGIS StoryMaps, QGIS, Google Earth Engine, GeoDa' },
  { cat: 'Database Management', val: 'PostgreSQL, MySQL' },
  { cat: 'Web Development', val: 'React, Next.js' },
  { cat: 'Robotics & Automation', val: 'ROS 2 (Robot Operating System)' },
  { cat: 'Other Software', val: 'AutoCAD' },
];

export default function CV() {
  return (
    <>
      <div className="page-wrap page-wrap-narrow">

        {/* Download */}
        <div className="page-fade" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3rem' }}>
          <a href="/2026Sep_CV_chia-jung_lin.pdf" download className="dl-btn">
            <Download size={13} />
            Download PDF
          </a>
        </div>

        {/* Skills */}
        <span className="section-label page-fade">Technical Skills</span>
        <div style={{ marginBottom: '4rem' }}>
          {skills.map((s) => (
            <div className="skill-row" key={s.cat}>
              <div className="skill-cat">{s.cat}</div>
              <div className="skill-val">{s.val}</div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <span className="section-label page-fade">Languages</span>
        <div style={{ marginBottom: '4rem' }}>
          <div className="skill-row">
            <div className="skill-cat">Mandarin</div>
            <div className="skill-val">Native</div>
          </div>
          <div className="skill-row">
            <div className="skill-cat">English</div>
            <div className="skill-val">Fluent (TOEFL iBT 102)</div>
          </div>
        </div>

        {/* Awards */}
        <span className="section-label page-fade">Honors &amp; Awards</span>
        <div className="entry-list">
          {awards.map((a, i) => (
            <div className="entry" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
              <span className="entry-date">{a.year}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.6 }}>{a.name}</span>
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
