import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <label for="title"> Title: </label>
      <input type="text" id="title" name="title" />
      <label for="body"> Body: </label>
      <input type="text" id="body" name="body" />
      <label for="image"> Image: </label>
      <input type="text" id="image" name="image" />
      <div>
        <input type="submit" />
      </div>
    </div>
  );
}

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div>
        <h2>Geese</h2>
        <h5>Totally rad geese out there</h5>
        <img src="https://www.disneyclips.com/images/images/goofy29.png" />
      </div>
      <div>
        <h2>Apples</h2>
        <h5>You get some of those apples form japan?</h5>
        <img src="https://i.ebayimg.com/images/g/obEAAOSwCgleNsl8/s-l640.jpg" />
      </div>
      <div>
        <h2>Rockets</h2>
        <h5>Soon I want to fly on a rocket to the moon</h5>
        <img src="https://imgix.bustle.com/uploads/image/2022/12/19/11ab3211-cadc-4b68-9c7a-e8ee149353e2-shutterstock_editorial_9224659b.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.42&fp-y=0.6127" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
