import WeatherSidebar from './WeatherSidebar'
import WeatherMain from './WeatherMain'
import WeatherForecast from './WeatherForecast'

export default function Weather() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-b from-blue-900 to-[#3e3e3e] relative">
      <WeatherSidebar />
      <div className="flex-1 flex flex-col justify-between relative">
        <WeatherMain />
        <WeatherForecast />
      </div>
    </div>
  )
}
