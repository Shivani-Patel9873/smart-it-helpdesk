import { NavLink } from "react-router-dom";


function Sidebar() {


  const linkStyle = ({isActive}) => ({

    background: isActive
      ? "linear-gradient(135deg,#2563eb,#06b6d4)"
      : "transparent",

    color:"white",

    padding:"12px 15px",

    borderRadius:"12px",

    textDecoration:"none",

    display:"flex",

    alignItems:"center",

    gap:"12px",

    marginBottom:"12px",

    transition:"0.3s"

  });



  return (

    <div

      style={{

        width:"270px",

        minHeight:"100vh",

        background:"linear-gradient(180deg,#020617,#0f172a)",

        padding:"25px 18px"

      }}

    >



      <div className="text-white mb-5">


        <h3 className="fw-bold">

          🤖 Smart IT

        </h3>


        <small className="text-secondary">

          AI Helpdesk System

        </small>


      </div>





      <NavLink

        to="/dashboard"

        style={linkStyle}

      >

        🏠 Dashboard

      </NavLink>




      <NavLink

        to="/raise-ticket"

        style={linkStyle}

      >

        🎫 Raise Ticket

      </NavLink>





      <NavLink

        to="/my-tickets"

        style={linkStyle}

      >

        📋 My Tickets

      </NavLink>





      <NavLink

        to="/knowledge-base"

        style={linkStyle}

      >

        📚 Knowledge Base

      </NavLink>





      <NavLink

        to="/reports"

        style={linkStyle}

      >

        📊 Reports

      </NavLink>





      <NavLink

        to="/profile"

        style={linkStyle}

      >

        👤 Profile

      </NavLink>





      <hr className="text-secondary mt-4"/>




      <NavLink

        to="/admin"

        style={linkStyle}

      >

        👨‍💻 Admin Panel

      </NavLink>



    </div>

  );

}


export default Sidebar;