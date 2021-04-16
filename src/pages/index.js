import Header from "../components/Header";
import About from '../components/About';
import MainSection from '../components/Home';

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <About />

      <section id="skills" className="w-full min-h-screen bg-blue-100 bg-cover bg-no-repeat bg-fixed bg-center">
        <div className="max-w-6xl h-screen m-auto flex flex-col justify-center items-start">
          <div className="font-poppins">
          </div>
        </div>
      </section>
    </>
  )
}
