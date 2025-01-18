import { client } from "@/sanity/lib/client";
import Blogpage from "./components/blogpage";
import { bebasNeue } from "./UI/fonts";

interface Item {

  productName: string;
  price: number;
  image: any,
  description: string
};
export default async function Home() {
  const query = `*[_type == 'product']{
  image{
  asset ->
  {
  _ref,
  url
  }
  },
   price, description, productName
}`;
  const products: Item[] = await client.fetch(query)
  return (
    <div>
<div className={` ${bebasNeue.className} flex justify-center font-bold text-5xl pt-8 pb-8`}> Belog Website Dress</div>
      <section className="flex gap-4 overflow-x-scroll">
        
        {products.map((item: Item ,index) => {
           console.log(item); 
          return (
            <div  key={index}>
              
            <Blogpage item={item}/>
            

             {/* <div className=" gap-4 items-center mb-4" key={index}> */}
              {/* Image Section */}
              {/* <div className="  relative">
                <Image
                  src={item.image?.asset?.url}
                  alt={item.productName}
                  width={300}
                  height={300}
                  className="object-cover rounded"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold max-w-xs mx-aut pt-4">
                {item.productName}</h1>
                <p className="text-slate-400 pt-4">${item.price}</p>
                <p className="pt-4 text-orange-900 font-bold">{item.description}</p>
              </div> */}
              
            </div> 
          );
        })}
      </section>
      
    </div>
  );
}
