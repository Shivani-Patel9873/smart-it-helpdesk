import { useNavigate } from "react-router-dom";


function Landing() {


  const navigate = useNavigate();



  return (

    <div className="landing-page">


      <div className="overlay">



        <div className="landing-content">



          <div className="brand-tag">
            🏭 INDUSTRIAL AI PLATFORM
          </div>



          <h1>
            Smart IT
          </h1>



          <h2>
            AI Powered Industrial Helpdesk System
          </h2>



          <p>

            Intelligent IT operations platform designed
            for modern enterprises to automate support,
            manage incidents and improve productivity.

          </p>





          <div className="landing-stats">


            <div>

              <h3>
                24/7
              </h3>

              <span>
                Smart Support
              </span>

            </div>



            <div>

              <h3>
                AI
              </h3>

              <span>
                Issue Analysis
              </span>

            </div>



            <div>

              <h3>
                99%
              </h3>

              <span>
                Faster Tracking
              </span>

            </div>


          </div>






          <div className="landing-features">


            <span>
              ⚡ Automation
            </span>


            <span>
              🎫 Smart Tickets
            </span>


            <span>
              📊 Analytics
            </span>


          </div>






          <button

            onClick={()=>navigate("/login")}

            className="portal-btn"

          >

            Enter Smart Portal 🚀

          </button>




        </div>


      </div>


    </div>

  );

}


export default Landing;