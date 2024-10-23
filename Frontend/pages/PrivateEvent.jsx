import { useState } from "react";
const PrivateEvent = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your inquiry has been submitted!");
    setShowForm(false);
  };
  return (
    <>
      <div>
        <h1 className="h2">BOOK AN EVENT</h1>
        <p>
          To book an event, please note that we require a
          <strong> minimum of 20 guests</strong>. If you're interested in
          proceeding or would like more information, simply fill out the form
          below, and we’ll get back to you as soon as possible. Should you not
          hear from us within a reasonable time, feel free to reach out to us
          directly at <strong> 78396297 or 21980469865</strong>. We're always
          here to help and make your event planning experience seamless and
          enjoyable!
        </p>
        <button onClick={handleButtonClick}>Inquire Now</button>
        {showForm && (
          <div className="form-container">
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
              <label> Event type</label>
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
          </div>
        )}
      </div>
    </>
  );
};
export default PrivateEvent;
