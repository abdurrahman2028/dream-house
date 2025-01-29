import {
  FaBath,
  FaBed,
  FaDollarSign,
  FaExternalLinkSquareAlt,
  FaWarehouse,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Header from "../../../Shared/Header/Header";
import Slider1 from "../../../assets/Slider1.jpg";
import Footer from "../../../Shared/Footer/Footer";
import FooterImage from "../../../assets/2.jpg";
import DetailsCard from "./DetailsCard";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const alldata = useLoaderData();
  return (
    <div>
      <div className="fixed w-full z-10">
        <Header></Header>
      </div>
      {alldata.map((data, index) => (
        <DetailsCard data={data} key={index} />
      ))}

      <div className="">
        <div
          className="relative bg-cover bg-no-repeat lg:bg-[center_top_-22rem]"
          style={{
            backgroundImage: `url(${FooterImage})`,
          }}
        >
          <div className="absolute bottom-0 blur-[25px] w-full h-80 bg-zinc-400/50 opacity-70"></div>
          <div className="relative bg-zinc-200/35 h-full px-10">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
