import Image from "next/image";

export default function EgzersizlerPage() {
  // Exercise data from DOCX
  const strengtheningExercises = [
    {
      id: 1,
      name: "Düz Bacak Kaldırma",
      englishName: "Straight Leg Raise",
      image: "/images/exercises/11.jpg",
      description: "Sırt üstü yatarak bacağı düz tutarak kaldırma",
      instructions: "Sırt üstü yatın, bir bacakı bükülü tutarken diğerini düz olarak 30-45 derece kaldırın ve yavaşça indirin.",
      sets: "3 set x 10-12 tekrar"
    },
    {
      id: 2,
      name: "Kısa Ark Quadriceps",
      englishName: "Short Arc Quad",
      image: "/images/exercises/2.jpg",
      description: "Diz altına havlu koyarak kısa bir hareketle quadriceps kasını kuvvetlendirme",
      instructions: "Sırt üstü yatın, diz altına havlu yerleştirin. Dizi düzleştirirken quadricepsi kasın ve 5 saniye tutun.",
      sets: "3 set x 10-12 tekrar"
    },
    {
      id: 3,
      name: "Otururken Diz Ekstansiyonu",
      englishName: "Seated Knee Extension",
      image: "/images/exercises/5.jpg",
      description: "Oturarak bacağı dizden düzleştirme hareketi",
      instructions: "Oturur pozisyonda bacağı düzleştirin, 2-3 saniye tutun ve yavaşça indirin.",
      sets: "3 set x 10-12 tekrar"
    },
    {
      id: 4,
      name: "Köprü Kurma",
      englishName: "Bridge Exercise",
      image: "/images/exercises/14.jpg",
      description: "Sırtüstü yatarak kalçayı yukarı kaldırma",
      instructions: "Sırt üstü yatın, dizleri bükün. Kalçayı yukarı kaldırın, 2-3 saniye tutun ve yavaşça indirin.",
      sets: "3 set x 10-12 tekrar"
    },
    {
      id: 5,
      name: "Duvar Kaydırma",
      englishName: "Wall Squat",
      image: "/images/exercises/17.jpg",
      description: "Duvara yaslanarak çömelme hareketi",
      instructions: "Duvara yaslanın, ayakları öne alın. Yavaşça çömelin, 5-10 saniye tutun ve kalkın.",
      sets: "3 set x 5-10 saniye tutuş"
    },
    {
      id: 6,
      name: "Kalça Abdüksiyonu",
      englishName: "Hip Abduction",
      image: "/images/exercises/8.jpg",
      description: "Yan yatarak bacağı yana kaldırma",
      instructions: "Yan yatın, üst bacağı yana doğru kaldırın, 2-3 saniye tutun ve yavaşça indirin.",
      sets: "3 set x 10-12 tekrar (her bacak)"
    },
    {
      id: 7,
      name: "Topuk Yükseltme",
      englishName: "Heel Raise",
      image: "/images/exercises/20.jpg",
      description: "Ayak parmak ucuna yükselme hareketi",
      instructions: "Ayakta durun, yavaşça topukları yukarı kaldırın, 2-3 saniye tutun ve indirin.",
      sets: "3 set x 15-20 tekrar"
    }
  ];

  const stretchingExercises = [
    "Hamstring germe",
    "Quadriceps germe",
    "Baldır (gastroknemius) germe",
    "Kalça fleksör germe",
    "IT bant germe"
  ];

  const aerobicExercises = [
    "Tempolu yürüyüş",
    "Sabit bisiklet",
    "Eliptik bisiklet",
    "Yüzme",
    "Su içinde yürüme",
    "Düşük etkili aerobik egzersizler"
  ];

  const neuromuscularExercises = [
    "Mini squat",
    "Öne ve yana adım alma",
    "Otur-kalk çalışmaları",
    "Köprü kurma",
    "Fonksiyonel merdiven çıkma"
  ];

  const balanceExercises = [
    "Tek ayak üzerinde durma",
    "Yastık veya denge pedi üzerinde durma",
    "Tandem duruş (bir ayağı diğerinin önüne koyma)",
    "Denge tahtası çalışmaları",
    "Top yakalama ve atma aktiviteleri"
  ];

  const waterExercises = [
    "Havuz içinde yürüme",
    "Su içinde diz çekme",
    "Su içinde kalça açma-kapama",
    "Su içinde mini squat",
    "Su içinde bisiklet hareketi",
    "Su direncine karşı bacak egzersizleri"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-secondary rounded-full text-sm font-semibold mb-4">
            Rehabilitasyon Programı
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Diz OA Egzersiz Programı
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Diz osteoartriti için egzersizler; ağrıyı azaltmak, eklem hareket açıklığını korumak,
            kas kuvvetini artırmak ve günlük yaşam fonksiyonlarını geliştirmek amacıyla uygulanır.
          </p>
        </div>

        {/* General Recommendations */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-accent to-primary rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Genel Öneriler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Haftada 3–5 gün egzersiz yapılması önerilir",
                "Ağrı düzeyi egzersiz sırasında ve sonrasında tolere edilebilir sınırlar içinde olmalıdır",
                "Egzersiz öncesinde 5–10 dakika ısınma, sonrasında germe yapılmalıdır",
                "Şiddetli ağrı, şişlik veya eklemde kilitlenme varsa sağlık profesyoneline danışılmalıdır"
              ].map((rec, index) => (
                <div key={index} className="flex items-start bg-white/10 rounded-lg p-4">
                  <svg className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strengthening Exercises */}
        <section className="max-w-6xl mx-auto mb-12">
          <h2 className="section-title">💪 Kuvvetlendirme Egzersizleri</h2>
          <p className="text-gray-700 mb-8">
            Diz ve çevresindeki kasları güçlendirmek, eklem üzerine binen yükü azaltır ve ağrıyı hafifletir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengtheningExercises.map((exercise) => (
              <div key={exercise.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exercise.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{exercise.englishName}</p>
                  <p className="text-gray-600 text-sm mb-4">{exercise.description}</p>
                  <div className="bg-gray-50 rounded p-3 mb-3">
                    <p className="text-xs text-gray-600"><strong>Nasıl Yapılır:</strong> {exercise.instructions}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">{exercise.sets}</span>
                    <span className="text-gray-500">💪 Kuvvetlendirme</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stretching Exercises */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">🧘 Germe Egzersizleri</h2>
          <p className="text-gray-700 mb-8">
            Esneklik egzersizleri hareket açıklığını korur ve kas gerginliğini azaltır.
            Her egzersizi 20-30 saniye tutun, 2-3 kez tekrarlayın.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stretchingExercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{exercise}</h3>
                  <span className="text-2xl">🧘</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Bu kas grubunun esnekliğini artırır ve hareket açıklığını korur.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Aerobic Exercises */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">🚴 Aerobik Egzersizler</h2>
          <p className="text-gray-700 mb-8">
            Düşük etkili kardiyo egzersizler kardiyovasküler sağlığı iyileştirir ve kilo kontrolüne yardımcı olur.
            Haftada 150 dakika (5 gün × 30 dakika) hedefleyin.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {aerobicExercises.map((exercise, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white text-center hover:from-purple-600 hover:to-purple-700 transition-all">
                <div className="text-3xl mb-3">🚴</div>
                <div className="font-semibold">{exercise}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Neuromuscular Exercises */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">⚡ Nöromusküler Egzersizler</h2>
          <p className="text-gray-700 mb-8">
            Günlük yaşam aktivitelerini simüle eden egzersizler fonksiyonel kapasiteyi geliştirir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {neuromuscularExercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">⚡</span>
                  <h3 className="font-bold text-gray-900">{exercise}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Balance Exercises */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="section-title">⚖️ Denge ve Propriosepsiyon Egzersizleri</h2>
          <p className="text-gray-700 mb-8">
            Denge egzersizleri düşme riskini azaltır ve eklem stabilitesini artırır.
            Güvenli bir ortamda başlayın, yavaşça ilerleyin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {balanceExercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">⚖️</span>
                  <h3 className="font-bold text-gray-900">{exercise}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Water Exercises */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🏊</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Su İçi Egzersizler</h2>
                <p className="opacity-90">Su direnci ile güvenli ve etkili egzersiz</p>
              </div>
            </div>

            <p className="mb-6 opacity-90">
              Su içi egzersizler, eklemlere binen yükü azaltırken kas kuvvetini artırır.
              Özellikle ağrılı hastalar ve obez bireyler için idealdir.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {waterExercises.map((exercise, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">{exercise}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Warning */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Önemli Uyarı</h3>
                <p className="text-gray-700 text-sm">
                  Bu egzersiz programı genel bir rehber niteliğindedir. Başlamadan önce mutlaka doktorunuz
                  veya fizyoterapistinizle görüşün. Egzersiz sırasında şiddetli ağrı, şişlik veya rahatsızlık
                  hissederseniz hemen durun ve sağlık profesyoneline danışın.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
