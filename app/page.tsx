import CTA from "@/components/cta";
import { Features } from "@/components/features";
import GetInfo from "@/components/getinfo";
import { Header } from "@/components/Header";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return <>
    
      <Hero/>
      <Features/>
      <GetInfo/>
      <CTA/>
  </>
}
