export default function TedaviPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 bg-teal-100 text-accent rounded-full text-sm font-semibold mb-4">
            Tedavi ve Yönetim
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Diz OA Tedavi Yöntemleri
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Ortopedi ve fizik tedavi iş birliği ile diz osteoartriti etkili bir şekilde yönetilebilir.
            Tedavi planı hastanın ihtiyaçlarına göre kişiselleştirilir.
          </p>
        </div>

        {/* Treatment Philosophy */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Tedavi Felsefesi</h2>
            <p className="leading-relaxed mb-4">
              Diz OA tedavisinde <strong>konservatif (cerrahi olmayan)</strong> yöntemler ilk basamak olarak
              tercih edilir. Cerrahi tedavi, konservatif tedaviler yetersiz kaldığında veya ileri derece OA'da
              düşünülmelidir.
            </p>
            <p className="leading-relaxed">
              <strong>Fizik tedavi ve rehabilitasyon</strong>, OA yönetiminin temel taşıdır ve tüm tedavi
              aşamalarında yer alır.
            </p>
          </div>
        </section>

        {/* Conservative Treatment */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Konservatif Tedavi</h2>
          <p className="text-gray-700 mb-8">
            Cerrahi olmayan tedavi yöntemleri birçok hastada semptomları hafifletir ve yaşam kalitesini
            önemli ölçüde iyileştirir.
          </p>

          {/* Pharmacological */}
          <div className="bg-white rounded-lg p-8 shadow-md mb-6 border-l-4 border-primary">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Farmakolojik Tedavi</h3>
                <p className="text-gray-600 text-sm">İlaç tedavisi</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Oral İlaçlar</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Parasetamol:</strong> İlk basamak ağrı kesici</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>NSAID'ler:</strong> İltihap ve ağrı azaltıcı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Duloksetin:</strong> Kronik ağrıda</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Topikal İlaçlar</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>NSAID merhemler/jeller</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Kapsaisin kremler</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Daha az sistemik yan etki</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Injections */}
          <div className="bg-white rounded-lg p-8 shadow-md mb-6 border-l-4 border-accent">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Eklem İçi Enjeksiyonlar</h3>
                <p className="text-gray-600 text-sm">İntra-artiküler tedaviler</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Kortikosteroid</h4>
                <p className="text-gray-600 text-sm">Güçlü iltihap giderici, kısa süreli ağrı kesici</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Hyaluronik Asit</h4>
                <p className="text-gray-600 text-sm">Viskosüplementasyon, eklem yağlanması</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">PRP</h4>
                <p className="text-gray-600 text-sm">Platelet rich plasma, büyüme faktörleri</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Kök Hücre</h4>
                <p className="text-gray-600 text-sm">Rejeneratif tedavi, araştırma aşamasında</p>
              </div>
            </div>
          </div>

          {/* Physical Therapy */}
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

        {/* Surgical Treatment */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Cerrahi Tedavi</h2>
          <p className="text-gray-700 mb-8">
            Cerrahi tedavi, konservatif yöntemlerle yeterli rahatlama sağlanamadığında veya ileri derece
            OA'da düşünülmelidir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Artroskopik Cerrahi",
                description: "Minimal invaziv, eklem içi problemlerin temizlenmesi",
                icon: "🔬",
                severity: "Erken dönem"
              },
              {
                title: "Osteotomi",
                description: "Kemik kesisi ile aksiyon düzeltme, yük dağılımını değiştirme",
                icon: "🦴",
                severity: "Tek eklem, genç hasta"
              },
              {
                title: "Partial Diz Protezi",
                description: "Sadece hasarlı bölgeyi değiştirme, kemik koruma",
                icon: "🦿",
                severity: "Tek kompartman"
              },
              {
                title: "Total Diz Protezi",
                description: "Tüm eklem yüzeylerinin değiştirilmesi, altın standart",
                icon: "⚙️",
                severity: "İleri OA"
              },
            ].map((surgery, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">{surgery.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{surgery.title}</h3>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary text-xs font-semibold rounded-full">
                      {surgery.severity}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{surgery.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Post-operative Rehab */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-secondary to-primary rounded-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Cerrahi Sonrası Rehabilitasyon</h3>
                <p className="opacity-90">Başarılı sonuç için kritik önem taşır</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Erken Dönem</h4>
                <p className="text-sm opacity-90">Hareket açıklığı, ödem kontrolü, ağrı yönetimi</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Orta Dönem</h4>
                <p className="text-sm opacity-90">Kuvvetlendirme, denge, fonksiyonel egzersizler</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Geç Dönem</h4>
                <p className="text-sm opacity-90">Aktiviteye dönüş, spor, tam fonksiyon</p>
              </div>
            </div>

            <p className="text-sm opacity-80">
              Cerrahi sonrası rehabilitasyon programı protez tipine, hastanın yaşı ve aktivite düzeyine göre
              özelleştirilir. Düzenli FTR seansları ve ev egzersiz programı kritik öneme sahiptir.
            </p>
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

        {/* Multidisciplinary Approach */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Multidisipliner Yaklaşım</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Ortopedi", color: "bg-primary text-white" },
                { name: "FTR", color: "bg-accent text-white" },
                { name: "Diyetisyen", color: "bg-secondary text-white" },
                { name: "Psikolog", color: "bg-purple-500 text-white" },
              ].map((specialist, index) => (
                <div key={index} className={`${specialist.color} rounded-lg p-4 text-center`}>
                  <div className="font-semibold">{specialist.name}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700 mt-6">
              Diz OA yönetiminde en iyi sonuçlar multidisipliner iş birliği ile elde edilir.
              <a href="/multidisipliner" className="text-primary font-semibold hover:underline ml-2">
                Detaylı bilgi →
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
