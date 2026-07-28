import { useNavigate } from "react-router-dom";


function Navbar() {


  const navigate = useNavigate();



  const logout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/");

  };



  return (

    <div
      className="d-flex justify-content-between align-items-center shadow-sm p-3 bg-white"
      style={{
        height:"70px"
      }}
    >


      <div>

        <h4 className="mb-0">
          Smart IT Helpdesk
        </h4>

        <small className="text-muted">
          Welcome back, Shivani 👋
        </small>

      </div>




      <div className="d-flex align-items-center">


        <div className="me-4 fs-4">

          🔔

        </div>




        <div className="me-3">


          <b>
            Shivani Patel
          </b>

          <br />

          <small className="text-muted">
            IT User
          </small>


        </div>




        <button

          className="btn btn-danger"

          onClick={logout}

        >

          Logout

        </button>



      </div>



    </div>

  );

}


export default Navbar;