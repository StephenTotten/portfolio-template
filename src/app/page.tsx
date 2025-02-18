import Image from "next/image";

const photos = [
  { src: "/photo1.jpg", alt: "Photo 1" },
  { src: "/photo2.jpg", alt: "Photo 2" },
  { src: "/photo3.jpg", alt: "Photo 3" },
  // Add more photos as needed
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Photo Portfolio</h1>
        <p className="text-lg text-gray-600">Showcasing my best work</p>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </main>
    </div>
  );
}
