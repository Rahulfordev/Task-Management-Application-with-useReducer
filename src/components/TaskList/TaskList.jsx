import { useContext } from "react";
import { Context } from "../../Context/Context";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  const { tasks } = useContext(Context);
  return (
    <div>
      {tasks.length > 0 ? (
        <div>
          <ul>
            {tasks.map((task) => (
              <TaskItem key={task.id} taskItem={task} />
            ))}
          </ul>
        </div>
      ) : (
        <h2>No task added yet</h2>
      )}
    </div>
  );
};

export default TaskList;
