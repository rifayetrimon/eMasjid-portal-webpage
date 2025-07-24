export default function Menu() {
  return (
    <div
      className="relative bg-cover bg-center py-16 px-4"
      style={{
        backgroundImage: "url('/images/menu/bg.png')",
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Kelebihan e-Masjid
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-black">
        {[
          {
            icon: "/icons/cloud.svg",
            title: "Selamat & Terjamin",
            text: (
              <>
                Data pengguna dilindungi <br /> dengan selamat
              </>
            ),
            isImg: true,
          },
          {
            icon: "/icons/profile.svg",
            title: "Mesra Pengguna",
            text: (
              <>
                Akses lancar melalui <br /> telefon & tablet
              </>
            ),
            isImg: true,
          },
          {
            icon: "/icons/time.svg",
            title: "Akses 24/7",
            text: (
              <>
                Boleh digunakan <br /> bila-bila masa
              </>
            ),
            isImg: true,
          },
          {
            icon: "/icons/pc.svg",
            title: "Kemaskini Automatik",
            text: (
              <>
                Pengawasan berterusan oleh <br /> MAIS
              </>
            ),
            isImg: true,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-left"
          >
            {/* Centered Icon */}
            {item.isImg ? (
              <img
                src={item.icon}
                alt="Icon"
                className="w-24 h-24 object-contain mb-4"
              />
            ) : (
              <div className="text-5xl mb-4">{item.icon}</div>
            )}

            {/* Left-aligned Content */}
            <div className="text-left">
              {/* Slider bar with circle */}
              <div className="relative w-40 h-1 mb-4 group">
                {/* Line */}
                <div className="absolute inset-0 bg-black transition-colors duration-500 group-hover:bg-[#0C9F77]" />

                {/* Circle */}
                <span className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 bg-black rounded-full transition-all duration-500 group-hover:left-[calc(100%-12px)] group-hover:bg-[#0C9F77]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* Text */}
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
