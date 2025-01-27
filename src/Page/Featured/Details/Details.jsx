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

const Details = () => {
  const data = [
    {
      id: 1,
      img: Slider1,
      title: "A Growing Concern in Modern Life.",
      description:
        "Barite thaka amader jiboner ekta mul need, kintu ajker duniya-te house rent ekta jotil somossa hoye darachhe. Beshi bhara, bhorosha-joggo landlord-er obhab, ar budget-e thikmoto barir khuja – ei sob niye onekei jhamelar moddhe pore.House Rent-er SituationAjker din-e, shahorer manush-jonoshongkhar briddhi ar urbanization-er karone house rent onek beshi bere geche. Barishal, Dhaka, ba Chattogram-er moto jagai, onekei dekhe je rent-ta barir condition-er theke beshi hoye jacche. Middle-class manusher jonno monthly rent manage kora ekta boro challenge.",
      price: "4,600",
      location: "Dhaka, Capital of Bangladesh",
      close: true,
      items: { bed: 3, bath: 2, sqft: "1,634" },
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
  ];

  return (
    <div>
      <div className="fixed w-full z-10">
        <Header></Header>
      </div>
      <div className="px-20 lg:px-52 py-24 pt-30">
        <div className="flex flex-col lg:flex-row gap-7">
          <img
            className="w-[100%] lg:w-[40%] h-auto rounded-xl"
            src={data[0].img}
            alt=""
          />
          <div className="w-[100%] lg:w-[50%] flex flex-col gap-7 py-5">
            <h1 className="text-3xl text-left">{data[0].title}</h1>
            <h1 className="text-lg text-left">{data[0].description}</h1>
            <div className="flex justify-between items-end">
              <div className="">
                <div className="flex items-end gap-1 leading-none tracking-tight">
                  <h1 className="text-4xl font-semibold text-justify">
                    ${data[0].price}
                  </h1>
                  <p className="text-md text-zinc-500 pb-2">Monthly</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  <p>{data[0].location}</p>
                </div>
              </div>
              <div className="">
                <button className="btn btn-neutral px-16 py-6 text-lg">
                  Book{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-row-3 lg:border-y border-x border-y-0 lg:border-x-0 border-zinc-400 py-7 px-10 mt-20 mb-20">
          <div className="flex flex-col items-center py-10 lg:border-r lg:border-b-0 border-r-0 border-b border-dashed border-zinc-400">
            <h2 className="text-7xl">{data[0].items.bed}</h2>
            <p className="text-lg font-semibold">Beds</p>
          </div>
          <div className="flex flex-col items-center py-10 lg:border-r lg:border-b-0 border-r-0 border-b border-dashed border-zinc-400">
            <h2 className="text-7xl">{data[0].items.sqft}</h2>
            <p className="text-lg font-semibold">Sqft</p>
          </div>
          <div className="flex flex-col items-center py-10">
            <h2 className="text-7xl">{data[0].items.bath}</h2>
            <p className="text-lg font-semibold">Bath</p>
          </div>
        </div>
      </div>
      
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
