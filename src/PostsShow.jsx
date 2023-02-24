export function PostsShow(props) {
  return (
    <div>
      <h2>Title: {props.post.title}</h2>
      <h5>{props.post.body}</h5>
      <img src={props.post.image} />
    </div>
  );
}
