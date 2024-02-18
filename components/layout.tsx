import Header from "./header";
import Navbar from "./navBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Navbar />
      </div>
    </>
  );
}
