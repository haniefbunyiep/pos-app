import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MdNavbar() {
  return (
    <div className="border-concrete relative flex h-[60px] items-center justify-center border-b-2 border-dashed bg-white">
      <div className="absolute left-10 flex">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="drawer-button">
              <RxHamburgerMenu size={25} />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="text-burnorange menu min-h-full w-80 bg-base-200 p-4 font-bold">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Our Teams</a>
              </li>
              <li>
                <a>Download Now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Navbar Logo */}
      <div className="absolute flex h-[80%] w-[30%] items-center justify-center">
        <Link href="/">
          <img
            src="https://www.tomoro-coffee.com/img/icon7.2a9d4c28.png"
            alt=""
            className="h-10 w-auto"
          />
        </Link>
      </div>
    </div>
  );
}
