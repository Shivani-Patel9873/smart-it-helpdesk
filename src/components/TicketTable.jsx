function TicketTable() {
  return (
    <div className="card shadow border-0 mt-4">
      <div className="card-header bg-primary text-white">
        Recent Tickets
      </div>

      <div className="card-body">

        <table className="table table-hover">

          <thead>

            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Issue</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>#101</td>
              <td>Rahul</td>
              <td>Printer Offline</td>
              <td><span className="badge bg-danger">High</span></td>
              <td><span className="badge bg-warning text-dark">Open</span></td>
            </tr>

            <tr>
              <td>#102</td>
              <td>Neha</td>
              <td>Password Reset</td>
              <td><span className="badge bg-success">Low</span></td>
              <td><span className="badge bg-success">Resolved</span></td>
            </tr>

            <tr>
              <td>#103</td>
              <td>Amit</td>
              <td>Outlook Issue</td>
              <td><span className="badge bg-warning text-dark">Medium</span></td>
              <td><span className="badge bg-info">In Progress</span></td>
            </tr>

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default TicketTable;