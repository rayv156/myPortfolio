import Link from "next/link";

export default function MDList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div >
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <h6 className="blog-post" style={{padding: 15}} key={post.slug}>
                <Link href={{ pathname: `/mark/${post.slug}` }}>
                  <a>{post.frontmatter.title}</a>
                </Link>
              </h6>
            );
          })}
      </ul>
    </div>
  );
}
