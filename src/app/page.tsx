import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/e4c6ea06-a245-4239-99cf-229f5bcd08b8-mpr6ue.png",
  "https://utfs.io/f/0979750f-06e7-456a-8b12-8577a2076d7c-dvz9q2.png",
  "https://utfs.io/f/91765690-4d30-47e1-b233-1661ef78c228-wjnh7y.png",
  "https://utfs.io/f/a83002cc-d43b-4360-ad98-9f10d8b22de1-5bohqg.png",
  "https://utfs.io/f/d4ac3d86-baf6-4d81-afda-634df0ea1cb8-i365yn.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
