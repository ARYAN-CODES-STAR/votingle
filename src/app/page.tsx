import Link from "next/link";
import Navbar from "@/app/Navbar/page";
import Hero from "./Hero";
import Cards from "./Cards";
import Footer from "./Footer";
import Result from "./Result";

export default function Home() {
  return (
    <main className="">
       <Hero />
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
      <Result />
    </main>
  );
}
