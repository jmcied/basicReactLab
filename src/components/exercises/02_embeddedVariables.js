import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  const course = "HDip in Computer Science - Modules Table";
  const modules = [
    {
      name: "DevOps",
      numLectures: "2",
      numPracticals: "2"
    },
    {
      name: "Full Stack Web Dev",
      numLectures: "3",
      numPracticals: "2"
    }
  ]
  return (
    <div>
    <h2>{course}</h2>
  <table className="table table-bordered">
<thead>
  <tr>
    <th>Name</th>
    <th>No lectures</th>
    <th>No practicals</th>
  </tr>
</thead>
<tbody >
  <tr>
    <td>{modules[0].name}</td>
    <td>{modules[0].numLectures}</td>
    <td>{modules[0].numPracticals}</td>
  </tr>
  <tr>
    <td>{modules[1].name}</td>
    <td>{modules[1].numLectures}</td>
    <td>{modules[1].numPracticals}</td>
  </tr>
</tbody >
</table>
</div>
  );
};

export default Demo;
