export default function Research() {
  return (
    <>
      <div className="page-wrap page-wrap-narrow">

        <span className="section-label page-fade">Research Interests</span>

        <div className="page-fade" style={{ animationDelay: '0.1s' }}>
          <div className="research-interest">
            <h3>Geospatial Science &amp; Technology</h3>
            <p>Geographic Information Systems (GIS), Remote Sensing, Spatial Data Science, Spatio-temporal Analysis, Spatial Statistics, Spatial Decision Support Systems.</p>
          </div>
          <div className="research-interest" style={{ animationDelay: '0.15s' }}>
            <h3>Population Health &amp; Environmental Geography</h3>
            <p>Food environments, subjective well-being, psychiatric service accessibility, urban quietness, and the relationship between social and environmental contexts and health outcomes across the life course.</p>
          </div>
          <div className="research-interest" style={{ animationDelay: '0.2s' }}>
            <h3>Spatial Demography &amp; Mobility</h3>
            <p>Residential mobility, adaptation in place, changes in everyday activity spaces; how spatial strategies shape health and well-being across the life course.</p>
          </div>
          <div className="research-interest" style={{ animationDelay: '0.25s' }}>
            <h3>Data Science &amp; Computational Methods</h3>
            <p>Machine and deep learning for geospatial analytics, natural language processing for geo-text, big data analytics.</p>
          </div>
        </div>



      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Chia-Jung Lin · Department of Geography, UC Santa Barbara
      </footer>
    </>
  );
}
