import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import dynamic from 'next/dynamic';
import Navbar from "./components/navbar";
import NoSSR from "./components/helper/no-ssr";
import "./css/card.scss";
import "./css/globals.scss";

// Dynamically import ScrollToTop to avoid SSR issues
const ScrollToTop = dynamic(() => import('./components/helper/scroll-to-top'), {
  ssr: false,
  loading: () => null
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Raghav Khandelwal - Software Developer",
  description:
    "This is the portfolio of Raghav Khandelwal. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <NoSSR>
            <ScrollToTop />
          </NoSSR>
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
