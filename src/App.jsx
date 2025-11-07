import Navbar from "./components/navbar.jsx";
import bgImage from './assets/blubkg.jpg';
import txtBx from './assets/text.svg';

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

        <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
          
        </button>
      </div>
    </div>
  )
}

export default App