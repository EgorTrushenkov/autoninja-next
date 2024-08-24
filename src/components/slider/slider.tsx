'use client'
import Image from "next/image";
import Link from "next/link";
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useEffect } from "react";


export default function Slider() {
    
    useEffect(() => {
        const swiper = new Swiper('.mySwiper', {
            // Install modules
            modules: [Navigation, Pagination, Scrollbar],
            navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
            },
            mousewheel: {
            sensitivity: 1
            },
            slidesPerView: 1.7,
            breakpoints: {
            
                772: {
                    slidesPerView: 1.2
                },
                1400: {
                    slidesPerView: 1.5
                },
                1500: {
                    slidesPerView: 1.7
                },
                1700: {
                    slidesPerView: 1.9
                },
            },
            spaceBetween: 40,
            watchSlidesProgress: true,
        });
    }, []);
    return (
        <>
            <div className="slider-body">
                <div className="container">
                    <div className="title">
                        <h1>ХИТЫ ПРОДАЖ</h1>
                        <div className="button-slider">
                            <div className="nav-button slider-button-prev"><img src="/_src/Arrow-left.webp" alt=""/></div>
                            <div className="nav-button slider-button-next"><img src="/_src/Arrow-right.webp" alt=""/></div>
                        </div>
                    </div>
                </div>
                    <div className="swiper mySwiper" id = "swiperSlider">
                        <div className="swiper-wrapper">
                            
                            <div className="swiper-slide">
                                <div className="container-slide">
                                    <div className="title">
                                        <div className="title-auto">
                                            <img src="/_src/logo-auto/Honda-logo-1920x1080 1.webp" alt=""/>
                                            <div className="brend-auto">
                                                <h1>Honda Stepwgn</h1>
                                                <p>2019 год</p>
                                            </div>
                                        </div>
                                        <h1 className = "sum">1.000.000 - 2.400.000₽</h1>
                                    </div>
                                    <div className="body-slide">
                                        <img className="photo-auto" src = "/_src/img-auto/honda-stepwgn.webp"  alt=""/>
                                        <div className="description">
                                            <ul className = "desc-ul">
                                                <li>
                                                    <img src="/_src/icon-auto/motor.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Двигатель</h4>
                                                        <p>бензин, 1.5л</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/power.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Мощность</h4>
                                                        <p>150 л.с.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/transmition.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Коробка</h4>
                                                        <p>вариатор</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Привод</h4>
                                                        <p>передний</p>
                                                    </div>
                                                </li>
                                                <h1 className = "sum2">1.000.000 - 2.400.000₽</h1>
                                                <a  className = "nav-button">Заказать</a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="swiper-slide">
                                <div className="container-slide">
                                    <div className="title">
                                        <div className="title-auto">
                                            <img src="/_src/logo-auto/toyota.webp" alt=""/>
                                            <div className="brend-auto">
                                                <h1>Toyota Land Cruiser Prado</h1>
                                                <p>2016-2021 год</p>
                                            </div>
                                        </div>
                                        <h1 className = "sum">2.500.000 - 3.800.000₽</h1>
                                    </div>
                                    <div className="body-slide">
                                        <img className="photo-auto" src="/_src/img-auto/landcruserprada.webp" alt=""/>
                                        <div className="description">
                                            <ul className = "desc-ul">
                                                <li>
                                                    <img src="/_src/icon-auto/motor.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Двигатель</h4>
                                                        <p>бензин, 2.7л</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/power.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Мощность</h4>
                                                        <p>163 л.с.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/transmition.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Коробка</h4>
                                                        <p>АКПП</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Привод</h4>
                                                        <p>4WD</p>
                                                    </div>
                                                </li>
                                                <li>
                                                </li>
                                                <h1 className = "sum2">2.500.000 - 3.800.000₽</h1>
                                                <a  className = "nav-button">Заказать</a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="swiper-slide">
                                <div className="container-slide">
                                    <div className="title">
                                        <div className="title-auto">
                                            <img src="/_src/logo-auto/hyundai.png" alt=""/>
                                            <div className="brend-auto">
                                                <h1>Hyundai Palisade</h1>
                                                <p>2019-2021 год</p>
                                            </div>
                                        </div>
                                        <h1 className = "sum">2.950.000 - 4.200.000₽</h1>
                                    </div>
                                    <div className="body-slide">
                                        <img className="photo-auto"  src="/_src/img-auto/hyundai.png" alt=""/>
                                        <div className="description">
                                            <ul className = "desc-ul">
                                                <li>
                                                    <img src="/_src/icon-auto/motor.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Двигатель</h4>
                                                        <p>дизель, 2.2л</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/power.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Мощность</h4>
                                                        <p>202 л.с.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/transmition.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Коробка</h4>
                                                        <p>АКПП</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Привод</h4>
                                                        <p>4WD</p>
                                                    </div>
                                                </li>

                                                <h1 className = "sum2">2.950.000 - 4.200.000₽</h1>
                                                <a  className = "nav-button">Заказать</a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="swiper-slide">
                                <div className="container-slide">
                                    <div className="title">
                                        <div className="title-auto">
                                            <img src="/_src/logo-auto/kia.webp" alt=""/>
                                            <div className="brend-auto">
                                                <h1>KIA K5</h1>
                                                <p>2019-2021 год</p>
                                            </div>
                                        </div>
                                        <h1 className = "sum">1.850.000 - 2.500.000₽</h1>
                                    </div>
                                    <div className="body-slide">
                                        <img className="photo-auto" src="/_src/img-auto/kia_k5.png" alt=""/>
                                        <div className="description">
                                            <ul className = "desc-ul">
                                                <li>
                                                    <img src="/_src/icon-auto/motor.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Двигатель</h4>
                                                        <p>бензин, 1.6л</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/power.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Мощность</h4>
                                                        <p>180 л.с.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/transmition.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Коробка</h4>
                                                        <p>АКПП</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Привод</h4>
                                                        <p>передний</p>
                                                    </div>
                                                </li>
                                                <h1 className = "sum2">1.850.000 - 2.500.000₽</h1>
                                                <a  className = "nav-button">Заказать</a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="swiper-slide">
                                <div className="container-slide">
                                    <div className="title">
                                        <div className="title-auto">
                                            <img src="/_src/logo-auto/Geely.webp" alt=""/>
                                            <div className="brend-auto">
                                                <h1>Geely Monjaro</h1>
                                                <p>2021-2023 год</p>
                                            </div>
                                        </div>
                                        <h1 className = "sum">2.800.000 - 4.000.000₽</h1>
                                    </div>
                                    <div className="body-slide">
                                        <img className="photo-auto" src="/_src/img-auto/geely.webp" alt=""/>
                                        <div className="description">
                                            <ul className = "desc-ul">
                                                <li>
                                                    <img src="/_src/icon-auto/motor.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Двигатель</h4>
                                                        <p>бензин, 2.0л</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/power.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Мощность</h4>
                                                        <p>238 л.с.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/transmition.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Коробка</h4>
                                                        <p>АКПП</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                                    <div className="desc-li">
                                                        <h4>Привод</h4>
                                                        <p>4WD</p>
                                                    </div>
                                                </li>

                                                <h1 className = "sum2">2.800.000 - 4.000.000₽</h1>
                                                <a  className = "nav-button">Заказать</a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="container">
                    <div className="mobile_list">
                        <div className="container-slide">
                            <div className="title">
                                <div className="title-auto">
                                    <img src="/_src/logo-auto/Honda-logo-1920x1080 1.webp" alt=""/>
                                    <div className="brend-auto">
                                        <h1>Honda Stepwgn</h1>
                                        <p>2019 год</p>
                                    </div>
                                </div>
                                <h1 className = "sum">1.000.000 - 2.400.000₽</h1>
                            </div>
                            <div className="body-slide">
                                <img className="photo-auto" src="/_src/img-auto/honda-stepwgn.webp" alt=""/>
                                <div className="description">
                                    <ul className = "desc-ul">
                                        <li>
                                            <img src="/_src/icon-auto/motor.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Двигатель</h4>
                                                <p>бензин, 1.5л</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/power.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Мощность</h4>
                                                <p>150 л.с.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/transmition.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Коробка</h4>
                                                <p>вариатор</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Привод</h4>
                                                <p>передний</p>
                                            </div>
                                        </li>
                                        <h1 className = "sum2">1.000.000 - 2.400.000₽</h1>
                                        <a  className = "nav-button">Заказать</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="container-slide">
                            <div className="title">
                                <div className="title-auto">
                                    <img src="/_src/logo-auto/toyota.webp" alt=""/>
                                    <div className="brend-auto">
                                        <h1>Toyota Land Cruiser Prado</h1>
                                        <p>2016-201 год</p>
                                    </div>
                                </div>
                                <h1 className = "sum">от 3.000.000р</h1>
                            </div>
                            <div className="body-slide">
                                <img className="photo-auto" src="/_src/img-auto/landcruserprada.webp" alt=""/>
                                <div className="description">
                                    <ul className = "desc-ul">
                                        <li>
                                            <img src="/_src/icon-auto/motor.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Двигатель</h4>
                                                <p>бензин, 2.7л</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/power.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Мощность</h4>
                                                <p>163 л.с.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/transmition.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Коробка</h4>
                                                <p>АКПП</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Привод</h4>
                                                <p>4WD</p>
                                            </div>
                                        </li>

                                        <h1 className = "sum2">2.500.000 - 3.800.000₽</h1>
                                        <a  className = "nav-button">Заказать</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="container-slide">
                            <div className="title">
                                <div className="title-auto">
                                    <img src="/_src/logo-auto/hyundai.png" alt=""/>
                                    <div className="brend-auto">
                                        <h1>Hyundai Palisade</h1>
                                        <p>2019-2021 год</p>
                                    </div>
                                </div>
                                <h1 className = "sum">2.950.000 - 4.200.000₽</h1>
                            </div>
                            <div className="body-slide">
                                <img className="photo-auto" src="/_src/img-auto/hyundai.png" alt=""/>
                                <div className="description">
                                    <ul className = "desc-ul">
                                        <li>
                                            <img src="/_src/icon-auto/motor.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Двигатель</h4>
                                                <p>дизель, 2.2л</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/power.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Мощность</h4>
                                                <p>202 л.с.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/transmition.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Коробка</h4>
                                                <p>АКПП</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Привод</h4>
                                                <p>4WD</p>
                                            </div>
                                        </li>
                                        <h1 className = "sum2">2.950.000 - 4.200.000₽</h1>
                                        <a  className = "nav-button">Заказать</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="container-slide">
                            <div className="title">
                                <div className="title-auto">
                                    <img src="/_src/logo-auto/kia.webp" alt=""/>
                                    <div className="brend-auto">
                                        <h1>KIA K5</h1>
                                        <p>2019-2021 год</p>
                                    </div>
                                </div>
                                <h1 className = "sum">1.850.000 - 2.500.000₽</h1>
                            </div>
                            <div className="body-slide">
                                <img className="photo-auto" src="/_src/img-auto/kia_k5.png" alt=""/>
                                <div className="description">
                                    <ul className = "desc-ul">
                                        <li>
                                            <img src="/_src/icon-auto/motor.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Двигатель</h4>
                                                <p>бензин, 1.6л</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/power.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Мощность</h4>
                                                <p>180 л.с.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/transmition.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Коробка</h4>
                                                <p>АКПП</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Привод</h4>
                                                <p>передний</p>
                                            </div>
                                        </li>
                                        <h1 className = "sum2">1.850.000 - 2.500.000₽</h1>
                                        <a  className = "nav-button">Заказать</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="container-slide">
                            <div className="title">
                                <div className="title-auto">
                                    <img src="/_src/logo-auto/Geely.webp" alt=""/>
                                    <div className="brend-auto">
                                        <h1>Geely Monjaro</h1>
                                        <p>2021-2023 год</p>
                                    </div>
                                </div>
                                <h1 className = "sum">2.800.000 - 4.000.000₽</h1>
                            </div>
                            <div className="body-slide">
                                <img className="photo-auto" src="/_src/img-auto/geely.webp" alt=""/>
                                <div className="description">
                                    <ul className = "desc-ul">
                                        <li>
                                            <img src="/_src/icon-auto/motor.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Двигатель</h4>
                                                <p>бензин, 2.0л</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/power.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Мощность</h4>
                                                <p>238 л.с.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/transmition.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Коробка</h4>
                                                <p>АКПП</p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/_src/icon-auto/drivu_unit.webp" alt=""/>
                                            <div className="desc-li">
                                                <h4>Привод</h4>
                                                <p>4WD</p>
                                            </div>
                                        </li>

                                        <h1 className = "sum2">2.800.000 - 4.000.000₽</h1>
                                        <a className = "nav-button">Заказать</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Link href = "/catalog" className = "button button_2 button-header-mob">
                        <div className = "button-inside button-inside-2">
                            <p>ПЕРЕЙТИ В КАТАЛОГ</p>
                            <img draggable="false" src="/_src/arrow-button.webp" alt=""/>
                        </div>
                    </Link>
                </div>
            </div>
        </> 
    )
}