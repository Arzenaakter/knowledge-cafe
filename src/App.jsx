import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import SideCart from "./components/SideCart/SideCart";
import { useState } from "react";
import Question from "./components/QuestionBlog/Question";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [times, setTimes] = useState([]);

  function handleBookmark(blog) {
    const newblog = [...bookmarks, blog];

    setBookmarks(newblog);
  }

  const handleTime = (blog) => {
    const newTime = [...times, blog];

    setTimes(newTime);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="main-container d-md-flex flex-md-row flex-sm-column mt-4 container gap-4">
        <div className="blogs-container col-md-8 ">
          <Blogs
            handleBookmark={handleBookmark}
            handleTime={handleTime}></Blogs>
        </div>
        <div className="sidecart-container col-md-4">
          <SideCart bookmarks={bookmarks} times={times}></SideCart>
        </div>
      </div>
      <Question></Question>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
