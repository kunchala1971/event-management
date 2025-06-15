import React from 'react';
import {
  FaCalendarAlt,
  FaClock,
  FaTimesCircle,
  FaCheckCircle,
  FaCalendarPlus,
  FaCalendarDay
} from 'react-icons/fa';

export const AdminWidgets = ({ userdata }) => {
  const stats = {
    totalEvents: 120,
    pendingEvents: 25,
    cancelledEvents: 10,
    approvedEvents: 70,
    upcomingEvents: 15,
    todayEvents: 5
  };

  const widgetData = [
    {
      title: 'Total Events',
      value: stats.totalEvents,
      icon: <FaCalendarAlt size={24} />,
      bg: 'linear-gradient(135deg, #007bff, #6f42c1)'
    },
    {
      title: 'Pending Events',
      value: stats.pendingEvents,
      icon: <FaClock size={24} />,
      bg: 'linear-gradient(135deg, #ffc107, #ff9800)'
    },
    {
      title: 'Cancelled Events',
      value: stats.cancelledEvents,
      icon: <FaTimesCircle size={24} />,
      bg: 'linear-gradient(135deg, #dc3545, #b02a37)'
    },
    {
      title: 'Approved Events',
      value: stats.approvedEvents,
      icon: <FaCheckCircle size={24} />,
      bg: 'linear-gradient(135deg, #28a745, #218838)'
    },
    {
      title: 'Upcoming Events',
      value: stats.upcomingEvents,
      icon: <FaCalendarPlus size={24} />,
      bg: 'linear-gradient(135deg, #17a2b8, #0c5460)'
    },
    {
      title: "Today's Events",
      value: stats.todayEvents,
      icon: <FaCalendarDay size={24} />,
      bg: 'linear-gradient(135deg, #6c757d, #343a40)'
    }
  ];

  return (
    <div className="my-4" style={{width:"100%"}}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'flex-start' // ✅ Aligns widgets to the left
        }}
      >
        {widgetData.map((widget, index) => (
          <div
            key={index}
            style={{
              background: widget.bg,
              width: '150px',
              minHeight: '120px',
              padding: '1rem',
              borderRadius: '1rem',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 0 8px rgba(0,0,0,0.1)',
              flexShrink: 0
            }}
          >
            <div>
              <h6 style={{ fontSize: '0.9rem' }}>{widget.title}</h6>
              <h4 style={{ margin: 0 }}>{widget.value}</h4>
            </div>
            <div style={{ alignSelf: 'flex-end' }}>{widget.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
