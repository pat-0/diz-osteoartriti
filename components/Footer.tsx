import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
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
            <p className="text-gray-400 text-sm leading-relaxed">
              Diz osteoartriti hakkında kapsamlı bilgi, tedavi yöntemleri ve rehabilitasyon
              egzersizleri. Ortopedi ve fizik tedavi iş birliği ile diz OA yönetimi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/oa-nedir" className="hover:text-primary transition-colors">
                  OA Nedir?
                </Link>
              </li>
              <li>
                <Link href="/tedavi" className="hover:text-primary transition-colors">
                  Tedavi Yöntemleri
                </Link>
              </li>
              <li>
                <Link href="/egzersizler" className="hover:text-primary transition-colors">
                  Egzersiz Programı
                </Link>
              </li>
              <li>
                <Link href="/hastalar-icin" className="hover:text-primary transition-colors">
                  Hastalar İçin
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Kaynaklar</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/multidisipliner" className="hover:text-primary transition-colors">
                  Multidisipliner Yaklaşım
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Diz OA Rehberi. Fizik Tedavi ve Rehabilitasyon.</p>
          <p className="mt-2 md:mt-0">
            Sağlık bilgileri eğitim amaçlıdır. Doktorunuza danışın.
          </p>
        </div>
      </div>
    </footer>
  );
}
