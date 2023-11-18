import image from "./data";
import "./input.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const HeroPage = () => {
  return (
    <main>
      <div className="heropage max-[640px]:flex justify-center flex-col">
        <div className="hero__text">
          <h1 className="font-black text-5xl sm:text-3xl lg:text-5xl">
            MUMMY <br />
            OF IBCITY
          </h1>
          <div className="hero__info flex gap-4">
            <p className="text-sm sm:text-base lg:text-lg">
              28 December 2023 <span>|</span> Drama, Fantasy
            </p>
          </div>
        </div>

        <div className="the__story flex py-3 gap-1 max-[640px]:flex-col">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl w-[15rem]">
            The Story
          </h2>
          <div className="text min-[640px]:w-[30vw] max-[640px]:w-[70vw] px-1 story">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At sequi
              fugiat, iste voluptates similique repellendus repellat modi
              tempora dolor nesciunt. Temporibus ipsum sit dignissimos
              consequuntur nobis non adipisci debitis recusandae.
            </p>
            <a>
              <p>Read more</p>
            </a>
          </div>
        </div>

        <div className="carousel w-full max-[640x]:flex justify-center">
          <Swiper
            className="max-[640x]:flex justify-center"
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              660: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{
              disableOnInteraction: false,
            }}
          >
            {image.map((data, index) => (
              <SwiperSlide key={index}>
                <img src={data.imageUrl} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default HeroPage;
