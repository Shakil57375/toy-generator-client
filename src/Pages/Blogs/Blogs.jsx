import { useTitle } from "../../CustomHook/CustomHook";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Blogs = () => {
  useTitle("Blogs");
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div data-aos="zoom-in">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <h2 className="font-Montserrat text-2xl font-bold px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <div className="p-6">
            <p className="text-gray-800 font-Poppins">
              <span className="font-bold text-xl">Answer:</span> Access tokens are credentials used to access protected resources.
              A refresh token is a special tokes it used to unlock more access
              tokens. A refresh token always checks the user credentials to
              enter their information. The access token checks the refresh tokes
              permission and check the user.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <h2 className="font-Montserrat text-2xl font-bold px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
            2. Compare SQL and NoSQL databases?
          </h2>
          <div className="p-6">
            <p className="text-gray-800 font-Poppins">
              <span className="font-bold text-xl">Answer:</span> SQL(Structured Query Language) database are based on table. On
              the other hand noSQL(non Structured Query Language) database are base in documents.SQL database are vertically scalable while noSQL database are horizontally scalable.SQL database are the best to use in complex website. But noSQL database are not so good for complex websites.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <h2 className="font-Montserrat text-2xl font-bold px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
            3. What is express js? What is Nest JS ?
          </h2>
          <div className="p-6">
            <p className="text-gray-800 font-Poppins">
              <span className="font-bold text-xl">Answer:</span> express.js is a node.js framework. Which usually use to make single page applications we can use pure js on express js. It is a layer built on the top of the Node js. express js helps to mange servers and routes. On the other hand Next.js is a framework of react js which makes react more powerful and give it more capability and made it more developer friendly. If you use Next.js you can route from the server side and as well as from the client side. So, by using next.js make routes more efficiently.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <h2 className="font-Montserrat text-2xl font-bold px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
            4. What is MongoDB aggregate and how does it work ?
          </h2>
          <div className="p-6">
            <p className="text-gray-800 font-Poppins">
              <span className="font-bold text-xl">Answer:</span> MongoDb aggregate in the most powerful tool that mongoDB offers and it gives the us great instruments to work with our documents in the collections using aggregation framework we can easily group documents and collection by specific conditions we can also add additional fields during grouping such as average fields during grouping such as average total minimum maximum and so on. We can protest documents in our collection in several stages one by one. aggregation results are very fast and you will get results pretty quickly. 
            </p>
          </div>
        </div>

        {/* Add more question-answer pairs as needed */}
      </div>
    </div>
  );
};

export default Blogs;
