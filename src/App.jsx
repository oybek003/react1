import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Card from './components/Header'
import Card1 from './components/Section'
import Card2 from './components/Footer'
import Oybek from './components/Oybek'
import img from './assets/1.png'
import img1 from './assets/2.png'

const App = () => {
  return (
    <div className='bg-white'>
      <div className='flex items-center p-4'>
        <img src={img} alt="" className='w-[350px] ml-[450px]'/>
          <img src={img1} alt="" className='w-[30px] mt-[-30px] ml-[50px]'/>        
        <div className='flex pr-[20px]'>
          <p className='pr-[20px] pl-[10px] mt-[8px] text-black'>▼</p>          
          <p className='text-[14px] mt-[10px] text-black'>+998 (90)-606-66-66</p>
          <button className='w-[150px] h-[30px] bg-blue-500 text-white mt-[42px] ml-[-150px]'>оставить заявку</button>
        </div>
      </div>      
      <hr className='text-black w-[1200px] ml-[80px]'/>
      <nav className='mb-6 flex gap-40 ml-[140px]'>
        <Link to='/' className='text-black hover:underline'>о бренде</Link>
        <Link to='/about' className='text-black hover:underline'>продукции</Link>
        <Link to='/about1' className='text-black hovebr:underline'>преимущества</Link>
        <Link to='/about2' className='text-black hovebr:underline'>открыть клуб</Link>
        <Link to='/about3' className='text-black hovebr:underline'>контакты</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/about' element={<Card1 />} />
        <Route path='*' element={<Card2 />} />
      </Routes>
    </div>
  )
}

export default App