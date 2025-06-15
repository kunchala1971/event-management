import React, { useEffect, useState } from "react";
import {
  FaEdit,
  FaTimes,
  FaSort,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";

const rowsPerPage = 5;

const CompletedEvents = ({ userdata }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    fetch("http://localhost:8088/api/events")
      .then((res) => res.json())
      .then((events) => {
        setData(
          events.filter((element) => element.eventStatus === "completed")
        );
        setFilteredData(
          events.filter((element) => element.eventStatus === "completed")
        );
      });
  }, []);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    const sorted = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredData(sorted);
  };

  const handleEdit = (id) => alert(`Edit Event ID: ${id}`);
  const handleCancel = (id) => alert(`Cancel Event ID: ${id}`);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const dd = paginatedData.filter(
    (element) => element.eventStatus === "completed"
  );
  console.log(dd);
  const columns = [
    { key: "id", label: "ID" },
    { key: "eventDate", label: "Event Date" },
    { key: "eventName", label: "Event Name" },
    { key: "eventStatus", label: "Status" },
    { key: "price", label: "Price" },
    { key: "venue", label: "Venue" },
    { key: "userId", label: "User ID" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.scrollContainer}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              {columns.map((col) => (
                <th key={col.key} style={styles.th}>
                  <div style={styles.headerCell}>
                    {col.label}
                    <FaSort
                      style={styles.sortIcon}
                      onClick={() => handleSort(col.key)}
                    />
                  </div>
                </th>
              ))}
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData?.map((event) => (
                <tr key={event.id} style={styles.tr}>
                  {columns.map((col) => (
                    <td key={col.key} style={styles.td}>
                      {col.key === "price"
                        ? `₹${event[col.key]}`
                        : event[col.key]}
                    </td>
                  ))}
                  <td style={styles.td}>
                    <button
                      style={{
                        ...styles.smallBtn,
                        backgroundColor: "#007bff",
                      }}
                      onClick={() => handleEdit(event.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      style={{
                        ...styles.smallBtn,
                        backgroundColor: "#dc3545",
                      }}
                      onClick={() => handleCancel(event.id)}
                    >
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} style={styles.td}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={styles.pagination}>
        <button
          style={styles.pageBtn}
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          <FaStepBackward /> First
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            style={{
              ...styles.pageBtn,
              ...(currentPage === idx + 1 ? styles.activePageBtn : {}),
            }}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          style={styles.pageBtn}
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last <FaStepForward />
        </button>
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
  scrollContainer: {
    overflowX: "auto",
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
    backgroundColor: "#fff",
    padding: "1rem",
  },
  table: {
    width: "100%",
    minWidth: "100%",
    borderCollapse: "collapse",
  },
  thead: {
    backgroundColor: "#343a40",
    color: "#fff",
  },
  th: {
    padding: "8px",
    textAlign: "left",
    fontWeight: "bold",
    borderBottom: "1px solid #ccc",
    verticalAlign: "top",
  },
  headerCell: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  tr: {
    transition: "background-color 0.2s ease-in-out",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #eaeaea",
  },
  smallBtn: {
    border: "none",
    color: "#fff",
    fontSize: "0.8rem",
    padding: "5px 8px",
    marginRight: "6px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  pagination: {
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  pageBtn: {
    padding: "0.5rem 0.8rem",
    fontSize: "0.9rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    background: "#f9f9f9",
    cursor: "pointer",
  },
  activePageBtn: {
    background: "#007bff",
    color: "white",
    borderColor: "#007bff",
  },
  sortIcon: {
    cursor: "pointer",
    marginLeft: "4px",
  },
};

export default CompletedEvents;
