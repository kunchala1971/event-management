import React from 'react'

export const UserWidgets = ({ userdata }) => {
  const stats = {
    totalEvents: 120,
    pendingEvents: 25,
    cancelledEvents: 10,
    approvedEvents: 70,
    upcomingEvents: 15,
    todayEvents: 5
  };

  const widgetData = [
    { title: 'Total Events', value: stats.totalEvents, color: 'primary' },
    { title: 'Pending Events', value: stats.pendingEvents, color: 'warning' },
    { title: 'Cancelled Events', value: stats.cancelledEvents, color: 'danger' },
    { title: 'Approved Events', value: stats.approvedEvents, color: 'success' },
    { title: 'Upcoming Events', value: stats.upcomingEvents, color: 'info' },
    { title: "Today's Events", value: stats.todayEvents, color: 'secondary' }
  ];

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {widgetData.map((widget, index) => (
          <div key={index} className="col-md-4">
            <div className={`card border-${widget.color} shadow-sm`}>
              <div className={`card-body text-${widget.color}`}>
                <h5 className="card-title">{widget.title}</h5>
                <h3 className="card-text fw-bold">{widget.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
