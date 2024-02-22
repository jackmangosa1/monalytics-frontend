import Container from "../../landing/components/layouts/Container";
import Navbar from "../../landing/components/Navbar";
import Footer from "../../landing/components/Footer";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}
