import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h2>HDip in Computer Science</h2>
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
      <td>DevOps</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Full Stack Web Dev</td>
      <td>3</td>
      <td>2</td>
    </tr>
  </tbody >
</table>
</div>

  );
};

export default Demo;
