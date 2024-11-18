const Contact = () => { 
  const handleSubmit = (event) => { 
    event.preventDefault();

    
  alert("your response have been submitted");
  }; return ( <> <div> <h2 className="h2">Get in touch</h2> <p> Send us a message and we’ll get back to you as soon as possible. We do not check emails during service so we can keep up with your orders! Thank you </p> <div className="form"> <form onSubmit={handleSubmit} className="form"> <div className="form-row"> <input type="text" name="name" className="input-box" required placeholder="Your Name *" />
  
            <input
              type="email"
              name="email"
              className="input-box"
              required
              placeholder=" Email Address * "
            />
          </div>
  
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              className="input-box"
              required
              placeholder="Phone Number *"
            />
          </div>
          <div className="form-row">
            <textarea
              className="input-box"
              rows="4"
              cols="50"
              placeholder="Write your message here..."
            />
          </div>
          <br />
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
      <div>
        <h2 className="h2">Contact Details</h2>
        <p>
          <strong>Address:</strong> Tokha, Ktm <br />
          <strong>Phone:</strong> 977-123-456-789 <br />
          <strong>Email:</strong> contact@resort.com <br />
        </p>
      </div>
      <div>
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7058.4765034077!2d85.31651496759032!3d27.802436361760833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1fcca8f2fb6d%3A0x86de9997fb5856aa!2sLanka%20D%20Village%20Resort!5e0!3m2!1sen!2snp!4v1728290509637!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Resort Location"
        ></iframe>
      </div>
    </div>
  </>
  ); }; export default Contact;


  