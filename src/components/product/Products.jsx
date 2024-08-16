import React from "react";
import { Link } from "react-router-dom";

const Products = ({ datas }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <span key={index}>&#9733;</span> // Full star
        ))}
        {halfStar && <span>&#9734;</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index}>&#9734;</span> // Empty star
        ))}
      </>
    );
  };

  return (
    <div className="container mx-auto py-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {datas.map((data) => (
        <article
          key={data.id}
          className="flex flex-col border-2 px-4 py-4 rounded-md h-[470px] "
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-[95%] h-[250px]"
          />
          <div>
            <h6 className="text-gray-600 font-montserrat pt-5">
              {data.category}
            </h6>
            <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-default font-bold text-xl">
              {data.title}
            </h1>
            <h5 className="text-gray-600 font-montserrat">${data.price}</h5>
            <div className="text-yellow-300 pb-5">
              Rating: {renderStars(data.rating.rate)}
            </div>
          </div>
          <Link
            className=" bg-black text-white px-5 py-2 rounded-md w-[130px] "
            to={`/products/${data.id}`}
          >
            <button>BUY NOW</button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Products;


// import React from "react";
// import { Link } from "react-router-dom";

// const Products = ({ datas }) => {
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <>
//         {[...Array(fullStars)].map((_, index) => (
//           <span key={index}>&#9733;</span> // Full star
//         ))}
//         {halfStar && <span>&#9733;</span>}
//         {[...Array(emptyStars)].map((_, index) => (
//           <span key={index}>&#9734;</span> // Empty star
//         ))}
//       </>
//     );
//   };

//   return (
//     <div className="container mx-auto py-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
//       {datas.map((data) => (
//         <article
//           key={data.id}
//           className="flex flex-col border-2 px-4 py-4 rounded-md h-[470px]"
//         >
//           <img
//             src={data.image}
//             alt={data.title}
//             className="w-full h-[250px] object-cover"
//           />
//           <div className="flex-1 flex flex-col justify-between">
//             <h6 className="text-gray-600 font-montserrat pt-5">
//               {data.category}
//             </h6>
//             <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-default font-bold text-xl">
//               {data.title}
//             </h1>
//             <h5 className="text-gray-600 font-montserrat">${data.price}</h5>
//             <div className="text-yellow-300 pb-5">
//               Rating: {renderStars(data.rating.rate)}
//             </div>
//             <Link
//               className="bg-black text-white px-5 py-2 rounded-md w-full text-center"
//               to={`/products/${data.id}`}
//             >
//               <button className="w-full">BUY NOW</button>
//             </Link>
//           </div>
//         </article>
//       ))}
//     </div>
//   );
// };

// export default Products;
