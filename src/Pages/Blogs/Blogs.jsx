import { useTitle } from "../../CustomHook/CustomHook";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Blogs = () => {
    useTitle("Blogs")
    useEffect(() => {
        AOS.init({
          duration:1200,
        });
      }, []);
    return (
        <div data-aos='zoom-in'>
           <p>Blogs are coming</p> 
        </div>
    );
};

export default Blogs;