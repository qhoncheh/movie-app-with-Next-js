import Header from "../components/header";
import "../app/globals.css";
import "@fontsource/vazir";
import Footer from "../components/footer";

const RoutLayout = ({ children }) => {
  return (
    <html lang="fa-IR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RoutLayout