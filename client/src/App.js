import React from "react";
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";
import "./App.css";
import {Navbar} from "./components/navbar";

export default function App() {
  const [value, setValue] = React.useState(`👋 **Hello!** You can edit the .md code here`);

  return (
    <>
      <Navbar />
      <div className="m-4">
      <MDEditor
        value={value}
        onChange={setValue}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      </div>
    </>
  );
}