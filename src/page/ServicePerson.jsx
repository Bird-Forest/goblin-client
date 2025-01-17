import cl from "./page.module.scss";
import offers from "../offers.json";
import OffersByCategory from "../components/Offers/List/OffersByCategory";

export default function ServicePerson() {
  const data = offers;
  // console.log(data);
  return (
    <div>
      <OffersByCategory data={data} />
    </div>
  );
}

{
  /* <div className={cl.servicePage}>
      <ul className={cl.listOffers}>
        {data.map((item, i) => (
          <li key={i}>
            <Offer item={item} />
          </li>
        ))}
      </ul>
</div> */
}
