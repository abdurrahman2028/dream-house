import { Link } from "react-router-dom";

const HomeCard = ({ data }) => {
  return (
    <Link to={`/details/${data.id}`}>
      <div className="relative cursor-pointer lg:w-[330px] md:w-[320px] w-[300px] h-80 bg-zinc-100 text-zinc-900 rounded-[10px] overflow-hidden flex flex-col gap-5 ">
        <div className="">
          <img className="h-50 w-full" src={data.image} alt="" />
        </div>
        <div className="px-5 flex flex-col gap-4 text-left">
          <p className="text-[17px] leading-none">{data.house_title}</p>
          <div className="flex flex-col items-start text-[25px] font-semibold leading-none gap-1">
            <div className="flex items-center text-[25px] font-semibold leading-none">
              <p className="">{data.rent}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
