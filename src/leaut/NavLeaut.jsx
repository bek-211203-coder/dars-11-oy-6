import React from 'react';
import search from '../assets/images/Search.svg';
import moon from '../assets/images/moon.svg';
import sun from '../assets/images/sun.svg';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
function NavLeaut() {
  const { language, isDarkMode, toggleTheme, handleLanguageChange } = useThemeLanguage(); 

  
  const texts = {
    english: {
      assets: 'Assets',
      creators: 'Creators',
      careers: 'Careers',
      goPro: 'Go Pro',
      searchPlaceholder: 'Search',
    },
    uzbek: {
      assets: 'Aktivlar',
      creators: 'Yaratuvchilar',
      careers: 'Kasb-hunar',
      goPro: 'Pro ga o\'tish',
      searchPlaceholder: 'Qidiruv',
    },
    russian: {
      assets: 'Активы',
      creators: 'Создатели',
      careers: 'Карьера',
      goPro: 'Перейти на Pro',
      searchPlaceholder: 'Поиск',
    },
  };

  return (
    <div className={`shadow-xl p-3 mb-10 ${isDarkMode ? 'bg-black text-white' : 'bg-white'}`}>
      <div className='container mx-auto max-w-7xl'>
        <nav className='flex justify-between items-center'>
          <h1 className='cursor-pointer font-bold'>YOUR LOGO</h1>

          <div className='flex gap-5 items-center'>
            <a href='#'>{texts[language].assets}</a>
            <a href='#'>{texts[language].creators}</a>
            <a href='#'>{texts[language].careers}</a>
            <a href='#'>{texts[language].goPro}</a>
          </div>

          <form>
            <div className='flex gap-4 items-center p-2 w-[260px] rounded-[30px] bg-gray-200'>
              <img src={search} alt='Search' width={24} height={24} />
              <input
                type='text'
                placeholder={texts[language].searchPlaceholder}
                className='bg-transparent outline-none text-gray-500'
              />
            </div>
          </form>


          <div className='flex gap-4 items-center'>
            <select
              id='language'
              name='language'
              className='outline-none bg-transparent '
              value={language}
              onChange={handleLanguageChange}
            >
              <option value='uzbek'>O'zbekcha</option>
              <option value='russian'>Русский</option>
              <option value='english'>English</option>
            </select>


            <button
              onClick={toggleTheme}
              className='p-2 bg-gray-200 rounded-full flex items-center justify-center'
            >
              <img
                src={isDarkMode ? moon : sun}
                alt={isDarkMode ? 'Moon' : 'Sun'}
                className='w-6 h-6'
              />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavLeaut;
