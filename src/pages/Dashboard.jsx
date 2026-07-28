import { useEffect, useState } from "react";


function Dashboard() {


  const [tickets, setTickets] = useState([]);



  useEffect(() => {

    fetchTickets();

  }, []);



  const fetchTickets = async()=>{

    try{

      const response = await fetch(
        "http://localhost:5000/api/tickets"
      );


      const data = await response.json();

      setTickets(data);


    }
    catch(error){

      console.log(error);

    }

  };




  const totalTickets = tickets.length;


  const openTickets = tickets.filter(
    (ticket)=>ticket.status==="Open"
  ).length;



  const resolvedTickets = tickets.filter(
    (ticket)=>ticket.status==="Resolved"
  ).length;



  const inProgressTickets = tickets.filter(
    (ticket)=>ticket.status==="In Progress"
  ).length;



  return (

    <div className="p-4">


      <h2 className="mb-4 fw-bold">
        IT Helpdesk Dashboard
      </h2>




      <div className="row g-4">



        <div className="col-md-3">
          <div className="card dashboard-card shadow-sm">

            <div className="dashboard-icon">
              🎫
            </div>

            <p className="dashboard-title">
              Total Tickets
            </p>

            <h2 className="dashboard-number">
              {totalTickets}
            </h2>

          </div>
        </div>





        <div className="col-md-3">
          <div className="card dashboard-card shadow-sm">

            <div className="dashboard-icon">
              🔴
            </div>

            <p className="dashboard-title">
              Open Tickets
            </p>

            <h2 className="dashboard-number text-danger">
              {openTickets}
            </h2>

          </div>
        </div>





        <div className="col-md-3">
          <div className="card dashboard-card shadow-sm">

            <div className="dashboard-icon">
              🟡
            </div>

            <p className="dashboard-title">
              In Progress
            </p>

            <h2 className="dashboard-number text-warning">
              {inProgressTickets}
            </h2>

          </div>
        </div>






        <div className="col-md-3">
          <div className="card dashboard-card shadow-sm">

            <div className="dashboard-icon">
              ✅
            </div>

            <p className="dashboard-title">
              Resolved
            </p>

            <h2 className="dashboard-number text-success">
              {resolvedTickets}
            </h2>

          </div>
        </div>



      </div>






      <div className="mt-5">


        <h4 className="fw-bold">
          Recent Tickets
        </h4>




        <div className="card shadow-sm mt-3">


          <div className="table-responsive">


            <table className="table mb-0">


              <thead className="table-dark">

                <tr>

                  <th>ID</th>
                  <th>Issue</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Status</th>

                </tr>

              </thead>




              <tbody>


              {

              tickets.length > 0 ?


              tickets.map((ticket)=>(


                <tr key={ticket._id}>


                  <td>
                    {ticket.ticketId}
                  </td>


                  <td>
                    {ticket.title}
                  </td>


                  <td>
                    {ticket.category}
                  </td>


                  <td>
                    {ticket.priority}
                  </td>


                  <td>

                  <span className="badge bg-primary">

                    {ticket.status}

                  </span>

                  </td>


                </tr>


              ))



              :


              <tr>

                <td
                colSpan="5"
                className="text-center"
                >

                  No Tickets Found

                </td>

              </tr>


              }


              </tbody>


            </table>


          </div>


        </div>


      </div>



    </div>

  );

}


export default Dashboard;