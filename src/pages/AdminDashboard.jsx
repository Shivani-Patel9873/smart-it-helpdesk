import { useEffect, useState } from "react";


function AdminDashboard() {


  const [tickets, setTickets] = useState([]);



  useEffect(() => {

    loadTickets();

  }, []);




  const loadTickets = () => {


    const savedTickets = JSON.parse(

      localStorage.getItem("tickets")

    ) || [];


    setTickets(savedTickets);


  };






  const updateStatus = (id, status) => {


    const updatedTickets = tickets.map((ticket)=>{


      if(ticket.id === id){

        return {

          ...ticket,

          status:status

        };

      }


      return ticket;


    });




    setTickets(updatedTickets);



    localStorage.setItem(

      "tickets",

      JSON.stringify(updatedTickets)

    );


  };







  return (

    <div className="p-4">


      <h2 className="fw-bold mb-4">

        👨‍💻 Admin Ticket Management

      </h2>





      <div className="card shadow-sm border-0">


        <div className="table-responsive">


          <table className="table align-middle mb-0">


            <thead className="table-dark">

              <tr>

                <th>
                  Ticket ID
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


                <tr key={ticket.id}>


                  <td>
                    #{ticket.id.toString().slice(-5)}
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

                    ticket.priority === "High" ?

                    <span className="badge bg-danger">
                      High
                    </span>

                    :

                    <span className="badge bg-warning text-dark">
                      {ticket.priority}
                    </span>

                    }


                  </td>





                  <td>


                    <span className="badge bg-info text-dark">

                      {ticket.status}

                    </span>


                  </td>






                  <td>


                    <select

                      className="form-select"

                      value={ticket.status}

                      onChange={(e)=>

                        updateStatus(

                          ticket.id,

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


                    </select>


                  </td>




                </tr>


              ))



              :


              <tr>

                <td

                  colSpan="6"

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

  );


}


export default AdminDashboard;