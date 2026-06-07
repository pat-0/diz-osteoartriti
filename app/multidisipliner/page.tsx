export default function MultidisiplinerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Ekip İş Birliği
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Multidisipliner Yaklaşım
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Diz osteoartriti yönetiminde en iyi sonuçlar, farklı sağlık branşlarının iş birliği ile elde edilir.
            Her uzman, tedavi sürecinin kritik bir parçasını oluşturur.
          </p>
        </div>

        {/* Why Multidisciplinary */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Neden Multidisipliner Yaklaşım?</h2>
            <p className="leading-relaxed mb-4">
              Diz OA karmaşık bir durum ve tek bir branşın yaklaşımı her zaman yeterli olmayabilir.
              Farklı uzmanlıkların birleşimi:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Daha kapsamlı değerlendirme sağlar
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Kişiselleştirilmiş tedavi planları oluşturur
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Hasta sonuçlarını iyileştirir
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Yaşam kalitesini daha fazla artırır
              </li>
            </ul>
          </div>
        </section>

        {/* Team Members */}
        <section className="max-w-5xl mx-auto mb-12">
          <h2 className="section-title">Sağlık Ekibinin Üyeleri</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ortopedi */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-primary">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ortopedi Uzmanı</h3>
                  <p className="text-gray-500 text-sm">Cerrahi ve Konservatif Tedavi</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Tanı ve radyolojik değerlendirme</li>
                <li>• İlaç tedavisi planlaması</li>
                <li>• Eklem içi enjeksiyonlar</li>
                <li>• Cerrahi tedavi kararı</li>
                <li>• Protez cerrahisi</li>
              </ul>
            </div>

            {/* FTR */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-accent">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💪</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Fizyoterapist</h3>
                  <p className="text-gray-500 text-sm">Rehabilitasyon Programı</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Fizik tedavi modaliteleri</li>
                <li>• Egzersiz programı</li>
                <li>• Manuel tedapi teknikleri</li>
                <li>• Yürüme eğitimi</li>
                <li>• Fonksiyonel rehabilitasyon</li>
              </ul>
            </div>

            {/* Diyetisyen */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-success">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🥗</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Diyetisyen</h3>
                  <p className="text-gray-500 text-sm">Kilo ve Beslenme Yönetimi</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Kilo kontrolü programı</li>
                <li>• Anti-inflamatuvar diyet</li>
                <li>• Beslenme eğitimi</li>
                <li>• Takviye önerileri</li>
                <li>• Su tüketimi planlaması</li>
              </ul>
            </div>

            {/* Psikolog */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Psikolog/Psikiyatrist</h3>
                  <p className="text-gray-500 text-sm">Mental Sağlık Desteği</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Kronik ağrı yönetimi</li>
                <li>• Depresyon ve anksiyete</li>
                <li>• Motivasyon artırma</li>
                <li>• Stres yönetimi</li>
                <li>• Uyku düzeni</li>
              </ul>
            </div>

            {/* Hemşire */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-pink-500">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">👩‍⚕️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Hemşire</h3>
                  <p className="text-gray-500 text-sm">Bakım ve Koordinasyon</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Hasta eğitimi</li>
                <li>• Yara bakımı (cerrahi sonrası)</li>
                <li>• İlaç yönetimi</li>
                <li>• Evde bakım planlaması</li>
                <li>• Takip ve koordinasyon</li>
              </ul>
            </div>

            {/* Sosyal Hizmetler */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Sosyal Çalışıcı</h3>
                  <p className="text-gray-500 text-sm">Sosyal Destek ve Kaynaklar</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Sosyal destek programları</li>
                <li>• Finansal kaynaklar</li>
                <li>• Ulaşım düzenlemeleri</li>
                <li>• Ev düzenlemeleri</li>
                <li>• Toplumsal kaynaklar</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Multidisipliner Süreç</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {[
              {
                step: "1",
                title: "Başvuru ve Değerlendirme",
                description: "Hasta ortopedi polikliniğine başvurur. Gerekli tetkikler yapılır."
              },
              {
                step: "2",
                title: "Multidisipliner Planlama",
                description: "FTR, diyetisyen ve diğer branşlar görüşülür. Tedavi planı oluşturulur."
              },
              {
                step: "3",
                title: "Tedavi Başlangıcı",
                description: "Konservatif tedaviler başlar. FTR seansları, diyet programı uygulanır."
              },
              {
                step: "4",
                title: "Düzenli Takip",
                description: "Hasta düzenli takip edilir. İlerleme değerlendirilir, plan revize edilir."
              },
              {
                step: "5",
                title: "Cerrahi Gerekirse",
                description: "Gerekirse cerrahi planlanır. Cerrahi sonrası rehabilitasyon devam eder."
              },
              {
                step: "6",
                title: "Uzun Dönem Yönetim",
                description: "Yaşam boyu devam eden egzersiz ve yaşam tarzı değişiklikleri."
              },
            ].map((item, index) => (
              <div key={index} className="relative mb-8 pl-20">
                <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl font-bold text-primary mr-3">{item.step}</span>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Patient Benefits */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Hasta Avantajları
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🎯", text: "Kişiselleştirilmiş tedavi" },
                { icon: "⚡", text: "Daha hızlı iyileşme" },
                { icon: "💊", text: "Daha az ilaç ihtiyacı" },
                { icon: "😊", text: "Daha iyi yaşam kalitesi" },
                { icon: "📊", text: "Daha iyi sonuçlar" },
                { icon: "🤝", text: "Sürekli destek" },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-4">
                  <span className="text-2xl mr-3">{benefit.icon}</span>
                  <span className="font-semibold text-gray-900">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
