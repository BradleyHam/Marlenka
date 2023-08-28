import React from 'react';
import { useState } from 'react'
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST);

const Product = () => {

        const [quantity, setQuantity] = useState(1);
      
        const handleIncrease = () => {
          setQuantity(prevQuantity => prevQuantity + 1);
        };
      
        const handleDecrease = () => {
          if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
          }
        };
      
        const handleBuyNow =  async () => {
            const response = await fetch('/api/create-checkout-session', { 
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', // This header specifies that you're sending JSON
                },
                body: JSON.stringify({ quantity }), // Send the quantity data in the body of the request
              });
              if (!response.ok) {
                const errorData = await response.json();
                console.error('Server Error:', errorData.error);
                return; // Return early if there was a server error
              }
            const session = await response.json();
            const stripe = await stripePromise;
        
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              console.error('---',result.error)
            }
        };

        const [bigImageSrc, setBigImageSrc] = useState('/Images/HoneyCakeProductImage2.webp');

        const handleMouseOver = (src) => {
          setBigImageSrc(src);
        };
      
        const smallImages = [
          '/Images/MarlenkaCakeInBox2.jpeg',
          '/Images/MarlenkaBoxBetterQuality.jpg',
          '/Images/HoneyCakeProductImage2.webp',
          '/Images/HoneyCakeProductImage1.webp',
          '/Images/certificationStamps/greatTaste.png'
        ];

        

    return (
        <div className='bg-[#f3dcaa24] px-4 sm:px-8 md:px-16 lg:px-32 flex flex-row pt-28 py-20'>
              <div className="content flex flex-col items-center md:items-start md:flex-row ">
             <div className="images md:w-[40%] flex flex-col  ">
           
                <div className='small-images flex justify-between order-2'>
                    {smallImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className={`${src == bigImageSrc && 'border-2'} w-1/6 object-cover`}
                        alt=""
                        onMouseOver={() => handleMouseOver(src)}
                    />
                    ))}
                </div>
                <img
                    id='bigImage'
                    src={bigImageSrc}
                    className={`${bigImageSrc.includes('HoneyCakeProductImage1') && 'object-cover'} ${bigImageSrc.includes('MarlenkaBoxBetterQuality') && 'object-cover'} object-contain bg-white mt-4  mb-[20px]`}
                    alt=""
                />    
                   
            </div>
                <div className="text-side mt-8 md:mt-0 md:w-[60%]">
                    <div className='md:pl-16 '>
                    <h3>Marlneka Honey Cake</h3>
                    <div className="price">$55</div>
                    <div className="rating flex items-center">
                        <div className="stars flex pr-4">
                            <AiFillStar color='#f3dcaa'/>
                            <AiFillStar color='#f3dcaa'/>
                            <AiFillStar color='#f3dcaa'/>
                            <AiFillStar color='#f3dcaa'/>
                            <AiFillStar color='#f3dcaa'/>
                        </div>
                        <p className="stars-quantity">(4.7 stars) 10 reviews on Amazon</p>
                    </div>
                    <p className="description py-8">MARLENKA® is a traditional honey cake with nuts, made according to an old Armenian family recipe. The secret manufacturing procedure enable us to combine the honey and milk mixture to create this multi-layered honey delicacy. The top is drizzled with chocolate icing and sprinkled with chopped walnuts.</p>

                    <ul className='ml-4 flex flex-col space-y-1'>
                        <li>
                            Unique, rich taste and texture
                        </li>
                        <li>
                            100% Natural Product
                        </li>
                        <li>
                            Contains No Preservatives, Artificial or GM Ingredients, No Alcohol or Animal Fat
                        </li>
                        <li>
                            Extremely long Shelf Life up to 60 days at room temperature from 2 to 24°C
                        </li>
                        <li>
                            Portioning guide: 8 - 16 portions per cake
                        </li>
                    </ul>

                    <form className="space-y-4 flex-1">
                        <div className="flex flex-col ">
                        <label htmlFor="quantity" className="mr-4 text-lg text-secondary-color mt-4">
                            Quantity:
                        </label>

                        <div className="bottom-row flex mt-2">
                        <div className="flex bg-white items-center border-2 rounded-lg text-center w-[100px] py-2">
                        <button
                            type="button"
                            onClick={handleDecrease}
                            className="flex justify-center flex-1  py-1 text-secondary-color rounded-lg"
                        >
                            <AiOutlineMinus/>
                        </button>
                       <div className="flex-1 ">{quantity}</div>
                        <button
                            type="button"
                            onClick={handleIncrease}
                            className="flex-1 flex justify-center py-1 text-secondary-color rounded-lg"
                        >
                           <AiOutlinePlus/>
                        </button>
                        </div>
                        <button  type="button"
                                         onClick={handleBuyNow} 
                                         className='mr-2 text-secondary-color bg-secondary-color text-white py-2 px-4 rounded uppercase ml-4'>
                                          buy now
                                </button>
                        </div>
                        </div>                 
                </form>
                </div>
                </div>
              </div>
        </div>
    )
}

export default Product

// <div className='bg-[#f3dcaa24] px-4 sm:px-8 md:px-16 lg:px-32 flex flex-row pt-28 py-20'>
//   <div className="content flex relative">
//     <div className="images w-1/3 flex flex-col relative">
//       <img
//         id='bigImage'
//         src={bigImageSrc}
//         className={`${bigImageSrc.includes('HoneyCakeProductImage1') ? 'object-cover' : ''} ${bigImageSrc.includes('MarlenkaBoxBetterQuality') ? 'object-cover' : ''} object-contain bg-white h-500 mb-20 min-w-500`}
//         alt=""
//       />
//       <div className="small-images flex justify-between">
//         {smallImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             className='h-84 w-84 object-cover'
//             alt=""
//             onMouseOver={() => handleMouseOver(src)}
//           />
//         ))}
//       </div>
//     </div>
//     <div className="text-side w-2/3">
//       <div className='pl-16'>
//         <h3>Marlneka Honey Cake</h3>
//         <div className="price">$55</div>
//         <div className="rating flex items-center">
//           <div className="stars flex pr-4">
//             <AiFillStar color='#f3dcaa'/>
//             <AiFillStar color='#f3dcaa'/>
//             <AiFillStar color='#f3dcaa'/>
//             <AiFillStar color='#f3dcaa'/>
//             <AiFillStar color='#f3dcaa'/>
//           </div>
//           <p className="stars-quantity">(4.7 stars) 10 reviews on Amazon</p>
//         </div>
//         <p className="description py-8">MARLENKA® is a traditional honey cake with nuts, made according to an old Armenian family recipe. The secret manufacturing procedure enables us to combine the honey and milk mixture to create this multi-layered honey delicacy. The top is drizzled with chocolate icing and sprinkled with chopped walnuts.</p>
//         <ul className='ml-4 flex flex-col space-y-1'>
//           {/* List contents here */}
//         </ul>
//         <form className="space-y-4 flex-1">
//           <div className="flex flex-col">
//             {/* Form contents here */}
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
