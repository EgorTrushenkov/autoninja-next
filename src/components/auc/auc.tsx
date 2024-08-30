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
                        <Link className="button button_2 button-header-mob auc-btn" href="/auction">
                            <span>Перейти на аукцион</span>
                            <img src="/images/arrow-auc.svg" alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </> 
    )
}