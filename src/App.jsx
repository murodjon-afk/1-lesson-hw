import Header from './components/Header'
import heroImg from './assets/Frame.png'
import heroImg2 from './assets/tg.png'
import png1 from './assets/1.png'
import png2 from './assets/2.png'
import png3 from './assets/3.png'
import Footer from './components/Footer'
function App() {
  return (
    <main>
      <Header />
          {/* 1-секция */}
      <section className="w-full min-h-[70vh] flex items-center ">
        <div className="w-[85%] px-[100px]  mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          <div>
            <h1 className="text-7xl font-normal text-[#112945] leading-tight">
              Get Instant <br /> Loans
            </h1>

            <p className="mt-4  text-gray-500 text-2xl">
              Get instant loans with ease on your smartphone.
            </p>

            <div className="flex gap-4 mt-6">

              <button className="bg-[#EEEAFF] w-[200px] px-5 py-3 rounded-lg hover:scale-105 transition cursor-pointer text-left">
                <p className="text-sm text-[#545659]">Get it on</p>
                <h2 className="text-[#582EFF] font-bold text-lg">Play Market</h2>
              </button>

              <button className="bg-black text-white px-5 py-3 rounded-lg hover:scale-105 transition w-[200px] cursor-pointer text-left">
                <p className="text-sm">Download on the</p>
                <h2 className="font-bold text-lg">App Store</h2>
              </button>

            </div>
          </div>

         
          <div className="flex justify-center">
            <img src={heroImg} alt="hero" className="max-w-full h-auto" />
          </div>

        </div>
      </section>
      {/* 2-Секция */}
      <section className="w-full min-h-[70vh] flex items-center ">
        <div className="w-[85%] px-[100px]  mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

       
         
          <div className="flex justify-center w-[375px] h-[400px] ">
            <img src={heroImg2} alt="hero" className=" h-auto" />
          </div>


             <div>
            <h1 className="text-7xl font-normal text-[#112945] leading-tight">
              Save on your own  <br /> terms
            </h1>

            <p className="mt-4  text-gray-500 text-2xl">
Savings give you financial

<br />options
            </p>

            <div className="flex gap-4 mt-6">

              <button className="bg-[#EEEAFF] w-[200px] px-5 py-3 rounded-lg hover:scale-105 transition cursor-pointer text-left">
                <p className="text-sm text-[#545659]">Get it on</p>
                <h2 className="text-[#582EFF] font-bold text-lg">Play Market</h2>
              </button>

              <button className="bg-black text-white px-5 py-3 rounded-lg hover:scale-105 transition w-[200px] cursor-pointer text-left">
                <p className="text-sm">Download on the</p>
                <h2 className="font-bold text-lg">App Store</h2>
              </button>

            </div>
          </div>


        </div>
       

      </section>
    {/* 3-секция */}

      <section className="w-full min-h-[70vh] flex flex-col  items-center ">

        <h1 className='font-normal text-7xl text-[#112945]'>How it works</h1>
       <div className="w-[85%] mx-auto px-6 flex justify-center items-center gap-30">

  <div className="bg-white  h-[400px] w-[350px] shadow-md  p-6 flex flex-col items-center text-center hover:shadow-xl transition flex gap-[50px] py-[50px] my-[50px] border-t-[12px] border-[#582EFF]">
    <img src={png2} alt="" className="w-[73px] h-[80px] mb-4" />
     <div className="">
      <h2 className="text-xl font-semibold mb-2">Set up an account</h2>
    <p className="text-gray-500">
      Download the app for free, sign up and verify your account.
    </p>
     </div>
  </div>

  <div className="bg-white  h-[400px] w-[350px] shadow-md  p-6 flex flex-col items-center text-center hover:shadow-xl transition flex gap-[50px] py-[50px] my-[50px] border-t-[12px] border-[#FF814A]">
    <img src={png1} alt="" className="w-20 h-20 mb-4" />
     <div className="">
      <h2 className="text-xl font-semibold mb-2">Apply for a loan</h2>
    <p className="text-gray-500">
Apply for a loan and our technology will run a credit score  and decide if you are qualified.     </p>
     </div>
  </div>

    <div className="bg-white  h-[400px] w-[350px] shadow-md  p-6 flex flex-col items-center text-center hover:shadow-xl transition flex gap-[50px] py-[50px] my-[50px] border-t-[12px] border-[#31C5A1]">
    <img src={png3} alt="" className="w-20 h-20 mb-4" />
     <div className="">
      <h2 className="text-xl font-semibold mb-2">Get your cash</h2>
    <p className="text-gray-500">
If you qualify, your loan will be disbursed to your wallet.    </p>
     </div>
  </div>
</div>
      </section>

      <Footer></Footer>
    </main>
  )
}

export default App