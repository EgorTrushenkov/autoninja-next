import Menu from "@/components/menu/menu";
import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";

export default function Auciton() {
    return(
    <>  
        <Menu />
        <iframe className="auction-body" src="https://auc.auto-ninja.ru/"></iframe>
        <Contacts />
        <Footer />
    </>
    );
}