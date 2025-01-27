import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload, MdClose } from "react-icons/md";
import { motion } from "motion/react";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileHover={{ scale: 1.05  ,transition: { duration: 1 }}}
        whileTap={{ scale: 1.03 }}
        whileDrag={{ scale: 1 }}
        className="relative w-56 h-72 bg-zinc-200 text-zinc-900 rounded-[35px] px-5 py-8 overflow-hidden flex flex-col gap-3"
      >
        <FaRegFileLines />
        <p className="text-[15px] font-semibold leading-4">
          {data.describetion}
        </p>
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
      </motion.div>
    </>
  );
};

export default Card;
