export function PostsIndex(props) {
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
            <button onClick={props.onShowPost}>More info</button>
          </div>
        );
      })}
    </div>
  );
}
