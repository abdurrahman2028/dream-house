import Card from "./Card/Card";
import Header from "../../Shared/Header/Header";
import Slider1 from "../../assets/Slider1.jpg";
import Slider2 from "../../assets/Slider2.jpg";
import Slider3 from "../../assets/Slider3.jpg";
import moment from "moment/moment";
import Footer from "../../Shared/Footer/Footer";
import FooterImage from "../../assets/Slider1.jpg";

const Featured = () => {
  const data = [
    {
      id: 1,
      img: Slider1,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "4,600",
      location: "Dhaka, Capital of Bangladesh",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
    {
      id: 2,
      img: Slider2,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "23,860",
      location: "Barishal, City in Bangladesh",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "green" },
    },
    {
      id: 3,
      img: Slider3,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "17,550",
      location: "Dhaka, Capital of Bangladesh",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
    {
      id: 4,
      img: Slider3,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "17,550",
      location: "Barishal, City in Bangladesh",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
    {
      id: 5,
      img: Slider3,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "17,550",
      location: "Dhaka, Capital of Bangladesh",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
  ];
  return (
    <div>
      <div className="fixed w-full z-10">
        <Header></Header>
      </div>
      <div className="py-14">
        <div className="pt-24">
          <h2 className="text-4xl text-center">Newest listings</h2>
          <h2 className="text-md text-center">
            {moment().format("MMMM Do YYYY, h:mm:ss a")}
          </h2>
        </div>
        <div className="w-full lg:px-52 px-20 flex flex-wrap gap-10 py-10">
          {data.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </div>
      </div>

      <div className="">
        <div
          className="relative bg-cover bg-no-repeat lg:bg-[center_top_-35rem]"
          style={{
            backgroundImage: `url(${FooterImage})`,
          }}
        >
          <div className="absolute bottom-0 blur-[25px] w-full h-80 bg-zinc-400/50 opacity-80"></div>
          <div className="absolute bottom-0 w-full h-72 bg-zinc-200/50 opacity-20"></div>
          <div className="relative bg-zinc-200/35 h-full  px-52">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
