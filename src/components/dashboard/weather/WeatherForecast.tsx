'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Data suhu harian
const data = [
  { day: "Tue", temp: 26 },
  { day: "Wed", temp: 24 },
  { day: "Thu", temp: 22 },
  { day: "Fri", temp: 29 },
  { day: "Sat", temp: 27 },
  { day: "Sun", temp: 20 },
  { day: "Mon", temp: 25 },
]

export default function WeatherForecast() {
  return (
    <div className="px-12 pb-8 pt-4 w-full">
      <ResponsiveContainer width="100%" height={120}>
        <LineChart
          data={data}
          margin={{ top: 16, right: 16, left: 0, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#223046" />
          <XAxis 
            dataKey="day"
            tick={{ fill: '#adadad', fontSize: 14, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            dataKey="temp"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#ddd', fontSize: 14, fontWeight: 600 }}
            domain={['dataMin-2', 'dataMax+2']}
            width={30}
          />
          <Tooltip
            contentStyle={{ background: '#232f3e', borderRadius: 12, border: 'none' }}
            labelStyle={{ color: '#fff', fontWeight: 600 }}
            itemStyle={{ color: '#fff' }}
            cursor={{ stroke: '#6ee7b7', strokeWidth: 1 }}
          />
          <Line 
            type="monotone" 
            dataKey="temp" 
            stroke="#6ee7b7" 
            strokeWidth={3}
            dot={{ r: 5, fill: '#fff' }}
            activeDot={{ r: 8, fill: '#6ee7b7', stroke: '#fff', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-between px-2 mt-2">
        {data.map((item) => (
          <span key={item.day} className="text-[#adadad] text-sm font-medium">{item.temp}°</span>
        ))}
      </div>
    </div>
  )
}
