import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footera/Footer";
import Header from "./components/Headera/Header";
import Home from "./components/home/Home";
import ScrollUp from "./components/scrollup/ScrollUp";
import Project from "./components/Project/Project";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Experience />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <ToastContainer />
    </>
  );
}

export default App;
