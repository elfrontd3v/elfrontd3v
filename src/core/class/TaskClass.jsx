import React from "react";

class TaskClass extends React.Component {
  constructor(task) {
    super(task);
    this.state = {
      id: task.id ? task.id : "",
      title: task.title ? task.title : "",
      state: task.state ? task.state : true,
      date: task.date ? task.date : Date.now(),
    };
  }
}

export default TaskClass;
