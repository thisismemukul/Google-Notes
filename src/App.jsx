import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";
const App = () => {
  const [addItem, setaddItem] = useState([]);
  const addnote = (note) => {
    setaddItem((predata) => {
      return [...predata, note];
    });
  };
  const onDelete = (id) => {
    setaddItem((olddata) =>
      olddata.filter((currentData, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateNote passnote={addnote} />
      {addItem.map((val, index) => {
        return <Notes key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />
      })}
      <Footer />
    </>
  )
};
export default App;