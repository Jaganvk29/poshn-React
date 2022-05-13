import { createContext, useState } from "react";

const PoshContext = createContext();

export function PoshProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);

  const [isLogged, setIsLogged] = useState(false);

  const [blogData, setBlogData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [readBlog, setReadBlog] = useState([]);

  const [surveyuser, setsurveyuser] = useState([]);

  // Survey
  const [isSelected, setisSelected] = useState(false);
  // Survey MODAL
  const surveyselectHandler = function (isopen) {
    setisSelected(isopen);
  };

  // BOOKING MODAL
  const modalHandler = function (expand) {
    setIsOpen(expand);
  };
  // CONTACT MODAL HANDLER

  const contactModalHandler = function (expand) {
    setContactIsOpen(expand);
  };
  // ADMIN LOGIN HANDLER

  const authHandler = function (loggedIn) {
    setIsLogged(loggedIn);
  };

  // BLOG API DATA

  const Blogdatahandler = (userId) => {
    setBlogData(userId);
  };

  // BLOG API IS LOADED ?
  const isloadedhandler = (load) => {
    setLoaded(load);
  };

  // READ BLOG

  const readBloghandler = (userId) => {
    setReadBlog(userId);
  };

  // Survey User ID

  const surveyUserHandler = (userId) => {
    setsurveyuser(userId);
  };

  return (
    <PoshContext.Provider
      value={{
        // BOOKING MODAL
        isOpen,
        modalHandler,
        // CONTACT MODAL HANDLER
        contactIsOpen,
        contactModalHandler,
        // ADMIN LOGIN HANDLER
        isLogged,
        authHandler,
        // BLOG DATA API
        Blogdatahandler,
        blogData,
        // BLOG DATA LOADED ?
        isloadedhandler,
        loaded,

        // READ BLOG FETCH
        readBloghandler,
        readBlog,

        // Surevy User Id
        surveyUserHandler,
        surveyuser,

        // SURVEY
        isSelected,
        surveyselectHandler,
      }}
    >
      {children}
    </PoshContext.Provider>
  );
}

export default PoshContext;
