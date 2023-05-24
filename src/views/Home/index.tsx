import { useOpenGetStartedModal } from "@/atoms";
import Header from "@/components/Header";
import ThreeAnimation from "@/components/ThreeAnimation";
import { motion } from "framer-motion";
import { useKey } from "react-use";


const Home = () => {
  const { openGetStartedModal } = useOpenGetStartedModal();

  useKey("s", openGetStartedModal);

  return (
    <>
      <Header />
      <div className="fixed inset-0">
        <div className="__container h-full">
          <div className="flex flex-col justify-center h-full">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <span className="inline-flex cursor-default select-none items-center whitespace-nowrap font-semibold bg-[#FD5400]/[0.118] text-[#FF8C3F]/[0.98] text-xs h-6 px-2 rounded">
                1 Q4 opening available
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
              className="mt-4 lg:mt-2 text-[60px]/[58px] lg:text-[60px]/[68px] font-bold tracking-[-0.896px]"
            >
              Mint Something
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="mt-7 lg:mt-2 font-inter text-[#D3D3D3] max-w-[270px] lg:max-w-[372px]"
            >
              The new standard for creative web development. Streamline web3
              projects with ease.
            </motion.p>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
              className="mt-11 lg:mt-8"
            >
              <button
                onClick={openGetStartedModal}
                className="group select-none items-center gap-2 text-sm font-semibold text-slate-11 outline-none hidden transition duration-200 ease-in-out hover:text-slate-12 focus:text-slate-12 lg:inline-flex"
              >
                Press{" "}
                <kbd className="inline-flex h-[22px] w-[22px] select-none items-center justify-center rounded text-sm uppercase bg-slate-11 text-black transition duration-200 ease-in-out group-hover:bg-slate-12 group-focus:bg-slate-12 group-focus:text-black">
                  S
                </kbd>{" "}
                to get started
              </button>

              <button
                className="__get_started_btn lg:hidden"
                onClick={openGetStartedModal}
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>

        <div className="max-lg:hidden fixed inset-y-0 right-0 w-[60%]">
          <ThreeAnimation />
        </div>
      </div>
    </>
  );
};

export default Home;
