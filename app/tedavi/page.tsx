export default function TedaviPage() {
  const sections = [
    {
      number: "1",
      title: "Hasta Eğitimi",
      items: [
        "Hastalık hakkında bilgilendirme",
        "Eklem koruma yöntemlerinin öğretilmesi",
        "Kilo kontrolü ve sağlıklı yaşam alışkanlıkları",
        "Aktivite düzenleme ve enerji koruma yöntemleri",
      ],
    },
    {
      number: "2",
      title: "Egzersiz Tedavisi",
      subSections: [
        {
          name: "Kuvvetlendirme Egzersizleri",
          items: [
            "Özellikle kuadriseps, hamstring ve kalça kaslarının güçlendirilmesi",
            "İzometrik ve progresif dirençli egzersizler",
          ],
        },
        {
          name: "Germe Egzersizleri",
          items: ["Hamstring", "Kuadriseps", "Gastroknemius ve soleus", "Kalça fleksörleri"],
        },
        {
          name: "Eklem Hareket Açıklığı Egzersizleri",
          items: [
            "Diz fleksiyon ve ekstansiyon hareketleri",
            "Eklem sertliğini azaltmaya yardımcı olur",
          ],
        },
        {
          name: "Aerobik Egzersizler",
          items: ["Yürüyüş", "Bisiklet ergometresi", "Yüzme", "Düşük etkili aerobik aktiviteler"],
        },
      ],
    },
    {
      number: "3",
      title: "Nöromüsküler ve Denge Eğitimi",
      items: [
        "Tek ayak üzerinde durma",
        "Denge tahtası çalışmaları",
        "Proprioseptif egzersizler",
        "Düşme riskini azaltmaya yardımcı olur",
      ],
    },
    {
      number: "4",
      title: "Manuel Terapi",
      items: [
        "Eklem mobilizasyonları",
        "Yumuşak doku teknikleri",
        "Ağrının azaltılması ve hareket açıklığının artırılması amacıyla uygulanabilir",
      ],
    },
    {
      number: "5",
      title: "Fiziksel Ajanlar",
      items: [
        "Sıcak uygulamalar",
        "Soğuk uygulamalar",
        "TENS (Transkutanöz Elektriksel Sinir Stimülasyonu)",
        "Ultrason (seçilmiş vakalarda)",
      ],
    },
    {
      number: "6",
      title: "Yardımcı Cihazlar",
      items: ["Baston", "Yürüteç", "Dizlik veya ortezler", "Uygun ayakkabı ve tabanlıklar"],
    },
    {
      number: "7",
      title: "Su İçi Rehabilitasyon (Hidroterapi)",
      items: [
        "Ekleme binen yükü azaltır",
        "Ağrılı hastalarda egzersiz toleransını artırır",
        "Kas kuvveti ve fonksiyonel kapasiteyi geliştirir",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen py-12 bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/images/oa-tedavi-bg.jpeg')" }}>
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Diz OA Tedavi Yöntemleri
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            OA tedavisinde fizyoterapi ve rehabilitasyonun temel amacı ağrıyı azaltmak, eklem hareket açıklığını korumak veya artırmak, kas kuvvetini geliştirmek, fonksiyonel bağımsızlığı artırmak ve yaşam kalitesini yükseltmektir.
          </p>
        </div>

        {/* Treatment Sections */}
        <section className="max-w-4xl mx-auto space-y-8 mb-12">
          {sections.map((section) => (
            <div key={section.number} className="bg-white rounded-xl shadow-md border-l-4 border-primary overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-white px-6 py-4 flex items-center gap-3">
                <span className="w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center text-lg font-bold shrink-0">
                  {section.number}
                </span>
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="px-6 py-5">
                {"subSections" in section ? (
                  <div className="space-y-5">
                    {section.subSections!.map((sub, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-gray-800 mb-2">{sub.name}</h3>
                        <ul className="space-y-1.5">
                          {sub.items.map((item, j) => (
                            <li key={j} className="flex items-start text-gray-600">
                              <span className="text-primary mr-2 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-1.5">
                    {section.items!.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
