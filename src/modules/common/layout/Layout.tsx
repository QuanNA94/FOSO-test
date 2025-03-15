import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
