export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => {
        return (
          // <div className="posts" key={post.id}>
          //   <h2>{post.title}</h2>
          //   <h5>{post.body}</h5>
          //   <img src={post.image} />
          //   <button onClick={() => props.onShowPost(post)}>More info</button>
          // </div>
          <div className="card my-5">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <p className="card-text"></p>
            </div>
            <img src={post.image} className="card-img-bottom" alt="..." />
          </div>
        );
      })}
    </div>
  );
}
