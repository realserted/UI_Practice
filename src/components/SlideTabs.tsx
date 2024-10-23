import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router-dom";

export const SlideTabsExample = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <SlideTabs />
      <ModeToggle />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex w-fit rounded-full border border-black dark:border-white bg-white dark:bg-black p-1"
    >
      <Tab setPosition={setPosition} to="/alforque">
        Alforque
      </Tab>
      <Tab setPosition={setPosition} to="/lester">
        Lester
      </Tab>
      <Tab setPosition={setPosition} to="/diane">
        Diane
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  to,
}: {
  children: React.ReactNode;
  setPosition: (position: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
  to: string;
}) => {
  const ref = useRef(null);

  return (
    <NavLink
      to={to}
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = (ref.current as HTMLElement).getBoundingClientRect();

        setPosition({
          left: (ref.current as HTMLElement).offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </NavLink>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-12"
    />
  );
};
