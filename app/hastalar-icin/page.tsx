export default function HastalarIcinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-100 text-success rounded-full text-sm font-semibold mb-4">
            Hasta Rehberi
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hastalar İçin Rehber
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Diz osteoartriti ile yaşayan hastalar için pratik bilgiler, günlük yaşam ipuçları ve
            öz-yönetim stratejileri.
          </p>
        </div>

        {/* Daily Living Tips */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Günlük Yaşam İpuçları</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Kilo Kontrolü",
                icon: "⚖️",
                tips: [
                  "Her 1 kg kilo kaybı diz yükünü 4 kg azaltır",
                  "Dengeli beslenme ve düzenli egzersiz",
                  "Diyetisyen desteği alın"
                ]
              },
              {
                title: "Aktivite Modifikasyonu",
                icon: "🚶",
                tips: [
                  "Yüksek etkili aktivitelerden kaçının (koşu, zıplama)",
                  "Düşük etkili alternatifleri tercih edin",
                  "Ara vererek aktivite yapın"
                ]
              },
              {
                title: "Düzgün Vücut Mekaniği",
                icon: "🧘",
                tips: [
                  "Ağır yükleri kaldırmaktan kaçının",
                  "Dizleri aşırı bükmekten kaçının",
                  "Sandalye kullanarak oturun-kalkın"
                ]
              },
              {
                title: "Ayakkabı Seçimi",
                icon: "👟",
                tips: [
                  "Destekli, amortisörlü ayakkabı",
                  "Topuklu ayakkabı kullanmayın",
                  "Ortopedik tabanlık değerlendirin"
                ]
              },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pain Management */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Ağrı Yönetimi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3 flex items-center">
                  <span className="mr-2">❄️</span>
                  Soğuk Uygulama (Kriyoterapi)
                </h3>
                <p className="text-sm opacity-90 mb-2">
                  Akut ağrı ve şişlikte 15-20 dakika soğuk paket uygulayın.
                </p>
                <p className="text-xs opacity-75">
                  Günde 3-4 kez, cilt üzerinden havlu ile
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-3 flex items-center">
                  <span className="mr-2">🔥</span>
                  Sıcak Uygulama
                </h3>
                <p className="text-sm opacity-90 mb-2">
                  Kas gevşetmek için 15-20 dakika sıcak paket uygulayın.
                </p>
                <p className="text-xs opacity-75">
                  Egzersiz öncesi veya kronik ağrıda
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-3 flex items-center">
                  <span className="mr-2">💊</span>
                  İlaç Kullanımı
                </h3>
                <p className="text-sm opacity-90 mb-2">
                  Doktorunuzun önerdiği dozda ve sıklıkta kullanın.
                </p>
                <p className="text-xs opacity-75">
                  Ağrı öncesi değil, düzenli kullanım daha etkili
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-3 flex items-center">
                  <span className="mr-2">🛏️</span>
                  Dinlenme Pozisyonu
                </h3>
                <p className="text-sm opacity-90 mb-2">
                  Dizin altına yastık koyarak hafif bükük pozisyonda uyuyun.
                </p>
                <p className="text-xs opacity-75">
                  Uzun süre aynı pozisyonda kalmayın
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to See a Doctor */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Ne Zaman Doktora Başvurmalı?</h2>

          <div className="space-y-4">
            {[
              {
                severity: "Acil",
                color: "red",
                conditions: [
                  "Ani şiddetli ağrı ve diz kilitlenmesi",
                  "Dizde aşırı şişlik ve kızarıklık",
                  "Ateş ve genel hastalık hali"
                ]
              },
              {
                severity: "Erken",
                color: "orange",
                conditions: [
                  "Sürekli ağrı ve fonksiyon kısıtlılığı",
                  "Geceleri uykudan uyandıran ağrı",
                  "Günlük aktiviteleri yapamama"
                ]
              },
              {
                severity: "Düzenli Takip",
                color: "blue",
                conditions: [
                  "Yeni tanı konmuş hastalar",
                  "Cerrahi öncesi değerlendirme",
                  "6 ayda bir rutin kontrol"
                ]
              },
            ].map((category, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-md border-l-4 border-${category.color}-500`}>
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 bg-${category.color}-100 text-${category.color}-800 text-xs font-semibold rounded-full mr-3`}>
                    {category.severity}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {category.severity === "Acil" ? "Acil Servis" : category.severity === "Erken" ? "Poliklinik" : "Planlı Randevu"}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.conditions.map((condition, conditionIndex) => (
                    <li key={conditionIndex} className="flex items-start text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Sıkça Sorulan Sorular</h2>

          <div className="space-y-4">
            {[
              {
                question: "OA ilerleyici bir hastalık mıdır?",
                answer: "Evet, OA genellikle yavaşça ilerler. Ancak tedavi ve yaşam tarzı değişiklikleri ile bu ilerleme yavaşlatılabilir ve semptomlar kontrol altına alınabilir."
              },
              {
                question: "Egzersiz ağrımı kötüleştirir mi?",
                answer: "Doğru egzersizler ağrıyı azaltır. Yüksek etkili egzersizlerden kaçınıp, düşük etkili ve düzenli egzersiz yapmak diz OA'da kritik önem taşır."
              },
              {
                question: "Kilo vermem gerçekten yardımcı olur mu?",
                answer: "Evet! Her 1 kg kilo kaybı diz eklemine binen yükü 4 kg azaltır. Obez hastalarda kilo vermesi, semptomları önemli ölçüde iyileştirebilir."
              },
              {
                question: "Ne zaman protez ameliyatı gerekir?",
                answer: "Konservatif tedaviler yetersiz kaldığında, şiddetli ağrı ve fonksiyon kaybı olduğunda, ve hastanın günlük yaşamı etkilendiğinde protez düşünülür. Karar hastanın durumuna göre verilir."
              },
              {
                question: "Protez sonrası normal hayatıma dönebilir miyim?",
                answer: "Evet, çoğu hasta protez sonrası aktif hayatına döner. Düzenli rehabilitasyon ve egzersiz ile başarılı sonuçlar elde edilir."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-primary mr-2">Q{index + 1}.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Home Exercise Program */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🏠</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Ev Egzersiz Programı</h3>
                <p className="text-gray-600">Düzenli yapmak en önemlisi</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { day: "Pazartesi", focus: "Kuvvetlendirme" },
                { day: "Salı", focus: "Germe" },
                { day: "Çarşamba", focus: "Aerobik" },
                { day: "Perşembe", focus: "Kuvvetlendirme" },
                { day: "Cuma", focus: "Denge" },
                { day: "Cumartesi", focus: "Aktif Dinlenme" },
                { day: "Pazar", focus: "Aktif Dinlenme" },
              ].map((day, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <div className="font-bold text-gray-900 mb-1">{day.day}</div>
                  <div className="text-sm text-gray-600">{day.focus}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-700 text-sm">
              Detaylı egzersiz programı için{" "}
              <a href="/egzersizler" className="text-primary font-semibold hover:underline">
                Egzersizler sayfamızı
              </a>{" "}
              ziyaret edin. Her egzersizi 3 set, 10-12 tekrar olarak yapın. Ağrı artışı olursa durun ve
              sağlık profesyoneline danışın.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="max-w-4xl mx-auto">
          <h2 className="section-title">Yararlı Kaynaklar</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Türkiye Fizyoterapistler Derneği",
                description: "Fizik tedapi ve rehabilitasyon hakkında bilgiler",
                link: "#"
              },
              {
                title: "Türk Ortopedi ve Travmatoloji Derneği",
                description: "Ortopedi cerrahisi ve tedavi seçenekleri",
                link: "#"
              },
              {
                title: "OA Foundation",
                description: "Uluslararası osteoartrit kaynakları",
                link: "#"
              },
              {
                title: "Yerel Destek Grupları",
                description: "Hasta destek grupları ve topluluklar",
                link: "#"
              },
            ].map((resource, index) => (
              <a key={index} href={resource.link} className="block bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                <span className="text-primary text-sm font-semibold">Daha fazlası →</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
