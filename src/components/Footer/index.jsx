export default function Footer() {
  return (
    <>
      {/* Sm */}
      <div className="md:hidden">
        <footer className="flex h-[70px] flex-col items-center justify-center gap-1 bg-alabaster ">
          <span className="flex items-center justify-center">
            ©️2022 TOMORO COFFEE. All rights reserved.
          </span>
          <span className="flex items-center justify-center">
            Contact us hitomoro@tomoro-coffee.com
          </span>
        </footer>
      </div>
    </>
  );
}
