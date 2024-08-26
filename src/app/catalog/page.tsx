
import Image from "next/image";
import Link from 'next/link';
import Menu from "@/components/menu/menu";
import Head from "next/head";
import { Metadata } from "next";
import Popup from "@/components/popup/popup";
import CatalogD from "@/components/catalogD/catalogD";
export const metadata: Metadata = {
  title: "Каталог",
  description: "Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии",
};

export default function Catalog() {
  return (
    <>
      <Head>
        <title>Каталог авто из Японии, Кореи и Китая</title>
        <meta property="og:title" content="Каталог AUTONINJA"/>
        <meta property="og:site_name" content="Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней"/>
        <meta property="og:url" content="автониндзя.рф"/>
        <meta property="og:description" content="Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии"/>
        <meta property="og:image" content="img/_src/zahar.webp"/>
      </Head>
      <Menu />
      <CatalogD/>
    </>
  );
}
