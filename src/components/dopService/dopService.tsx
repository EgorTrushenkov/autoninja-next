import Image from "next/image"

export default function DopService() {

    return (
        <>
            <div className="dop-services" id = "dop-services">
                <div className="container">
                    <h1 className = "pc_h1">Дополнительный сервис</h1>
                    <h1 className = "mobile_h1">доп. сервис</h1>
                    <div className="content-dop">
                        <div className="blovk-dop-left">
                            <p>Помимо доставки автомобиля мы помогаем своим клиентам с покупкой и установкой дополнительных запчастей и различных аксессуаров для модификации авто, а также детейлинг вашего 4-ех колесного друга</p>
                            <div className="whats-app">
                                <p>Вы всегда можете связаться с нами по поводу заказа</p>
                                <div style={{paddingTop: 16, paddingBottom: 16}}>
                                    <a className = "button-dop" href="https://wa.me/79242488665"><img src="/_src/icon-whatsapp.webp" alt=""/>WhatsApp</a>
                                </div>

                            </div>
                        </div>
                        <img className = "right-img" srcSet="
                                    /_src/dop-img-988.webp 988w,
                                    /_src/dop-img.webp"
                            src="/_src/dop-img.webp"/>
                    </div>
                    
                </div>
                
            </div>
        </> 
    )
}