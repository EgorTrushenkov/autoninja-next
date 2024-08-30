export function openFormPop() {
    const formpop = document.querySelector("#form-popup");
    formpop.style.display = "block";
  }

export const closeFormPop = () => {
    const formpop = document.querySelector("#form-popup");
    formpop.style.display = "none";
}