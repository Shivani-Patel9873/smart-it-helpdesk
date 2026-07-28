import { useState } from "react";

function RaiseTicket() {

  const initialState = {
    employeeName: "",
    employeeId: "",
    department: "",
    location: "",
    assetType: "",
    assetId: "",
    category: "",
    priority: "Medium",
    title: "",
    description: ""
  };


  const [ticket, setTicket] = useState(initialState);


  const handleChange = (e) => {

    setTicket({
      ...ticket,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await fetch(
        "http://localhost:5000/api/tickets",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(ticket)

        }
      );


      const data = await response.json();


      if(response.ok){

        alert(
          `✅ Ticket Created Successfully!\nTicket ID: ${data.ticketId}`
        );

        setTicket(initialState);

      }
      else{

        alert("❌ Ticket creation failed");

      }


    }

    catch(error){

      console.log(error);

      alert("❌ Backend connection error");

    }

  };



  return (

    <div className="container py-4">


      <div className="card shadow-lg border-0 rounded-4 p-4">


        <h2 className="mb-4 text-primary">
          🎫 Raise IT Support Ticket
        </h2>



        <div className="row mb-4">


          <div className="col-md-3 mb-3">
            <div className="card border-primary shadow-sm">
              <div className="card-body text-center">

                <h6 className="text-primary">
                  Ticket ID
                </h6>

                <h5>
                  Auto Generated
                </h5>

              </div>
            </div>
          </div>



          <div className="col-md-3 mb-3">
            <div className="card border-success shadow-sm">
              <div className="card-body text-center">

                <h6 className="text-success">
                  Status
                </h6>

                <h5>
                  🟢 Open
                </h5>

              </div>
            </div>
          </div>



          <div className="col-md-3 mb-3">
            <div className="card border-warning shadow-sm">
              <div className="card-body text-center">

                <h6 className="text-warning">
                  Created On
                </h6>

                <h5>
                  Auto Generated
                </h5>

              </div>
            </div>
          </div>



          <div className="col-md-3 mb-3">
            <div className="card border-info shadow-sm">
              <div className="card-body text-center">

                <h6 className="text-info">
                  Assigned To
                </h6>

                <h5>
                  Pending Assignment
                </h5>

              </div>
            </div>
          </div>


        </div>





<form onSubmit={handleSubmit}>


<div className="row">



<div className="col-md-6 mb-3">

<label>
Employee Name
</label>

<input
className="form-control"
name="employeeName"
value={ticket.employeeName}
onChange={handleChange}
required
/>

</div>



<div className="col-md-6 mb-3">

<label>
Employee ID
</label>

<input
className="form-control"
name="employeeId"
value={ticket.employeeId}
onChange={handleChange}
required
/>

</div>



<div className="col-md-6 mb-3">

<label>
Department
</label>

<select
className="form-select"
name="department"
value={ticket.department}
onChange={handleChange}
>

<option value="">
Select Department
</option>

<option>IT</option>
<option>Production</option>
<option>Maintenance</option>
<option>HR</option>
<option>Finance</option>

</select>

</div>



<div className="col-md-6 mb-3">

<label>
Location
</label>

<input
className="form-control"
name="location"
value={ticket.location}
onChange={handleChange}
/>

</div>




<div className="col-md-6 mb-3">

<label>
Asset Type
</label>


<select
className="form-select"
name="assetType"
value={ticket.assetType}
onChange={handleChange}
>

<option value="">
Select Asset
</option>

<option>Laptop</option>
<option>Desktop</option>
<option>Printer</option>
<option>Server</option>

</select>


</div>




<div className="col-md-6 mb-3">

<label>
Asset ID
</label>


<input
className="form-control"
name="assetId"
value={ticket.assetId}
onChange={handleChange}
/>


</div>





<div className="col-md-6 mb-3">

<label>
Category
</label>


<select
className="form-select"
name="category"
value={ticket.category}
onChange={handleChange}
>

<option value="">
Select Category
</option>

<option>Hardware</option>
<option>Software</option>
<option>Network</option>
<option>Security</option>

</select>

</div>





<div className="col-md-6 mb-3">

<label>
Priority
</label>


<select
className="form-select"
name="priority"
value={ticket.priority}
onChange={handleChange}
>

<option>Low</option>
<option>Medium</option>
<option>High</option>
<option>Critical</option>

</select>


</div>





<div className="col-12 mb-3">

<label>
Issue Title
</label>

<input
className="form-control"
name="title"
value={ticket.title}
onChange={handleChange}
required
/>

</div>





<div className="col-12 mb-3">

<label>
Description
</label>


<textarea

className="form-control"

rows="5"

name="description"

value={ticket.description}

onChange={handleChange}

required

></textarea>


</div>



</div>




<button className="btn btn-primary btn-lg px-5">

🚀 Submit Ticket

</button>



</form>


      </div>


    </div>


  );

}


export default RaiseTicket;