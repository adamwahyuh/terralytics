export default function WeatherSidebar() {
  return (
    <div className="w-72 bg-black bg-opacity-70 rounded-2xl m-4 p-6 flex flex-col text-white shadow xl:min-h-[90vh]">
      <div>
        <span className="text-lg font-bold">Weather Conditions</span>
        <div className="text-5xl font-bold mt-4">72%</div>
        <div className="text-sm text-gray-300 mb-2">Farming Optimal</div>
        <div className="bg-green-600 w-fit px-3 py-1 rounded-full text-xs font-semibold mb-8">Ideal Conditions</div>
      </div>
      <div className="space-y-6">
        <WeatherSidebarStat name="Temperature" value="26°C" status="Optimal" percent={78} color="green" />
        <WeatherSidebarStat name="Humidity" value="65%" status="Good" percent={65} color="blue" />
        <WeatherSidebarStat name="Wind Speed" value="12 km/h" status="Moderate" percent={60} color="yellow" />
      </div>
    </div>
  )
}

type StatProps = {
  name: string
  value: string
  status: string
  percent: number
  color: 'green' | 'blue' | 'yellow'
}

function WeatherSidebarStat({ name, value, status, percent, color }: StatProps) {
  const barColor = {
    green: 'bg-green-500',
    blue: 'bg-blue-400',
    yellow: 'bg-yellow-300',
  }[color]
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-sm">{name}</span>
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${barColor} text-black ml-2`}>
          {status}
        </span>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-xl font-semibold">{value}</span>
        <span className="text-xs text-gray-400">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full my-1">
        <div className={`${barColor} h-2 rounded-full`} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  )
}
