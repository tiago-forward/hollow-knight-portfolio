import UpDetailProfile from "../assets/details/up-detail-profile.png";
import LowerDetailProfile from "../assets/details/lower-detail-profile.png";
import ProfileNav from "../components/ui/ProfileNav";
import { useProfileNavStore } from "../stores/ProfileNavStore";

export default function Profile() {
  const { index } = useProfileNavStore();

  return (
    <div className="mx-auto max-w-3xl lg:px-6 lg:py-6">
      <div className="flex flex-col items-center relative mt-12">
        <img
          src={UpDetailProfile}
          alt="up detail profile"
          className="absolute -top-12 z-10"
        />
        <div className="bg-black/70 backdrop-blur-xs min-h-[300px] pb-10 lg:text-xl p-4 w-full">
          {index === 0 && (
            <p>
              Apaixonado por computadores desde os 12 anos, sempre me encantei
              ao ver sites bem estruturados e visualmente atraentes na web, além
              de outros tipos de layouts. Durante minha formação em Análise e
              Desenvolvimento de Sistemas, tive a oportunidade de conhecer a
              programação, e a área de front-end tem se tornado cada vez mais
              fascinante para mim. Meu objetivo é me tornar um bom programador,
              e por isso estou sempre em busca de novos conhecimentos e aberto a
              aprender mais.
            </p>
          )}

          {index === 1 && (
            <p>
              Atualmente atuando como Desenvolvedor Web (primeira experiência
              profissional). Experiência prática com JavaScript/TypeScript,
              React, Next.js, Git/GitHub. Sigo me aprimorando com projetos
              pessoais e cursos. Busco crescer assumindo novas
              responsabilidades, apoiando e montando uma pequena equipe de
              desenvolvimento, com o propósito de colocar nossas ideias do papel
              em realidade no mundo dos negócios.
            </p>
          )}
          {index === 2 && (
            <p>
              Tenho experiência profissional em atendimento de telemarketing e,
              principalmente, como secretário médico, onde desenvolvi grande
              parte das minhas competências pessoais, como trabalho em equipe,
              liderança, comunicação clara, escuta ativa, disciplina, empatia e
              habilidade em digitação. Como desenvolvedor front-end, prestando
              suporte e solucionando demandas internas da empresa. Além disso,
              participei ativamente do desenvolvimento de dois projetos
              iniciados do zero junto aos meus colegas, adquirindo experiência
              prática em programação, organização de tarefas e entrega de
              soluções.
            </p>
          )}
        </div>
        <img
          src={LowerDetailProfile}
          alt="lower detail profile"
          className="absolute -bottom-4"
        />
      </div>
      <div className="mt-40 flex justify-center">
        <ProfileNav />
      </div>
    </div>
  );
}
