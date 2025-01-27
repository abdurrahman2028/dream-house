import moment from "moment";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import FooterImage from "../../assets/2.jpg";
import img1 from "../../assets/1.jpg";
import user from "../../assets/User-Profile.png";

const Profile = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Header></Header>
      </div>

      <div className="max-w-4xl mx-auto bg-white py-40 rounded-lg px-10">
        <div className="flex items-center mb-6">
          <img src={user} alt="Profile" className="w-36 h-36 rounded-lg mr-6" />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold tracking-0 leading-none">
              Unknown
            </h2>
            <p className="text-gray-500 tracking-0 leading-none">
              <span className="text-green-700 text-5xl tracking-0 leading-none">
                .
              </span>
              Active
            </p>
          </div>
          <div className="ml-auto text-right">
            <span className="bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded">
              user
            </span>
            <p className="text-gray-500 text-sm">
              Today {moment().format("D MMMM YYYY")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-20">
          <div className="flex flex-col w-[50%] gap-6">
            <div>
              <label className="block text-gray-700">User Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded"
                placeholder="Nayeem"
              />
            </div>
            <div>
              <label className="block text-gray-700">Photo Url</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded"
                placeholder="www.photo.url"
              />
            </div>
          </div>
          <div className="">
            <h2
              className="cursor-crosshair text-5xl text-zinc-200 border p-10 mt-8 bg-cover bg-no-repeat lg:bg-[center_top_-3rem]"
              style={{
                backgroundImage: `url(${img1})`,
              }}
            >
              Dream House
            </h2>
          </div>
        </div>

        <div className="mt-6 text-left">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">
            Save Changes
          </button>
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

export default Profile;
