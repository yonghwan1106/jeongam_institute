import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const myeongjo = Nanum_Myeongjo({
  variable: "--font-myeongjo",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "정암연구원 · 조광조 역사연구원",
    template: "%s | 정암연구원",
  },
  description:
    "나라를 바로 세우고자 했던 정신. 정암 조광조 선생의 도학정치 정신을 잇고 역사·문화 답사와 강의를 통해 우리 동네의 역사를 함께 만들어갑니다.",
  keywords: ["조광조", "정암", "심곡서원", "도학정치", "기묘사림", "용인", "역사연구원", "한국사 아카데미"],
  authors: [{ name: "조광조 역사연구원" }],
  openGraph: {
    title: "정암연구원 · 조광조 역사연구원",
    description: "나라를 바로 세우고자 했던 정신",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSerif.variable} ${notoSans.variable} ${myeongjo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
