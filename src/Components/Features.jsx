import featutes from '../assets/features.jpg'

const Features = () => {
    return (
        <div className='mt-8'>
            <h1 className="text-center mb-8 text-4xl font-bold">Our Features</h1>
            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full lg:px-24 mx-auto flex-row">
                <div
                    className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img
                        src={featutes}
                        alt="card-image" className="object-cover w-full h-full" />
                </div>
                <div className="p-6 my-auto">

                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">

                    </h4>
                    <p className="block mb-8 font-sans text-pretty  font-semibold leading-relaxed text-gray-700">
                        A gaming convention is a gathering centered on role-playing games, collectible card games, miniatures wargames, board games, video games, or other types of games. These conventions are typically two or three business days long, and often held at either a university or in a convention center hotel.
                    </p>

                </div>
            </div>
        </div>

    );
};

export default Features;