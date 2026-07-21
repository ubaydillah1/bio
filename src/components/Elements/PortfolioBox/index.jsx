import Link from "next/link";
import Image from "next/image";

const PortfolioBox = (props) => {
  const { children, src, href, onClick, underDev = false } = props;

  const handleClick = (event) => {
    const { top } = event.currentTarget.getBoundingClientRect();

    window.history.replaceState(
      {
        ...window.history.state,
        portfolioReturn: { href, viewportTop: top },
      },
      "",
    );
    window.history.scrollRestoration = "manual";
    onClick?.(event);
  };

  return (
    <Link
      href={href}
      data-portfolio-href={href}
      className="w-full h-full relative group cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full aspect-video rounded-[20px] overflow-hidden relative bg-black/10">
        {underDev && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded-full shadow-lg">
              Under Development
            </span>
          </div>
        )}

        <Image
          src="/assets/img/porto-bg.webp"
          alt=""
          fill
          loading="lazy"
          sizes="(min-width: 1280px) 800px, (min-width: 768px) 70vw, 90vw"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        <div className="absolute left-1/2 top-[45%] h-[82%] w-3/4 -translate-x-1/2 -translate-y-1/2 transition duration-300 group-hover:scale-110">
          <Image
            src={src}
            alt={`${children} portfolio preview`}
            fill
            loading="lazy"
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 52vw, 68vw"
            className="object-contain"
          />
        </div>
      </div>

      <p className="mt-5 text-[24px]">{children}</p>
    </Link>
  );
};

export default PortfolioBox;
