
import Image from "next/image";
import Link from 'next/link';
import Menu from "@/components/menu/menu";
import Head from "next/head";
import { Metadata } from "next";
import Catalog from "@/components/catalog/catalog";
import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";
import FormNotFound from "@/components/form_notcar/form_notcar";
export const metadata: Metadata = {
  title: "Каталог",
  description: "Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии",
};




export default async function Page() {
  const fetchData = async() => {
    const response = await fetch('https://script.google.com/macros/s/AKfycbyIxKvBUAIufdDs9VZegCyjllZXYDXR-0mXdmNzYObPeZyDqpf59sOiXiGgz2WFJLJf/exec', {
      cache: 'force-cache',
      next: {
        revalidate: 200 // 1 hours
      }
    })
    const data = await response.json()
    const cars = data['users']
    return cars
  }
  const cars = await fetchData();
  
  return (
    <>
      <Head>
        <title>Каталог авто из Японии, Кореи и Китая</title>
        <meta property="og:title" content="Каталог AUTONINJA"/>
        <meta property="og:site_name" content="Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней"/>
        <meta property="og:url" content="автониндзя.рф"/>
        <meta property="og:description" content="Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии"/>
        <meta property="og:image" content="imgpublic/images/zahar.webp"/>
      </Head>
      <Menu />
      <Catalog cars = {cars} />
      <FormNotFound />
      <Contacts />
      <Footer />
    </>
  );

};

