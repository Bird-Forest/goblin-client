import gb from "/goblin.jpg";
import cl from "./wellcome.module.scss";

export default function Wellcome() {
  return (
    <div className={cl.wellcome}>
      {/* <h1>Ласкаво просимо</h1> */}
      <div className={cl.box}>
        <img src={gb} alt="Goblin" />
        <div className={cl.info}>
          <h2>Вітаю! Я Домовик</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            beatae non velit quidem culpa delectus perspiciatis quas nobis esse
            ratione inventore unde doloremque placeat natus? Praesentium
            veritatis unde molestiae fugit?
          </p>
        </div>
      </div>
    </div>
  );
}
