"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  MdClose,
  MdOutlineSpaceDashboard,
  MdMenuBook,
  MdOutlineSettings,
  MdOutlinePayments,
} from "react-icons/md";
import { toast } from "react-toastify";
import { UserContext } from "~/support/context/userContext";
import { useContext, useEffect } from "react";
import axios from "axios";

export default function Navbar() {
  const { setUserData } = useContext(UserContext);

  const handleKeepLogin = async () => {
    try {
      let userLocalStorage = localStorage.getItem("userLocalStorage");
      userLocalStorage = JSON.parse(userLocalStorage);

      const keepLogin = await axios.get(
        `http://localhost:8000/users/${userLocalStorage.id}`,
      );
      setUserData({
        id: keepLogin.data.id,
        username: keepLogin.data.username,
        role: keepLogin.data.roleId,
      });
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    handleKeepLogin();
  }, []);

  const pathname = usePathname();
  return (
    <nav>
      <div className="relative flex h-[60px] items-center justify-center border-b-2 border-dashed border-concrete bg-pampas">
        <div className="absolute left-10 z-50 flex">
          {pathname !== "/" ? (
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
                <ul className="menu relative min-h-full w-80 bg-base-200 p-4 font-bold text-shuttlegray">
                  <li className="hover:text-java flex pt-10">
                    <Link href="/">
                      {" "}
                      <label htmlFor="">
                        <MdOutlineSpaceDashboard size={25} />
                      </label>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-java" href="">
                      {" "}
                      <label htmlFor="">
                        <MdMenuBook size={25} />
                      </label>
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-java" href="">
                      {" "}
                      <label htmlFor="">
                        <MdOutlinePayments size={25} />
                      </label>
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-java" href="">
                      {" "}
                      <label htmlFor="">
                        <MdOutlineSettings size={25} />
                      </label>
                      Settings
                    </Link>
                  </li>

                  {/* Close button */}
                  <input id="my-drawer" type="checkbox" className="hidden" />
                  <div className="absolute right-5">
                    <label htmlFor="my-drawer">
                      <MdClose size={25} className="text-black" />
                    </label>
                  </div>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
        {/* Navbar Logo */}
        <div className="absolute flex h-[80%] w-[30%] items-center justify-center">
          <Link href="/">
            <img
              src="https://portal-gcs-cdn.majoo.id/v2/logo/main-logo-hires.png"
              alt=""
              className="h-9 w-auto"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
