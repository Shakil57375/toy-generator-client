import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    useEffect(() => {
        AOS.init({
          duration:1200,
        });
      }, []);
  return (
    <div data-aos='zoom-in' className="my-16">
      <h1 className="text-5xl my-10 text-center font-Marcellus font-bold">What Our Customer Says</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center px-6 py-4">
          <img
            className="w-16 h-16 object-cover rounded-full border-4 border-cyan-600"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Buyer"
          />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Alena (Housewife)</h3>
            <Rating style={{ maxWidth: 100 }} value= {5} readOnly />
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-800">
          I bought a soccer set for my kids and they absolutely love it! It is great to see them active and having fun outdoors. The toys are durable and safe for kids, which gives me peace of mind. Highly recommend your website to other grandparents!
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center px-6 py-4">
          <img
            className="w-16 h-16 object-cover rounded-full border-4 border-cyan-600"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Buyer"
          />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">John Doe (Teacher)</h3>
            <Rating style={{ maxWidth: 100 }} value= {4} readOnly />
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-800">
          As a physical education teacher, I highly recommend the sports toys from your website. They are not only fun but also educational. My students enjoy using them during our lessons, and it helps make learning sports more engaging and enjoyable.
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center px-6 py-4">
          <img
            className="w-16 h-16 object-cover rounded-full border-4 border-cyan-600"
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Buyer"
          />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Mic (Doctor)</h3>
            <Rating style={{ maxWidth: 100 }} value= {5} readOnly />
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-800">
          My kids absolutely love the sports toys from your website! They spend hours playing with them and it has greatly improved their coordination and teamwork skills. Thank you for providing such high-quality toys!
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Testimonial;
