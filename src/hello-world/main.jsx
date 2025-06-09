import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container";
import HelloWorld from "./HelloWorld";
import { TodoList } from "../todolist/TodoList";
import { Table } from "../table/Table";
import { AlertButton } from "../button/AlertButton";
import { MyButton } from "../button/MyButton";
import { SearchForm } from "../form/SearchForm";
import { SayHelloForm } from "../form/SayHelloForm";
import Counter from "../form/Counter";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld></HelloWorld>
      <TodoList></TodoList>
      <Table />
      <AlertButton text="Click" message="click me" />
      <MyButton text="Click My Button" onSmash={() => alert("U SMASH ME")} />
      <SearchForm />
      <SayHelloForm />
      <Counter />
    </Container>
  </StrictMode>
);
