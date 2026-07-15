  import Navbar from "./components/Navbar"
  import MainDashboard from "./components/MainDashboard"

  function App() {
    
    return (
      <div className="min-h-screen bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1920px] flex gap-8">
          <Navbar/>
          <MainDashboard/>
        </div>
        
      </div>
    )
  }

  export default App
