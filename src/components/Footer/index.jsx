export default function Footer() {
  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden md:hidden">
        <footer className="flex h-[70px] flex-col items-center justify-center gap-1 bg-alabaster ">
          <span className="flex items-center justify-center">
            ©️2022 TOMORO COFFEE. All rights reserved.
          </span>
          <span className="flex items-center justify-center">
            Contact us&nbsp;
            <a
              href="mailto:hitomoro@tomoro-coffee.com"
              className="text-burnorange"
            >
              hitomoro@tomoro-coffee.com
            </a>
          </span>
        </footer>
      </div>
      {/* Sm */}
      <div className="mobile:hidden md:hidden">
        <footer className="flex h-[70px] flex-col items-center justify-center gap-1 bg-alabaster ">
          <span className="flex items-center justify-center">
            ©️2022 TOMORO COFFEE. All rights reserved.
          </span>
          <span className="flex items-center justify-center">
            Contact us&nbsp;
            <a
              href="mailto:hitomoro@tomoro-coffee.com"
              className="text-burnorange"
            >
              hitomoro@tomoro-coffee.com
            </a>
          </span>
        </footer>
      </div>
      {/* Default */}
      <div className="mobile:hidden sm:hidden md:block">
        <footer className="flex h-[70px] items-center justify-center bg-alabaster">
          <span>
            ©️2022 TOMORO COFFEE. All rights reserved. Contact us {""}
            <a
              href="mailto:hitomoro@tomoro-coffee.com"
              className="text-burnorange"
            >
              hitomoro@tomoro-coffee.com
            </a>
          </span>
        </footer>
      </div>
    </>
  );
}
