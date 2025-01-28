import Header from "../../Shared/Header/Header";
import HeroImage from "../../assets/Hero.jpg";
import FooterImage from "../../assets/Footer.jpg";
import Footer from "../../Shared/Footer/Footer";
import { useEffect, useRef } from "react";
import { animate, useScroll, motion } from "framer-motion";

const Home = () => {
  const counter1 = useRef(null);
  const counter2 = useRef(null);
  const counter3 = useRef(null);

  useEffect(() => {
    animate(0, 200, {
      duration: 2,
      ease: "circOut",
      onUpdate: (latest) => (counter1.current.innerText = Math.round(latest)),
    });
    animate(0, 98, {
      duration: 2,
      ease: "circOut",
      onUpdate: (latest) => (counter2.current.innerText = Math.round(latest)),
    });
    animate(0, 85, {
      duration: 2,
      ease: "circOut",
      onUpdate: (latest) => (counter3.current.innerText = Math.round(latest)),
    });
  }, []);

  return (
    <div className="flex flex-col gap-7">
      <div
        className="h-screen bg-cover bg-no-repeat lg:bg-[center_top_-22rem]"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div className="fixed w-full z-10">
          <Header></Header>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="lg:px-52 lg:pt-48 md:px-20 md:pt-50 px-15 pt-40 text-zinc-100 font-semibold flex flex-col gap-3">
            <h5 className="lg:text-3xl md:text-xl text-lg">
              Real estate for sale
            </h5>
            <h1 className="lg:text-7xl md:text-5xl text-4xl">Find your</h1>
            <h1 className="lg:text-7xl md:text-5xl text-4xl">
              next dream home
            </h1>
          </div>
          <div className="lg:px-52 lg:pt-96 md:px-20 md:pt-20 px-15 pb-30 text-zinc-100 flex items-end justify-between gap-3">
            <div className="">
              <h6 className="text-base">
                Where every corner whispers serenity. Our homes are
              </h6>
              <h6 className="text-base">
                more than structures, they are havens designed to
              </h6>
              <h6 className="text-base">
                provide a refuge from the chaos of the world.
              </h6>
            </div>
            <div className="text-end flex flex-col gap-1">
              <h6 className="text-">Poqutot Green Canyon</h6>
              <h2 className="text-4xl">$700.99/day</h2>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 blur-lg w-full h-10 bg-zinc-300/50"></div>
      </div>

      <div className="lg:px-52 py-10 flex flex-col items-center lg: text-end">
        <div className="grid lg:grid-cols-3 grid-row-3 lg:px-0 px-15 gap-7 text-left">
          <div className="lg:col-span-2 font-semibold">
            <h2 className="text-5xl">Display beauty</h2>
            <h2 className="text-5xl">properties</h2>
          </div>
          <div className="lg:text-end text-left">
            <h4 className="mb-7 text-zinc-500">
              With decades of experience and a commitment to personalized
              service, we ensure a seamless journey to finding your dream
              property or selling your current one. With decades of experience
              and a commitment to personalized service
            </h4>
            <button className="btn btn-outline font-semibold">
              Contact us
            </button>
          </div>
        </div>
      </div>

      <div className=" lg:px-10 grid lg:grid-cols-3 py-5">
        <div className="flex flex-col justify-center items-center py-5 gap-5 lg:border-r-1 sm:border-b-1 lg:border-b-0 border-zinc-300 border-dashed">
          <h1 className="text-[100px] tracking-tight leading-none">
            <span ref={counter1}>200</span>K <sup className="text-7xl">+</sup>
          </h1>
          <div className="flex flex-col items-center">
            <h4>Lorem ipsum dolor sit amet, consectetur</h4>
            <h4>adipiscing elit</h4>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-5 gap-5 lg:border-r-1 sm:border-b-1 lg:border-b-0 border-zinc-300 border-dashed">
          <h1 className="text-[100px] tracking-tight leading-none">
            <span ref={counter2}>98</span> <sup className="text-6xl">%</sup>
          </h1>
          <div className="flex flex-col items-center">
            <h4>Donec maximus ac est non</h4>
            <h4>dignissim nomentio</h4>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-5 gap-5">
          <h1 className="text-[100px] tracking-tight leading-none">
            <span ref={counter3}>85</span> <sup className="text-6xl">%</sup>
          </h1>
          <div className="flex flex-col items-center">
            <h4>Vestibulum gravida ullamcorper</h4>
            <h4>venenatinom jonerk</h4>
          </div>
        </div>
      </div>

      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className="grid lg:grid-cols-3 grid-row-3 lg:px-0 px-16 py-20 gap-7 text-left">
            <div className="lg:col-span-2 font-semibold">
              <h2 className="text-5xl">Your burning question,</h2>
              <h2 className="text-5xl">answered</h2>
            </div>
            <div className="lg:text-end text-left">
              <h4 className="mb-7 text-zinc-500">
                If you have a question that isn't answered in our FAQs then
                please get in touch and let us know.
              </h4>
              <button className="btn btn-outline font-semibold">
                Contact us
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <details className="w-full border border-zinc-500 bo rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-default-600">
                Ex orci laoreet egestas sapien magna egestas scelerisque?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                nullam taciti at adipiscing est.{" "}
              </p>
            </details>
            <details className="w-full border border-zinc-500 bo rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-default-600">
                Lorem at arcu rutrum viverra metus sapien venenatis lobortis
                odio?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
                porttitor egestas tincidunt neque vehicula potenti.{" "}
              </p>
            </details>
            <details className="w-full border border-zinc-500 rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-default-600">
                Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                suscipit erat?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Justo libero tellus integer tincidunt justo semper consequat
                venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
                pretium sodales vel magna et massa euismod vulputate sed.{" "}
              </p>
            </details>
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

export default Home;
