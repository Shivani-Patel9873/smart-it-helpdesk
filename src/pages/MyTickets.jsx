import { useEffect, useState } from "react";


function MyTickets() {


  const [tickets, setTickets] = useState([]);


  useEffect(() => {

    fetchTickets();

  }, []);



  const fetchTickets = async () => {

    try {

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





  return (

    <div className="p-4">


      <h2 className="mb-4 fw-bold">
        My Tickets
      </h2>





      <div className="card shadow-sm border-0">


        <div className="table-responsive">


          <table className="table align-middle mb-0">


            <thead className="table-dark">

              <tr>

                <th>Ticket ID</th>

                <th>Issue</th>

                <th>Category</th>

                <th>Priority</th>

                <th>Status</th>

                <th>Created On</th>

                <th>Assigned To</th>

              </tr>

            </thead>





            <tbody>


            {
              tickets.length > 0 ?


              tickets.map((ticket)=>(


                <tr key={ticket._id}>


                  <td>

                    <b>
                      {ticket.ticketId}
                    </b>

                  </td>





                  <td>
                    {ticket.title}
                  </td>





                  <td>

                    <span className="badge bg-primary">

                      {ticket.category}

                    </span>

                  </td>





                  <td>


                    {
                      ticket.priority === "High" ||

                      ticket.priority === "Critical"

                      ?

                      <span className="badge bg-danger">
                        {ticket.priority}
                      </span>


                      :


                      <span className="badge bg-warning text-dark">
                        {ticket.priority}
                      </span>


                    }


                  </td>





                  <td>


                    {
                      ticket.status === "Open"

                      ?

                      <span className="badge bg-danger">
                        Open
                      </span>


                      :


                      <span className="badge bg-success">
                        {ticket.status}
                      </span>


                    }


                  </td>





                  <td>

                    {
                      new Date(ticket.createdAt)
                      .toLocaleDateString()
                    }

                  </td>





                  <td>

                    {ticket.assignedTo}

                  </td>





                </tr>


              ))


              :


              <tr>

                <td
                  colSpan="7"
                  className="text-center p-4"
                >

                  No Tickets Available

                </td>

              </tr>


            }



            </tbody>


          </table>


        </div>


      </div>



    </div>

  );

}


export default MyTickets;