export default function WeatherMain() {
  return (
    <div className="flex justify-between items-start px-8 pt-6 h-[320px] relative">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" fill="white"><circle cx="10" cy="10" r="8" fill="none" stroke="white" strokeWidth="1.5"/></svg>
          <span className="text-sm text-white">Current Location ( Friday, August 8 )</span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-6xl font-bold text-white">28°</span>
          <div className="ml-3 space-y-1 text-white">
            <div className="text-xs flex items-center">
              <span className="mr-2">H</span><span>29°</span>
            </div>
            <div className="text-xs flex items-center">
              <span className="mr-2">L</span><span>20°</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-3xl text-white font-semibold">Partly cloudy<br/>with mild breeze</div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-56 h-24 bg-blue-950 bg-opacity-80 rounded-xl flex flex-col p-4 text-white">
          <span className="text-lg font-semibold">Field B</span>
          <span className="mt-2">24°</span>
          <span className="text-sm text-gray-300">Partly Cloudy</span>
        </div>
        <div className="w-56 h-24 bg-blue-950 bg-opacity-80 rounded-xl flex flex-col p-4 text-white">
          <span className="text-lg font-semibold">Field C</span>
          <span className="mt-2">16°</span>
          <span className="text-sm text-gray-300">Rain Thunder</span>
        </div>
      </div>
      <div className="absolute top-6 right-8">
        <button className="bg-black bg-opacity-60 rounded-full p-2">
          <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="16" y1="16" x2="20" y2="20" /></svg>
        </button>
      </div>
      <div className="absolute right-10 bottom-5 text-white text-sm max-w-xs">
        With real time data and advanced technology,<br />
        we provide reliable forecasts for any location<br />
        around the world.
      </div>
    </div>
  )
}
