import Featured from "../../components/featured/Featured";
import Inspirations from "../../components/featuredInspiration/Inspirations";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/PropertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">
          <h1>Browse by property type</h1>
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
