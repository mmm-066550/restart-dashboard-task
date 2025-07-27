import { Poppins } from "next/font/google";
import Provider from "../lib/provider";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Restart Dashboard Task",
  description: "Restart Dashboard Task with Next.js, Tailwind CSS, and Redux",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${poppins.className}`}>
        <Provider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Provider>
      </body>
    </html>
  );
}
