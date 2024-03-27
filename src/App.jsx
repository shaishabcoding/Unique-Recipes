import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <header className="lg:container lg:px-20 lg:mx-auto lg:mt-4">
        <Navbar />
        <Banner />
      </header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
