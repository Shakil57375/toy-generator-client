const Banner = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse  gap-10 items-center justify-between pb-10 px-6 md:pb-16 md:px-12 lg:px-10">
        <div className="w-full md:w-1/2 lg:w-5/12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-Marcellus mb-4">
          SportyKidz
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold font-Marcellus  mb-4">
            Find Your Perfect Sports Toy
          </h2>
          <p className="font-Poppins text-base ">
            Welcome to SportyKidz! We offer a wide range of sports toys
            for kids of all ages. Whether you are looking for soccer balls,
            basketball hoops, or tennis racquets, we have it all. Explore our
            collection and let the games begin!
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-7/12 mt-8 md:mt-0">
          <img src={"https://i.ibb.co/Hgx33mg/child-toy-play-cartoon-png-favpng-Qna97h1-KHc-Cd-NMd5-Srgi-Qykfw-removebg-preview.png"} alt="Banner" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
