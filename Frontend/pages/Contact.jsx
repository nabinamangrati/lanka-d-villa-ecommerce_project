const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("your response have been submitted");
  };
  return (
    <>
      <div>
        <h1>CONTACT US</h1>
        <p>
          Send us a message and we’ll get back to you as soon as possible. We do
          not check emails during service so we can keep up with your orders!
          Thank you
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            NAME
            <input type="text" name="name" />
            <br />
            EMAIL <input type="email" name="email" required />
            <br />
            PHONE NUMBER <input type="tel" name="phone" required />
            <br />
            <textarea
              rows="4"
              cols="50"
              placeholder="Write your message here..."
            />
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
        <div>
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> Tokha, Ktm <br />
            <strong>Phone:</strong> 977-123-456-789 <br />
            <strong>Email:</strong> contact@resort.com <br />
          </p>
        </div>
      </div>
    </>
  );
};
export default Contact;
