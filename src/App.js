import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topText, setTopText] = useState("Top Text");
  const [bottomText, setBottomText] = useState("Bottom Text");
  const [image,setImage] = useState()

  useEffect(() => {
    const accessKey = "F9m8l4-jOsx1vPwJPtcq9Q5XaBmfOocVNWdXy7PYNhQ";
    const apiUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setImages(response.data);
        setImage(response.data[0].urls.full)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  const memeImageContainerStyle = {
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
  };

  const memeImageStyle = {
    width: "100%",
    height: "600px",
  };

  const topTextStyle = {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px #000",
    width: "100%",
    userSelect: "none",
    direction: "ltr",
  };

  const bottomTextStyle = {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px #000",
    width: "100%",
    userSelect: "none",
    direction: "ltr",
  };

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  return (
    <div className="app">
      <Navbar />
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-2">
              <div className="row">
                {images.map((image, index) => (
                  <div key={index} className="col-md-6 mb-2 gx-2">
                    <img
                      className="img-fluid"
                      src={image.urls.full}
                      alt={image.alt_description}
                      style={memeImageStyle}
                      onClick={() => setImage(image.urls.full)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-10">
              <div className="card rounded-0">
                <div className="meme-image" style={memeImageContainerStyle}>
                  <img src={image} style={memeImageStyle} />
                  <div style={topTextStyle} contentEditable onChange={handleTopTextChange}>
                    {topText}
                  </div>
                  <div style={bottomTextStyle} contentEditable onChange={handleBottomTextChange}>
                    {bottomText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
