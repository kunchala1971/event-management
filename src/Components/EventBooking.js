import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventBooking = ({ userdata }) => {
  const navigateTo = useNavigate();
  const { id } = userdata;

  const [eventdata, setEventData] = useState({
    userId: id,
    eventStatus: "pending",
    eventDate: "",
    eventName: "",
    venue: "",
    price: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const onChangeHandler = (e) => {
    setEventData({ ...eventdata, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};

    if (!eventdata.eventDate) errors.eventDate = "Event date is required";
    if (!eventdata.eventName.trim())
      errors.eventName = "Event name is required";
    if (!eventdata.venue.trim()) errors.venue = "Venue is required";
    if (!eventdata.price) {
      errors.price = "Amount is required";
    } else if (isNaN(eventdata.price) || Number(eventdata.price) <= 0) {
      errors.price = "Amount must be a positive number";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        alert("Event Booking Successfully Completed.");
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
          value={eventdata.eventDate}
        />
        {formErrors.eventDate && (
          <small style={{ color: "red" }}>{formErrors.eventDate}</small>
        )}
      </div>

      <div>
        <label>Event Name</label>
        <input
          className="form-control"
          onChange={onChangeHandler}
          name="eventName"
          type="text"
          value={eventdata.eventName}
        />
        {formErrors.eventName && (
          <small style={{ color: "red" }}>{formErrors.eventName}</small>
        )}
      </div>

      <div>
        <label>Venue</label>
        <input
          className="form-control"
          onChange={onChangeHandler}
          name="venue"
          type="text"
          value={eventdata.venue}
        />
        {formErrors.venue && (
          <small style={{ color: "red" }}>{formErrors.venue}</small>
        )}
      </div>

      <div>
        <label>Amount</label>
        <input
          className="form-control"
          onChange={onChangeHandler}
          name="price"
          type="number"
          value={eventdata.price}
        />
        {formErrors.price && (
          <small style={{ color: "red" }}>{formErrors.price}</small>
        )}
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
