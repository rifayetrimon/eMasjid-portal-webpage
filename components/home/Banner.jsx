export default function Banner() {
  return (
    <div
      className="relative h-[700px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center h-full text-white pt-[100px]">
        <img
          src="/images/banner/icon.png"
          alt="Masjid Logo"
          width={100}
          height={100}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold text-center">
          Selamat Datang ke Portal <span className="text-blue-500">e</span>
          <span className="text-green-600 text-5xl">Masjid</span>
        </h1>
        <p className="mt-4 text-xl text-center px-4">
          Maklumat ini disediakan sebagai panduan kepada mana-mana orang yang
          ingin <br />
          membuat permohonan menggunakan Sistem Pengurusan Smart Masjid MAIS
        </p>

        {/* Buttons Row */}
        <div className="mt-12 flex space-x-8">
          <button className="px-6 py-2 border rounded text-white border-[#0C9F77] hover:bg-[#0C9F77] hover:text-white transition">
            LOG MASUK
          </button>
          <button className="px-6 py-2 border rounded text-white border-[#0C9F77] hover:bg-[#0C9F77] hover:text-white transition">
            KEMASKINI PERMOHONAN
          </button>
          <button className="px-6 py-2 border rounded text-white border-[#0C9F77] hover:bg-[#0C9F77] hover:text-white transition">
            PERMOHONAN BARU
          </button>
        </div>
      </div>
    </div>
  );
}
