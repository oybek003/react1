import React from 'react'
import run from '../assets/run.png'
import ruu from '../assets/ruu.png'

const Section = () => {
  return (
    <div>
          <div className="main bg-[#01AEE7] h-[225px]">
            <h1 className='text-center text-[22px] text-white pt-[52px]'>TRUE - СОВЕРШЕННОE <br /> ФИТНЕС-ОБОРУДОВАНИЕ</h1>
          </div>

           <div
            className="w-full h-screen bg-cover bg-center mt-[5px]"
            style={{
              backgroundImage: `url(${run})`,
            }}
          >
            <div className="w-[1000px] h-[550px] bg-white m-auto relative top-[60px] p-9">
                <p className='text-black text-[24px] text-start'>
                  <span className='text-[#01AEE7]'>
                    Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями,  <br />которые мы используем для производстве наших машин. Но оно также создается и благодаря <br />нашей преданности клиентам и их потребностям.
                  </span> <br />
                  Наша опытная команда предлагает комплексное обслуживание, начиная от планирования объекта до <br />технического обслуживания и оснащения ваших залов новейшими технологиями. Являясь вашим надежным <br />партнером, мы делаем все возможное, чтобы ваше предприятие продолжало эффективно работать <br />годы и годы.
                </p>
            </div>


    </div>

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

export default Section
