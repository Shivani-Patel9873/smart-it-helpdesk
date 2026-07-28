function Reports() {


  return (

    <div className="p-4">


      <h2 className="mb-4">
        Reports & Analytics
      </h2>



      <div className="row">


        <div className="col-md-3">

          <div className="card shadow-sm p-3">

            <h5>
              Total Tickets
            </h5>

            <h2>
              120
            </h2>

          </div>

        </div>





        <div className="col-md-3">

          <div className="card shadow-sm p-3">

            <h5>
              Open Tickets
            </h5>

            <h2 className="text-danger">
              35
            </h2>

          </div>

        </div>






        <div className="col-md-3">

          <div className="card shadow-sm p-3">

            <h5>
              Resolved
            </h5>

            <h2 className="text-success">
              75
            </h2>

          </div>

        </div>






        <div className="col-md-3">

          <div className="card shadow-sm p-3">

            <h5>
              Pending
            </h5>

            <h2 className="text-warning">
              10
            </h2>

          </div>

        </div>



      </div>





      <div className="card shadow-sm mt-5 p-4">


        <h4>
          Ticket Summary
        </h4>


        <ul className="mt-3">

          <li>
            Hardware Issues - 40%
          </li>

          <li>
            Software Issues - 35%
          </li>

          <li>
            Network Issues - 25%
          </li>


        </ul>



      </div>




    </div>

  );


}


export default Reports;