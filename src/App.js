import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessKey = "F9m8l4-jOsx1vPwJPtcq9Q5XaBmfOocVNWdXy7PYNhQ";
    const apiUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

    const fetchData = async () => {
      try {
        const response = await axios
          .get(apiUrl)
          .then((res) => setImages(res.data));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  const imageStyle = {
    width: "100%",
    height: "200px",
  };

  const memeImageStyle = {
     width: "100%",
     height: "600px"
  }
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
                      style={imageStyle}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-10">
              <div className="card rounded-0">
                <div className="meme-image">
                  <img src={images[0].urls.full} style={memeImageStyle}/>
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
