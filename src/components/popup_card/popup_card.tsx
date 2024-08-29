'use client'
import Image from "next/image"
import Link from "next/link"
import Script from "next/script";
import { useEffect } from "react";
import { submitFormPopupCard } from "../../app/api/telegram";
import styles from "@/styles/sass/card.module.sass";

export default function Popup({name, price, slug}) {
    console.log(name, price);

    return (
        <>
            <div className={`${styles.formpopup} form-popup`} id = "form-popup-card">
                <button id = "close-popup" className = "close-popup-pc">&#10006;</button>
                <div className="container">
                    <div className="form-catalog-wrapper form-popup-wrapper">
                        <div className={`${styles.title_card_popup} title-skyline`}>
                            <div className="title-form-catalog">
                                <h1>Вы выбрали:</h1>
                                <h1 className={styles.popup_name}>{name}</h1>
                                <p className ={styles.price_popup_card}>{price}</p>
                                <p className ={styles.desc_popup_card}>Оставьте заявку и наши менеджеры свяжуться с вами в течение 60 минут</p>
                            </div>
                            <button id = "close-popup-2" className = "close-popup-mob">&#10006;</button>
                            <img className={styles.popup_img} src={`/_src/img_cards/${slug}/1.jpeg`} alt=""/>
                        </div>
                        <form className="form" id = "form-form-popup123" onSubmit={(e) => submitFormPopupCard(name, price, e)}>
                            <input type="text" className="input-form" name="name" id="name-popup" placeholder="Ваше имя" required/>
                            <input type="text" className="input-form" name="phone" id="phone-popup" placeholder="+7 (999) 999-99-99" required/>
                            <button type="submit" className = "button form-button">ОТПРАВИТЬ</button>
                        </form>
                        <div id="success-popup"></div>
                    </div>
                </div>
            </div>

        </> 
    )
}