import React, { useState } from "react";
import Layout from "./layout";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaTag,
  FaCommentDots,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const HubungiKami = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman (replace with real logic)
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 2500);
    e.target.reset();
  };

  return (
    <Layout>
      <section className="h-screen bg-gray-50 flex items-center justify-center px-4 py-16 relative">
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Modal Content */}
            <div className="relative bg-white px-8 py-6 rounded-lg shadow-xl text-center z-10 max-w-sm w-full">
              <h2 className="text-2xl font-bold text-[#D94A38] mb-2">
                Pesan Terkirim!
              </h2>
              <p className="text-gray-700">
                Terima kasih telah menghubungi kami. Balasan akan dikirim ke
                email Anda.
              </p>
            </div>
          </div>
        )}

        <div className="container mx-auto max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Info Kontak */}
          <div className="hidden md:flex bg-[#D94A38] text-white flex-col justify-between p-10">
            <div>
              <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-lg mb-6 max-w-sm leading-relaxed">
                Ada pertanyaan, penawaran, atau ingin bekerja sama? Kami siap
                mendengarkan Anda!
              </p>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-xl mt-1" />
                  <p>
                    <strong>Alamat Kantor:</strong> <br />
                    Jl. Raya Semarang–Tuban No. KM 35, Paloh, Bancar, Kab. Tuban
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-xl mt-1" />
                  <p>
                    <strong>Email:</strong> <br />
                    stp.bancar@gmail.com
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="text-xl mt-1" />
                  <p>
                    <strong>Telepon:</strong> <br />
                    +62 812-3456-7890
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#D94A38] font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
              >
                <FaWhatsapp /> Chat via WhatsApp
              </a>
              <a
                href="https://maps.google.com?q=Jl.+Raya+Semarang–Tuban+KM+35,+Paloh,+Bancar,+Tuban"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#D94A38] font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
              >
                <FaMapMarkerAlt /> Lihat di Google Maps
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Kirim Pesan Anda
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                <FaUser className="text-[#D94A38]" />
                <input
                  type="text"
                  required
                  placeholder="Nama Anda *"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                <FaBuilding className="text-[#D94A38]" />
                <input
                  type="text"
                  placeholder="Nama Perusahaan (Opsional)"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                <FaEnvelope className="text-[#D94A38]" />
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                <FaTag className="text-[#D94A38]" />
                <input
                  type="text"
                  required
                  placeholder="Subjek *"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <div className="flex items-start gap-3 border-b border-gray-300 py-2">
                <FaCommentDots className="text-[#D94A38] mt-2" />
                <textarea
                  required
                  placeholder="Pesan Anda *"
                  rows="4"
                  className="w-full outline-none bg-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D94A38] text-white py-3 rounded-lg font-semibold hover:bg-[#b83d2d] transition duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HubungiKami;
