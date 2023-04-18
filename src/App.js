import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  NewHomePage,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinID" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer" style={{color:"white" , backgroundColor:"#1f1b24"}}>Built by Mansi Saini</div>
      </div>
    </div>
    // <div className="container">
    //   {/* <div className="navbar">
    //     <Navbar />
    //   </div> */}
    //   <div className="main" style={{ border: "1px solid red" }}>

    //     <Layout>
    //       <div className="routes">
    //         <Routes>
    //           <Route exact path="/" element={<Homepage />} />
    //           <Route exact path="/exchanges" element={<Exchanges />} />
    //           <Route
    //             exact
    //             path="/cryptocurrencies"
    //             element={<Cryptocurrencies />}
    //           />
    //           <Route exact path="/crypto/:coinID" element={<CryptoDetails />} />
    //           <Route exact path="/news" element={<News />} />
    //         </Routes>
    //       </div>
    //     </Layout>

    // <div className="footer">
    //   <Space>
    //     <Link to="/"> Home </Link>
    //     <Link to="/cryptocurrencies"> Cryptocurrencies </Link>
    //     <Link to="/news"> News </Link>
    //   </Space>

    //   <Typography.Title
    //     level={5}
    //     style={{ color: "white", textAlign: "center" }}
    //   >
    //     Crypto Den <br />
    //     © All rights reserved <br />
    //     Built by Mansi Saini
    //   </Typography.Title>
    // </div>

    // </div>
    // </div>
  );
};

export default App;
