import { Link } from "react-router-dom";
import {
  FaWarehouse,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";

const Card = ({ data }) => {
  const { id } = data;
  return (
    <>
      <Link to={`/details/${id}`}>
        <div className="relative cursor-pointer lg:w-[330px] md:w-[320px] w-[300px] pb-2 bg-zinc-200 text-zinc-900 rounded-[10px] overflow-hidden flex flex-col gap-5">
          <div className="">
            <img src={data.image} alt="" />
          </div>
          <div className="px-5 flex flex-col gap-4 text-left">
            <p className="text-[17px] leading-none">{data.house_title}</p>
            <div className="flex flex-col items-start text-[25px] font-semibold leading-none gap-1">
              <div className="flex items-center text-[25px] font-semibold leading-none">
                <p className="">{data.rent}</p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full pb-1 border-b">
                <h3 className="text-sm font-medium">{data.location}</h3>
              </div>

              <div className="flex items-start justify-between w-full my-2 py-1 gap-5 text-gray-500">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1">
                    <FaWarehouse />
                    <h4 className="">House</h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaExternalLinkSquareAlt />
                    <p>{data.area}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
