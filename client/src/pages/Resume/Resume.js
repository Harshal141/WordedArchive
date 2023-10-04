import React from "react";
import MDEditor from '@uiw/react-md-editor';
import "./Resume.css";

export default function App() {
    const data = `
# heelelel
## sdusiufsdfgdsu
    `;
  return (
    <div className="container">
        <div data-color-mode="light">
        <MDEditor.Markdown source ={data} />
        </div>
    </div>
  );
}