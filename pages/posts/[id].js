const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
    </div>
  )
}


export async function getServerSideProps(props) {
  const postId = props.query.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  const post = await res.json();

  return { props: { post }}
}

export default Post;