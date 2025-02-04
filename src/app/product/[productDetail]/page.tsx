


  


export default async function ProDetail(props: { params: { productDetail: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.productDetail}`);
  const post = await res.json();
  console.log(post);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white border shadow-lg w-80 sm:w-96 p-6 rounded-lg text-center">
        <h1 className="text-3xl font-extrabold text-blue-600 ">PRODUCT DETAIL</h1>
        <p className="mt-5 text-lg font-medium text-gray-700">
          <span className="font-bold text-blue-500">ID:</span> {post.id}
        </p>
        <p className="mt-3 text-gray-600">{post.body}</p>
      </div>
    </div>
  );
}




