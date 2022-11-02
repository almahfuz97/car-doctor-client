import React from 'react'

export default function BannerItem({ data }) {
    return (
        <div id={`slide${data.id}`} className="carousel-item relative w-full">

            <div className='img-gradient'>
                <img src={data.img} className="w-full rounded-lg" />
            </div>
            <div className='absolute left-5 lg:left-20  top-5 lg:top-1/4'>
                <h1 className=' text-white font-bold text-base lg:text-7xl'>
                    Affordable <br className='hidden lg:flex' />
                    Price for Car <br />
                    Servicing
                </h1>
                <p className=' text-white text-xs w-full mt-2 lg:w-3/4 lg:mt-4'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
                <button className="btn btn-xs btn-active btn-secondary mr-4 mt-2 lg:mt-8">Button</button>
                <button className="btn btn-xs btn-outline btn-warning">Warning</button>                </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-20 right-5">
                <a href={`#slide${data.prev}`} className="btn btn-circle bg-orange-600 text-white mr-4">❮</a>
                <a href={`#slide${data.next}`} className="btn btn-circle bg-orange-600 text-white">❯</a>
            </div>

        </div>
    )
}
