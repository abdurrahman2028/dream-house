import Header from "../../Shared/Header/Header";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Footer from "../../Shared/Footer/Footer";
import FooterImage from "../../assets/5.jpg";
import Slider from "../../Components/Slider/Slider";

const Explore = () => {
  const position = [23.7489, 90.3837];
  return (
    <div>
      <div className="fixed z-20 w-full">
        <Header></Header>
      </div>

      <div className=" z-20 overflow-x-hidden">
        <Slider></Slider>
      </div>

      <div className="px-10 md:px-52 py-10 -z-40">
        <MapContainer
          center={position}
          zoom={10}
          style={{ height: "550px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              Signal, 151/7, GoodLuck Center Panthapath, Green Rd, Dhaka 1205
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="">
        <div
          className="relative bg-cover bg-no-repeat 2xl:bg-[center_top_-20rem] lg:bg-[center_top_-30rem]"
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

export default Explore;
