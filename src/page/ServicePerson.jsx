import EmptyPage from "../components/Helper/EmptyPage";
import Offer from "../components/Offers/Offer";
import cl from "./page.module.scss";
import offers from "../offers.json";

export default function ServicePerson() {
  const data = offers;
  // console.log(data);
  return (
    <div className={cl.servicePage}>
      <ul className={cl.listOffers}>
        {data.map((item, i) => (
          <li key={i}>
            <Offer item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
