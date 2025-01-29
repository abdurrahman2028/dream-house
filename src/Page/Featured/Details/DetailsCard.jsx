import { FaLocationDot } from "react-icons/fa6";

const DetailsCard = ({data}) => {
  return (
    <div className="px-20 lg:px-52 py-24 pt-30">
      <div className="flex flex-col lg:flex-row gap-7">
        <img
          className="w-[100%] lg:w-[40%] h-auto rounded-xl"
          src={data.image}
          alt=""
        />

        <div className="w-[100%] lg:w-[50%] flex flex-col gap-7 py-5">
          <h1 className="text-3xl text-left">{data.house_title}</h1>
          <h1 className="text-lg text-left">{data.description}</h1>
          <div className="flex justify-between items-end">
            <div className="">
              <div className="flex items-end gap-1 leading-none tracking-tight">
                <h1 className="text-4xl font-semibold text-justify">
                  {data.rent}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <p>{data.location}</p>
              </div>
            </div>
            <div className="">
              <button className="btn btn-neutral px-16 py-6 text-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-row-3 lg:border-y border-x border-y-0 lg:border-x-0 border-zinc-400 py-7 px-10 mt-20 mb-20">
        <div className="flex flex-col items-center py-10 lg:border-r lg:border-b-0 border-r-0 border-b border-dashed border-zinc-400">
          <p className="text-lg font-semibold">{data.facilities[0]}</p>
        </div>
        <div className="flex flex-col items-center py-10 lg:border-r lg:border-b-0 border-r-0 border-b border-dashed border-zinc-400">
          <p className="text-lg font-semibold">{data.facilities[1]}</p>
        </div>
        <div className="flex flex-col items-center py-10 lg:border-r lg:border-b-0 border-r-0 border-b border-dashed border-zinc-400">
          <p className="text-lg font-semibold">{data.area}</p>
        </div>
        <div className="flex flex-col items-center py-10 lg:border-r lg:border-b-0 border-r-0 border-b border-dashed border-zinc-400">
          <p className="text-lg font-semibold">{data.facilities[2]}</p>
        </div>
        <div className="flex flex-col items-center py-10 lg:border-r lg:border-b-0 border-r-0 border-b border-dashed border-zinc-400">
          <p className="text-lg font-semibold">{data.facilities[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
