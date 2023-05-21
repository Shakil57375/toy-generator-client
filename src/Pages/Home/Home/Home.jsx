import { useTitle } from "../../../CustomHook/CustomHook";
import LovedProducts from "../../LovedProducts/LovedProducts";
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
            <LovedProducts></LovedProducts>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;