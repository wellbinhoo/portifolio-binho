export function About() {
  return (
    <div className="bg-blue-500 flex-col lg:flex-row w-[87vw] lg:w-[60vw] mx-auto rounded-2xl px-5 py-8 flex">
      <img className="rounded-lg w-full mb-4 lg:mb-0 lg:w-1/3 px-2 lg:px-0" src="/Assets/Well Snoop Style 2.jpg" alt="Fotinha" />

      <div className="lg:px-8 px-0">
        <div className="mb-5 pl-2">
          <h1 className="font-black text-white text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">Sobre mim:</h1>
          <h2 className=" font-bold text-xl text-yellow-100 ">Desenvolvedor Front-end</h2>
          <p className="font-regular text-white ">Olá! Sou Welber, um desenvolvedor front-end júnior, aprendendo React, Node.js e Flutter. Explore meu portfólio para ver como estou combinando criatividade e funcionalidade em projetos reais. 
          Bem-vindo ao meu mundo de aprendizado e inovação!</p>
        </div>
        <div>
          <button className="btn">Contrate-me</button>
          <button className="btn">Baixar Curriculo</button>
        </div>
      </div>
    </div>
  );
}
