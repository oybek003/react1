import React from 'react'
import run from '../assets/run.png'
import ruu from '../assets/ruu.png'

const Oybek = () => {
  return (
    <div>
          <div className="main bg-[#01AEE7] h-[225px]">
            <h1 className='text-center text-[22px] text-white pt-[52px]'>Преимущества TRUE FITNESS</h1>
            <p className='pt-[32px] text-[18px] text-center text-white'>Благодаря которым мы являемся мировым лидером в производстве фитнес- <br />оборудования</p>
          </div>
<hr />
    <div className="2 bg-[#01AEE7]">
          <h1 className='text-[40px] text-center pb-[65px] text-white'>Наши инновации</h1>

          <div className="img flex items-center justify-around gap-[20px] flex-wrap text-white text-center">
            <div className="box text-white">
              <img src={ruu} alt="" />
              <h1>Тренажер Лестница TRUE <br /> Palisade</h1>
            </div>
            <div className="box">
              <img src={ruu} alt="" />
              <h1>Тренажер Лестница TRUE <br /> Palisade</h1>
            </div>
            <div className="box">
              <img src={ruu} alt="" />
              <h1>Тренажер Лестница TRUE <br /> Palisade</h1>
            </div>
            <div className="box">
              <img src={ruu} alt="" />
              <h1>Тренажер Лестница TRUE <br /> Palisade</h1>
            </div>
            <div className="box">
              <img src={ruu} alt="" />
              <h1>Тренажер Лестница TRUE <br /> Palisade</h1>
            </div>
            <div className="box">
              <img src={ruu} alt="" />
              <h1>Тренажер Лестница TRUE <br /> Palisade</h1>
            </div>
          </div>
    </div>
            <hr />
    <footer className='h-[300px] bg-[#01AEE7]'>
          <div className="flex items-center justify-between p-9 text-white">
            <div className="">
              <h1 className='text-[16px] font-medium pb-[32px]'>КАТАЛОГ ТОВАРОВ</h1>
              <p>
                Кардио тренажеры<br />
                Composite Strength <br />
                True Stretch <br />
                Групповые тренировки <br />
                Силовые тренажеры <br />
                Консоли
              </p>
            </div>
            <div className="">
              <h1 className='text-[16px] font-medium pb-[32px]'>ИНФОРМАЦИЯ</h1>
              <p>
                О Бренде <br />
                Преимущества <br />
                открыть клуб <br />
                продукции <br />
                контакты 
              </p>
            </div>
            <div className="">
              <h1 className='text-[16px] font-medium pb-[32px]'>КОНТАКТЫ</h1>
              <p>
                Политика конфиденциальности <br />
                Контакты
              </p>
            </div>
          </div>
    </footer>
    </div>
  )
}

export default Oybek
