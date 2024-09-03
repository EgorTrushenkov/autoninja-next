import type { Metadata } from "next";
import "@/styles/css/style.css"
import "@/styles/sass/main.sass";
import Script from "next/script";
import Image  from "next/image";
import { Suspense } from 'react';
import { Metrika } from "@/components/yandexMetrika/yandexMetrika";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Авто из Японии, Кореи и Китая с доставкой в РФ от 10 дней",
  description: "Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#B47EDF"/>
        <meta property="og:image" content="path/to/image.jpg" />
        <link rel="icon" href="favicon/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon-180x180.webp"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
      </head>
      <body>
        <main>{children}</main>
        <Suspense>
          <Metrika />
        </Suspense>
        <Script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossOrigin="anonymous"></Script>
        <Script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></Script>
        {/* <Script>
                {`
                    const openFormPop = () => {
                        const formpop = document.querySelector("#form-popup");
                        formpop.style.display = "block";
                    }
                    
                    const closeFormPop = () => {
                        const formpop = document.querySelector("#form-popup");
                        formpop.style.display = "none";
                    }
                `}
        </Script> */}
      </body>
    </html>
  );
}
