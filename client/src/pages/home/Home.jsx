import Featured from "../../components/featured/Featured";
import Inspirations from "../../components/featuredInspiration/Inspirations";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/PropertyList/PropertyList";
import PropertyTypes from "../../components/propertyTypes/PropertyTypes";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">
          <h1>Browse by property Type</h1>
          <PropertyTypes />
          <h1>Browse by property City</h1>
          <PropertyList />
          <h1>Get inspirations for your next trip</h1>
          <Inspirations />
        </div>
        <MailList />
      </div>
    </>
  );
};

export default Home;
