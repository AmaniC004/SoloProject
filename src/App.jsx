import Navbar from "./components/navbar.jsx";
import bgImage from './assets/blubkg.jpg';
import txtBx from './assets/text.svg';
import arrBtn from './assets/Button.svg';
import timeBtn from './assets/time.svg';
import doctor from './assets/doctor.svg';

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{backgroundImage: `url(${bgImage})`}}>
      <Navbar />
      
      {/* Optional: Add some content below to see the navbar better */}
      <div className="p-8">
        <img src={txtBx} alt="Welcome Text" className="mx-auto mt-20" />
        <h1 className="text-4xl font-bold mb-4 text-white">More Than Medicine</h1>
        <h1 className="text-4xl font-bold mb-4 text-white">Its Personal</h1>
        <p className="text-white">Wellness Hospital will always serve you wholeheartedly. Health is a priority.</p>
        <div className="flex flex-col sm:flex-row">
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
            <a href="#appointments">Book Appointment<img src={arrBtn}></img></a>
          </button>

          <a className="text-sm font-normal text-white text-center">or</a>

          <button className="mt-6 px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors">
            <a href="#consultation">Contact Us</a>
          </button>
        </div>

        <div className="mt-10">
          <img src={timeBtn} alt="Operating Hours" className="mx-auto" /> <br/>
          <p className="text-white text-center">Mon - Fri: 8:00 AM - 8:00 PM <br/> Sat - Sun: 9:00 AM - 3:00 PM</p>
        </div>

        <div className="h-10"></div>
          <img src={doctor} alt="Doctor" className="mx-auto" />
      </div>
    </div>
  )
}

export default App