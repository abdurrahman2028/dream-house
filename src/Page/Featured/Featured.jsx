import Card from "./Card/Card";
import Header from "../../Shared/Header/Header";
import Slider1 from "../../assets/Slider1.jpg";
import Slider2 from "../../assets/Slider2.jpg";
import Slider3 from "../../assets/Slider3.jpg";
import Slider4 from "../../assets/3.jpg";
import Slider5 from "../../assets/2.jpg";
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
      items: { bed: 3, bath: 2, sqft: "1,634" },
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
      items: { bed: 2, bath: 1, sqft: "986" },
      tag: { isOpen: true, title: "Download Now!", color: "green" },
    },
    {
      id: 1,
      img: Slider1,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "4,600",
      location: "Dhaka, Capital of Bangladesh",
      close: true,
      items: { bed: 3, bath: 2, sqft: "1,634" },
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
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
      items: { bed: 1, bath: 0, sqft: "486" },
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
    {
      id: 5,
      img: Slider5,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "12,530",
      location: "Dhaka, Capital of Bangladesh",
      close: true,
      items: { bed: 2, bath: 2, sqft: "1,422" },
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
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
      items: { bed: 1, bath: 0, sqft: "486" },
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
    {
      id: 5,
      img: Slider5,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "12,530",
      location: "Dhaka, Capital of Bangladesh",
      close: true,
      items: { bed: 2, bath: 2, sqft: "1,422" },
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
      items: { bed: 2, bath: 1, sqft: "986" },
      tag: { isOpen: true, title: "Download Now!", color: "green" },
    },
  ];
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
        <div className="w-full lg:px-52 px-20 flex flex-wrap gap-10 py-10">
          {data.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </div>
      </div>

      <div className="">
        <div
          className="relative bg-cover bg-no-repeat lg:bg-[center_top_-30rem]"
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

export default Featured;
