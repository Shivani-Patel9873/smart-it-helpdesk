import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function TicketDetails(){

  const {id} = useParams();

  const [ticket,setTicket] = useState(null);



  useEffect(()=>{


    fetch(
      `http://localhost:5000/api/tickets/${id}`
    )

    .then(res=>res.json())

    .then(data=>{

      console.log(data);

      setTicket(data);

    })

    .catch(error=>{

      console.log(error);

    });


  },[id]);




  if(!ticket){

    return (

      <div className="p-4">

        <h3>
          Loading Ticket...
        </h3>

      </div>

    );

  }




  return (

    <div className="p-4">


      <div className="card shadow p-4">


        <h2 className="mb-4">
          🎫 Ticket Details
        </h2>


        <p>
          <b>Ticket ID:</b> {ticket.ticketId}
        </p>


        <p>
          <b>Employee Name:</b> {ticket.employeeName}
        </p>


        <p>
          <b>Employee ID:</b> {ticket.employeeId}
        </p>


        <p>
          <b>Department:</b> {ticket.department}
        </p>


        <p>
          <b>Location:</b> {ticket.location}
        </p>


        <p>
          <b>Asset:</b> {ticket.assetType}
        </p>


        <p>
          <b>Category:</b> {ticket.category}
        </p>


        <p>
          <b>Priority:</b> {ticket.priority}
        </p>


        <p>
          <b>Status:</b> {ticket.status}
        </p>


        <p>
          <b>Issue:</b> {ticket.title}
        </p>


        <p>
          <b>Description:</b> {ticket.description}
        </p>



      </div>


    </div>


  );


}


export default TicketDetails;