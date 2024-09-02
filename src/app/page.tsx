import Image from "next/image";

import { Leading } from "./_components/leading";
import { About } from "./_components/about";

export default function Home() {
  return (
    <main >
      <Leading />
      <About />
    </main>
  );
}
