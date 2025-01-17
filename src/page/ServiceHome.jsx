import Offer from "../components/Offers/Item/Offer";
import cl from "./page.module.scss";
import offers from "../offers.json";

export default function ServiceHome() {
  const data = offers;
  return (
    <div className={cl.servicePage}>
      <ul>
        {data.map((item, i) => (
          <li key={i}>
            <Offer item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
