import Image from "next/image"

export default function Contacts() {

    return (
        <>
            <div className="contacts" id = "contacts">
                <div className="container">
                    <h1>КОНТАКТЫ</h1>
                    <ul className = "list-contacts">
                        <li><h3 className = "tel-contacts"><a href="tel:+79242488665">+7 924 248-86-65</a></h3></li>
                        <li><h3><a href="mailto:Zakhar@ninjaauto.ru">Zakhar@ninjaauto.ru</a></h3></li>
                        <li>
                            <div>
                                <a href="https://wa.me/79242488665" className="button"><img src="/_src/icon-svg/whatsapp.webp" alt=""/></a>
                                <a href="https://www.youtube.com/@auto_ninja" className="button"><img src="/_src/icon-svg/youtube.webp" alt=""/></a>
                                <a href="https://t.me/auto_ninja" className="button"><img src="/_src/icon-svg/tg.webp" alt=""/></a>
                            </div>
                        </li>
                    </ul>
                    <div className="list-map-contacts">
                        <div>
                            <p style = {{marginBottom: 16}}>Тут могла быть карта с нашим адресом, но у нас его нет...</p>
                            <p>Поэтому у нас минимальная комиссия за доставку авто, потому что мы не платим за аренду офиса и не тратимся на прочие расходы</p>
                        </div>
                        <img src="/_src/map.webp" alt=""/>
                    </div>
                </div>
            </div>

        </> 
    )
}