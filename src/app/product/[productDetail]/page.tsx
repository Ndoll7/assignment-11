
  


import { GetServerSideProps } from "next";

interface ProductPageProps {
  params: {
    productDetail: string;
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { productDetail } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${productDetail}`);
  const product = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-700">{product.body}</p>
    </div>
  );
}
