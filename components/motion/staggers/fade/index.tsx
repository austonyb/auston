"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 19,
      mass: 1.2,
    },
  },
};

function Container(props: React.ComponentPropsWithoutRef<typeof motion.div>) {
  const { children, ...rest } = props;
  return (
    <motion.div variants={container} initial="hidden" animate="show" {...rest}>
      {children}
    </motion.div>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return <motion.div variants={item}>{children}</motion.div>;
}

export { Container, Item };
