import React from "react";
import reactDom from "react-dom";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

reactDom.render(
    <div>
    <Header />
    <Note />
    <Footer />
    </div>
,
 document.getElementById("root"));