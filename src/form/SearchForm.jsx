export const SearchForm = () => {
  return (
    <form action="">
      <input type="text" />
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("YOU SEARCH");
        }}
      >Search</button>
    </form>
  );
};
