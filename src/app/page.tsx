import Image from "next/image";
import {Header} from '@/app/_components/header'
import { Leading } from "./_components/leading";
export default function Home() {
  return (
   <main className="bg-yellow-300">
    <Header />
    <Leading/>
   </main>
  );
}
