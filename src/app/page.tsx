import Menu from "@/components/menu/menu";
import Header from "@/components/header/header";
import Head from "next/head";
import Auc from "@/components/auc/auc"
import Slider from "@/components/slider/slider";
import OnlineForm from "@/components/onlineForm/onlineform";
import Advantages from "@/components/advantages/advantages";
import Stages from "@/components/stages/stages";
import DopService from "@/components/dopService/dopService";
import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";
import Popup from "@/components/popup/popup";
import { Metadata } from 'next';
import FeedBacks from "@/components/feedbacks/feedbacks";

export const metadata: Metadata = {
  title: "Автониндзя - авто из Японии, Кореи и Китая",
  description: "Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии",
};

export default function Home() {
  return (
    
    <>

      <Head>
        <meta property="og:title" content="AUTONINJA"/>
        <meta property="og:site_name" content="Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней"/>
        <meta property="og:url" content="автониндзя.рф"/>
        <meta property="og:description" content="Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии"/>
        <meta property="og:image" content="imgpublic/images/zahar.webp"/>
      </Head>
      <Menu />
      <Header />
      <Auc />
      <Slider />
      <OnlineForm/>
      <Advantages />
      <Stages />
      <DopService />
      < FeedBacks />
      <Contacts />
      <Footer />
      <Popup />
    </>
  );
}
