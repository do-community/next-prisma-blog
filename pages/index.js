export default function Home({ posts }) {
  return (
    <div className="app">
      <h1>Welcome to our blog!</h1>

      {/* loop over the posts */}
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <h1>{post.title}</h1>
          <button onClick={() => like(post.id)}>❤️ {likes}</button>
        </div>
      ))}
    </div>
  );
}

/**
 * Go get all posts on the server
 */
export async function getStaticProps() {
  const posts = [{ title: "My First Post" }];

  return { props: { posts } };
}
