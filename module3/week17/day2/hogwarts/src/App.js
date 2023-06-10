import "./App.css";
import House from "./components/House";
import harryImg from "./assests/hp.png";
import ronImg from "./assests/ron.png";
import herImg from "./assests/her.png";

function App() {
  const gryffindorHouse = [
    {
      house: "Gryffindor",
      name: "Harry",
      muggle: true,
      img: harryImg,
    },
    {
      house: "Gryffindor",
      name: "Ron",
      muggle: false,
      img: ronImg,
    },
    {
      house: "Gryffindor",
      name: "Hermione",
      muggle: true,
      img: herImg,
    },
  ];
  const ravenclawHouse = [
    {
      house: "Ravenclaw",
      name: "Rowena",
      muggle: false,
    },
    {
      house: "Ravenclaw",
      name: "Luna",
      muggle: true,
    },
  ];
  return (
    <>
      <h1>Hogwarts</h1>
      <House studentsArr={gryffindorHouse} />
      <House studentsArr={ravenclawHouse} />
    </>
  );
}

export default App;
