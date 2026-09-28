import { useEffect, useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { useLocation } from "react-router";

const searchOptions = [
  { value: "term", label: "اصطلاحنامه" },
  { value: "encyclopedia", label: "فرهنگ نامه" },
  { value: "index", label: "نمایه" },
  { value: "doc", label: "کتابخانه" },
];

useLocation;

const Header = () => {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState("term");
  let location = useLocation();

  const lastRoute = location.pathname;

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <header className="w-[90%] max-w-4xl mx-auto mt-18 mb-8 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-sm ">
          {lastRoute === "/doc"
            ? "کتابخانه"
            : lastRoute === "/index"
              ? "نمایه"
              : lastRoute === "/encyclopedia"
                ? "فرهنگنامه"
                : lastRoute === "/term"
                  ? "اصطلاحنامه"
                  : "پایگاه مدیریت اطلاعات علوم انسانی"}
        </h1>
        <p className="mt-4 text-sm md:text-base text-white/55">
          {lastRoute === "/doc"
            ? "گنجینه منابع علوم اسلامی"
            : lastRoute === "/index"
              ? "گنجینه نمایه های علوم اسلامی"
              : lastRoute === "/encyclopedia"
                ? "گنجینه فرهنگنامه های علوم اسلامی"
                : lastRoute === "/term"
                  ? "گنجینه اصطلاحات علوم اسلامی"
                  : "جستجو در منابع و دانشنامه‌های علوم اسلامی"}
        </p>

        <div className="mt-8 flex flex-col md:flex-row-reverse items-stretch gap-3 rounded-2xl border border-white/15 bg-white/[0.07] p-2 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="عبارت مورد نظرتان را وارد کنید..."
              className="w-full h-14 rounded-xl border border-white/10 bg-black/25 px-5 text-right text-white placeholder:text-white/35 outline-none transition-all focus:border-white/30 focus:bg-black/35 focus:ring-2 focus:ring-white/10"
              dir="rtl"
            />
          </div>

          <div className="w-full md:w-44 flex items-center justify-center ">
            <select
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="appearance-none w-full h-14 rounded-xl border border-white/10 bg-black/2 text-right text-white outline-none transition-all focus:border-white/30 focus:bg-black/35 focus:ring-2 focus:ring-white/10 cursor-pointer"
              dir="rtl"
              aria-label="محدوده جستجو"
            >
              {searchOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-[#00d9ff13] text-white "
                >
                  {option.label}
                </option>
              ))}
            </select>
            <FiChevronDown
              className="cursor-pointer transition-all duration-150 ease-in-out hover:rotate-90  text-white/50"
              size={18}
            />
          </div>

          <button
            type="button"
            aria-label="جستجو"
            className="h-14 w-full md:w-14 shrink-0 rounded-xl border border-white/15 bg-white text-black flex items-center justify-center transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-95 shadow-lg"
          >
            <FiSearch size={21} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
