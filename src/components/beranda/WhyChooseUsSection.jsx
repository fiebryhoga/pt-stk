const WhyChooseUsSection = () => {
  const data = [
    {
      icon: "fas fa-truck-loading",
      title: "Armada Andal & Lengkap",
      desc: "106 unit aktif terdiri dari 81 truk Dyna dan 25 truk Tronton yang siap menjawab segala kebutuhan logistik tambang Anda.",
    },
    {
      icon: "fas fa-map-marked-alt",
      title: "Cakupan Layanan Luas",
      desc: "Menjangkau seluruh wilayah Jawa Timur dan sekitarnya dengan ketepatan waktu dan rute optimal.",
    },
    {
      icon: "fas fa-cogs",
      title: "Skema Layanan Fleksibel",
      desc: "Tersedia pilihan harian, borongan, hingga kontrak jangka panjang, disesuaikan dengan ritme proyek Anda.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Keselamatan & Perawatan Maksimal",
      desc: "Armada dirawat rutin dan pengemudi dibekali SOP ketat demi kelancaran dan keamanan setiap pengiriman.",
    },
    {
      icon: "fas fa-users-cog",
      title: "SDM Profesional & Terlatih",
      desc: "Seluruh tim kami dibekali pelatihan industri untuk menjaga kualitas layanan dan profesionalisme di lapangan.",
    },
    {
      icon: "fas fa-award",
      title: "Pengalaman Lebih dari 20 Tahun",
      desc: "Berdiri sejak tahun 2000, kami tumbuh menjadi perusahaan transportasi tambang yang terpercaya dan disegani.",
    },
  ];

  return (
    <section className="py-20 bg-white text-[#373536] px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Mengapa Kami Mitra Terbaik Anda?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-700">
          Memilih PT. Siwalan Tehnik Perkasa berarti memilih keandalan,
          pengalaman, dan komitmen terhadap kepuasan pelanggan. Kami hadir untuk
          mendukung kelancaran operasional tambang Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F8F8F8] text-[#373536] p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300"
            >
              <div className="text-[#D94A38] text-4xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-center text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
