import cl from "./page.module.scss";
import CitySelector from "../components/Selectors/CitySelector";
import Wellcome from "../components/Wellcome/Wellcome";
import ButtonsMain from "../components/Buttons/ButtonsMain";
import { useState } from "react";
// import Overlay from "../components/Overlay/Overlay";
// import CreateReview from "../components/Modal/CreateReview";

export default function HomePage() {
  const [city, setCity] = useState({});

  console.log(city);

  const setSelectedCity = (option) => {
    setCity(option);
  };
  return (
    <section className={cl.main}>
      {/* <Overlay content={<CreateReview />} /> */}
      <Wellcome />
      <CitySelector setSelectedCity={setSelectedCity} />
      <ButtonsMain city={city} />
    </section>
  );
}
