export default function TedaviPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Diz OA Tedavi Yöntemleri
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Osteoartritin (OA) Fizyoterapi ve Rehabilitasyon Programlarıyla Tedavisi
          </p>
        </div>

        {/* Physical Therapy Modalities */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-secondary">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Fizik Tedavi Modaliteleri</h3>
                <p className="text-gray-600 text-sm">FTR araçları ve teknikler</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Sıcak Paket", color: "bg-red-100 text-red-800" },
                { name: "Soğuk Paket", color: "bg-blue-100 text-blue-800" },
                { name: "TENS", color: "bg-green-100 text-green-800" },
                { name: "Ultrason", color: "bg-purple-100 text-purple-800" },
                { name: "Lazer", color: "bg-orange-100 text-orange-800" },
                { name: "SW Diatermi", color: "bg-yellow-100 text-yellow-800" },
                { name: "Manyetik Alan", color: "bg-indigo-100 text-indigo-800" },
                { name: "Masaj", color: "bg-pink-100 text-pink-800" },
              ].map((modality, index) => (
                <div key={index} className={`${modality.color} rounded-lg p-3 text-center`}>
                  <div className="font-semibold text-gray-900">{modality.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exercise Integration */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md border-2 border-accent">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Egzersiz Tedavisi</h3>
                <p className="text-gray-600">Tüm tedavi aşamalarında kritik öneme sahip</p>
              </div>
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Egzersiz tedavisi, diz OA yönetiminin temel taşıdır. Hem konservatif hem de cerrahi
              tedavide aktif rol oynar. Düzenli egzersiz:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Ağrıyı azaltır",
                "Hareket açıklığını korur",
                "Kas kuvvetini artırır",
                "Dengeyi geliştirir",
                "Fonksiyonu iyileştirir",
                "Yaşam kalitesini artırır",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                  <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="/egzersizler"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors"
            >
              Egzersiz Programını Gör
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
