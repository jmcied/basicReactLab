import React from "react";
import CourseModulesWithProps from "../../components/exercises/03_props";

export default {
  title: "Exercises/03 - component with props",
  component: CourseModulesWithProps,
};

export const Basic = () => {
  const name = "HDip in Computer Science";
  const twoModules = [
    {
      name: "DevOps",
      noLectures: 2,
      noPracticals: 2,
    },
    {
      name: "Full Stack Web Dev",
      noLectures: 2,
      noPracticals: 3,
    },
  ];
  return <CourseModulesWithProps modules={twoModules} course={name} />;
};
