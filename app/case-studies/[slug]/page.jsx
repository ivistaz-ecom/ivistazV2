import React from "react";
import Posts from "./Posts";

const page = ({ params }) => {
  return (
    <div className="bg-black pt-24">
      <Posts slug={params.slug} />
    </div>
  );
};

export default page;
