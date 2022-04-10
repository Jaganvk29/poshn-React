import React, { useContext } from "react";
import AdminNav from "./components/Nav/AdminNav";
import Nav from "./components/Nav/Nav";
import Pages from "./Pages";
import ScrollToTop from "./ScrollToTop";
import PoshContext from "./PoshContext";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { isLogged, authHandler } = useContext(PoshContext);

  return (
    <div>
      {isLogged ? <AdminNav /> : <Nav />}
      <ScrollToTop />
      <Pages />
      <Footer />
    </div>
  );
};

export default App;
