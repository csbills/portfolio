export default function About() {
    return (
        <section id="about" className="w-full min-h-screen flex items-center bg-gray-900">
            <div className="rounded-xl max-w-6xl w-full h-auto m-auto bg-gray-800 font-ubuntu flex">
                <div className="p-8 flex flex-col justify-center items-start max-w-xl w-full">
                    <div className="text-2xl text-gray-300">Academic formation</div>
                    <div className="mt-8 flex flex-row">
                        <div>
                            <img src="/wyden.jfif" alt="wyden" width="64" height="64" />
                        </div>
                        <div className="flex flex-col text-gray-50 mx-4">
                            <span className="text-xl font-bold">Wyden Educacional</span>
                            <span className="text-md">Bachelor of Engineering - BE, Computer Engineering.</span>
                            <span className="text-xs font-light">2020 - 2025</span>
                            <div className="mt-4 text-xs font-light flex flex-col">
                                <span>- Object Oriented Programming</span>
                                <span>- DB : SQL</span>
                                <span>- Data structure</span>
                                <span>- Game Programming : Unity 3D, Unreal Engine</span>
                                <span>- Mobile Applications : Android, IOS</span>
                                <span>- Back-End : PHP, Java, .NET</span>
                                <span>- Front-End : Java Script, HTML5, CSS</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-row">
                        <div>
                            <img src="/cotuca.jfif" alt="wyden" width="64" height="64" />
                        </div>
                        <div className="flex flex-col text-gray-50 mx-4">
                            <span className="text-xl font-bold">Colégio Técnico de Campinas</span>
                            <span className="text-md">Technical Course, Data Processing, Information Technology.</span>
                            <span className="text-xs font-light">2015 - 2017</span>
                            <div className="mt-4 text-xs font-light flex flex-col">
                                <span>- Object Oriented Programming</span>
                                <span>- DB : SQL</span>
                                <span>- Data structure</span>
                                <span>- Game Programming : Unity 3D, Unreal Engine</span>
                                <span>- Mobile Applications : Android, IOS</span>
                                <span>- Back-End : PHP, Java, .NET</span>
                                <span>- Front-End : Java Script, HTML5, CSS</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-row">
                        <div>
                            <img src="/school.png" alt="wyden" width="64" height="64" />
                        </div>
                        <div className="flex flex-col text-gray-50 mx-4">
                            <span className="text-xl font-bold">Escola Estadual Dom Barreto</span>
                            <span className="text-md">High School Diploma.</span>
                            <span className="text-xs font-light">2012 - 2015</span>
                        </div>
                    </div>
                </div>

                <div className="p-8 flex flex-col items-end max-w-xl w-full text-gray-300">
                    <div className="flex flex-row items-center justify-center p-4 border-b">
                        <span>Caio Henrique G Pereira</span>
                        <img src="/perfil.jfif" width="72" height="72" className="rounded-full ml-8" />
                    </div>

                    <span>Caio Henrique G Pereira</span>

                </div>
            </div>
        </section>
    )
}