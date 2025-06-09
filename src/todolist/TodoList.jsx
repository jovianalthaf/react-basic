import { Todo } from "./Todo";

export const TodoList = () => {
  const data = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      id: 1,
      text: "Learn JAVASCRIPT",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Learn REACT",
      isCompleted: false,
    },
  ];
  //   const todos = data.map((todo) => {
  //     // <Todo text={todo.text} isCompleted={todo.isCompleted}/>
  //     return <Todo key={todo.id} {...todo} />;
  //   });
  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
