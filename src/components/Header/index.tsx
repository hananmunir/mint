import { useOpenGetStartedModal } from "@/atoms";
import Tooltip from "@/components/Tooltip";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import GetStartedModal from "../GetStartedModal";
import ArrowRight from "../Icons/ArrowRight";
import Logo from "../Logo";

const Header = () => {
  const { isOpenGetStartedModal, toggleIsOpenGetStartedModal } =
    useOpenGetStartedModal();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed py-7 left-0 w-full z-10"
    >
      <div className="__container">
        <div className="flex gap-4 justify-between items-center">
          <Link href={"/"}>
            <Logo />
          </Link>

          <div className={cx("flex items-center gap-4")}>
            <Tooltip text="Go to Demo" keyboardCommand="D">
              <Link className="__btn_outline peer" href={"https://bash.mintsomething.com"}>
                Demo
                <span className="text-[#70757E]">
                  <ArrowRight />
                </span>
              </Link>
            </Tooltip>

            <Tooltip
              text="Get Started"
              keyboardCommand="S"
              className="max-lg:hidden"
            >
              <button
                className="__get_started_btn peer"
                onClick={toggleIsOpenGetStartedModal}
              >
                Get Started
              </button>
            </Tooltip>
          </div>

          <AnimatePresence>
            {isOpenGetStartedModal && (
              <GetStartedModal
                isOpen={isOpenGetStartedModal}
                onRequestClose={toggleIsOpenGetStartedModal}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
