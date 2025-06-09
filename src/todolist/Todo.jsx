export const Todo = ({ text, isCompleted, isDelete = false }) => {
  if (isDelete) {
    return null;
  } else {
    return (
      <li>
        {text} {isCompleted && "✅"}
      </li>
    );
  }
};
