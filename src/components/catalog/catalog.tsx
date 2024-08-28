'use client'
import Image from "next/image";
import Link from 'next/link';
import { notFound } from "next/navigation";
import "@/styles/sass/main.sass";



const tadAllOff = () => {
  const cars_all = document.querySelectorAll(`.catalog-auto-item`);
  for (let i = 0; i < cars_all.length; i++) {
    cars_all[i].classList.remove("active-auto");
    cars_all[i].classList.add("non-active-auto");
  }
}

const tadAllOn = () => {
  const cars_all = document.querySelectorAll(`.catalog-auto-item`);
  for (let i = 0; i < cars_all.length; i++) {
    cars_all[i].classList.remove("non-active-auto");
    cars_all[i].classList.add("active-auto");
  }
}


const tabFunc = (country) => {
  tadAllOff();
  const cars_country = document.querySelectorAll(`.${country}`);
  for (let i = 0; i < cars_country.length; i++) {
    if (cars_country[i].classList.contains("non-active-auto")) {
      cars_country[i].classList.remove("non-active-auto");
      cars_country[i].classList.add("active-auto");
    }else {
      cars_country[i].classList.add("active-auto");
    }
  }
}


export default function Catalog(cars) {

  if (!cars) notFound();
  return (
    <div className="catalog">
      <div className="container">
        <h1>Каталог автомобилей</h1>
        <div className="tabs">
          <div className="tabs-trigger">
            <button className="tabs-trigger__item" onClick={() => tadAllOn()}>Все авто</button>
            <button className="tabs-trigger__item" onClick={() => tabFunc('japan')}>Авто из Японии</button>
            <button className="tabs-trigger__item" onClick={() => tabFunc('korea')}>Авто из Кореи</button>
            <button className="tabs-trigger__item" onClick={() => tabFunc('china')}>Авто из Китая</button>
            <button className="tabs-trigger__item" onClick={() => tabFunc('allwant')}>Авто, которые хотят все</button>
          </div>
          <div className="tabs-content">
            <div id="tab" className="tabs-content__item">
                  {cars['cars'] && cars['cars'].map(({ IdCar, Slug, Name, Engine, Power, Box, Drive, Price, Year, Main_photo, Country, Brand }) => (
                    <>
                        <div className={`content-item active-auto catalog-auto-item car-${IdCar} ${Slug} ${Country} ${Brand}`} id={`catalog-${Slug}`}>

                            <div className="catalog__title-auto">
                                <img className = "catalog__logo-auto" src={`/_src/logo-auto/${Brand}.png`} alt=""/>
                                <div>
                                    <h3>{Name}</h3>
                                    <p>{Year}</p>
                                </div>
                            </div>
                            <img className = "catalog__auto-img" src={`/_src/img-auto/${Slug}.webp`} alt=""/>
                            <div className="catalog__char">
                                <ul>
                                    <li>
                                        <img className = "char-logo" src="/_src/icon-auto/motor.webp" alt=""/>
                                        <div>
                                            <h4>Двигатель</h4>
                                            <p>{Engine}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img className = "char-logo" src="/_src/icon-auto/power.webp" alt=""/>
                                        <div>
                                            <h4>Мощность</h4>
                                            <p>{Power}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img className = "char-logo" src="/_src/icon-auto/transmition.webp" alt=""/>
                                        <div>
                                            <h4>Коробка</h4>
                                            <p>{Box}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img className = "char-logo" src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                        <div>
                                            <h4>Привод</h4>
                                            <p>{Drive}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="down-content">
                                <h3>{Price}</h3>
                                <Link href={`/catalog/${Slug}`} className="button">Заказать авто</Link>
                            </div>
                            
                        </div>
                    </>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}