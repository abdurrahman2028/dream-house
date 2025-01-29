import Card from "./Card/Card";
import Header from "../../Shared/Header/Header";
import Slider1 from "../../assets/Slider1.jpg";
import Slider2 from "../../assets/Slider2.jpg";
import Slider3 from "../../assets/Slider3.jpg";
import Slider5 from "../../assets/2.jpg";
import moment from "moment/moment";
import Footer from "../../Shared/Footer/Footer";
import FooterImage from "../../assets/Slider1.jpg";
import { useLoaderData } from "react-router-dom";

const Featured = () => {
  const alldata = useLoaderData()
  
  return (
    <div>
      <div className="fixed w-full z-10">
        <Header></Header>
      </div>
      <div className="py-14">
        <div className="pt-24">
          <h2 className="text-4xl text-center">Featured Homes</h2>
          <h2 className="text-md text-center">
            {moment().format("MMMM Do YYYY, h:mm:ss a")}
          </h2>
        </div>
        <div className="w-full lg:px-52 px-20 flex flex-wrap items-center justify-center gap-10 py-10">
          {alldata.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </div>
      </div>

      <div className="">
        <div
          className="relative bg-cover bg-no-repeat 2xl:bg-[center_top_-20rem] lg:bg-[center_top_-30rem]"
          style={{
            backgroundImage: `url(${FooterImage})`,
          }}
        >
          <div className="absolute bottom-0 blur-[25px] w-full h-80 bg-zinc-400/50 opacity-70"></div>
          <div className="relative flex items-center justify-center bg-zinc-200/35 h-full lg:px-5">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
