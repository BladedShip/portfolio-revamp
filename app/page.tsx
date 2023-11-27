import TaskBar from "@/components/Taskbar";
import React from "react";

type Props = {};

const Desktop = (props: Props) => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        Desktop
      </div>
      <TaskBar />
    </>
  );
};

export default Desktop;
