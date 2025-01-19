import cl from "./page.module.scss";
import offers from "../offers.json";
import OffersByCategory from "../components/Offers/List/OffersByCategory";
import TitleService from "../components/Titles/TitleService";

export default function ServicePerson() {
  const data = offers;
  // console.log(data);
  return (
    <div className={cl.servicePage}>
      <TitleService />
      <OffersByCategory data={data} />
    </div>
  );
}
