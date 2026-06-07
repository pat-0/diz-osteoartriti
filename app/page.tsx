import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-xl mx-auto text-center">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{
                background: "linear-gradient(to right, #2DD4BF, #5EEAD4, #14B8A6)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                textShadow: "0 0 50px rgba(45, 212, 191, 0.6)",
                animation: "shine 3s linear infinite",
                backgroundSize: "200% auto"
              }}
            >
              Diz Osteoartriti
            </h1>
            <p
              className="text-lg md:text-xl text-white leading-relaxed font-medium opacity-0 animate-fade-in"
              style={{
                textShadow: "2px 2px 10px rgba(0,0,0,0.9)",
                animation: "fade-in 1s ease-out 0.5s forwards"
              }}
            >
              Diz OA (Diz Osteoartriti), diz eklemindeki kıkırdağın zamanla aşınması ve eklemde dejeneratif
              değişikliklerin gelişmesiyle ortaya çıkan kronik bir eklem hastalığıdır. Halk arasında {"dizde kireçlenme"} olarak bilinir.
            </p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Osteoartrit Nedir?</h3>
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
                  Osteoartritin (OA) Fizyoterapi ve Rehabilitasyon Programlarıyla Tedavisi
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
