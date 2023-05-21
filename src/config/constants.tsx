import GithubIcon from "@/components/Icons/GithubIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import { motion } from "framer-motion";
import { ComponentProps } from "react";
import ReactModal from "react-modal";

export const modalDefaultConfig: Omit<
  ComponentProps<typeof ReactModal>,
  "isOpen"
> = {
  style: {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: 0,
      boxShadow: "none",
      background: "transparent",
      padding: 0,
      border: "none",
      overflow: "hidden",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 1000,
    },
  },
  contentElement: (props, children) => (
    <div {...props} style={{ ...props.style, overflow: "visible" }}>
      <motion.div
        initial={{ y: 8 }}
        animate={{ y: 0 }}
        exit={{ opacity: 0, y: 3, transition: { duration: 0.15 } }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  ),
  overlayElement(props, contentEl) {
    return (
      <motion.div
        {...(props as any)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
      >
        {contentEl}
      </motion.div>
    );
  },
};
export const socialIcons = [
  {
    icon: <GithubIcon />,
    url: "#",
    label: "GitHub",
  },
  {
    icon: <TwitterIcon />,
    url: "#",
    label: "Twitter",
  },
  // {
  //   icon: <ETHIcon />,
  //   url: "#",
  //   label: "ETH",
  // },
];
