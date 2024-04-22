const mockUrls = [
  "https://utfs.io/f/e4c6ea06-a245-4239-99cf-229f5bcd08b8-mpr6ue.png",
  "https://utfs.io/f/0979750f-06e7-456a-8b12-8577a2076d7c-dvz9q2.png",
  "https://utfs.io/f/91765690-4d30-47e1-b233-1661ef78c228-wjnh7y.png",
  "https://utfs.io/f/a83002cc-d43b-4360-ad98-9f10d8b22de1-5bohqg.png",
  "https://utfs.io/f/d4ac3d86-baf6-4d81-afda-634df0ea1cb8-i365yn.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
