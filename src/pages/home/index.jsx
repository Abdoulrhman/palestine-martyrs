import Header from "../../components/header";
import CardContainer from "./components/cards_section";
import "./index.scss";
import avatar from '../../assets/images/avatar.jpg'

const Home = () => {
  const cardData = [
    {
      title: "Hala nihad",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: avatar,
      deathDate: " 2 Dec 2023",
      deathPlace: "gaza",
      age: 18
    },
    {
      title: "Title 2",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: avatar,
      deathDate: " 2 Dec 2023",
      deathPlace: "gaza",
      age: 18
    },

  ];
  const martyrs = [
    {
      imageUrl: "https://via.placeholder.com/150",
      location: "Description 1",
      name: "Test",
      date: "Date 1",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      location: "Description 2",
      name: "Test",
      date: "Date 2",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      location: "Description 3",
      name: "Test",
      date: "Date 3",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      location: "Description 4",
      name: "Test",
      date: "Date 4",
    },

    {
      imageUrl: "https://via.placeholder.com/150",
      location: "Description 5",
      name: "Test",
      date: "Date 5",
    },
  ];
  return (
    <>
      <Header />
      <CardContainer cards={cardData} />
    </>
  );
};

export default Home;
