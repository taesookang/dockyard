import React from "react";

interface Props {}

export const Section5: React.FC<Props> = () => {
  return (
    <section id="theme-2">
      <div className="pt-[15vw] pb-[10vw] flex flex-col items-center justify-center text-[16px] tracking-wide leading-[24px]">
        <div className="mb-[1.5vw]">put the social in dockyard social</div>
        <div className="insta-section-heading">
          IF YOU REALLY LIKE US MAYBE YOU
        </div>
        <a href="" className="insta-section-heading">
          COULD FOLLOW OUR <span className="blue-stroke">INSTA?</span>{" "}
        </a>
        <div>Or...</div>
        <div className="insta-section-heading">JOIN OUR MAILING LIST?</div>
        <div className="w-[40%] h-[60px] my-[2%] border-2 border-brand-purple-text">
          <form className="flex w-full h-full" action="">
            <input
              className="w-full bg-transparent px-[12px] py-[8px] placeholder:text-brand-purple-text"
              type="email"
              placeholder="Your email"
              required
            />
            <button
              className="w-1/5 h-full bg-brand-purple-text text-brand-purple-bg"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div>We promise we won't spam your inbox with loads of cool</div>
        <div>deals and discounts and super awesome news.</div>
        <div>(unless you want us to?)</div>
      </div>
    </section>
  );
};

export default Section5;
