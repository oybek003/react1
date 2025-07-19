import React from 'react';
import img from '../assets/3.png';
import img1 from '../assets/04.png';
import img2 from '../assets/4.png';

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center">

      {/* Первый блок с кнопкой и заголовком */}
      <div className="relative w-full max-w-[1351px]">
        <img src={img} alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 w-full max-w-[1351px]" />
        <div className="relative z-10 mt-[280px]">
          <button className="shadow-2xl shadow-cyan-50 w-[70px] h-[70px] rounded-full bg-blue-500 text-white text-4xl">
            ▷
          </button>
          <h1 className="text-5xl font-bold text-white mt-[50px]">
            TRUE FITNESS - ПРЕМИУМ <br /> ТРЕНАЖЕРЫ ИЗ США
          </h1>
        </div>
      </div>

      {/* Блок с синим фоном */}
      <div className="bg-blue-600 h-[230px] w-full max-w-[1351px] mt-[130px] px-4">
        <div className="mt-4">
          <hr className="border-yellow-500 w-[200px] mx-auto" />
          <h1 className="text-3xl text-white mt-[10px]">
            TRUE - ВЕДУЩИЙ МИРОВОЙ <br /> ПРОИЗВОДИТЕЛЬ ПРЕМИАЛЬНОГО ФИТНЕС <br /> ОБОРУДОВАНИЯ
          </h1>
          <hr className="border-yellow-500 w-[200px] mx-auto mt-[10px]" />
        </div>
      </div>

      {/* Блок с текстом и картинкой */}
      <div className="w-full max-w-[1351px] h-[540px] bg-white flex justify-around items-center px-6 mt-8">
        <div className="text-left">
          <h1 className="text-4xl font-bold text-black">TRUE <br /><span className="text-blue-500">FITNESS</span></h1>
          <hr className="border-yellow-300 w-[100px] mt-[50px]" />
          <p className="text-black text-xl font-medium mt-[10px]">
            СОВРЕМЕННОЕ И <br /> НАДЕЖНОЕ <br /> ОБОРУДОВАНИЕ ДЛЯ <br /> ФИТНЕС-КЛУБОВ
          </p>
          <p className="text-blue-500 text-2xl font-medium mt-[10px]">
            КАРДИО <br /> ТРЕНАЖЕРЫ —————→
          </p>
        </div>
        <div>
          <img src={img1} alt="" className="mr-[30px]" />
        </div>
      </div>

      {/* Блок с фоновым изображением и текстом */}
      <div className="w-full max-w-[1351px] h-[500px] bg-white mt-[100px] relative overflow-hidden">
        <img src={img2} alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
        <div className="relative z-10 text-white pt-[170px] pl-[40px] text-left">
          <h1 className="text-4xl font-medium">Лучшие <br /> характеристики</h1>
          <hr className="border-yellow-500 w-[200px] my-[30px]" />
          <p>
            Наши тренажеры имеют самые совершенные <br />
            характеристики в классе, от более мощных технических <br />
            показателей до расширенных функциональных <br />
            возможностей
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
