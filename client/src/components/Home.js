import React from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import Navbar from "./Navbar";

const Home = () => {
  const [value, setValue] = React.useState(
    `👋 **Hello!** You can edit the .md code here`
  );
  return (
    <>
      <Navbar />
      <div className="m-10">
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
};

export default Home;
