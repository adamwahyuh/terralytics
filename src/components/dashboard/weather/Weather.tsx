"use client";
import WeatherSidebar from "./WeatherSidebar";
import WeatherMain from "./WeatherMain";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  return (
    <div id="weather" className="relative flex flex-col md:flex-row min-h-screen w-screen text-white p-4 gap-4 pb-20">
      {/* Background + Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/FWeather.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[#042012]/70 backdrop-blur-sm" />

      {/* Sidebar */}
      <WeatherSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <WeatherMain />
          <WeatherInfo />
        </div>
        <WeatherForecast />
      </div>
    </div>
  );
}
