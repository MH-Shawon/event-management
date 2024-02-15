const DetailsCard = ({ gDetails }) => {
  
  const {img,name,details} = gDetails
  return (
    <div className="flex justify-center">
      <div className="relative flex w-full max-w-[56rem] flex-col rounded-xl bg-transparent bg-clip-border  text-gray-700 shadow-none">
        <div className="relative flex items-center gap-4 pt-0 p-5  mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl border-4">
          <img
            src={img}
            alt="Tania Andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal mr-10 text-blue-gray-900">
                {name}
              </h5>
              <div>{details}</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
