import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1>Save time, save money!</h1>
      <h3>Sign up and we'll send the best deals to you</h3>
      <div className="mailContainer">
        <input type="email" name="email" id="email" placeholder="Your email" />
        <button className="mailBtn">Subscribe</button>
      </div>
      <div className="refer">
        <input type="checkbox" name="free" id="free" />
        <span>Send me a link to get the FREE Booking.com app!</span>
      </div>
    </div>
  );
};

export default MailList;
