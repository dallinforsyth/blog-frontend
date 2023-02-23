import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

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

function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
            <h5>{post.body}</h5>
            <img src={post.image} />
          </div>
        );
      })}
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
  let posts = [];
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      posts = response.data;
    });
  };

  // let posts = [
  //   {
  //     id: 1,
  //     title: "Geese",
  //     body: "Totally rad geese out there",
  //     image: "https://www.disneyclips.com/images/images/goofy29.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Apples",
  //     body: "You get some of those apples form japan?",
  //     image: "https://i.ebayimg.com/images/g/obEAAOSwCgleNsl8/s-l640.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Rockets",
  //     body: "Soon I want to fly on a rocket to the moon",
  //     image:
  //       "https://imgix.bustle.com/uploads/image/2022/12/19/11ab3211-cadc-4b68-9c7a-e8ee149353e2-shutterstock_editorial_9224659b.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.42&fp-y=0.6127",
  //   },
  // ];
  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load posts</button>
      <PostsIndex posts={posts} />
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
