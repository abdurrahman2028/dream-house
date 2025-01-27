import { FaDollarSign } from "react-icons/fa";
import { MdOutlineFileDownload, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      <Link to='/'>
        <div className="relative cursor-pointer lg:w-[330px] md:w-[320px] w-[300px] h-[400px] md:h-[420px] lg:h-[450px] bg-zinc-200 text-zinc-900 rounded-[10px] overflow-hidden flex flex-col gap-3">
          <div className="">
            <img src={data.img} alt="" />
          </div>
          <div className="px-5 flex flex-col gap-3">
            <p className="text-[17px] leading-none">{data.title}</p>
            <div className="flex items-center text-[25px] font-semibold leading-4">
              <FaDollarSign />
              <p className="">{data.price}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
              <div className="flex items-center px-5 justify-between w-full h-20">
                <h4 className="text-[14px]">{data.fileSize}</h4>
                <span className="h-6 w-6 bg-zinc-100 rounded-full flex items-center justify-center">
                  {data.close ? <MdClose /> : <MdOutlineFileDownload />}
                </span>
              </div>
              {data.tag.isOpen && (
                <div
                  className={`w-full py-3 bg-${
                    data.tag.color === "blue" ? "blue" : "green"
                  }-500 flex items-center justify-center`}
                >
                  <h3 className="text-sm font-semibold">{data.tag.title}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
