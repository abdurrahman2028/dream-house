import {
  FaBath,
  FaBed,
  FaWarehouse,
  FaDollarSign,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";

const Card = ({ data }) => {
  return (
    <>
      <div className="overflow-y-hidden overflow-x-hidden">
        <div className="relative cursor-pointer lg:w-[340px] md:w-[320px] w-[300px] pb-2 bg-zinc-200 text-zinc-900 rounded-[10px] overflow-hidden flex flex-col gap-5">
          <div className="h-60">
            <img src={data.img} alt="" />
          </div>
          <div className="px-5 flex flex-col gap-4 text-left">
            <p className="text-[17px] leading-none">{data.title}</p>
            <div className="flex flex-col items-start text-[25px] font-semibold leading-none gap-1">
              <div className="flex items-center text-[25px] font-semibold leading-none">
                <FaDollarSign />
                <p className="">{data.price}</p>
              </div>
              <p className="text-gray-500 text-lg font-medium">Monthly</p>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-between w-full my-2 py-1 gap-5 text-gray-500">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1">
                    <FaWarehouse />
                    <h4 className="">House</h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaExternalLinkSquareAlt />
                    <p>{data.items.sqft}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1 text-center">
                    <FaBed />
                    <h4 className="">{data.items.bed}</h4>
                  </div>
                  <div className="flex gap-1">
                    <FaBath />
                    <h4 className="">{data.items.bath}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
