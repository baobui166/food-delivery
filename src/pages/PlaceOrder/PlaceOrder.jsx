import styles from "./PlaceOrder.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function PlaceOrder() {
  return <div className={cx("container")}></div>;
}

export default PlaceOrder;
