import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="topMenu">
        <li className="topMenuLink">Mobile version</li>
        <li className="topMenuLink">Your account</li>
        <li className="topMenuLink">Make changes to your booking online</li>
        <li className="topMenuLink">Customer service help</li>
        <li className="topMenuLink">Become an affiliate</li>
        <li className="topMenuLink">Booking.com for Business</li>
      </ul>
      <div className="bottomMenu">
        <ul className="category">
          <li className="categoryItem">Countries</li>
          <li className="categoryItem">Regions</li>
          <li className="categoryItem">Cities</li>
          <li className="categoryItem">Districts</li>
          <li className="categoryItem">Airports</li>
          <li className="categoryItem">Hotels</li>
          <li className="categoryItem">Places of interest</li>
        </ul>
        <ul className="category">
          <li className="categoryItem">Homes</li>
          <li className="categoryItem">Apartment</li>
          <li className="categoryItem">Resorts</li>
          <li className="categoryItem">Villas</li>
          <li className="categoryItem">Hostels</li>
          <li className="categoryItem">B&Bs</li>
          <li className="categoryItem">Guest houses</li>
        </ul>
        <ul className="category">
          <li className="categoryItem">Unique places to stay</li>
          <li className="categoryItem">All destinations</li>
          <li className="categoryItem">Discover</li>
          <li className="categoryItem">Reviews</li>
          <li className="categoryItem">Unpacked: Travel articles</li>
          <li className="categoryItem">Travel Communities</li>
          <li className="categoryItem">Seasonal and holiday deals</li>
        </ul>
        <ul className="category">
          <li className="categoryItem">Car hire</li>
          <li className="categoryItem">Flight finder</li>
          <li className="categoryItem">Restaurant reservations</li>
          <li className="categoryItem">Booking.com for Travel Agents</li>
        </ul>
        <ul className="category">
          <li className="categoryItem">Coronavirus (COVID-19) FAQs</li>
          <li className="categoryItem">About Booking.com</li>
          <li className="categoryItem">Customer Service Help</li>
          <li className="categoryItem">Partner help</li>
          <li className="categoryItem">Careers</li>
          <li className="categoryItem">Sustainability</li>
          <li className="categoryItem">Press centre</li>
          <li className="categoryItem">Safety resource centre</li>
          <li className="categoryItem">Investor relations</li>
          <li className="categoryItem">Terms & Conditions</li>
          <li className="categoryItem">Partner dispute</li>
          <li className="categoryItem">How we work</li>
          <li className="categoryItem">Privacy & Cookie Statement</li>
          <li className="categoryItem">Corporate contact</li>
        </ul>
      </div>
      <div className="footerText">
        <span>Copyright © 1996–2022 Booking.com™. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
