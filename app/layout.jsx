import { Inter } from "next/font/google";
import '../styles/globals.css';
import { Toaster } from "../components/ui/toaster"
import { ThemeProvider } from "@/components/theme/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OneHope",
  description: "Tesfa is a platform for sharing ministry report and activities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-full flex items-center justify-center bg-neutral-200">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster/>
          </ThemeProvider>
      </body>
    </html>
  );
}
