/* eslint-disable react/prop-types */

const PortfolioBox = (props) => {
  const { children, src } = props;
  return (
    <div className="w-full h-full relative group cursor-pointer">
      <div className="w-full h-full rounded-[20px] overflow-hidden relative">
        <video
          src="./assets/video/bgVideo.mp4"
          muted
          className="group-hover:scale-125 transition duration-300"
        />

        <img
          src={src}
          alt="Portfolio"
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-3/4 transition duration-300 group-hover:scale-110"
        />
      </div>

      <p className="mt-5 text-[24px]">{children}</p>
    </div>
  );
};

export default PortfolioBox;
