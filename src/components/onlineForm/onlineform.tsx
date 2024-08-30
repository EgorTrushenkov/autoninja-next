'use client'
import Image from "next/image"
import {RadioGroup, Radio} from "@nextui-org/radio";
import Link from "next/link"
import { useEffect } from "react";
import { submitForm } from "../../app/api/telegram";

export default function OnlineForm() {

    useEffect(() => {
        if (document.querySelector<HTMLInputElement>('#left')?.checked) {
            if ((document.getElementById("hatcheback") as HTMLInputElement)?.checked) {
                const millDiv = document.querySelector<HTMLElement>('#mill-div');
                if (millDiv) {
                    millDiv.style.display = 'flex';
                }
                (document.getElementById("million") as HTMLInputElement).checked = true;
            } else {
                const millDiv = document.querySelector<HTMLElement>('#mill-div');
                if (millDiv) {
                    millDiv.style.display = 'none';
                }
                (document.getElementById("2million") as HTMLInputElement).checked = true;
            }
        }
        const formWrapper = document.querySelector('.form-wrapper');
        if (formWrapper) {
            formWrapper.addEventListener('change', function () {
                changeElemForm();
            });
        }
        
        const changeElemForm = () => {
            const leftElem = document.querySelector<HTMLInputElement>('#left');
            if (leftElem && leftElem.checked) {
                const hatchebackElem = document.getElementById("hatcheback") as HTMLInputElement;
                if (hatchebackElem && hatchebackElem.checked) {
                    const millDiv = document.querySelector<HTMLElement>('#mill-div');
                    if (millDiv) {
                        millDiv.style.display = 'flex';
                    }
                    (document.getElementById("million") as HTMLInputElement).checked = true;
                } else {
                    const millDiv = document.querySelector<HTMLElement>('#mill-div');
                    if (millDiv) {
                        millDiv.style.display = 'none';
                    }
                    const twoMillionElem = document.getElementById('2million') as HTMLInputElement;
                    if (twoMillionElem) {
                        twoMillionElem.checked = true;
                    }
                }
            } else if (document.querySelector('#right') && (document.querySelector('#right') as HTMLInputElement).checked) {
                const millDiv = document.querySelector<HTMLElement>('#mill-div');
                if (millDiv) {
                    millDiv.style.display = 'flex';
                }
                const millionElem = document.getElementById('million') as HTMLInputElement;
                if (millionElem) {
                    millionElem.checked = true;
                }
            }
        }
    }, []);

    
    return (
        <>
            <form className="form-wrapper"  id = "form" onSubmit={submitForm} >
                <div className="container">
                    <div className="title-form">
                        <h1>ОНЛАЙН-ПОДБОР АВТО</h1>
                        <p>Выберите необходимые для вас параметры, мы подберем для вас лучший вариант авто и доставим прямо до подъезда в любой город России</p>
                    </div>
                    <div className="form-body">
                        <div className="body-form-auto">

                            <div className="body-left">
                                <div className="fuel">
                                    <h1>ТИП ТОПЛИВА</h1>
                                    <div className="body-form-div">
                                        <div>
                                            <input type="radio" id="benz" name="fuel" value="Бензин"
                                                defaultChecked={true}/>
                                            <label htmlFor="benz">Бензин</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="diz" name="fuel" value="Дизель"
                                                />
                                            <label htmlFor="diz">Дизель</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="gibrid" name="fuel" value="Гибрид"
                                                />
                                            <label htmlFor="gibrid">Гибрид</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="electro" name="fuel" value="Электро"
                                                />
                                            <label htmlFor="electro">Электро</label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="budget">
                                    <h1>ВАШ БЮДЖЕТ</h1>
                                    <div className="body-form-div budget-form-div">
                                        <div id = "mill-div">
                                            <input type="radio" id = "million" name="budget" value="1 млн₽" defaultChecked={true}/>
                                            <label htmlFor="million">до 1 млн₽</label>
                                        </div>
                                        <div>
                                            <input type="radio" id = "2million" name="budget" value="1 млн - 2 млн₽"/>
                                            <label htmlFor="2million">1 млн - 2 млн₽</label>
                                        </div>
                                        <div>
                                            <input type="radio" id = "3million" name="budget" value="2 млн - 3 млн₽"/>
                                            <label htmlFor="3million">2 млн - 3 млн₽</label>
                                        </div>
                                        <div>
                                            <input type="radio" id = "4million" name="budget" value="3 млн - 5 млн₽"/>
                                            <label htmlFor="4million">3 млн - 5 млн₽</label>
                                        </div>
                                        <div>
                                            <input type="radio" id = "5million" name="budget" value="5 млн₽+"/> 
                                            <label htmlFor="5million">5 млн₽+</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="rule">
                                    <h1>Тип руля</h1>
                                    <div className="body-form-div rule-form-div">
                                        <div>
                                            <input type="radio" id = "left" name="rule" value="Левый" defaultChecked={true}/>
                                            <label htmlFor="left">Левый</label>
                                        </div>
                                        <div>
                                            <input type="radio" id = "right" name="rule" value="Правый"/>
                                            <label htmlFor="right">Правый</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="body-auto">
                                <div>
                                    <img src="/_src/img-form-auto/sedan.webp" alt=""/>
                                    <input type="radio" id="sedan" name="body-auto" value="Седан" defaultChecked={true}/>
                                    <label htmlFor="sedan">Седан</label>
                                </div>
                                <div>
                                    <img src="/_src/img-form-auto/hatcheback.webp" alt=""/>
                                    <input type="radio" id="hatcheback" name="body-auto" value="Хэтчбек"
                                        />
                                    <label htmlFor="hatcheback">Хэтчбек</label>
                                </div>
                                <div>
                                    <img src="/_src/img-form-auto/kupe.webp" alt=""/>
                                    <input type="radio" id="kupe" name="body-auto" value="Купе"
                                        />
                                    <label htmlFor="kupe">Купе</label>
                                </div>
                                <div>
                                    <img src="/_src/img-form-auto/cabriolet.webp" alt=""/>
                                    <input type="radio" id="cabriolet" name="body-auto" value="Кабриолет"
                                        />
                                    <label htmlFor="cabriolet">Кабриолет</label>
                                </div>
                                <div>
                                    <img src="/_src/img-form-auto/miniven.webp" alt=""/>
                                    <input type="radio" id="miniven" name="body-auto" value="Минивен"
                                        />
                                    <label htmlFor="miniven">Минивен</label>
                                </div>
                                <div>
                                    <img src="/_src/img-form-auto/crossover.webp" alt=""/>
                                    <input type="radio" id="crossover" name="body-auto" value="Кроссовер"
                                        />
                                    <label htmlFor="crossover">Кроссовер</label>
                                </div>
                                <div>
                                    <img src="/_src/img-form-auto/vnedorojnik.webp" alt=""/>
                                    <input type="radio" id="vnedorojnik" name="body-auto" value="Внедорожник"
                                        />
                                    <label htmlFor="vnedorojnik">Внедорожник</label>
                                </div>
                                <div>
                                    <img src="/_src/img-form-auto/picap.webp" alt=""/>
                                    <input type="radio" id="picap" name="body-auto" value="Пикап"
                                        />
                                    <label htmlFor="picap">Пикап</label>
                                </div>
                            </div>
                        </div>
                        <div className="form">
                            <input required type="text" className="input-form" name="name" id="name" placeholder="Ваше имя" />
                            <input required type="text" className="input-form" name="phone" id="phone" placeholder="+7 (999) 999-99-99" />
                            <button type="submit" className = "button form-button">ПОДОБРАТЬ АВТО</button>
                        </div>
                        <div id="success"></div>
                    </div>
                </div>
            </form>
        </> 
    )
}