import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("final");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${props.classProp}`}>
      <motion.div
        className="h-full"
        variants={{
          init: { scale: 0.6 },
          final: { scale: 1 },
        }}
        transition={{
          duration: 0.8,
        }}
        initial="init"
        animate={mainControls}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default Reveal;
