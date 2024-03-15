import Link from "next/link";

export default function LgNavbar() {
  return (
    <div className="border-concrete flex h-[60px] items-center justify-between border-b-2 border-dashed bg-white">
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
            <Link href="/">Home</Link>
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
        <span className="boder-2 hover:border-burnorange hover:text-burnorange flex h-[80%] w-auto items-center rounded-full border border-black px-2 text-lg">
          Download App
        </span>
      </div>
    </div>
  );
}
