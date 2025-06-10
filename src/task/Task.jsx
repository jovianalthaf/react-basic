import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
const Task = () => {
  const [items, setItems] = useImmer([]);

  const handleSubmit = (item) => {
    setItems((draft) => {
      draft.push(item);
    });
  };
 
  const handleDelete = (index) => {
    setItems((draft) => {
      draft.splice(index, 1);
    });
  };
  return (
    <div>
      <h1>Create Task</h1>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList items={items} onDelete={handleDelete} />
    </div>
  );
};

export default Task;
