import { Download } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="page-wrap">
        <div className="home-layout">

          {/* Left: circular avatar */}
          <div className="home-photo-col page-fade">
            <div className="home-avatar">
              <img src="/head.png" alt="Chia-Jung Lin" />
            </div>
          </div>

          {/* Right: content */}
          <div className="home-content page-fade" style={{ animationDelay: '0.15s' }}>
            <h1 className="home-name">Chia-Jung Lin</h1>

            <div className="home-position">
              Ph.D. Student in Geography<br />
              University of California, Santa Barbara<br />
              Graduate Associate, Broom Center for Demography
            </div>

            <p className="home-bio">
              Chia-Jung Lin is a Ph.D. student in Geography at the University of California,
              Santa Barbara. Her research lies at the intersection of GIScience, population
              health, environmental geography, and spatial demography. She studies how people
              experience, respond to, and are shaped by social and environmental contexts
              across the life course, using GIS, spatial statistics, spatiotemporal modeling,
              remote sensing, text analysis, and computational methods.
            </p>

            <div className="home-actions">
              <a href="/2026Sep_CV_chia-jung_lin.pdf" download className="action-link action-link-primary">
                <Download size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} />
                Download CV
              </a>
              <span className="action-sep">·</span>
              <a href="mailto:chia-jung@ucsb.edu" className="action-link">Email</a>
              <span className="action-sep">·</span>
              <a href="https://orcid.org/0009-0003-3987-1276" target="_blank" rel="noreferrer" className="action-link">ORCID</a>
            </div>
          </div>

        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Chia-Jung Lin · Department of Geography, UC Santa Barbara
      </footer>
    </>
  );
}
