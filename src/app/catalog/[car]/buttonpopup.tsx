'use client'
import Script from "next/script";
import { useEffect } from "react";

// const FormPopupScript = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.innerHTML = `
//       const openFormPop = () => {
//         const formpop = document.querySelector("#form-popup-card");
//         formpop.style.display = "block";
//       }
      
//       const closeFormPop = () => {
//         const formpop = document.querySelector("#form-popup-card");
//         formpop.style.display = "none";
//       }
//     `;
//     document.body.appendChild(script);
//   }, []);

//   return null;
// };

export default function ButtonPopup() {
  return (
    <div>
      {/* <FormPopupScript /> */}
      <button onClick={openFormPop} className="button btn_card">
        Заказать авто
      </button>
    </div>
  );
}