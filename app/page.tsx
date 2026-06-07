import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 medical-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Diz Osteoartriti
              <span className="block text-primary mt-2">Anlama ve Yönetim</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Diz kireçlenmesi hakkında bilgi alın, tedavi seçeneklerini keşfedin ve
              rehabilitasyon egzersizleriyle yaşam kalitenizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/oa-nedir"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
              >
                OA Nedir?
              </Link>
              <Link
                href="/egzersizler"
                className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Egzersiz Programı
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Rehberimizde Neler Var?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/oa-nedir" className="group">
              <div className="medical-card p-8 h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">OA Nedir?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Osteoartritin tanımı, gelişimi, risk faktörleri ve belirtileri hakkında kapsamlı bilgi.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/tedavi" className="group">
              <div className="medical-card p-8 h-full">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tedavi Yöntemleri</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ortopedi ve fizik tedavi iş birliği ile konservatif ve cerrahi tedavi seçenekleri.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/egzersizler" className="group">
              <div className="medical-card p-8 h-full">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Egzersiz Programı</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ağrıyı azaltan, hareketi geliştiren ve kas kuvvetini artıran etkili egzersizler.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Overview Section */}
      <section className="py-16 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Tedavi Yaklaşımları</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Diz osteoartriti yönetiminde ortopedi ve fizik tedavi iş birliği ile en iyi sonuçlar elde edilir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Ortopedi */}
            <div className="info-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Ortopedi</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Tanı ve radyolojik değerlendirme
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Farmakolojik tedavi
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Eklem içi enjeksiyonlar
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Cerrahi tedavi seçenekleri
                </li>
              </ul>
            </div>

            {/* FTR */}
            <div className="info-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fizik Tedavi</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Fizik tedavi modaliteleri
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Egzersiz tedavisi
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Manuel tedapi teknikleri
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Hasta eğitimi ve yaşam tarzı
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tedavi"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors shadow-md"
            >
              Detaylı Bilgi Al
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Exercise Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Egzersiz Programı Önizleme</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Diz OA için etkili egzersizler ağrıyı azaltır, hareketi geliştirir ve yaşam kalitesini artırır.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {[
              { name: "Kuvvetlendirme", color: "bg-blue-500", icon: "💪" },
              { name: "Germe", color: "bg-green-500", icon: "🧘" },
              { name: "Aerobik", color: "bg-purple-500", icon: "🚴" },
              { name: "Denge", color: "bg-orange-500", icon: "⚖️" },
            ].map((item) => (
              <div key={item.name} className={`${item.color} rounded-lg p-6 text-center text-white shadow-md`}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold">{item.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/egzersizler"
              className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary-600 transition-colors shadow-md"
            >
              Tüm Egzersizleri Gör
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hemen Başlayın
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Diz osteoartriti yönetiminde ilk adımı atın. Egzersiz programınızı oluşturun ve yaşam kalitenizi artırın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hastalar-icin"
              className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Hastalar İçin Rehber
            </Link>
            <Link
              href="/multidisipliner"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Multidisipliner Yaklaşım
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
