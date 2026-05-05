import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header className="w-full text-[#112945] flex items-center justify-between 
        px-4 sm:px-8 md:px-16 lg:px-[200px] py-4">

            {/* LOGO */}
            <div className='flex items-center gap-2 cursor-pointer'>
                <img 
                    src={logo} 
                    alt="logo" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]" 
                />
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
                    irorun
                </h1>
            </div>

            {/* NAV */}
            <nav className="
                hidden sm:flex 
                gap-4 md:gap-6 
                font-medium 
                text-sm sm:text-base
            ">
                <a href="#" className='hover:text-[#0082F3] transition'>Home</a>
                <a href="#" className='hover:text-[#0082F3] transition'>About</a>
                <a href="#" className='hover:text-[#0082F3] transition'>Contact</a>
                <a href="#" className='hover:text-[#0082F3] transition'>Privacy</a>
            </nav>

        </header>
    )
}