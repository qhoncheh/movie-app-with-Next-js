import Header from "../components/header";
import "../styles/globals.css";
const RoutLayout = ({ children }) => {
  return (
    <html lang="fa-IR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RoutLayout