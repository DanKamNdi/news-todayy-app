import {Inter, Noto_Sans} from "next/font/google";
import "./globals.css";
import {AuthProvider} from "@/app/AuthProvider";
import NavBar from "@/app/components/NavBar";

// const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans({subsets: ["latin"]})

export const metadata = {
  title: "News Todayy App",
  description: "News App built by Alvin Kamau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        {/*<NavBar />*/}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
