import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
// import BrandName from "./../../utilities/BrandName";

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden whitespace-nowrap flex flex-nowrap lg:-ml-4 text-white">
            <motion.div
                className="flex font-semibold uppercase whitespace-nowrap text-4xl font-paragrabh  "
                style={{ x }}
            >
                <span className="block text-2xl md:-4xl lg:text-4xl  mr-2 text-purple">{children}</span>
                <span className="block text-2xl md:-4xl lg:text-4xl  mr-2">{children}</span>
                <span className="block text-2xl md:-4xl lg:text-4xl  mr-2 text-purple">{children}</span>
                <span className="block text-2xl md:-4xl lg:text-4xl  mr-2">{children}</span>
                <span className="block text-2xl md:-4xl lg:text-4xl  mr-2 text-purple">{children}</span>
                <span className="block text-2xl md:-4xl lg:text-4xl  mr-2">{children}</span>
                <span className="block text-2xl md:-4xl lg:text-4xl  mr-2 text-purple">{children}</span>
            </motion.div>
        </div>
    );
}

export default function Parallax() {

    const BrandName = "Varun Krishnan Photography";

    return (
        <section className=" mt-52 md:mt-0 w-screen -ml-4 lg:ml-0" >
            <ParallaxText baseVelocity={-5} className="text-4xl md:text-6xl">
                {BrandName}
            </ParallaxText>
            <ParallaxText baseVelocity={5} className="text-4xl md:text-6xl">
                {BrandName}
            </ParallaxText>
        </section>
    );
}
