import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function ProductPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store', // Fresh data fetch karega
  });

  const posts: Post[] = await res.json(); // Correct type use karein

  return (
    <div className="flex flex-col items-start font-bold space-y-4 text-xl mt-4 pl-7">
      <h1 className="font-extrabold text-3xl">PRODUCT PAGE</h1>
      {posts.map((item, i) => (
        <div key={item.id}>
          <ul>
            <li>
              <Link href={`/product/${item.id}`}>
                {i + 1}: {item.title}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}



