import React from 'react'
import img from '../assets/3.png'
import img1 from '../assets/04.png';
import img2 from '../assets/4.png';

const Header = () => {
  return (
    <div>
      <div>
      <img src={img} alt="" className='absolute'/>
      <div>
        <button className=' shadow-2xl shadow-cyan-50 w-[70px] h-[70px] rounded-[10000px] bg-blue-500 text-white text-4xl pl-[5px] pb-[2px] relative ml-[650px] mt-[280px]'>▷</button>
        <h1 className='text-5xl font-bold text-center mt-[50px] text-white relative'>TRUE FITNESS - ПРЕМИУМ <br /> ТРЕНАЖЕРЫ ИЗ США</h1>
      </div>        
      </div>

      <div className='bg-blue-600 h-[230px] w-[1351px] mt-[130px]'>
        <br />
        <br />
        <hr className='text-yellow-500 w-[200px] ml-[570px]'/>
        <h1 className='text-3xl text-center mt-[10px]'>TRUE - ВЕДУЩИЙ МИРОВОЙ <br /> ПРОИЗВОДИТЕЛЬ ПРЕМИАЛБНОГО ФИТНЕС <br /> ОБОРУДОВАНИЯ</h1>
        <hr className='text-yellow-500 w-[200px] ml-[570px] mt-[10px]'/>
      </div>

      <div className='w-[1351px] h-[540px] pl-[50px] pt-[20px] bg-white flex justify-between'>
        <div>
       <h1 className=' text-4xl font-bold text-black mt-[50px]'>TRUE <br /> <span className='text-blue-500'>FITNESS</span></h1>
        <hr className='text-yellow-300 w-[100px] mt-[50px]'/>
        <p className='text-black text-xl font-medium mt-[10px]'>СОВРЕМЕННОЕ И <br /> НАДЕЖНОЕ <br /> ОБОРУДОВАНИЕ ДЛЯ <br /> ФИТНЕС-КЛУБОВ</p>
        <p className='text-blue-500 text-2xl font-medium mt-[10px]'>КАРДИО <br /> ТРЕНАЖЕРЫ —————→ </p>          
        </div>
        <div>
          <img src={img1} alt="" className='mr-[30px]'/>
        </div>
      </div> 

      <div className='w-[1351px] h-[500px] bg-white mt-[100px] pl-[20px]'>
        <img src={img2} alt="" className='absolute'/>
        <div className='relative text-white pt-[170px] pl-[20px]'>
          <h1 className='text-4xl font-medium'>Лучшие <br /> характеристики</h1>
          <hr className='text-yellow-500 w-[200px] mb-[30px] mt-[30px]'/>
          <p>Наши тренажеры имеют самые совершенные <br /> характеристики в классе, от более мощных технических <br /> показателей до расширенных функциональных <br /> возможностей</p>
        </div>
      </div>

    </div>
  )
}

export default Header
