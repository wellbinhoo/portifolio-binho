import Image from "next/image";

import { Leading } from "./_components/leading";
import { About } from "./_components/about";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <main >
      <Leading />
      <About />
      <Services />
    </main>
  );
}
