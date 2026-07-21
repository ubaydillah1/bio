const PortfolioBox = (props) => {
  const { children, src, href, onClick, underDev = false } = props;

  return (
    <a
      href={href}
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

        <img
          src="/assets/img/porto-bg.png"
          alt="Portfolio preview background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        <img
          src={src}
          alt={`${children} portfolio preview`}
          loading="lazy"
          decoding="async"
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-3/4 transition duration-300 group-hover:scale-110"
        />
      </div>

      <p className="mt-5 text-[24px]">{children}</p>
    </a>
  );
};

export default PortfolioBox;
