"use client"
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.classList.add(storedTheme);
    } else {
      setTheme("dark");
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  return (
    <div>
      <header className="max-w-screen-xl mx-auto mb-12 flex justify-between items-center p-4">
        <div className="border-b-2 border-gray-600 pb-8 mb-4">
          <h1 className="text-3xl font-bold text-gray-200">DSA with Games</h1>
          <p className="text-gray-400 font-bold">Made by Aman Deep</p>
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="dark" className="text-gray-400 font-bold">
            Dark Mode
          </label>
          <input
            type="checkbox"
            id="dark"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="appearance-none relative p-1 w-14 h-7 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full transition-all duration-300 ease-in-out"
          />
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto p-4">
        <section className="flex flex-wrap gap-6 mb-8">
          {[
            { platform: "facebook", user: "@nathanf", followers: "1987", today: "12", imgSrc: "icon-facebook.svg", positive: true },
            { platform: "twitter", user: "@nathanf", followers: "1044", today: "99", imgSrc: "icon-twitter.svg", positive: true },
            { platform: "instagram", user: "@nathanf", followers: "11k", today: "1099", imgSrc: "icon-instagram.svg", positive: true },
            { platform: "youtube", user: "@nathanf", followers: "1987", today: "144", imgSrc: "icon-youtube.svg", positive: false },
          ].map((card, index) => (
            <div key={index} className={`bg-gray-800 p-8 rounded-md flex flex-col items-center gap-4 relative`}>
              <div className={`absolute top-0 left-0 w-full h-1 bg-${card.platform === "instagram" ? "gradient-to-r from-yellow-400 to-pink-600" : card.platform}-500`} />
              <div className="flex items-center gap-2">
                <img src={`https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Social%20media%20dashboard/images/${card.imgSrc}`} alt="" />
                <p className="text-gray-400 font-bold">{card.user}</p>
              </div>
              <div className="text-center">
                <span className="text-5xl text-white font-bold">{card.followers}</span>
                <p className="text-gray-400 uppercase tracking-widest">Followers</p>
              </div>
              <div className={`flex items-center gap-2 ${card.positive ? "text-lime-500" : "text-red-500"}`}>
                <img
                  src={`https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Social%20media%20dashboard/images/icon-${card.positive ? "up" : "down"}.svg`}
                  alt=""
                />
                <span className="font-bold">{card.today} Today</span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;