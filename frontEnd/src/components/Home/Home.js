import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import Search from "../Search/Search";
import Header from "../Header/Header";
import Axios from "axios";
import Footer from "../Footer/Footer";
import BlackFooter from "../Footer/BlackFooter";

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);
  let [playgrounds, setPlaygrounds] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const api = `http://localhost:2004/api/playground/`;

  useEffect(() => {
    setIsLoading(true);
    Axios.get(api)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        setSearchResult(res.data.data);
        setPlaygrounds(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [api]);

  const categoriesApi = "http://localhost:2004/api/groundCategory";
  const getCategories = () => {
    Axios.get(categoriesApi)
      .then((res) => {
        setCategories(res.data.data);
        console.log(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategories();
  }, [categoriesApi]);

  useEffect(() => {
    if (searchKey === "") {
      setSearchResult(playgrounds);
    } else {
      setSearchResult(
        playgrounds.filter((item) => {
          const name = item.name.toLowerCase();
          return name.includes(searchKey.toLowerCase());
        })
      );
    }
  }, [searchKey]);
  return (
    <>
      <Header />
      <div className="App">
        <h1 className="text-center mb-4">Playgrounds</h1>
        <Search setSearchKey={setSearchKey} />

        <div className="container-fluid">
          <div className="row">
            <Filters
              playgrounds={playgrounds}
              setSearchResult={setSearchResult}
              categories={categories}
            />

            <div className="col-lg-8 col-12">
              <div className="row">
                {isLoading ? (
                  <>
                    <div className="container">
                      <div className="text-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Cards page="/" playgrounds={searchResult} />
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div
        style={{
          bottom: "0",
        }}
        className="footerContent"
      >
        <BlackFooter />
      </div>
    </>
  );
};

export default Home;
