import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <span className="text-lg font-bold">Diz OA Rehberi</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto mb-8">
          Diz osteoartriti hakkında kapsamlı bilgi, tedavi yöntemleri ve rehabilitasyon
          egzersizleri. Ortopedi ve fizik tedavi iş birliği ile diz OA yönetimi.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link href="/oa-nedir" className="text-sm text-gray-400 hover:text-primary transition-colors">
            OA Nedir?
          </Link>
          <Link href="/tedavi" className="text-sm text-gray-400 hover:text-primary transition-colors">
            Tedavi Yöntemleri
          </Link>
          <Link href="/egzersizler" className="text-sm text-gray-400 hover:text-primary transition-colors">
            Egzersiz Programı
          </Link>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col items-center text-sm text-gray-500">
          <p>© {currentYear} Diz OA Rehberi. Fizik Tedavi ve Rehabilitasyon.</p>
          <p className="mt-2">
            Sağlık bilgileri eğitim amaçlıdır. Doktorunuza danışın.
          </p>
        </div>
      </div>
    </footer>
  );
}
