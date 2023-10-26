import React from "react";
// import MDEditor from '@uiw/react-md-editor';
import "./Resume.css";
import back from '../../assets/viewResume.png'
import Navbar from "../../components/Navbar";

export default function App() {
    const data = `
# heelelel
## sdusiufsdfgdsu
    `;
  return (
    // <div className="container">
    //     <div data-color-mode="light">
    //     <MDEditor.Markdown source ={data} />
    //     </div>
    // </div>
    <>
      <Navbar></Navbar>
      <img src={back}/>
    </>
  );
}