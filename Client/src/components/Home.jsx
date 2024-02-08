import React from "react";
import css from "src/css/Home.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Person from "src/assets/Person.png";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
const Home = () => {
const data = [
    {
      name: "Arora",
      price: 799.99,
      image: "https://source.unsplash.com/random?tiles",
      brand: "PhotoPros",
      category: "Premium",
      countInStock: 18,
      numReviews: 8,
      description:
        "Capture stunning moments with our Professional DSLR Camera, designed for photographers who demand excellence.",
    },
    {
      name: "Arora Tiles",
      price: 799.99,
      image: "https://source.unsplash.com/random?tiles",
      brand: "PhotoPros",
      category: "Premium",
      countInStock: 18,
      numReviews: 8,
      description:
        "Capture stunning moments with our Professional DSLR Camera, designed for photographers who demand excellence.",
    },
    {
      name: "Arora Tiles",
      price: 799.99,
      image: "https://source.unsplash.com/random?tiles",
      brand: "PhotoPros",
      category: "Premium",
      countInStock: 18,
      numReviews: 8,
      description:
        "Capture stunning moments with our Professional DSLR Camera, designed for photographers who demand excellence.",
    },
    {
      name: "Arora Tiles",
      price: 799.99,
      image: "https://source.unsplash.com/random?tiles",
      brand: "PhotoPros",
      category: "Premium",
      countInStock: 18,
      numReviews: 8,
      description:
        "Capture stunning moments with our Professional DSLR Camera, designed for photographers who demand excellence.",
    },
    {
      name: "Arora Tiles",
      price: 799.99,
      image: "https://source.unsplash.com/random?tiles",
      brand: "PhotoPros",
      category: "Premium",
      countInStock: 18,
      numReviews: 8,
      description:
        "Capture stunning moments with our Professional DSLR Camera, designed for photographers who demand excellence.",
    },
    {
      name: "Arora Tiles",
      price: 799.99,
      image: "https://source.unsplash.com/random?tiles",
      brand: "PhotoPros",
      category: "Premium",
      countInStock: 18,
      numReviews: 8,
      description:
        "Capture stunning moments with our Professional DSLR Camera, designed for photographers who demand excellence.",
    },
    {
      name: "Arora Tiles",
      price: 799.99,
      image: "https://source.unsplash.com/random?tiles",
      brand: "PhotoPros",
      category: "Premium",
      countInStock: 18,
      numReviews: 8,
      description:
        "Capture stunning moments with our Professional DSLR Camera, designed for photographers who demand excellence.",
    },
  ];
  const details = [
    {
      id: 1,
      name: "John Doe",
      position: "Music Enthusiast",
      comment:
        "This music player is a game-changer! The seamless experience and vast music library make it my go-to platform for enjoying music.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Tech Geek",
      comment:
        "As someone who appreciates good design and functionality, this music player exceeded my expectations. It's not just a player; it's an experience!",
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "Casual Listener",
      comment:
        "I'm not a tech-savvy person, but this music player made it easy for me to discover and play my favorite songs. Simple, yet powerful!",
    },
  ];
  return (
    <>
      <div className={css.hero_section}>
        <h1>Welcome to Trendy Styles</h1>
        <span>
          Discover the latest fashion trends and explore your personal style
        </span>
        <button className={css.button}>Shop Now</button>
      </div>

      <div className={css.container1}>
        {details.map((data, i) => {
          return (
            <div className={css.card} key={i}>
              <img src={Person} width="100" alt="" />
              <p className={css.comment}>
                <span className={css.mark}>&ldquo;</span>
                {data.comment}
                <span className={css.mark}>&rdquo;</span>
              </p>
              <h1 className={css.name}>
                {data.name} - {data.position}
              </h1>
            </div>
          );
        })}
      </div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
      >
        {data.map((data, m) => {
          return (
            <SwiperSlide key={m}>
              <div className={css.container}>
                <p className={css.name}>{data.name}</p>
                <p className={css.brand}>Brand {data.brand}</p>
                <p className={css.category}>Category {data.category}</p>
                <p className={css.numReviews}>Reviews : {data.numReviews}</p>
                <p className={css.description}>({data.description})</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Home;

function Negi({}) {
  return (
    <>
      {" "}
      <h1>Welcome to Trendy Styles</h1>
      <span>
        Discover the latest fashion trends and explore your personal style
      </span>
      <button className={css.button}>Shop Now</button>
    </>
  );
}
