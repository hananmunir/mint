import ArrowLeft from "@/components/Icons/ArrowLeft";
import ThreeAnimation from "@/components/ThreeAnimation";
import { useRouter } from "next/router";

const ETH = () => {
  const router = useRouter();
  return (
    <>
      <header className="fixed p-6 left-0 w-full z-10">
        <button className="__btn_outline h-8 pl-2.5" onClick={router.back}>
          <span className="text-[#70757E]">
            <ArrowLeft />
          </span>
          Home
        </button>
      </header>
      <div className="fixed inset-y-0 inset-x-0">
        <ThreeAnimation />
      </div>
    </>
  );
};

export default ETH;
