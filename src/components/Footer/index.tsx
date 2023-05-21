import ETHIcon from "@/components/Icons/ETHIcon";
import { socialIcons } from "@/config/constants";
import cx from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const isHomePage = router.pathname === "/";
  return (
    <motion.footer
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 w-full z-10"
    >
      <div className="__container">
        <div className="flex items-end justify-between py-6 relative max-lg:flex-row-reverse">
          <div
            className={cx(
              "flex flex-col gap-4  max-lg:hidden",
              !isHomePage && "opacity-0 pointer-events-none",
            )}
          >
            <div className="flex flex-col">
              <span className="text-xs text-slate-11 font-normal">
                For all general inquiries
              </span>
              <a
                href="mailto:hello@mintsomething.com"
                className="text-xs text-slate-11 font-normal"
              >
                hello@mintsomething.com
              </a>
            </div>
          </div>
          <div
            className={cx(
              "flex items-center gap-2.5",
              !isHomePage &&
                "absolute left-0 w-full flex justify-center top-1/2 -translate-y-1/2",
            )}
          >
            <span className="text-sm text-slate-11">
              © 2023 Mint Something, Inc.
            </span>
          </div>
          <div
            className={cx(
              "flex items-end gap-4",
              !isHomePage && "opacity-0 pointer-events-none",
            )}
          >
            {socialIcons.map((socialIcon, i) => (
              <a
                key={i}
                aria-label={socialIcon.label}
                className="text-slate-11 transition duration-200 ease-in-out hover:text-slate-12"
                target="_blank"
                href={socialIcon.url}
              >
                {socialIcon.icon}
              </a>
            ))}
            <Link
              aria-label={"ETH"}
              className="text-slate-11 lg:hidden transition duration-200 ease-in-out hover:text-slate-12"
              href={"/ethereum"}
            >
              <ETHIcon />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
