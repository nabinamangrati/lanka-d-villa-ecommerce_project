const Contact = () => {
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
          <form action="post">
            NAME
            <input type="text" />
            <br />
            EMAIL <input type="text" />
            <br />
            PHONE NUMBER <input type="text" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
