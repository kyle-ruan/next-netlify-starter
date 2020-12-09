import { PostListItem } from '@components/posts/PostListItem';
import fetch from 'cross-fetch';

const Posts = ({ posts }) => {
  return (
    <div className="container">
      <h1>Post List</h1>
      {posts.map(post => <PostListItem key={post.id} post={post} />)}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts = await res.json();

  return {
    props: { posts }
  }
}

export default Posts;