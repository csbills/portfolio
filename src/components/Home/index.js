export default function MainSection() {
    return (
        <section id="home" className="w-full min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-fixed bg-center">
            <div className="max-w-6xl h-screen m-auto flex flex-col justify-center items-start">
                <div className="font-poppins">
                    <div className="text-2xl text-gray-900">
                        Hello,
                    </div>
                    <div className="text-7xl font-semibold text-gray-900">
                        I'm Caio Henrique
                    </div>
                    <div className="text-4xl text-blue-500 whitespace-nowrap overflow-hidden border-r-4 border-blue-500 animate-typing">
                        Full Stack Developer.
                    </div>
                    <div className="text-2xl text-gray-900">
                        From Brazil
                    </div>
                    <button className="outline-none px-4 py-2 rounded-md text-2xl hover:bg-blue-500 hover:text-white border-2 border-blue-500 mt-2 text-blue-500">
                        Hire me
                    </button>
                </div>
            </div>
        </section>
    )
}