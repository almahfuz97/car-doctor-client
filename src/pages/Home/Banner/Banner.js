import React from 'react'
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'
import BannerItem from './BannerItem'

const bannerData = [
    {
        id: 1,
        img: img1,
        prev: 6,
        next: 2,
    },
    {
        id: 2,
        img: img2,
        prev: 1,
        next: 3,
    },
    {
        id: 3,
        img: img3,
        prev: 2,
        next: 4,
    },
    {
        id: 4,
        img: img4,
        prev: 3,
        next: 5,
    },
    {
        id: 5,
        img: img5,
        prev: 4,
        next: 6,
    },
    {
        id: 6,
        img: img6,
        prev: 5,
        next: 1,
    },
]

export default function Banner() {
    return (
        <div className="carousel w-full">

            {
                bannerData.map(data => <BannerItem key={data.id} data={data} />)
            }

            {/* <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
           */}

        </div>
    )
}
