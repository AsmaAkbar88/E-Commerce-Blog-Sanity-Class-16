import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Item {
 
  productName: string;
    price: number;
    image: any
  };


export default async function Home() {
  const query =`*[_type == 'product']{
 image {
    asset -> {
      _ref,
      url
    }
  },
    price,
    productName,
      description
}`;
const data: Item[] = await client.fetch(query)
  return (
    <div>
      <section className="flex gap-4 overflow-x-scroll">
        {data.map((item: Item , index) => {
                   console.log(item); 
          return (
            <div className=" gap-4 items-center" key={index}>
               

              {/* Image Section */}
        <div className="  relative">
        <Image
        src={item.image?.asset?.url} 
        alt={item.productName}
        width={300} 
        height={300} 
        className="object-cover rounded"
      />
        </div>
        <div>
              <h1 className="text-xl font-bold max-w-xs mx-aut pt-4">{item.productName}</h1>
              <p className="text-slate-400 pt-4">${item.price}</p>
            </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
