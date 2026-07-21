import PortfolioBox from "../../Elements/PortfolioBox";
import Badge from "../../Elements/Badge";
import { useContext } from "react";
import { DarkMode } from "../../../contexts/DarkMode";
import { useLocale } from "../../../contexts/LocaleContext";

const PortfolioSection = () => {
  const { theme } = useContext(DarkMode);
  const { t, href } = useLocale();

  return (
    <section className="lg:ml-[300px] w-full mt-[40px]">
      <Badge className="lg:my-10 my-5 px-3 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className={theme == "black" ? "fill-white" : "fill-[#496e66]"}
          viewBox="0 0 256 256"
        >
          <path d="M205.66,50.32a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32-11.31l56-56A8,8,0,0,1,205.66,50.32ZM248,58.41a50.13,50.13,0,0,1-14.77,35.66L180,147.3A15.86,15.86,0,0,1,168.69,152H152v16.83a16,16,0,0,1-3.25,9.66,8.08,8.08,0,0,1-.72.83l-8,8a16,16,0,0,1-22.62,0L98.7,168.6l-77,77.06a8,8,0,0,1-11.32-11.32l77.05-77.05-18.7-18.71a16,16,0,0,1,0-22.63l8-8a8,8,0,0,1,.82-.72A16.14,16.14,0,0,1,87.17,104H104V87.3A15.92,15.92,0,0,1,108.68,76l53.24-53.23A50.43,50.43,0,0,1,248,58.41Zm-16,0a34.43,34.43,0,0,0-58.77-24.35L120,87.3V104a16,16,0,0,1-16,16H87.28L80,127.27,128.72,176l7.28-7.28V152a16,16,0,0,1,16-16h16.69l53.23-53.24A34.21,34.21,0,0,0,232,58.41Z"></path>
        </svg>
        {t.portfolio.badge}
      </Badge>

      <div className="sm:text-[48px] text-[37px] lg:max-w-[800px]">
        {t.portfolio.title}{"  "}
        <span
          className={
            theme == "black" ? "text-primary-dark" : "text-primary-light"
          }
        >
          {t.portfolio.titleHighlight}
        </span>
      </div>

      <div className="my-[40px] flex flex-col gap-[60px]">
        <PortfolioBox src="/assets/img/orbi-front.webp" href={href("/orbichat")}>
          {t.portfolio.items.orbichat}
        </PortfolioBox>

        <PortfolioBox
          src="/assets/img/straight-deal.webp"
          href={href("/straight-deal")}
        >
          {t.portfolio.items.straightDeal}
        </PortfolioBox>
        <PortfolioBox
          src="/assets/img/ravine-bg.webp"
          href={href("/ravine-coffee")}
        >
          {t.portfolio.items.ravineCoffee}
        </PortfolioBox>
        <PortfolioBox src="/assets/img/stora-bg.webp" href={href("/stora")}>
          {t.portfolio.items.stora}
        </PortfolioBox>
        <PortfolioBox
          src="/assets/img/madura-bg.webp"
          href={href("/madura-kita")}
        >
          {t.portfolio.items.maduraKita}
        </PortfolioBox>
        <PortfolioBox src="/assets/img/linea.webp" href={href("/linea")}>
          {t.portfolio.items.linea}
        </PortfolioBox>
      </div>
    </section>
  );
};

export default PortfolioSection;
