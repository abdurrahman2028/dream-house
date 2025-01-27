import { useRef } from "react";
import Card from "./Card";

const Forground = () => {
  const ref = useRef(null);
  const data = [
    {
      describetion:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      fileSize: "0.7mb",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
    {
      describetion:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      fileSize: "0.7mb",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "green" },
    },
    {
      describetion:
        "Google Docs is a web-based application. It can be accessed with a personal Google account.",
      fileSize: "0.7mb",
      close: true,
      tag: { isOpen: true, title: "Download Now!", color: "blue" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed w-full h-full top-0 left-0 z-[3] flex gap-10 flex-wrap py-5 px-14 bg-green-400/5"
    >
    {
      data.map((item, index) => <Card data={item} reference={ref} />)
    }
    </div>
  );
};

export default Forground;
