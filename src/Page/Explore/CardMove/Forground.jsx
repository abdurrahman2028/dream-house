import { useRef, useState } from "react";
import Card from "./Card";
import Slider1 from "../../../assets/Slider1.jpg";
import Slider2 from "../../../assets/Slider2.jpg";
import Slider3 from "../../../assets/Slider3.jpg";
import Slider4 from "../../../assets/3.jpg";
import Slider5 from "../../../assets/2.jpg";
import { Reorder } from "motion/react";

const Forground = () => {
  const ref = useRef(null);
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
      id: 4,
      img: Slider5,
      title: "Docs is a web-based application",
      description:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      price: "39,573",
      location: "Barishal, City in Bangladesh",
      close: true,
      items: { bed: 5, bath: 3, sqft: "3,286" },
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
  ];
  const [items, setItems] = useState(data);
  return (
    <div ref={ref}>
      {
        <Reorder.Group axis="x" values={items} onReorder={setItems}>
          <div className="w-full flex gap-10 flex-wrap py-10 md:px-52 px-20">
            {items.map((item) => (
              <Reorder.Item key={item} value={item}>
                <Card data={item} reference={ref} />
              </Reorder.Item>
            ))}
          </div>
        </Reorder.Group>
      }
    </div>
  );
};

export default Forground;
