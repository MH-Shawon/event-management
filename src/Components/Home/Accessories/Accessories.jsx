import mouse from '../../../assets/accessories/gaming-mouse.jpg'
import keyboard from '../../../assets/accessories/keyboad.jpg'
import controller from '../../../assets/accessories/controller.jpg'

const Accessories = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-violet-500'>
            <h3 className='text-center pt-10 font-bold text-4xl text-white'>Take Your Accessories</h3>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-3 lg:px-20'>

                <div
                    className="relative grid h-3/4 w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center mt-10 text-gray-700">
                    <div
                        style={{
                            backgroundImage: `url(${controller})`
                        }}
                        className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative py-32 md:px-12">
                        <h2 className=" font-sans text-4xl font-medium text-white antialiased">
                            Controller
                        </h2>
                    </div>
                </div>
                <div
                    className="relative grid h-3/4 w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center mt-10 text-gray-700">
                    <div
                        style={{
                            backgroundImage: `url(${mouse})`
                        }}
                        className="absolute inset-0 m-0 w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            Gaming Mouse
                        </h2>


                    </div>
                </div>  <div
                    className="relative grid h-3/4 w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center mt-10 text-gray-700">
                    <div
                        style={{
                            backgroundImage: `url(${keyboard})`
                        }}
                        className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            Gaming keyboard
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessories;