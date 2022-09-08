import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="properties">
      <div className="propertyItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/124909.webp?k=d28dbbb411ecd18e7897d0428a1ee5897e439f981cf680e91e92bf203ff41bc8&o="
          alt=""
          className="propertyImg"
        />
        <div className="propertyTitles">
          <h1>Oran</h1>
          <h2>79 properties</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/354703.webp?k=dcffc96cc0ef35a3d9b4ac13eee1a4156f31f4aa29d77b2046ad4a541de1a55c&o="
          alt=""
          className="propertyImg"
        />
        <div className="propertyTitles">
          <h1>Alger</h1>
          <h2>78 properties</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/810647.webp?k=69c36e9aeb6020dd2beff006b0054b24ba0c9774305c9177313f675ccccca9bf&o="
          alt=""
          className="propertyImg"
        />
        <div className="propertyTitles">
          <h1>Annaba</h1>
          <h2>13 properties</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/region/square250/47306.webp?k=8642bcc068ed399fe1b75eaa2ff54973d7a3a408e9e7f0ba24cea36103aaf171&o="
          alt=""
          className="propertyImg"
        />
        <div className="propertyTitles">
          <h1>Mostaganem Province</h1>
          <h2>20 properties</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/624687.webp?k=d5fb28823a1412f85839cb5f14ed65a8c44004466df26a3ea3450d4e8ed66eb5&o="
          alt=""
          className="propertyImg"
        />
        <div className="propertyTitles">
          <h1>Bejaïa</h1>
          <h2>25 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
