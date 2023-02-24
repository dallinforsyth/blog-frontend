export function PostsNew() {
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
