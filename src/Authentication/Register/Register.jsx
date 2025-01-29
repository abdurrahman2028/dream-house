import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import FooterImage from "../../assets/3.jpg";
import Header from "../../Shared/Header/Header";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { userregister } = useContext(authContext);
  const navigate = useNavigate();

  const handleRegister = (data) => {
    const { name, photo, email, password } = data;
    userregister(email, password).then((res) => {
      navigate("/login");
      updateProfile(res.user, {
        displayName: name,
        photoURL: photo,
      });
      console.log("Register With Email : ", res);
    });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (time) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        navigate("/login");
        res();
      }, time * 1000);
    });
  };
  const onSubmit = async (data) => {
    await delay(3);
    console.log(data);
  };

  useEffect(() => {
    if (errors.name) {
      toast.error(errors.name.message);
    }
    if (errors.photo) {
      toast.error(errors.photo.message);
    }
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.password) {
      toast.error(errors.password.message);
    }
  }, [errors.name, errors.email, errors.password]);

    const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Header></Header>
      </div>
      <section className="bg-gray-1 py-20 my-10 dark:bg-dark lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                <div className="mb-10 text-center md:mb-16">
                  <Link
                    to="/register"
                    className="mx-auto inline-block max-w-[200px] text-zinc-800"
                  >
                    <h2 className="text-[30px]  leading-none font-semibold">
                      Sign Up
                    </h2>
                  </Link>
                </div>
                <div className="w-full flex">
                  {isSubmitting && (
                    <h1 className=" text-center rounded-full animate-pulse text-lg dark:bg-default-600">
                      Loading...
                    </h1>
                  )}
                </div>
                <form
                  onSubmit={handleSubmit(handleRegister)}
                  className="flex flex-col gap-3"
                >
                  <div className="flex flex-col items-start">
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required.",
                        },
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    />
                    <span className="text-red-500 px-5">
                      {errors.email && errors.email.message}
                    </span>
                  </div>

                  <div className="flex flex-col items-start relative">
                    <input
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required.",
                        },
                        pattern: {
                          value:
                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                          message:
                            "Password must contain at least one uppercase, one lowercase, one number, and one special character.",
                        },
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters long.",
                        },
                      })}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    />
                    <span className="text-red-500 px-5">
                      {errors.password && errors.password.message}
                    </span>
                    <div
                      className="absolute right-3 top-3 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
                    </div>
                  </div>

                  <div className="flex flex-col items-start">
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Username is required.",
                        },
                        minLength: {
                          value: 4,
                          message: "username is too short.",
                        },
                        maxLength: {
                          value: 14,
                          message: "username is too long.",
                        },
                      })}
                      type="text"
                      placeholder="User Name"
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    />
                    <span className="text-red-500 px-5">
                      {errors.name && errors.name.message}
                    </span>
                  </div>

                  <div className="flex flex-col items-start">
                    <input
                      {...register("photo")}
                      type="text"
                      placeholder="Photo URL"
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    />
                    <span className="text-red-500 px-5">
                      {errors.photo && errors.photo.message}
                    </span>
                  </div>
                  <div className="mb-10">
                    <input
                      disabled={isSubmitting}
                      type="submit"
                      value="Sign Up"
                      className={`${
                        (isSubmitting &&
                          "bg-zinc-600 border-black cursor-wait") ||
                        "bg-zinc-800 border-primary cursor-pointer"
                      } w-full rounded-md border  px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90`}
                    />
                  </div>
                  <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition={Bounce}
                  />
                </form>
                <p className="text-base text-body-color dark:text-dark-6">
                  <span className="pr-0.5">You have an account?</span>
                  <Link to="/login" className="text-primary hover:underline">
                    Sign In
                  </Link>
                </p>

                <div>
                  <span className="absolute left-1 top-1">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.39737"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 1.39737 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 1.39737 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 13.6943 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 13.6943 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 25.9911 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 25.9911 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 38.288 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 38.288 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 1.39737 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 13.6943 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 25.9911 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 38.288 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 1.39737 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 13.6943 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 25.9911 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 38.288 14.0086)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                  <span className="absolute bottom-1 right-1">
                    <svg
                      width="29"
                      height="40"
                      viewBox="0 0 29 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="2.288"
                        cy="25.9912"
                        r="1.39737"
                        transform="rotate(-90 2.288 25.9912)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="25.9911"
                        r="1.39737"
                        transform="rotate(-90 14.5849 25.9911)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="25.9911"
                        r="1.39737"
                        transform="rotate(-90 26.7216 25.9911)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="13.6944"
                        r="1.39737"
                        transform="rotate(-90 2.288 13.6944)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="13.6943"
                        r="1.39737"
                        transform="rotate(-90 14.5849 13.6943)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="13.6943"
                        r="1.39737"
                        transform="rotate(-90 26.7216 13.6943)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="38.0087"
                        r="1.39737"
                        transform="rotate(-90 2.288 38.0087)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="1.39739"
                        r="1.39737"
                        transform="rotate(-90 2.288 1.39739)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="38.0089"
                        r="1.39737"
                        transform="rotate(-90 14.5849 38.0089)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="38.0089"
                        r="1.39737"
                        transform="rotate(-90 26.7216 38.0089)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="1.39761"
                        r="1.39737"
                        transform="rotate(-90 14.5849 1.39761)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="1.39761"
                        r="1.39737"
                        transform="rotate(-90 26.7216 1.39761)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Register;
