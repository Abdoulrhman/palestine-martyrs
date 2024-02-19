import Header from "../../components/header";
import "./index.scss";
import avatar from "../../assets/images/avatar.jpg";
import HomeTemplate from "./components/home-template";

const Home = () => {
  const cardData = [
    {
      title: "Hala nihad",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: avatar,
      deathDate: " 2 Dec 2023",
      deathPlace: "gaza",
      age: 18,
    },
    {
      title: "Title 2",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: avatar,
      deathDate: " 2 Dec 2023",
      deathPlace: "gaza",
      age: 18,
    },
    {
      title: "Muhamed",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: avatar,
      deathDate: " 2 Dec 2023",
      deathPlace: "gaza",
      age: 18,
    },

    {
      title: "ahmed",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: avatar,
      deathDate: " 2 Dec 2023",
      deathPlace: "gaza",
      age: 18,
    }, {
      title: "Title 2",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: avatar,
      deathDate: " 2 Dec 2023",
      deathPlace: "gaza",
      age: 18,
    }, {
      title: "Title 2",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: avatar,
      deathDate: " 2 Dec 2023",
      deathPlace: "gaza",
      age: 18,
    }, {
      title: "Title 2",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: avatar,
      deathDate: " 2 Dec 2023",
      deathPlace: "gaza",
      age: 18,
    }, {
      title: "Title 2",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: avatar,
      deathDate: " 2 Dec 2023",
      deathPlace: "gaza",
      age: 18,
    },
  ];

  return (
    <>
      <Header />

      <HomeTemplate cards={cardData} />
    </>
  );
};

export default Home;
