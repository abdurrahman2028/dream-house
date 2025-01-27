import Card from "./Card/Card";
import Header from "../../Shared/Header/Header";
import Slider1 from "../../assets/Slider1.jpg";
import Slider2 from "../../assets/Slider2.jpg";
import Slider3 from "../../assets/Slider3.jpg";
import moment from "moment/moment";

const Featured = () => {
  const data = [
    {
      img: Slider1,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "4,600",
      fileSize: "0.2kb",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
    {
      img: Slider2,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "23,860",
      fileSize: "0.7mb",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "green" },
    },
    {
      img: Slider3,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "17,550",
      fileSize: "3.1mb",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
    {
      img: Slider3,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "17,550",
      fileSize: "3.1mb",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
    {
      img: Slider3,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "17,550",
      fileSize: "3.1mb",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
  ];
  return (
    <div>
      <Header></Header>
      <div className="pt-7">
        <h2 className="text-4xl text-center">Newest listings</h2>
        <h2 className="text-md text-center">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
      </div>
      <div className="w-full lg:px-52 px-20 flex flex-wrap gap-10 py-10">
        {data.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
