import Menu from "@/components/menu/menu";
import Head from "next/head";
import OnlineForm from "@/components/onlineForm/onlineform";
import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";
import Popup from "@/components/popup/popup";


export default function Home({
  params: { auto },
}: {
  params: { auto: string }
}) {
    return (
      
      <>

        <Head>
          <meta property="og:title" content="AUTONINJA"/>
          <meta property="og:site_name" content="Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней"/>
          <meta property="og:url" content="автониндзя.рф"/>
          <meta property="og:description" content="Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии"/>
          <meta property="og:image" content="img/_src/zahar.webp"/>
        </Head>
        <div>[auto]</div>
        <OnlineForm/>
        <Contacts />
        <Footer />
        <Popup />
      </>
  );
}
