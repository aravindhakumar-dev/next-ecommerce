import Link from "next/link";
import { FaUser, FaShoppingCart } from "react-icons/fa";

export default function NavIcons() {
  return (
    <div className="account__wrap">
      <div className="account d-flex align-items-center">
        <div className="user__icon">
          <Link href="#">
            <FaUser />
          </Link>
        </div>
        <Link href="/register.html" className="acc__cont">
          <span className="text-white"> My Account </span>
        </Link>
      </div>
      <div className="cart d-flex align-items-center">
        <span className="cart__icon">
          <FaShoppingCart />
        </span>
        <Link href="#" className="c__one">
          <span className="text-white"> ₹0.00 </span>
        </Link>
        <span className="one"> 0 </span>
      </div>
    </div>
  );
}
