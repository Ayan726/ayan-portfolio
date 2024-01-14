import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const SlideReveal = (props) => {
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
          init: { x: 300, opacity: 0 },
          final: { x: 0, opacity: 1 },
        }}
        transition={{
          duration: 1.2,
          delay: Number(props.delay) || 0,
        }}
        initial="init"
        animate={mainControls}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default SlideReveal;
