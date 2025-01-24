import cl from "./page.module.scss";
import offers from "../offers.json";
import OffersByCategory from "../components/Offers/List/OffersByCategory";
import TitleService from "../components/Titles/TitleService";

export default function ServiceHome() {
  const data = offers;
  return (
    <div className={cl.servicePage}>
      <TitleService />
      <OffersByCategory data={data} />
    </div>
  );
}
