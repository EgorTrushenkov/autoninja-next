import Image from "next/image"
import Link from "next/link"
export default function Auc() {

    return (
        <>
            <div className="auc">
                <div className="container">
                    <h1>У нас на сайте появился раздел “Аукцион”</h1>
                    <div className="info-auc">
                        <p>Переходи на страницу с аукционом и смотри какие автомобили можно купить прямо сейчас!</p>
                        <a className="button button_2 button-header-mob auc-btn" href="https://auc.auto-ninja.ru/">
                            <span>Перейти на аукцион</span>
                            <img src="/images/arrow-auc.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </> 
    )
}