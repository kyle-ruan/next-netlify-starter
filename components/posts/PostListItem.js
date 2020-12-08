import Link from 'next/link';

const PostListItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <a>{post.title}</a>
    </Link>
  )
}

export { PostListItem };
