import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css"; // Import the CSS file for custom styles

const Gallery = () => {
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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className = "my-12">
      <h2 className=" my-12 text-center text-5xl font-bold font-Marcellus">Our Gallery</h2>
      <Slider className="flex gap-3" ref={sliderRef} {...settings}>
        <div>
          <img src="https://5.imimg.com/data5/PL/HD/MY-28816385/plastic-cricket-bat-500x500.jpg" alt="Image 1" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://static-01.daraz.com.bd/p/41f3ac447fa1dfce73e3c4a65da7a71e.jpg_720x720.jpg_.webp" alt="Image 1" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/41phuNW1hUL.jpg" alt="Image 1" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://static-01.daraz.com.bd/original/69f1f7eb6da9a7254a2b30165f835a06.jpg" alt="Image 1" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://image.smythstoys.com/picture/desktop/128155.jpg" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/51IOEbFXskL._AC_UL600_SR600,600_.jpg" alt="Image 1" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/614EuBf+udS._AC_SL1200_.jpg" alt="Image 1" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/71CzLCQnaOL.jpg" alt="Image 1" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/71lOhlB4S3S._SL1500_.jpg" alt="Image 1" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://ae01.alicdn.com/kf/He3ba8323e42a4d2680282d1781598226J/GAN-Pyramid-M-Enhanced-Core-Positioning-GES-Magnetic-3x3x3-Speed-Cube-Stickerless-3x3-Magic-Cube-Puzzle.jpg_Q90.jpg_.webp" alt="Image 1" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://toybuzz.com.au/wp-content/uploads/2022/02/Intex-Action-Sports-Play-Centre-1.jpg" alt="Image 1" className="slider-image h-64" />
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/toy-sport/q/u/s/mke717727-football-kit-planet-of-toys-original-imaf97tfffenjfsf.jpeg?q=70" alt="Image 1" className="slider-image h-64" />
        </div>
      </Slider>
      <div className="mt-10 "  style={{ textAlign: "center" }}>
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
