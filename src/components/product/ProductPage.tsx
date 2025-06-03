'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Heading from '../ui/Heading';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Text from '../ui/Text';
import Button from '../ui/Button';
import { useCart } from '@/src/app/(customer)/layout';
import CartDrawer from '../cart/Cart';


export default function ProductPage() {
  const { handle } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const [selectedVariant, setSelectedVariant] = useState(null);

  const [images, setImages] = useState ([]);

  const [loading, setLoading] = useState(true);

  const {addToCart, cartItems, clearCart, removeFromCart, cartOpen, setCartOpen} = useCart()
 
console.log('Cart Items:', cartItems);
// inside your component:
useEffect(() => {
  async function fetchProduct() {
    try {
      const res = await axios.get(`/api/shopify/product/${handle}`);
      setProduct(res.data);
      console.log('Product fetched:💚', res.data); 
      
      
      const mappedImages = res.data.images.edges.map(({ node }) => ({
        original: node.url,
        thumbnail: node.url,
        description: node.altText || '',
      }));
      setImages(mappedImages);




    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.message || 'Product not found');
      } else {
        setError('An unknown error occurred');
      }
    }
  }

  if (handle) {
    fetchProduct();
  }
}, [handle]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

























  return (
    <div className='w-full flex flex-row max-xl:flex-col justify-center  items-start gap-16 py-20    bg-[#36A6DE]'>

         
<div className="w-full max-w-2xl   p-4  ">
  <ImageGallery
  
    items={images}
    showPlayButton={false}
    showFullscreenButton={true}
    showThumbnails={true}
    slideDuration={450}
    autoPlay={false}
    thumbnailPosition="left"
    showNav={false}
    showBullets={false}
    showIndex={true}
    useBrowserFullscreen={true}
    onError={() => console.error('Error loading image')}
    onImageLoad={() => setLoading(false)}
    onSlide={(index) => console.log('Slide changed to:', index)}
    renderItem={(item) => (
      <div className="w-full h-[500px] flex justify-center items-center border-black border-2 rounded-lg  bg-white/60  overflow-hidden p-16">
        <img
          src={item.original}
          alt={item.description}
          className="w-full h-full object-contain rounded-lg "
        />
      </div>
    )}
  />
</div>



        <div className=' flex flex-col justify-start items-start gap-6'>
          <Heading size='sm' className='text-2xl font-bold'>{product.title}</Heading>
          <div className='w-full flex flex-row justify-start items-start gap-2'>
            <Text className="text-sm text-black mb-1">Rating</Text>
              <div className=" flex justify-center gap-1">
                {Array.from({ length: product?.rating || 5 }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
          </div>

          <div className='w-full flex flex-row justify-start items-center gap-4'>

            <Text className='text-lg font-semibold'>
              Price 
            </Text>

            <h3  className=' text-2xl font-semibold'>
             ${selectedVariant ? selectedVariant.price.amount : product.variants.edges[0].node.price.amount} 
            </h3>


                <p>Inclusive of VAT</p>


          </div>





          {/* <p className='text-lg'>{product.description}</p> */}
          
          <h2 className='text-xl font-semibold'>Choose Your Bundle & Save!</h2>
          <ul className='list-none flex flex-row justify-start items-start gap-4 flex-wrap '>
            {product.variants.edges.map(({ node }, index) => (
              <li key={node.id} onClick={() => setSelectedVariant(node)} className={`relative cursor-pointer h-full flex flex-col justify-center items-center   gap-2  border-2 border-gray-300 p-4 rounded-lg hover:bg-white/50 duration-200 transition-all ${selectedVariant?.id === node.id ? 'bg-white/50 border-gray-800' : 'bg-white/10'}`}>
                {/* {node.title} - {node.price.amount} {node.price.currencyCode} */}


                


                  <img
                  src={node.image?.url || product.images.edges[0]?.node.url}
                  alt={node.image?.altText || product.images.edges[0]?.node.altText}
                  width={50}
                  className='ml-2 inline-block'
                />

                <Heading size='xs'>{node.title}</Heading>

                <Text size='lg' color='white'>${node.price.amount}</Text>

                {node.compareAtPrice && (
                  <Text size='base' className='line-through text-gray-700'>
                    ${node.compareAtPrice.amount}
                  </Text>
                )}


                {
                  index === 2 && (
                    <span className='absolute -top-3 right-[50%] translate-x-[50%] bg-yellow-500 text-white px-4 py-1 rounded-full text-xs'>
                      Best Value
                    </span>
                  )
                }
                {/* <img
                  src={'/images/bestValue.png'}
                  alt='Best Value'
                  className='absolute -top-[18%] right-0 w-full  '
                /> */}

                

              </li>
            ))}
          </ul>




              <div>



                <img
                  src='/images/ppp.png'
                  alt='Satisfaction Guarantee'
                  className='w-full h-auto mt-4'
                />





              </div>







              <div className='w-full flex flex-row justify-start items-end gap-5 py-2'>

              <div className='  flex flex-col justify-start items-start gap-2'>
                <Text className='text-sm text-gray-700 mb-2'>Quantity</Text>
                <input
                  type='number'
                  defaultValue={1}
                  min={1}
                  className='w-24 border border-gray-300 rounded-md p-2'
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    if (value < 1) {
                      e.target.value = '1';
                    }
                  }}
                />
              </div>




               
              <button onClick={() => addToCart(product, selectedVariant)}  className='w-full bg-white text-black hover:bg-gray-200 border border-black  py-4 cursor-pointer rounded-lg'>Add to Cart</button>
            </div>

        </div>





          

          


    </div>
  );
}





























  //  <div>
  //     <h1>{product.title}</h1>
  //     <p>{product.description}</p>
  //     <img
  //       src={product.images.edges[0]?.node.url}
  //       alt={product.images.edges[0]?.node.altText}
  //       width={300}
  //     />
  //     <h2>Variants</h2>
  //     <ul>
  //       {product.variants.edges.map(({ node }) => (
  //         <li key={node.id}>
  //           {node.title} - {node.price.amount} {node.price.currencyCode}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>