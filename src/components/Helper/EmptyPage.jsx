import cl from "./Empty.module.scss";
import yoga from "/yoga.jpg";

export default function EmptyPage() {
  return (
    <div className={cl.wrapEmpty}>
      <img src={yoga} width={480} height={480} />
    </div>
  );
}
