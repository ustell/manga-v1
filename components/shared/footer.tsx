import { Instagram, Twitter, YouTube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-6 px-4 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Логотип и соцсети */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
              <span className="text-red-500 text-xl font-bold">月</span>
            </div>
            <span className="font-semibold text-lg">MOON</span>
          </div>
          <div className="flex gap-4">
            <Instagram className="w-6 h-6 cursor-pointer" />
            <YouTube className="w-6 h-6 cursor-pointer" />
            <Twitter className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-6 mt-4">
          <a href="#" className="text-sm">
            CONTATO
          </a>
          <a href="#" className="text-sm">
            POLÍTICA DE PRIVACIDADE
          </a>
          <a href="#" className="text-sm">
            TERMOS DE USO
          </a>
        </div>

        <div className="w-full border-t border-white my-4"></div>

        <p className="text-xs">&copy;2024 REDMOON, INC.</p>
      </div>
    </footer>
  );
}
