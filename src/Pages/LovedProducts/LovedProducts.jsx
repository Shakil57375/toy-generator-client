import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const LovedProducts = () => {
    useEffect(() => {
        AOS.init({
          duration:1200,
        });
      }, []);
  const handleMouseEnter = (event) => {
    event.target.src =
      "https://img.freepik.com/free-photo/sport-arrangement-minimal-style_23-2149006319.jpg?w=360&t=st=1684672198~exp=1684672798~hmac=4c0602bc58f93a8d93586103717c66811b49cf1c693b2bf3cd3fbcc546e777e1";
  };

  const handleMouseLeave = (event) => {
    event.target.src =
      "https://img.freepik.com/free-photo/portrait-girl-holding-badminton-park_23-2147904844.jpg?w=360&t=st=1684676201~exp=1684676801~hmac=43e453c5539b33a94a8c95402463d1ef7e52e569fee3f85abfa2be2f153d129c";
  };
  const handleMouseEnter1 = (event) => {
    event.target.src =
      "https://img.freepik.com/premium-photo/basketball-ball_30824-392.jpg?size=626&ext=jpg&ga=GA1.1.2093528427.1639985653&semt=sph";
  };

  const handleMouseLeave1 = (event) => {
    event.target.src =
      "https://img.freepik.com/premium-photo/little-child-holding-basketball-isolated-orange-background_58409-26044.jpg?size=626&ext=jpg&ga=GA1.2.2093528427.1639985653&semt=ais";
  };

  const handleMouseLeave2 = (event) => {
    event.target.src =
      "https://img.freepik.com/premium-photo/soccer-player-training-with-ball_141188-5657.jpg?size=626&ext=jpg&ga=GA1.2.2093528427.1639985653&semt=ais";
  };
  const handleMouseEnter2 = (event) => {
    event.target.src =
      "https://img.freepik.com/free-photo/soccer-ball-green-grass_1232-3031.jpg?size=626&ext=jpg&ga=GA1.2.2093528427.1639985653&semt=sph";
  };

  return (
    <div data-aos='zoom-in'>
      <h1 className="text-5xl text-center mb-16 mt-28 font-bold font-Marcellus">
        You will love this
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-48">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
          <div className="relative">
            <img
              className="w-full h-[600px]"
              src="https://img.freepik.com/free-photo/portrait-girl-holding-badminton-park_23-2147904844.jpg?w=360&t=st=1684676201~exp=1684676801~hmac=43e453c5539b33a94a8c95402463d1ef7e52e569fee3f85abfa2be2f153d129c"
              alt="Product"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <div className="absolute top-0 left-0 bg-red-500 text-white py-1 px-2 rounded-tl">
              30% off
            </div>
          </div>
          <div className="px-4 py-3">
            <h3 className="text-2xl font-bold text-center text-gray-900">
              Best Badminton Rackets
            </h3>
            <div className="flex justify-center gap-2 items-center mt-2">
              <span className="text-gray-600 text-sm line-through">$11.99</span>
              <span className="text-cyan-600 text-sm font-semibold">$5.99</span>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
          <div className="relative">
            <img
              className="w-full h-[600px]"
              src="https://img.freepik.com/premium-photo/little-child-holding-basketball-isolated-orange-background_58409-26044.jpg?size=626&ext=jpg&ga=GA1.2.2093528427.1639985653&semt=ais"
              alt="Product"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            />
            <div className="absolute top-0 left-0 bg-red-500 text-white py-1 px-2 rounded-tl">
              14% off
            </div>
          </div>
          <div className="px-4 py-3">
            <h3 className="text-2xl font-bold text-bold text-center text-gray-900">
              Basketball
            </h3>
            <div className="flex justify-center gap-2 items-center mt-2">
              <span className="text-gray-600 text-sm line-through">$15.99</span>
              <span className="text-cyan-600 text-sm font-medium">$9.99</span>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
          <div className="relative">
            <img
              className="w-full h-[600px]"
              src="https://img.freepik.com/premium-photo/soccer-player-training-with-ball_141188-5657.jpg?size=626&ext=jpg&ga=GA1.2.2093528427.1639985653&semt=ais"
              alt="Product"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            />
            <div className="absolute top-0 left-0 bg-red-500 text-white py-1 px-2 rounded-tl">
              10% off
            </div>
          </div>
          <div className="px-4 py-3">
            <h3 className="text-2xl font-bold text-center text-gray-900">
              Football
            </h3>
            <div className="flex justify-center gap-2 items-center mt-2">
              <span className="text-gray-600 text-sm line-through">$34.99</span>
              <span className="text-cyan-600 text-sm font-semibold">
                $29.99
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovedProducts;
