import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="w-full">

      <div className="bg-[#31C5A1] w-full py-20 px-6 flex flex-col items-center justify-center gap-10 text-center">

        <h1 className="text-3xl md:text-4xl font-normal text-white leading-tight">
          Get it on Play Store and download on <br />
          the App Store
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">

          <button className="bg-white w-[200px] px-5 py-3 rounded-lg hover:scale-105 transition cursor-pointer text-left">
            <p className="text-sm text-[#31C5A1]">Get it on</p>
            <h2 className="text-[#31C5A1] font-bold text-lg">Play Market</h2>
          </button>

          <button className="bg-black text-white px-5 py-3 rounded-lg hover:scale-105 transition w-[200px] cursor-pointer text-left">
            <p className="text-sm">Download on the</p>
            <h2 className="font-bold text-lg">App Store</h2>
          </button>

        </div>
      </div>

      <div className="w-full bg-white py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-600">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="logo" className="w-9 h-9" />
              <h2 className="text-[#112945] text-xl font-semibold">
                irorun
              </h2>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#112945] mb-3">Office</h3>
            <p>4 Perez Drive, Lekki</p>
            <p>Phase 1, Lagos.</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#112945] mb-3">Contact</h3>
            <p>hello@irorun.com</p>
            <p>+234 809 666 8877</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#112945] mb-3">
              Powered by YesCredit Limited.
            </h3>
            <p>
              licensed as a Money Lender by the Lagos State Government of Nigeria.
            </p>
          </div>

        </div>
      </div>

    </footer>
  )
}