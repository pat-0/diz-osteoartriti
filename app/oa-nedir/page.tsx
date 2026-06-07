export default function OaNedirPage() {
  return (
    <div className="relative min-h-screen py-12 bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/images/oa-nedir-bg.webp')" }}>
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative container mx-auto px-4">
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

        {/* Risk Factors */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">Risk Faktörleri</h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              "İleri yaş",
              "Obezite",
              "Daha önce geçirilmiş diz yaralanmaları",
              "Kas güçsüzlüğü",
              "Genetik yatkınlık",
              "Tekrarlayan zorlayıcı aktiviteler",
            ].map((factor, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm border-l-4 border-primary">
                <span className="w-7 h-7 bg-blue-100 text-primary rounded-full flex items-center justify-center text-sm font-bold mr-3 shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">{factor}</span>
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

      </div>
    </div>
  );
}
