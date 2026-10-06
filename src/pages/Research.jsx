export default function Research() {
  return (
    <>
      <div className="page-wrap page-wrap-narrow">

        <span className="section-label page-fade">Research Interests</span>

        <div className="page-fade" style={{ animationDelay: '0.1s' }}>
          <div className="research-interest">
            <h3>Geospatial Science &amp; Methods</h3>
            <p>Geographic information systems (GIS), remote sensing, spatial and spatiotemporal analysis, spatial statistics, and spatial decision support systems.</p>
          </div>
          <div className="research-interest" style={{ animationDelay: '0.15s' }}>
            <h3>Data Science &amp; Artificial Intelligence</h3>
            <p>Machine learning and deep learning for geospatial analytics; natural language processing for geographic text analysis.</p>
          </div>
          <div className="research-interest" style={{ animationDelay: '0.2s' }}>
            <h3>Health, Urban, &amp; Population Geography</h3>
            <p>Environmental exposure and well-being, spatial accessibility, urban and transportation geography, population dynamics, and disaster risk and resilience.</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Chia-Jung Lin · Department of Geography, UC Santa Barbara
      </footer>
    </>
  );
}
