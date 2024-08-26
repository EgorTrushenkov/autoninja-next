
https://script.google.com/macros/s/AKfycbxGF8-ZeQSS1OKKE8jQJiy5a_CofxJOX9cDgsoMLUH64P49WGnrfgDoHI6cH7_g2kNV/exec

Number, Slug, Name, Engine, Power, Acceleration, Box, Drive, Dimensions, Torque, Tire_size, Price, Main_photo, Country, Year

<div className="tabs">
    <div className="tabs-trigger">
        <button className = "tabs-trigger__item">Все авто</button>
        <button className = "tabs-trigger__item">Авто из Японии</button>
        <button className = "tabs-trigger__item">Авто из Кореи</button>
        <button className = "tabs-trigger__item">Авто из Китая</button>
        <button className = "tabs-trigger__item">Авто, которые хотят все</button>
    </div>
    <div className="tabs-content">
        <div id="tab-1" className = "tabs-content__item">
            <div className="content-item" id = "catalog-nissan-note">

                <div className="catalog__title-auto">
                    <img className = "catalog__logo-auto" src="/_src/logo-auto/nissan.webp" alt=""/>
                    <div>
                        <h3>{dataBase.values[0][2]}</h3>
                        <p>{dataBase.values[0][15]}</p>
                    </div>
                </div>
                <img className = "catalog__auto-img" src="/_src/img-auto/nissan-note.webp" alt=""/>
                <div className="catalog__char">
                    <ul>
                        <li>
                            <img className = "char-logo" src="/_src/icon-auto/motor.webp" alt=""/>
                            <div>
                                <h4>Двигатель</h4>
                                <p>{dataBase.values[0][3]}</p>
                            </div>
                        </li>
                        <li>
                            <img className = "char-logo" src="/_src/icon-auto/power.webp" alt=""/>
                            <div>
                                <h4>Мощность</h4>
                                <p>{dataBase.values[0][4]}</p>
                            </div>
                        </li>
                        <li>
                            <img className = "char-logo" src="/_src/icon-auto/transmition.webp" alt=""/>
                            <div>
                                <h4>Коробка</h4>
                                <p>{dataBase.values[0][6]}</p>
                            </div>
                        </li>
                        <li>
                            <img className = "char-logo" src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                            <div>
                                <h4>Привод</h4>
                                <p>{dataBase.values[0][7]}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="down-content">
                    <h3>{dataBase.values[0][11]}</h3>
                    <Link href={`/catalog/${dataBase.values[0][1]}`} className="button">Заказать авто</Link>
                </div>
                
            </div>
        </div>
    </div>
</div>