import WeatherSidebar from './WeatherSidebar'
import WeatherMain from './WeatherMain'
import WeatherForecast from './WeatherForecast'

export default function Weather() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-b from-blue-900 to-[#3e3e3e] relative">
      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar */}
        <div className="bg-amber-600 w-full md:w-1/4 h-24 md:h-auto">
        </div>

        <div className="flex flex-col flex-1">
          {/* Atas */}
          <div className="flex flex-col md:flex-row flex-1">
            <div className="bg-indigo-600 flex-1">
            </div>
            <div className="flex flex-col flex-1">
              <div className="bg-green-300 flex-1">
              </div>
              <div className="bg-green-800 flex-1"></div>
              <div className="bg-green-900 flex-1"></div>
            </div>
          </div>

          {/* Bawah */}
          <div className="bg-amber-700 h-24 md:h-1/3 ">
            Halo
          </div>
        </div>
      </div>
    </div>
  )
}
