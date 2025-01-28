import { Outlet } from "react-router-dom";

import { animate, useScroll, motion } from "framer-motion";

export const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 7,
          originX: 0,
          backgroundColor: "#000000",
          opacity: 0.2
        }}
        className="z-50"
      />
      <Content></Content>
    </>
  );
};

const Content = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
