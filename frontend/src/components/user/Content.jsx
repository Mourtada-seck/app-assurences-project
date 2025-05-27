import { useEffect } from "react";
function Content() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/chart-bar.js";
    script.onload = () => {
      if (window.renderContent) window.renderContent();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Utilisateurs</li>
          </ol>
        </nav>
      </div>
      <section className="section dashboard">
        <div className="row">
          {/* Main Content */}
          <div className="main-content">
            {/* Stat Cards */}
            <div className="row g-4 my-3">
              <div className="col-md-3">
                <div className="card text-white bg-success">
                  <div className="card-body card-stat d-flex">
                    <div>
                      <h6>Encaissement 2025 (TTC)</h6>
                      <h4>277 696 F</h4>
                    </div>
                    <i className="bi bi-cash-coin fs-2 p-3" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-warning">
                  <div className="card-body card-stat d-flex">
                    <div>
                      <h6>Nb Total D’attestations</h6>
                      <h4>21</h4>
                    </div>
                    <i className="bi bi-cash-coin fs-2 p-3" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-info">
                  <div className="card-body card-stat d-flex">
                    <div>
                      <h6>Consommation</h6>
                      <h4>21 unités</h4>
                    </div>
                    <i className="bi bi-cash-coin fs-2 p-3" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-danger text-white">
                  <div className="card-body card-stat d-flex">
                    <div>
                      <h6>Insolvables</h6>
                      <h4>6 cas</h4>
                    </div>
                    <i className="bi bi-cash-coin fs-2" />
                  </div>
                </div>
              </div>
            </div>
            {/* Graphs */}
            <div className="row">
              <div className="col-md-6">
                <h5>Graphe de la production</h5>
                <canvas id="barChart" />
              </div>
              <div className="col-md-6">
                <h5>Évolution mensuelle</h5>
                <canvas id="lineChart" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Content;
