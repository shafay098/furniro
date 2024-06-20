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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={mergeClass(inter.variable, poppins.variable, "htmlClass")}
    >
      <body className={"bodyContainerStyle"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
