import Accessories from "./Accessories/Accessories";
import Banner from "../Banner/Banner";
import Features from "../Features";
import Games from "../Games/Games";


const Home = () => {
    return (
        <div>
            <Banner />
            <Games />
            <Features />
            <Accessories />
        </div>
    );
};

export default Home;