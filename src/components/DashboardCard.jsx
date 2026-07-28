function DashboardCard({ title, count, color, icon }) {
  return (
    <div
      className="card shadow border-0"
      style={{
        borderLeft: `6px solid ${color}`,
        borderRadius: "12px"
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="text-muted">{title}</h6>
          <h2>{count}</h2>
        </div>

        <div
          style={{
            fontSize: "40px"
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;