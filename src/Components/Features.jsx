import features from "../assets/features.jpg";
import background from "../assets/background.png";
const Features = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
            }}
            className="text-white pb-10"
        >
            <h1 className="text-center pt-8 mb-8 text-4xl font-bold">Our Features</h1>
            <div className="relative flex bg-clip-border rounded-xl w-full lg:px-24 mx-auto flex-col md:flex-row justify-center items-center">
                <div className="relative w-1/2 m-0 overflow-hidden text-gray-700 rounded-r-none bg-clip-border sm:rounded-xl shrink-0">
                    <img
                        src={features}
                        alt="card-image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6 text-start my-auto w-1/2">
                    <p className="block mb-8 font-sans text-pretty  font-semibold leading-relaxed ">
                        A gaming convention is a gathering centered on role-playing games,
                        collectible card games, miniatures wargames, board games, video
                        games, or other types of games. These conventions are typically two
                        or three business days long, and often held at either a university
                        or in a convention center hotel.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
