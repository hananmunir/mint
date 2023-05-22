const GetStartedSuccessBox = () => {
  return (
    <div className="mt-4 pb-5">
      <h2 className="mb-2 text-center text-2xl tracking-[-0.288px] text-slate-12 font-bold">
        Your inquiry has been sent
      </h2>

      <p className="text-sm text-slate-11 font-normal text-center max-w-[323px] mx-auto">
        Nice! You can expect an email shortly. While you are waiting, check out
        our twitter for company updates.
      </p>

      <div className="flex justify-center mt-6">
        <a href="https://twitter.com/mintsomethings" className="__btn_outline">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default GetStartedSuccessBox;
