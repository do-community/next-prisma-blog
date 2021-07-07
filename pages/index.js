import { PrismaClient } from "@prisma/client";

export default function Home({ posts }) {
  return (
    <div className="app">
      <h1>Welcome to our blog!</h1>

      {/* loop over the posts here 👇 */}
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

/**
 * Go get all posts on the server-side
 */
export async function getStaticProps() {
  // we are getting data directly here
  // const posts = [
  //   { id: 1, title: "Hello World", content: "Welcome to our blog!" },
  // ];

  // but we want to get it from a database!
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({});
  return { props: { posts } };
}
