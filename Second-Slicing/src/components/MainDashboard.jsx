import Header from "./main/Header"
import MainContent from "./main/MainContent/MainContent"

const MainDashboard = () => {
  return (
    <div className="flex gap-8 flex-col">
      <Header/>
      <MainContent/>
    </div>
  )
}

export default MainDashboard