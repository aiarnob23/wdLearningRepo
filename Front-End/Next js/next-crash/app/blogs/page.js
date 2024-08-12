import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title:"blog 1",
    },
    {
      id: 2,
      title:"blog 2",
    },
    {
      id: 3,
      title:"blog 3",
    },
    {
      id: 4,
      title:"blog 4",
    },
  ]

  return (
    <main>
      <div>
        <h2 className="my-2 text-3xl">Blogs....</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}