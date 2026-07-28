import { useEffect, useState } from "react";


function Admin() {

  const [tickets, setTickets] = useState([]);


  const getTickets = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/api/tickets"
      );

      const data = await res.json();

      setTickets(data);


    } catch(error) {

      console.log(error);

    }

  };



  useEffect(() => {

    getTickets();

  }, []);





  const updateStatus = async(id,status)=>{

    try{

      await fetch(
        `http://localhost:5000/api/tickets/${id}`,
        {
          method:"PUT",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({
            status:status
          })

        }
      );


      getTickets();


    }
    catch(error){

      console.log(error);

    }

  };





  return (

    <div className="p-4">


      <h2 className="fw-bold mb-4">
        👨‍💻 Admin Ticket Management
      </h2>



      <div className="card shadow">


        <div className="table-responsive">


          <table className="table align-middle">


            <thead className="table-dark">

              <tr>

                <th>
                  Ticket ID
                </th>

                <th>
                  Employee
                </th>

                <th>
                  Issue
                </th>

                <th>
                  Category
                </th>

                <th>
                  Priority
                </th>

                <th>
                  Status
                </th>

                <th>
                  Action
                </th>


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
                  {ticket.employeeName}
                </td>


                <td>
                  {ticket.title}
                </td>


                <td>
                  {ticket.category}
                </td>


                <td>

                  <span className="badge bg-warning text-dark">

                    {ticket.priority}

                  </span>

                </td>




                <td>


                  <select

                  className="form-select"

                  value={ticket.status}

                  onChange={(e)=>
                    updateStatus(
                      ticket._id,
                      e.target.value
                    )
                  }

                  >

                    <option>
                      Open
                    </option>

                    <option>
                      In Progress
                    </option>

                    <option>
                      Resolved
                    </option>

                    <option>
                      Closed
                    </option>


                  </select>


                </td>




                <td>


                  <button

                  className="btn btn-primary btn-sm"

                  onClick={()=>{

                    window.location.href =
                    `/ticket/${ticket.ticketId}`

                  }}

                  >

                    View

                  </button>


                </td>



              </tr>


            ))



            :


            <tr>

              <td colSpan="7"
              className="text-center">

                No Tickets Found

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


export default Admin;