import './App.css';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'


function App() {
  return (

    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">

      <SidebarIcon icon={<FaFire size="28" />} />
      <SidebarIcon icon={<BsPlus size="28" />} />
      <SidebarIcon icon={<BsFillLightningFill size="28" />} />
      <SidebarIcon icon={<FaPoo size="28" />} />

    </div>
  );
}

const SidebarIcon = ({ icon, text = 'tooltip' }) => (
  <div className='sidebar-icon group'>
    {icon}

    <span className='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>
)

export default App;
