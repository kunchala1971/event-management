import React, { useEffect, useState } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";

const sampleData = [
  {
    id: 1,
    event_date: "2025-06-20",
    event_name: "Tech Conference",
    event_status: "Pending",
    price: 500,
    venue: "Hyderabad",
    user_id: 101,
  },
  {
    id: 2,
    event_date: "2025-06-22",
    event_name: "Startup Meetup",
    event_status: "Approved",
    price: 300,
    venue: "Bangalore",
    user_id: 102,
  },
  {
    id: 3,
    event_date: "2025-06-25",
    event_name: "AI Summit",
    event_status: "Cancelled",
    price: 700,
    venue: "Chennai",
    user_id: 103,
  },
  {
    id: 4,
    event_date: "2025-06-20",
    event_name: "Tech Conference",
    event_status: "Pending",
    price: 500,
    venue: "Hyderabad",
    user_id: 101,
  },
  {
    id: 5,
    event_date: "2025-06-22",
    event_name: "Startup Meetup",
    event_status: "Approved",
    price: 300,
    venue: "Bangalore",
    user_id: 102,
  },
  {
    id: 6,
    event_date: "2025-06-25",
    event_name: "AI Summit",
    event_status: "Cancelled",
    price: 700,
    venue: "Chennai",
    user_id: 103,
  },
  {
    id: 7,
    event_date: "2025-06-20",
    event_name: "Tech Conference",
    event_status: "Pending",
    price: 500,
    venue: "Hyderabad",
    user_id: 101,
  },
  {
    id: 8,
    event_date: "2025-06-22",
    event_name: "Startup Meetup",
    event_status: "Approved",
    price: 300,
    venue: "Bangalore",
    user_id: 102,
  },
  {
    id: 9,
    event_date: "2025-06-25",
    event_name: "AI Summit",
    event_status: "Cancelled",
    price: 700,
    venue: "Chennai",
    user_id: 103,
  },
  {
    id: 10,
    event_date: "2025-06-20",
    event_name: "Tech Conference",
    event_status: "Pending",
    price: 500,
    venue: "Hyderabad",
    user_id: 101,
  },
  {
    id: 11,
    event_date: "2025-06-22",
    event_name: "Startup Meetup",
    event_status: "Approved",
    price: 300,
    venue: "Bangalore",
    user_id: 102,
  },
  {
    id: 12,
    event_date: "2025-06-25",
    event_name: "AI Summit",
    event_status: "Cancelled",
    price: 700,
    venue: "Chennai",
    user_id: 103,
  },
  {
    id: 13,
    event_date: "2025-06-20",
    event_name: "Tech Conference",
    event_status: "Pending",
    price: 500,
    venue: "Hyderabad",
    user_id: 101,
  },
  {
    id: 14,
    event_date: "2025-06-22",
    event_name: "Startup Meetup",
    event_status: "Approved",
    price: 300,
    venue: "Bangalore",
    user_id: 102,
  },
  {
    id: 15,
    event_date: "2025-06-25",
    event_name: "AI Summit",
    event_status: "Cancelled",
    price: 700,
    venue: "Chennai",
    user_id: 103,
  },
  {
    id: 16,
    event_date: "2025-06-20",
    event_name: "Tech Conference",
    event_status: "Pending",
    price: 500,
    venue: "Hyderabad",
    user_id: 101,
  },
  {
    id: 17,
    event_date: "2025-06-22",
    event_name: "Startup Meetup",
    event_status: "Approved",
    price: 300,
    venue: "Bangalore",
    user_id: 102,
  },
  {
    id: 18,
    event_date: "2025-06-25",
    event_name: "AI Summit",
    event_status: "Cancelled",
    price: 700,
    venue: "Chennai",
    user_id: 103,
  },
  {
    id: 19,
    event_date: "2025-06-20",
    event_name: "Tech Conference",
    event_status: "Pending",
    price: 500,
    venue: "Hyderabad",
    user_id: 101,
  },
  {
    id: 20,
    event_date: "2025-06-22",
    event_name: "Startup Meetup",
    event_status: "Approved",
    price: 300,
    venue: "Bangalore",
    user_id: 102,
  },
  {
    id: 21,
    event_date: "2025-06-25",
    event_name: "AI Summit",
    event_status: "Cancelled",
    price: 700,
    venue: "Chennai",
    user_id: 103,
  },
  {
    id: 22,
    event_date: "2025-06-20",
    event_name: "Tech Conference",
    event_status: "Pending",
    price: 500,
    venue: "Hyderabad",
    user_id: 101,
  },
  {
    id: 23,
    event_date: "2025-06-22",
    event_name: "Startup Meetup",
    event_status: "Approved",
    price: 300,
    venue: "Bangalore",
    user_id: 102,
  },
  {
    id: 24,
    event_date: "2025-06-25",
    event_name: "AI Summit",
    event_status: "Cancelled",
    price: 700,
    venue: "Chennai",
    user_id: 103,
  },
];

const rowsPerPage = 5;

const CanceledEvents = () => {
  const [data, setData] = useState(sampleData);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch("http://localhost:8088/api/events")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleEdit = (id) => alert(`Edit Event ID: ${id}`);
  const handleCancel = (id) => alert(`Cancel Event ID: ${id}`);

  const handlePageChange = (page) => setCurrentPage(page);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
console.log(data);
  return (
    <div style={styles.container}>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              {[
                "ID",
                "Event Date",
                "Event Name",
                "Status",
                "Price",
                "Venue",
                "User ID",
                "Actions",
              ].map((col) => (
                <th key={col} style={styles.th}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((event) => (
                <tr key={event.id} style={styles.tr}>
                  <td style={styles.td}>{event.id}</td>
                  <td style={styles.td}>{event.eventDate}</td>
                  <td style={styles.td}>{event.eventName}</td>
                  <td style={styles.td}>{event.eventStatus}</td>
                  <td style={styles.td}>₹{event.price}</td>
                  <td style={styles.td}>{event.venue}</td>
                  <td style={styles.td}>{event.userId}</td>
                  <td style={styles.td}>
                    <button
                      style={{ ...styles.iconBtn, color: "#007bff" }}
                      onClick={() => handleEdit(event.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      style={{ ...styles.iconBtn, color: "#dc3545" }}
                      onClick={() => handleCancel(event.id)}
                    >
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={styles.td} colSpan="8">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={styles.pagination}>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => handlePageChange(idx + 1)}
            style={{
              ...styles.pageBtn,
              ...(currentPage === idx + 1 ? styles.activePageBtn : {}),
            }}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Segoe UI, sans-serif",
    maxWidth: "100%",
    boxSizing: "border-box",
  },
  tableWrapper: {
    overflowX: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
    backgroundColor: "#fff",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "750px",
  },
  thead: {
    backgroundColor: "#343a40",
    color: "#fff",
  },
  th: {
    padding: "12px",
    textAlign: "left",
    fontWeight: "bold",
    borderBottom: "1px solid #ccc",
  },
  tr: {
    transition: "background-color 0.2s ease-in-out",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #eaeaea",
  },
  iconBtn: {
    border: "none",
    background: "transparent",
    fontSize: "1rem",
    marginRight: "0.7rem",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  pagination: {
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  pageBtn: {
    padding: "0.5rem 0.9rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    background: "#f7f7f7",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
  activePageBtn: {
    background: "#007bff",
    color: "#fff",
    borderColor: "#007bff",
  },
};

export default CanceledEvents;
