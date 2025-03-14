import { Container } from '@/components/shared/container';
import Footer from '@/components/shared/footer';
import { HistoryContent } from '@/components/shared/history-content';
import CharacterSelection from '@/components/shared/person-history';
import { Title } from '@/components/shared/title';
import { historyData } from '@/data/historyData';

export default function Home() {
  return (
    <>
      <Container
        className="mb-21 grid grid-cols-3 grid-auto-columns minmax[0,1fr] max-h-[671px] h-full bg-[#FAF9F3] px-5 border-b-2"
        size="xs"
      >
        <div>
          <div className="flex flex-row-reverse gap-5">
            <span className="py-3 px-2 bg-red-700 text-black max-w-[32px] h-[280px] text-xl">
              いらっしゃいませ
            </span>
            <span className="block h-[285px] w-0.5 bg-black "></span>
            <span className="block h-[313px] w-0.5 bg-black "></span>
            <span className="block h-[295px] w-0.5 bg-black "></span>
          </div>
          <div>
            <p>Ha sempre uma luz no final</p>
            <Title text={'Hikari no Nisshoku'} size="xl" />
            <p>
              Seja bem-vindo ao novo mundo dela onde a vida pode depender de uma
              simples fagulha de brasa, quando o eclipse chega a terra se torna
              um inferno para todos.
            </p>
          </div>
        </div>
        <img
          src={'./header-picture.png'}
          alt="Главное изображение аниме"
          className=""
        />
        <div className="relative flex flex-col justify-around p-6 text-black w-full py-11">
          <div className="flex flex-row-reverse justify-between">
            <h2 className="inline text-[40px] font-bold rotate-90 text-nowrap">
              COUTDOWN <br /> PARA O{' '}
              <span className="text-red-600">ECLIPSE</span>
            </h2>
            <div className="inline-flex flex-col gap-6">
              {[
                { time: '14', label: 'Dias' },
                { time: '09', label: 'Horas' },
                { time: '27', label: 'Minutos' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-[1px] h-[45px] bg-red-600" />
                  <div className="flex flex-col items-start">
                    <span className="text-4xl font-bold">{item.time}</span>
                    <span className="text-xs uppercase">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 mt-6 font-bold uppercase w-full">
            Reserve
          </button>
        </div>
      </Container>

      <Container className="grid grid-cols-2 mb-40" size="xs">
        <div className="bg-[#FAF9F3] px-20">
          <nav className="mb-8">
            <ul className="flex gap-6">
              {['Historia', 'Ambiente', 'Inimigos', 'Curiosidade'].map(
                (item) => (
                  <li key={item}>
                    <a
                      className="uppercase border-b-2 hover:border-black-red pb-8"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          {historyData.map((item) => (
            <HistoryContent key={item.id} {...item} />
          ))}
          <button className="px-6 py-3 bg-red-700 text-white uppercase">
            CONHEÇA O LUGAR
          </button>
        </div>
        <div
          className="bg-center bg-no-repeat bg-contain relative"
          style={{ backgroundImage: "url('/history-bg.svg')" }}
        >
          <img
            className="absolute bottom-48 left-[-29px] h-auto max-w-none"
            src="./Subtract.png"
            alt="Фон истории"
          />
        </div>
      </Container>

      <CharacterSelection />

      <Footer />
    </>
  );
}
