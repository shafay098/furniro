import { Inter, Poppins } from "next/font/google";
import { mergeClass } from "@/utils/HelperFunctions";
import { Header } from "@/components/CommonComponents/Header";
import { Footer } from "@/components/CommonComponents/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./colors.css";
import "./typograpghy.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const inter = Inter({ subsets: ["latin"], variable: "--Inter" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--Poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Furniro",
  description:
    "Furniro is an e-commerce furniture website built with Next.js for the frontend and NestJS with MongoDB for the backend, utilizing Swiper.js for smooth browsing. The platform showcases a wide range of furniture, including bedroom, drawing room, and living room pieces. It offers users a seamless shopping experience with detailed product descriptions and high-quality visuals.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={mergeClass(inter.variable, poppins.variable, "htmlClass")}
    >
      <body className="p-0">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
