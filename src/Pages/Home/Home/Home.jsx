import { useTitle } from "../../../CustomHook/CustomHook";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;