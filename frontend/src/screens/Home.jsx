import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { getApiUrl } from '../config';
// import Carousel from "../components/Carousel";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const apiUrl = getApiUrl('/api/DisplayData');
      console.log("Making API call to:", apiUrl);
      
      let response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });
      
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", errorText);
        throw new Error(`Network response was not ok: ${response.status} ${errorText}`);
      }
      
      const responseData = await response.json();
      setData(responseData[0] || []);
      setCat(responseData[1] || []);
      console.log("Food items:", responseData[0]);
      console.log("Categories:", responseData[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(`Failed to load data: ${error.message}`);
      // Set some fallback data to prevent blank page
      setData([]);
      setCat([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    console.log(search);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mt-5 text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading food items...</p>
        </div>
        <Footer />
      </>
    );
  }

  // Show error state
  if (error) {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">⚠️ Connection Issue</h4>
            <p>{error}</p>
            <hr />
            <p className="mb-0">
              <button className="btn btn-primary" onClick={fetchData}>
                Try Again
              </button>
            </p>
          </div>
          
          {/* Show some fallback content */}
          <div className="row">
            <div className="col-12">
              <h2>Welcome to GoFood!</h2>
              <p>This is a food delivery application. Please ensure the backend server is running to see the full content.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div className="container mt-4">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner" id="carousel">
                {/* Slide 1 */}
                <div className="carousel-item active position-relative">
                  <img
                    className="d-block w-100"
                    src="https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?w=800"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="d-flex justify-content-center">
                      <input
                        className="form-control me-2 w-50"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                      />
                      <button className="btn btn-success" onClick={handleSearch}>
                        Search
                      </button>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item position-relative">
                  <img
                    className="d-block w-100"
                    src="https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?w=800"
                    alt="Second slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="d-flex justify-content-center">
                      <input
                        className="form-control me-2 w-50"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                      />
                      <button className="btn btn-success" onClick={handleSearch}>
                        Search
                      </button>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item position-relative">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=800"
                    alt="Third slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="d-flex justify-content-center">
                      <input
                        className="form-control me-2 w-50"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                      />
                      <button className="btn btn-success" onClick={handleSearch}>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="container">
          {cat && cat.length > 0 ? (
            cat.map((category, index) => {
              return (
                <div key={index} className="row mb-4">
                  <h2>{category.CategoryName}</h2>
                  <hr />
                  {data && data.filter((ele) => {
                    return (ele.CategoryName === category.CategoryName) && (ele.name.toLowerCase().includes(search.toLowerCase()));
                  }).map((ele, eleIndex) => {
                    return (
                      <div key={`${index}-${eleIndex}`} className="col-md-3 col-sm-6 col-12 mb-4">
                        <Card
                          name={ele.name}
                          img={ele.img}
                          description={ele.description}
                          options={ele.options[0]}
                          id={ele.id}
                        />
                      </div>
                    )
                  })}
                </div>
              )
            })
          ) : (
            <div className="text-center mt-5">
              <h3>No categories found</h3>
              <p>Please check if the backend server is running and has data.</p>
            </div>
          )}
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
