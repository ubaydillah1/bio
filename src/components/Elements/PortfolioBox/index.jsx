/* eslint-disable react/prop-types */
import { Github } from "lucide-react";

const PortfolioBox = (props) => {
  const { children, src, onClick, githubLink, underDev = false } = props;

  return (
    <div
      className="w-full h-full relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-full rounded-[20px] overflow-hidden relative">
        {underDev && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded-full shadow-lg">
              Under Development
            </span>
          </div>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-6 left-6 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-black/80 transition"
          >
            <Github className="text-white" size={24} />
          </a>
        )}

        <img
          src="./assets/img/porto-bg.png"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
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
