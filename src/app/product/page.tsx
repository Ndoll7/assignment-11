
import Link from 'next/link'

export default async function product(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
     const posts= await res.json()
    
  return (
    <div className='flex flex-col items-start text-bold space-y-4 text-xl mt-4 pl-7'>
      <h1 className='font-extrabold text-3xl'>PRODUCT PAGE</h1>
    {
        posts.map((item:any,i:number)=>{
          return(
            <div key={item.id} >
                <ul>
                    <li>
                        <Link href={`/product/${item.id}`}>{i+1}:{item.title}</Link>
                    </li>
                </ul>
            </div>
          )
        })
    }
    </div>
  )
}


