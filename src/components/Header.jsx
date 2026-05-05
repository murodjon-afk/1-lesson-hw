import logo from '../assets/logo.png'

export default function Header() {
    return (
        <>
            <header className="w-full text-[#112945]   flex items-center justify-between px-[200px] pt-[25px]">
                
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
                    <h1 className='text-[#112945] text-4xl font-semibold'>irorun</h1>
                </div>

                <nav className="flex gap-6 font-medium">
                    <a href="#" className='hover:text-[#0082F3]'>Home</a>
                    <a href="#" className='hover:text-[#0082F3]'>About</a>
                    <a href="#" className='hover:text-[#0082F3]'>Contact</a>
                    <a href="#" className='hover:text-[#0082F3]'>Privacy</a>
                </nav>

            </header>
        </>
    )
}