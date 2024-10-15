import React from 'react';
import NavLeaut from '../leaut/NavLeaut';
import ic_Pin from '../assets/images/ic_Pin.svg';
import iPhone from '../assets/images/iPhone13Pro.png';
import { useThemeLanguage } from '../context/ThemeLanguageContext'; 

function Home() {
  const { language, isDarkMode } = useThemeLanguage();

 
  const texts = {
    english: {
      securitySolution: 'A SECURITY SOLUTION',
      heading: 'Keep track of your loved ones in real time!',
      description:
        'We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities.',
      joinWaitlist: 'Join Our Waitlist!',
      notify: 'Be the first to get notified when the product is ready!',
      emailPlaceholder: 'Your email address',
      buttonText: 'Join List!',
    },
    uzbek: {
      securitySolution: 'XAVFSIZLIK YECHIMI',
      heading: 'Sevganlaringizni real vaqt rejimida kuzatib boring!',
      description:
        "Dunyo bo'ylab xavfsizlik darajasining yuqoriligini sezdik va biz texnologiyadan qanday qilib bu xavfsizlikni oshirishda foydalanish mumkinligini o'ylab ko'rdik.",
      joinWaitlist: 'Kutish ro\'yxatiga qo\'shiling!',
      notify: 'Mahsulot tayyor bo\'lganda birinchi bo\'lib xabar oling!',
      emailPlaceholder: 'Sizning elektron pochta manzilingiz',
      buttonText: 'Ro\'yxatdan o\'ting!',
    },
    russian: {
      securitySolution: 'РЕШЕНИЕ БЕЗОПАСНОСТИ',
      heading: 'Следите за своими близкими в реальном времени!',
      description:
        'Мы заметили высокий уровень небезопасности в мире, и подумали, как можно использовать технологии для борьбы с этими угрозами.',
      joinWaitlist: 'Присоединяйтесь к нашему списку ожидания!',
      notify: 'Будьте первыми, кто получит уведомление, когда продукт будет готов!',
      emailPlaceholder: 'Ваш адрес электронной почты',
      buttonText: 'Присоединиться к списку!',
    },
  };

  return (
    <>
      <NavLeaut />

      <div className={`container mx-auto max-w-7xl rounded-[45px] ${isDarkMode ? 'bg-black text-white' : 'bg-blue-100 text-black'}`}>
        <div className={`p-24 rounded-[45px]  ${isDarkMode ? 'bg-gray-800 ' : 'bg-blue-100'}`}>
          <div className='flex justify-between items-center'>
            <div className='w-[548px]'>
              <h4 className='text-[14px] mb-5 text-gray-400'>{texts[language].securitySolution}</h4>
              <h1 className='text-[45px] font-bold mb-6'>{texts[language].heading}</h1>
              <hr className='mb-[18px]' />
              <div className='flex gap-8 items-center mb-[71px]'>
                <img src={ic_Pin} alt='Location icon' />
                <p className='w-[461px] leading-6 text-[#00085E] text-xl font-semibold'>{texts[language].description}</p>
              </div>
              <h2 className='text-[45px] font-bold mb-[13px]'>{texts[language].joinWaitlist}</h2>
              <p className='text-xl font-[500] mb-[33px]'>{texts[language].notify}</p>
              <form className='rounded-[40px] p-2 bg-white w-[528px] h-[70px] flex justify-between items-center'>
                <input className='outline-none bg-transparent px-3' type='text' placeholder={texts[language].emailPlaceholder} />
                <button className='bg-blue-600 text-white px-5 py-4 rounded-[40px]'>
                  {texts[language].buttonText}
                </button>
              </form>
            </div>
            <div>
              <img src={iPhone} alt='iPhone' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
