import { Asset } from "next/font/google";
import Image from "next/image";

export function Leading() {
  return (
    <main className="block md:grid md:grid-cols-12">
      <div className="flex px-8 flex-col-reverse md:px-8 lg:px-0 md:col-span-12 lg:col-span-6 lg:col-start-4 lg:col-end-10 md:grid grid-cols-2 items-center">
        <div className="text-center md:text-left pb-8">
          <h1 className="text-3xl font-black mb-1">
            Hello, <br /> I'm WellBinhoo
          </h1>
          <h5 className="text-slate-700 text-lg">Jr Developer</h5>
          <div className="flex my-2">
            <button className="btn ">Baixar CV</button>
            <button className="btn ">Me Contrate</button>
          </div>
        </div>

        <div className="py-20">
          <img className="rounded w-[30vw]"
            src="/Assets/Well Snoop Style 2.jpg"
            alt={"WellBinho Ilustrado"}
          />
        </div>
      </div>
    </main>
  );
}
