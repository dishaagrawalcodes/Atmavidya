import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Header />
          <Outlet />
      <Footer />
    </>
  );
};

export default App;
