import { atom, useAtom } from "jotai";

const isOpenGetStartedModalAtom = atom(false);

export const useOpenGetStartedModal = () => {
  const [isOpenGetStartedModal, setIsOpenGetStartedModal] = useAtom(
    isOpenGetStartedModalAtom,
  );

  const toggleIsOpenGetStartedModal = () => {
    setIsOpenGetStartedModal((prev) => !prev);
  };
  const openGetStartedModal = () => {
    setIsOpenGetStartedModal(true);
  };

  return {
    isOpenGetStartedModal,
    setIsOpenGetStartedModal,
    openGetStartedModal,
    toggleIsOpenGetStartedModal,
  };
};
