import Head from "next/head";
import Menu from "@/components/menu/menu";
import PopupCatalog from "@/components/popup_catalog/popup_catalog";
import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";
import SwiperPage from "@/app/catalog/[car]/swiper";
import { notFound } from "next/navigation";
import styles from "@/styles/sass/card.module.sass";


const fetchData = async() => {
  const response = await fetch('https://script.google.com/macros/s/AKfycbyIxKvBUAIufdDs9VZegCyjllZXYDXR-0mXdmNzYObPeZyDqpf59sOiXiGgz2WFJLJf/exec')
  const data = await response.json()
  const cars = data['users']
  return cars
}



export default async function CarPage({
  params
}: {
  params: { car: string }
}) {
  //Извлекаем массив данных в переменную
  const cars = await fetchData();
  
  // Поиск автомобиля по id и проверка
  const Id = cars.find(car => car.Slug === params.car)?.IdCar || notFound();

  // Поиск ключа в объекте автомобилей
  const arrayId = Id - 1;

  //Присваивания для удобства
  const Slug = cars[arrayId].Slug;
  const Name = cars[arrayId].Name;
  const Engine = cars[arrayId].Engine;
  const Power = cars[arrayId].Power;
  const Acceleration = cars[arrayId].Acceleration;
  const Box = cars[arrayId].Box;
  const Drive = cars[arrayId].Drive;
  const Dimensions = cars[arrayId].Dimensions;
  const Torque = cars[arrayId].Torque;
  const Tire_size = cars[arrayId].Tire_size;
  const Price = cars[arrayId].Price;
  const Main_photo = cars[arrayId].Main_photo;
  const Country = cars[arrayId].Country;
  const Year = cars[arrayId].Year;


  
  // Верстка 
  return (
    <>
      <Head>
        <title>{`${Name}`}</title>
        <meta property="og:title" content={Name}/>
        <meta property="og:site_name" content="Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней"/>
        <meta property="og:url" content="автониндзя.рф"/>
        <meta property="og:description" content="Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии"/>
        <meta property="og:image" content={Main_photo}/>
      </Head>
      <Menu />
      <div className={styles.card_cars}>
        <div className = "container">
            <div className={styles.title_card}>
              <h1>Автомобиль {Name}</h1>
              <p className = {styles.year_card}>{Year}</p>
            </div>
            <div className={styles.body_card}>
              <div className = {styles.body_wrapper}>
                <SwiperPage slug={Slug}/>
                <div className = {styles.about_car}>
                  <p className={styles.title}>Основные характеристики</p>
                  <div className={styles.about_wrapper}>
                      <ul className = {styles.about_content_items}>
                        <div className={styles.item_left}>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/_src/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Двигатель:</p>
                              <p className={styles.item_description}>{Engine}</p>
                            </div>
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/_src/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Разгон до 100 км/ч:</p>
                              <p className={styles.item_description}>{Engine}</p>
                            </div>
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/_src/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Привод:</p>
                              <p className={styles.item_description}>{Drive}</p>
                            </div>
                              
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/_src/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Крутящий момент:</p>
                              <p className={styles.item_description}>{Torque}</p>
                            </div>
                          </li>
                        </div>
                        <div className = {styles.item_right}>

                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/_src/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Мощность:</p>
                              <p className={styles.item_description}>{Power}</p>
                            </div>
                            
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/_src/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Коробка:</p>
                              <p className={styles.item_description}>{Box}</p>
                            </div>
                            
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/_src/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Габариты:</p>
                              <p className={styles.item_description}>{Dimensions}</p>
                            </div>
                            
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/_src/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Размер шин:</p>
                              <p className={styles.item_description}>{Tire_size}</p>
                            </div>
                            
                          </li>
                        </div>
                        
                        
                      </ul>
                  </div>
                  <div className = {styles.price_content}>
                    <p className = {styles.price_title}>Стоимость</p>
                    <p className ={styles.price}>{Price}</p>
                    <p className = {styles.price_desc}>Точная стоимость зависит от выбранной комплектации. Для уточнения стоимости свяжитесь с нами</p>
                    <button className="button btn_card" >Заказать авто</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <PopupCatalog />
      <Contacts />
      <Footer />

    </> 
  );
}