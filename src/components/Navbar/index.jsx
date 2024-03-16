import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <nav>
      {/* Tablet and below */}
      <div className="lg:hidden">
        <div className="relative flex h-[60px] items-center justify-center border-b-2 border-dashed border-concrete bg-white">
          <div className="absolute left-10 z-50 flex">
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
                <ul className="menu min-h-full w-80 bg-base-200 p-4 font-bold text-burnorange">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/aboutus">About Us</Link>
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
      </div>
      {/* Laptop and above */}
      <div className="hidden lg:block">
        <div className="flex h-[60px] items-center justify-between border-b-2 border-dashed border-concrete bg-white">
          {/* Navbar Logo */}
          <div className="flex h-[80%] w-[30%] items-center justify-center">
            <Link href="/">
              <img
                src="https://www.tomoro-coffee.com/img/icon7.2a9d4c28.png"
                alt=""
                className="h-10 w-auto"
              />
            </Link>
          </div>
          {/* Navbar menu */}
          <div className="flex h-[80%] w-[40%] items-center justify-center text-nowrap">
            <ul className=" flex gap-9 text-lg">
              <li>
                <Link href="/" className="hover:text-burnorange">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-burnorange">
                  About us
                </Link>
              </li>
              <li>
                <a className="hover:text-burnorange">Products</a>
              </li>
              <li>
                <a className="hover:text-burnorange">Our Teams</a>
              </li>
            </ul>
          </div>
          <div className="flex h-[80%] w-[30%] items-center justify-center">
            <span className="boder-2 flex h-[80%] w-auto items-center rounded-full border border-black px-2 text-lg hover:border-burnorange hover:text-burnorange">
              Download App
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
