
import getAllPosts from "@/lib/getAllPosts";
import MakakImage from "@/public/R.jpg"
import Image from "next/image";


export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main>
      <div>
        Next home ...
        <div className="w-[800px]">
          <Image placeholder="blur" src={MakakImage} alt="makke image" quality={100} />
        </div>
        <div>
          {
            posts.map(post => <div>{post.title}</div>)
            }
        </div>
      </div>
    </main>
  );
}
