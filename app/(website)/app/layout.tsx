import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Container from "./components/layout/Container";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Navbar />
          {children}
        </div>
      </div>
    </Container>
  );
}
