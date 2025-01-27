import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import FooterImage from "../../assets/2.jpg";

const Profile = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Header></Header>
      </div>

      <div className="max-w-4xl mx-auto bg-white py-40 rounded-lg">
        <div className="flex items-center mb-6">
          <img
            src="https://placehold.co/140x140"
            alt="Profile"
            className="w-36 h-36 rounded-lg mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">John Smith</h2>
            <p className="text-gray-600">@johnny.s</p>
            <p className="text-gray-500">Last seen 2 hours ago</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
              <i className="fas fa-camera mr-2"></i> Change Photo
            </button>
          </div>
          <div className="ml-auto text-right">
            <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
              administrator
            </span>
            <p className="text-gray-500 text-sm">Joined 09 Dec 2017</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded"
              placeholder="johnny.s"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded"
              value="user@example.com"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">About</label>
            <textarea className="w-full mt-1 p-2 border rounded" rows="4">
              My Bio
            </textarea>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Change Password</h3>
            <label className="block text-gray-700">Current Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 border rounded"
              value="******"
            />
            <label className="block text-gray-700 mt-4">New Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 border rounded"
              value="******"
            />
            <label className="block text-gray-700 mt-4">Confirm Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 border rounded"
              value="******"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Keeping in Touch</h3>
            <label className="block text-gray-700">Email Notifications</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" checked />
                <span className="ml-2">Blog posts</span>
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" checked />
                <span className="ml-2">Newsletter</span>
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" checked />
                <span className="ml-2">Personal Offers</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-6 text-right">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">
            Save Changes
          </button>
        </div>
      </div>

      <div className="w-full">
        <div
          className="relative bg-cover bg-no-repeat lg:bg-[center_top_-40rem]"
          style={{
            backgroundImage: `url(${FooterImage})`,
          }}
        >
          <div className="absolute bottom-0 blur-[25px] w-full h-80 bg-zinc-400/50 opacity-80"></div>
          <div className="absolute bottom-0 w-full h-72 bg-zinc-200/50 opacity-20"></div>
          <div className="relative bg-zinc-200/45 h-full  px-52">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
