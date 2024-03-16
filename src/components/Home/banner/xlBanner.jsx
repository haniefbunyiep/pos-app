export default function XlBanner() {
  return (
    <div className="flex h-[700px] w-auto items-center justify-center">
      {/* Background */}
      <div className="relative flex h-full items-center justify-center">
        <img
          className="h-full w-[100%] object-cover lg:w-[90%]"
          src="https://www.tomoro-coffee.com/img/icon1.10800737.png"
          alt=""
        />
        {/* Text */}
        <div className="absolute lg:left-20">
          <div className="text-shuttlegray relative flex flex-col text-center lg:text-left">
            <div className="absolute -mt-[1000px]"></div>
            <h3 className="text-3xl font-bold"> HEY !</h3>
            <h3 className="mb-[40px] text-3xl font-bold">
              ENJOY YOUR COFFEE TIME
            </h3>
            <p className="font-[20px]">100% ARABICA COFFEE</p>
            <p className="mb-[40px] font-[20px]">
              FRESHLY ROASTED &amp; BREWED
            </p>
            <h3 className="text-3xl font-bold">@TOMORO</h3>
          </div>
          <div className="absolute -left-6 -top-6 sm:hidden lg:block">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAm1JREFUWEftlk9oE1EQh79JYqIHLzaK6KWigsVDlKIk6VFBvClSQRAVxaLbFsGLBz14UEERCtVsUUSlgggVC978d7PZBK0VwYteBEEIgiCCttruyEalId3NbmKy9NB3yWEmM9/+Zt68EebJkXnCwQJIdSVaqoj2r0tgt20DfpErPhVQr1ZoCYga6Q6Qo8ABoO1Pch0Us3AiFBDt6VxELH4P2A1V/af6k6loUm6OfXODaaoi2pfdj613vG+i7hGz8KD1IEZmH3DXE0TkhuTyTsnmnOYqUm7O5W9R1nrAfBLTWt1ykHJLHs/sQhj1Lo9sFjP/OpTrq0bmCbDdHUbPiFk4Hw5Ib9dG1Ha+OuYCkxfT6goFpFyi3uwgqv0uIDMkWCED1pdKW1ObtTKwHsksI8G72YFWYVX2ypA1EgpIWRUja4DmXFQ5KKY1HB5Id3eU5MdxRFKzSeU501M75Pr499BAyqocS7cTkQvAEkRuk8s/dHv8AvWI9nQmicc7kclXcmXis/eMaNziC6J9W9dgR1/8bbpJhGGm7ctyrfi+8bQNjHg10rdADlX9dQYYJRK5KFfHXjYDqKYiamxZCbEPQKJGsmcgl8TMP/4fIB+Q9DmQ0wETTDgKURq7LyM4itV1PEH0LBFK6RIiyTojPiJn7ay1FrrF8wY53LWUxfbXOZtWECq1UzJUfBPE9Z+PT2myOWc+1hMQmCLBquq3xC+G//U1sptQO4XIBqADcH6dxcftZXXyDYhpnfRLXG33BXELWF6SJbaeaCVcpB1hgriekgHrRygg9SYJ4t+QIkEC1+uzANKUZq1X9iD+86Y0vwGB/6gjAgppIwAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
