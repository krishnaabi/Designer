import ReviewCard from "./ReviewCard";
import { reviewDetails } from "./reviewDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import linkedIn from "../../public/linkedin.png";
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"By the Numbers"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody
          text="Real-world impact, long-term partnerships, and design outcomes that matter."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <motion.div className="grid w-[90%] max-w-[1345px] grid-cols-1 grid-rows-6 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-cols-2  sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
        {reviewDetails.map((review, index) => {
          return (
            <ReviewCard
              key={index}
              name={review.name}
              testimonial={review.testimonial}
              index={index}
            />
          );
        })}
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.1,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        href="https://www.linkedin.com/in/abi-krishna-15abi/"
        target="_blank"
        className="bg-white flex justify-center items-center mt-16 rounded-lg"
      >
        <span className="text-black text-xl text-bold py-2 px-12">Hire me</span>
        {/* <Image src={linkedIn} alt={"hire me"} className="w-full h-full" /> */}
      </motion.a>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.1,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="contra-hire-me-button mt-20"
        data-analyticsUserId="f6264c4e-279b-4675-80e8-739c55eee53f"
        data-theme="dark"
        data-username="victorwilliams"
      ></motion.div>
      <script
        async
        src="https://contra.com/static/embed/sdk.js"
        charSet="utf-8"
      ></script> */}
    </section>
  );
};

export default Reviews;
