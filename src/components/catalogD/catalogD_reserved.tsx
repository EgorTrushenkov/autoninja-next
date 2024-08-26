'use client'
import Image from "next/image";
import Link from "next/link";
import Contacts from "../contacts/contacts";
import { useEffect, useState } from "react";



export default function CatalogD() {
    const [cars, setCars] = useState(null);
    useEffect(()=>{
        const fetchData = async() => {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxGF8-ZeQSS1OKKE8jQJiy5a_CofxJOX9cDgsoMLUH64P49WGnrfgDoHI6cH7_g2kNV/exec');
            const data = await response.json();
            console.log(data['users']);
            setCars(data['users']);
        }
        fetchData();
    }, []);

    return (
        <>

            <div className="catalog">
                <div className="container">
                    <h1>Каталог автомобилей</h1>
                    <div className="tabs">
                        <div className="tabs-trigger">
                            <button className = "tabs-trigger__item">Все авто</button>
                            <button className = "tabs-trigger__item">Авто из Японии</button>
                            <button className = "tabs-trigger__item">Авто из Кореи</button>
                            <button className = "tabs-trigger__item">Авто из Китая</button>
                            <button className = "tabs-trigger__item">Авто, которые хотят все</button>
                        </div>
                        <div className="tabs-content">
                            <div id="tab" className = "tabs-content__item">
                                {cars && cars.map(({Slug, Name, Engine, Power, Box, Drive, Price, Year, Main_photo}) => (
                                    <>
                                        <div className="content-item" id = {`catalog-${Slug}`}>

                                            <div className="catalog__title-auto">
                                                <img className = "catalog__logo-auto" src="/_src/logo-auto/nissan.webp" alt=""/>
                                                <div>
                                                    <h3>{Name}</h3>
                                                    <p>{Year}</p>
                                                </div>
                                            </div>
                                            <img className = "catalog__auto-img" src="/_src/img-auto/nissan-note.webp" alt=""/>
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
            
        </>
        
    )
};
