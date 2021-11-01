import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

interface CarouselProps {
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ className }) => {
  // const styles = useSpring({
  //   loop: true,
  //   from: { rotateZ: 0 },
  //   to: { rotateZ: 180 },
  // });

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const bind = useDrag(({ down, movement: [mx] }) => {
    api.start({ x: down ? mx : 0, immediate: down });
  });

  return (
    <div className={className}>
      <animated.div {...bind()} style={{ x, y }} />
    </div>
  );
};

export default Carousel;
