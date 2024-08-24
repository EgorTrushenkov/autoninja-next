import axios from 'axios';
import { usePathname } from 'next/navigation';


const TOKEN = "6349104237:AAEo4gSxlKuFmbcxWCrlZi4gXah0tbSVLBI";
const CHAT_ID = "-1002047663617";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;


export const submitForm = (e) => {
        e.preventDefault();
        const success = document.getElementById("success");
        let checked_fuel = document.querySelector('input[name="fuel"]:checked');
        let checked_budget = document.querySelector('input[name="budget"]:checked');
        let checked_rule = document.querySelector('input[name="rule"]:checked');
        let checked_body = document.querySelector('input[name="body-auto"]:checked');
        
    
        let message = `<b>Заявка. Онлайн подбор! Главная страница!</b>\n`;
        message+=`<b>Имя: </b> ${e.target.name.value}\n`;
        message+=`<b>Телефон: </b> ${e.target.phone.value}\n`;
        message+=`<b>Тип топлива: </b> ${checked_fuel.value}\n`;
        message+=`<b>Бюджет: </b> ${checked_budget.value}\n`;
        message+=`<b>Вид авто: </b> ${checked_body.value}\n`;
        message+=`<b>Тип руля: </b> ${checked_rule.value}\n`;
    
        let  formData = new FormData(this);   
        for (var value of formData.values()) {
            if(value.length ===0){
                ev.preventDefault() // если нет полей - то остонавливаем выполнение события 
            }
    
        }
        
        axios.post(URI_API, {
            chat_id:CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            e.target.name.value = "";
            e.target.phone.value = "";
            success.innerHTML = "Сообщение отправлено!";
            success.style.display = "block";
        })
        .catch((err) =>{
            console.warn(err);
        })
        .finally(() => {
            //
        })

        ym(94235766,'reachGoal','send_form');
        return true;
};

export const submitFormPopUp = (e) => {
    e.preventDefault();
    const success = document.getElementById("success-popup");
    

    let message = `<b>Заявка. Главная страница поп-ап.</b>\n`;
    message+=`<b>Имя: </b> ${e.target.name.value}\n`;
    message+=`<b>Телефон: </b> ${e.target.name.value}\n`;



    let  formData = new FormData(this);   
    for (var value of formData.values()) {
        if(value.length ===0){
            ev.preventDefault() // если нет полей - то остонавливаем выполнение события 
        }

    }
    
    axios.post(URI_API, {
        chat_id:CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        e.target.name.value = "";
        e.target.phone.value = "";
        success.innerHTML = "Сообщение отправлено!";
        success.style.display = "block";
    })
    .catch((err) =>{
        console.warn(err);
    })
    .finally(() => {
        //
    })

    ym(94235766,'reachGoal','send_form');
    return true;
};