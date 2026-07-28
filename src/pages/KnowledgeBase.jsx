import { useState } from "react";

function KnowledgeBase() {

  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      title: "Laptop Not Turning On",
      category: "Hardware",
      solution:
        "1. Check the power cable.\n2. Verify battery status.\n3. Hold the power button for 10 seconds.\n4. If the issue persists, contact the IT Helpdesk."
    },
    {
      title: "Software Installation Issue",
      category: "Software",
      solution:
        "1. Ensure administrator permissions.\n2. Download the latest installer.\n3. Restart the system.\n4. Reinstall the software."
    },
    {
      title: "Internet Connection Problem",
      category: "Network",
      solution:
        "1. Check LAN/Wi-Fi connection.\n2. Restart the router.\n3. Run Windows Network Troubleshooter.\n4. Contact Network Team."
    },
    {
      title: "Password Reset",
      category: "Account",
      solution:
        "1. Click Forgot Password.\n2. Verify your email or mobile.\n3. Create a new password.\n4. Login again."
    }
  ];

  return (
    <div className="container py-4">

      <h2 className="mb-4">📚 Knowledge Base</h2>

      <div className="row">

        <div className="col-md-5">

          {articles.map((article, index) => (

            <div className="card shadow-sm mb-3" key={index}>

              <div className="card-body">

                <h5>{article.title}</h5>

                <span className="badge bg-primary mb-3">
                  {article.category}
                </span>

                <p className="text-muted">
                  Click below to view the complete troubleshooting guide.
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedArticle(article)}
                >
                  View Solution
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="col-md-7">

          <div className="card shadow-lg h-100">

            <div className="card-body">

              {selectedArticle ? (

                <>

                  <h3>{selectedArticle.title}</h3>

                  <span className="badge bg-success mb-3">
                    {selectedArticle.category}
                  </span>

                  <hr />

                  <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      fontFamily: "inherit",
                      fontSize: "16px"
                    }}
                  >
                    {selectedArticle.solution}
                  </pre>

                </>

              ) : (

                <div className="text-center mt-5">

                  <h4>📖 Select an Article</h4>

                  <p className="text-muted">
                    Click on "View Solution" to read the complete guide.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default KnowledgeBase;