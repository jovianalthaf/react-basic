import React from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import "./index.css";
import Counter from "./components/counter";
import Like from "./components/Like";

type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
};

const teachers: Teacher = [
  {
    job: "Dosen",
    name: "Pak Dika",
    year: 1995,
    id: 1,
  },
  {
    job: "IT",
    name: "Jovian",
    year: 2003,
    id: 2,
  },
  {
    job: "Tech Lead",
    name: "PZN",
    year: 1996,
    id: 3,
  },
];

const App = () => {
  return (
    <div style={{ padding: "16px 48px" }}>
      <Header />
      {/* <div style={{ gap: "8px", display: "flex", flexDirection: "row" }}>
        {teachers.map((teacher) => {
          return (
            <ProfileCard
              name={teacher.name}
              year={teacher.year}
              job={teacher.job}
              key={teacher.id}
            />
          );
        })}
      </div> */}
      <Counter />
      <Like />
      <Welcome />
    </div>
  );
};

export default App;
