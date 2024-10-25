import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Industries from "./Industries";
import NextStep from "./NextStep";
import Content from "./Content";
import Advantage from "./Advantage";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
       <Helmet>
        <title>Home | Draco Holding</title>
      </Helmet>
      <Navbar />
      <Header />
      <Content />
      <Advantage/>
      <Industries/>
      <NextStep/>
      <Footer />
    </>
  );
}

export default Home;
