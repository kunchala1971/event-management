import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EventBooking = ({ userdata }) => {
  const navigateTo = useNavigate();
  const { id } = userdata;
  const [eventdata, setEventData] = useState({
    userId: id,
    eventStatus: "pending",
  });
  const onChangeHandler = (e) => {
    setEventData({ ...eventdata, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  

    try {
      const result = await axios.post(
        `http://localhost:8088/api/events`,
        eventdata,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (result.status === 200 || result.status === 201) {
        alert("Event Booking  Successfully Completed.");
        navigateTo("/dashboard");
      } else {
        alert("Please Enter Correct Details");
      }
    } catch (err) {
      alert("Please Enter Correct Details");
    }
  };
  return (
    <div style={{ width: "320px", margin: "auto" }}>
      <h1>Event Booking</h1>
      <div>
        <label>Event Date</label>
        <input
          className="form-control"
          onChange={onChangeHandler}
          name="eventDate"
          type="date"
        />
      </div>
      <div>
        <label>Event Name</label>
        <input
          className="form-control"
          onChange={onChangeHandler}
          name="eventName"
          type="text"
        />
      </div>
      <div>
        <label>Venue</label>
        <input
          className="form-control"
          onChange={onChangeHandler}
          name="venue"
          type="text"
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          className="form-control"
          onChange={onChangeHandler}
          name="price"
          type="number"
        />
      </div>
      <div className="form-group" style={{ marginTop: "10px" }}>
        <button className="btn btn-success" onClick={onSubmitHandler}>
          Add Event
        </button>
      </div>
    </div>
  );
};

export default EventBooking;
