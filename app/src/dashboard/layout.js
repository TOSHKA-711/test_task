import Footer from "../components/footer";
import NavBar from "../components/NavBar";

export default function dashboardLayout({ children }) {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-gray-100">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
