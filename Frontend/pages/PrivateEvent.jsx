import { useState } from "react";
const PrivateEvent = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your inquiry has been submitted!");
    setShowForm("");
  };
  return (
    <>
      <div className="form-container">
        <h1 className="h1">BOOK AN EVENT</h1>
        <p>
          To book an event, please note that the minimum number of guests
          required is 20. If you'd like to proceed or need more information,
          kindly fill out the form below, and we will get back to you as soon as
          possible. If you don’t hear from us within a reasonable time, please
          don’t hesitate to reach out directly by phone at 78396297 or
          21980469865. We're always happy to assist!
        </p>
        <button onClick={handleButtonClick}>Inquire Now</button>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" required />
            <br />
            <label>Email</label>
            <input type="email" required />
            <br />
            <label>Phone Number</label>
            <input type="tel" required />
            <br />
            Event type
            <select name="event-type" required>
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate Event</option>
              <option value="private-dinner">Private Dinner</option>
              <option value="anniversary">Anniversary</option>
              <option value="others">Others</option>
            </select>
            <br />
            <label>Event Date</label>
            <input type="date" required />
            <br />
            <label>Number of Guests</label>
            <input type="number" required />
            <br />
            <label>Special Requests</label>
            <textarea placeholder="Any special requests or dietary restrictions"></textarea>
            <br />
            <button type="submit">Submit Inquiry</button>
          </form>
        )}
      </div>
    </>
  );
};
export default PrivateEvent;
