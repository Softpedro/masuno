// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import slide1 from "../../assets/images/slider1.png"
import slide2 from "../../assets/images/slider2.png"
import slide3 from "../../assets/images/slider3.png"
import { Container } from "../Styled/Components";
import iconStars from "../../assets/images/icon_stars.svg"

const data = [
  {
    title: 'PHP',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.',
    link: 'URL1',
    image: slide1
  },
  {
    title: 'Flutter',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.',
    link: 'URL2',
    image: slide2
  },
  {
    title: 'Diseño UX/UI',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.',
    link: 'URL3',
    image: slide3
  }
]
const Slider = () => {
  return (
    <div className="mt-[60px]">
      <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
        {data.map(( item, index ) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[590px] flex items-center">
              <div className="absolute w-1/2 h-full top-0 right-0">
                <img src={item.image} className="absolute inset-0 w-full h-full object-cover object-center" alt="" />
              </div>
              <Container>
                <div className="flex w-full  h-full">
                  <div className="w-1/2 pl-[90px]">
                    <img src={iconStars} className="mb-5" alt="" />
                    <h5 className="text-red font-extrabold text-[32px]">{item.title}</h5>
                    <p className="max-w-[490px] text-[18px]">{item.description}</p>
                    <a href={item.link} className="bg-blueDark w-[240px] h-[56px] flex items-center justify-center text-white mt-10 rounded-md">Ver tecnología</a>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
