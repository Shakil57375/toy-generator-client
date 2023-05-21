import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css"; // Import the CSS file for custom styles

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const sliderRef = useRef(null);

  const play = () => {
    sliderRef.current.slickPlay();
  };

  const pause = () => {
    sliderRef.current.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos='zoom-in' >
      <h2 className=" my-12 text-center text-5xl font-bold font-Marcellus">
        Our Gallery
      </h2>
      <Slider ref={sliderRef} {...settings}>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/free-photo/real-leather-colorful-multi-colour-soccer-ball-green-grass_1232-3039.jpg?size=626&ext=jpg&ga=GA1.1.2093528427.1639985653&semt=ais"
            alt="Image 1"
            className="slider-image h-96 p-3 ml-2 "
          />
        </div>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/free-photo/front-view-new-football-pedestal-with-copy-space_23-2148796899.jpg?w=996&t=st=1684663710~exp=1684664310~hmac=cd193cb29fc555953b9febfc2b0ec6fe69dd46ef7a3442e331216b101000d20a"
            alt="Image 1"
            className="slider-image h-96 p-3 "
          />
        </div>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/free-photo/flat-lay-composition-toys_23-2148144819.jpg?size=626&ext=jpg&ga=GA1.1.2093528427.1639985653&semt=ais"
            alt="Image 1"
            className="slider-image h-96 p-3 "
          />
        </div>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/premium-photo/black-white-soccer-ball-with-shadow-gray-background-3d-render_308595-101.jpg?w=996"
            className="slider-image h-96 p-3 "
          />
        </div>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/free-photo/tennis-bats-with-shuttlecock-ball-yellow-background_23-2148153884.jpg?size=626&ext=jpg&ga=GA1.1.2093528427.1639985653&semt=ais"
            alt="Image 1"
            className="slider-image h-96 p-3 "
          />
        </div>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/free-photo/boy-with-badminton-rackets-outdoors_155003-13781.jpg?size=626&ext=jpg&ga=GA1.2.2093528427.1639985653&semt=ais"
            alt="Image 1"
            className="slider-image h-96 p-3 "
          />
        </div>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/free-photo/yellow-plastic-tennis-racket-shuttlecock-blue-yellow-turquoise-desk_23-2148153947.jpg?size=626&ext=jpg&ga=GA1.1.2093528427.1639985653&semt=ais"
            alt="Image 1"
            className="slider-image h-96 p-3 "
          />
        </div>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/free-photo/football-table-game_1232-2653.jpg?size=626&ext=jpg&ga=GA1.1.2093528427.1639985653&semt=ais"
            alt="Image 1"
            className="slider-image h-96 p-3 "
          />
        </div>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/free-photo/various-sport-tools-grass_93675-128054.jpg?size=626&ext=jpg&ga=GA1.1.2093528427.1639985653&semt=ais"
            alt="Image 1"
            className="slider-image h-96 p-3 "
          />
        </div>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/free-photo/top-view-trucker-hat-with-exercise-equipment_23-2149410063.jpg?size=626&ext=jpg&ga=GA1.1.2093528427.1639985653&semt=ais"
            alt="Image 1"
            className="slider-image h-96 p-3 "
          />
        </div>
        <div className="bg-cyan-600 ">
          <img
            src="https://img.freepik.com/free-photo/still-life-small-decorative-objects-with-vivid-colors_23-2149732875.jpg?size=626&ext=jpg&ga=GA1.2.2093528427.1639985653&semt=ais"
            alt="Image 1"
            className="slider-image h-96 p-3 "
          />
        </div>
      </Slider>
      <div className="mt-10 " style={{ textAlign: "center" }}>
        <button className="btn d-btn mr-5" onClick={play}>
          Play
        </button>
        <button className="btn d-btn" onClick={pause}>
          Pause
        </button>
      </div>
    </div>
  );
};

export default Gallery;
