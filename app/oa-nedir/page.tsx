export default function OaNedirPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            DİZ OSTEOARTRİTİ (OA)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Osteoartrit, eklem kıkırdağının zamanla aşınması ve eklemde yapısal değişikliklerin oluşmasıyla karakterize dejeneratif bir eklem hastalığıdır.
          </p>
        </div>

        {/* Symptoms Section - From DOCX (2) */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Belirtileri</h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              "Diz ağrısı (özellikle hareketle artan)",
              "Sabah tutukluğu (genellikle 30 dakikadan kısa)",
              "Hareket kısıtlılığı",
              "Eklemden ses gelmesi (krepitasyon)",
              "Merdiven çıkma veya çömelmede zorlanma",
              "Kas güçsüzlüğü",
              "İleri evrede dizde şekil bozukluğu (varus veya valgus deformitesi)",
            ].map((symptom, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm border-l-4 border-primary">
                <span className="w-7 h-7 bg-blue-100 text-primary rounded-full flex items-center justify-center text-sm font-bold mr-3 shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">{symptom}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What Happens in Knee OA */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Diz OA'sında Olanlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Kıkırdak İncelmesi",
                description: "Eklem kıkırdağı zamanla incelir ve zayıflar.",
                icon: "🦴"
              },
              {
                title: "Kemik Sürtünmesi",
                description: "Kemikler birbirine sürtünür ve ağrı oluşur.",
                icon: "🔴"
              },
              {
                title: "Osteofit Oluşumu",
                description: "Kenarlarda kemik büyümeleri (osteofit) gelişir.",
                icon: "⚡"
              },
              {
                title: "Sinoviyal İltihabı",
                description: "Eklem zarı iltihaplanabilir ve şişebilir.",
                icon: "🌡️"
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Factors */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Risk Faktörleri</h2>
          <p className="text-gray-700 mb-6">
            Bazı faktörler diz OA gelişme riskini artırabilir:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Yaş", description: "Risk yaşla birlikte artar", color: "bg-blue-100 text-blue-800" },
              { name: "Obezite", description: "Ekstra kilo dizlere ek yük bindirir", color: "bg-red-100 text-red-800" },
              { name: "Cinsiyet", description: "Kadınlarda daha sık görülür", color: "bg-pink-100 text-pink-800" },
              { name: "Genetik", description: "Aile öyküsü riski artırır", color: "bg-purple-100 text-purple-800" },
              { name: "Travma", description: "Diz travmaları gelecekte OA'ya yol açabilir", color: "bg-orange-100 text-orange-800" },
              { name: "Mesleksel", description: "Tekrarlayan diz stresi riski artırır", color: "bg-green-100 text-green-800" },
            ].map((factor, index) => (
              <div key={index} className={`${factor.color} rounded-lg p-4`}>
                <div className="font-bold text-gray-900 mb-1">{factor.name}</div>
                <div className="text-sm opacity-80">{factor.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Diagnosis */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Tanı Yöntemleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-primary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Fizik Muayene</h3>
              </div>
              <p className="text-gray-600">
                Hekim dizinizi muayene eder, hareket açıklığını kontrol eder, hassasiyet ve şişliği değerlendirir.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-primary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Radyografi (DGR)</h3>
              </div>
              <p className="text-gray-600">
                Diz grafisi ile kıkırdak kaybı, osteofitler ve eklem aralığı daralması değerlendirilir.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-primary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">MR Görüntüleme</h3>
              </div>
              <p className="text-gray-600">
                Erken dönem tanıda ve kıkırdak detaylarını görmek için kullanılır. DGR'de görünmeyen değişiklikleri gösterir.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-primary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Laboratuvar Testleri</h3>
              </div>
              <p className="text-gray-600">
                Ayırıcı tanı için kullanılır. Romatoid artrit gibi inflamatuvar durumları ekarte etmek için.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Sonraki Adımlar</h2>
            <p className="mb-6 opacity-90">
              Diz OA tanısından sonra tedavi seçeneklerini öğrenin ve egzersiz programınızı oluşturun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tedavi"
                className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Tedavi Yöntemleri
              </a>
              <a
                href="/egzersizler"
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Egzersiz Programı
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
