import moment from "moment";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import FooterImage from "../../assets/2.jpg";
import img1 from "../../assets/1.jpg";
import userLogo from "../../assets/User-Profile.png";
import { VscVmActive } from "react-icons/vsc";
import { useContext } from "react";
import { authContext } from "../../Authentication/Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(authContext);
  const nevigate = useNavigate();
  const profileUpdated = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
    .then(() => nevigate("/profile"));
  };
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Header></Header>
      </div>

      <div className="max-w-4xl mx-auto bg-white py-40 rounded-lg px-10">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0 items-center mb-6">
          <img
            src={user?.photoURL || userLogo}
            alt="Profile"
            className="w-36 h-36 rounded-lg mr-6"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold tracking-0 leading-none">
              {user?.displayName || "Unknown"}
            </h2>
            <p className="text-gray-500 tracking-0 leading-none flex gap-2 pt-2">
              <VscVmActive />
              Active
            </p>
          </div>
          <div className="ml-auto text-right md:block hidden">
            <span className="bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded">
              user
            </span>
            <p className="text-gray-500 text-sm">
              Today, {moment().format("D MMMM YYYY")}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-20">
          <form
            onSubmit={profileUpdated}
            className="flex flex-col w-[50%] gap-6"
          >
            <div>
              <label className="block text-gray-700">User Name</label>
              <InputBox type="text" name="name" placeholder="Nayeem" />
            </div>
            <div>
              <label className="block text-gray-700">Photo Url</label>
              <InputBox
                type="text"
                name="photo"
                placeholder="www.my-photo.jpg"
              />
            </div>
            <div className="w-full">
              <input
                type="submit"
                value="Save Changes"
                className="text-right px-14 cursor-pointer rounded-md border border-primary bg-zinc-800 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
              />
            </div>
          </form>

          <div className="flex flex-col w-[40%] gap-6"></div>
        </div>

        <div className="mt-6 text-left"></div>
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

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mt-1">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-2 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};
