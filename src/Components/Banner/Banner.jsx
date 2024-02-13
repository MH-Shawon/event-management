import banner2 from "../../assets/banner2.png"
const Banner = () => {
    return (
        <div className="max-w-full py-8 mx-auto">
            <div
                className="relative overflow-hidden text-gray-700 bg-white shadow-md rounded bg-clip-border">
                <img alt="nature" className="w-full object-cover object-center"
                    src={banner2} />
            </div>
        </div>
    );
};

export default Banner;