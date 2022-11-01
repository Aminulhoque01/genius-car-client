import React from 'react';
import './BannerItems.css';

const BannerItems = ({slide}) => {
    const {image, id,prev,next}=slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
            <img src={image} alt='' className="w-full rounded xl"  />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
           <h1 className='text-6xl font-bold text-white'>
            Affordable <br />
            Price for car <br/>
            Servicing

           </h1>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4 w-3/6">
           <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nobis ex magni labore quidem, ipsa optio? Dignissimos dicta earum nesciunt quas suscipit libero delectus error accusamus. Consequuntur, temporibus! Aut, blanditiis!</p>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4 w-2/7 ">
        <button className="btn btn-outline btn-warning mr-3">Warning</button>
        <button className="btn btn-outline btn-error">Error</button>
           
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default BannerItems;