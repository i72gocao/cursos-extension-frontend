import React from "react";
import TagCourse from "./TagCourse";

const ContainerCourse = () => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <TagCourse/>
            <TagCourse/>
            <TagCourse/>
        </div>
      </div>
    </div>
  );
};

export default ContainerCourse;
