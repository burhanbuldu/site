"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const phone = "+905522198685";

  const images = [
    "/taxi1.jpeg",
    "/taxi2.jpeg",
    "/taxi3.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div>
            <h1 className="text-2xl font-extrabold tracking-wider text-yellow-400">
              HUKUKÇULAR TAKSİ
            </h1>

            <p className="text-[11px] tracking-[4px] text-white/50 mt-1 uppercase">
              KarstaTaksi.com.tr
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-white/70">

            <a href="#" className="hover:text-yellow-400 transition">
              Ana Sayfa
            </a>

            <a href="#about" className="hover:text-yellow-400 transition">
              Hakkımızda
            </a>

            <a href="#services" className="hover:text-yellow-400 transition">
              Hizmetler
            </a>

            <a href="#reservation" className="hover:text-yellow-400 transition">
              Rezervasyon
            </a>

            <a href="#contact" className="hover:text-yellow-400 transition">
              İletişim
            </a>

          </nav>

          <a
            href={`tel:${phone}`}
            className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold hover:scale-105 transition"
          >
            Ara
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/18" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl">

          <div className="flex items-center justify-center gap-3 flex-wrap">

            <p className="text-yellow-400 tracking-[8px] uppercase text-sm font-semibold">
              Hukukçular Taksi Durağı
            </p>

            <span className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 px-4 py-1 rounded-full text-xs tracking-[3px] uppercase">
              KarstaTaksi
            </span>

          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold mt-8 leading-tight">
            Kars’ın

            <span className="block text-yellow-400">
              Güvenilir Taksi Durağı
            </span>

            <span className="block text-3xl md:text-5xl mt-6 text-white/80 font-semibold">
              7/24 Hızlı • Güvenli • Konforlu Ulaşım
            </span>
          </h1>

          <p className="mt-8 text-white/70 text-lg max-w-3xl mx-auto leading-8">
            Ani Ören Yeri ve Çıldır Gölü başta olmak üzere
            Kars’ın önemli turistik bölgelerine özel ulaşım ve
            profesyonel tur hizmetleri sunuyoruz.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <a
              href={`tel:${phone}`}
              className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-yellow-400/40 hover:shadow-2xl transition-all duration-300"
            >
              Hemen Ara
            </a>

            <a
              href={`https://wa.me/${phone.replace("+", "")}`}
              target="_blank"
              className="bg-green-500 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-green-500/40 hover:shadow-2xl transition-all duration-300"
            >
              WhatsApp
            </a>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-4xl font-extrabold text-yellow-400">
                24/7
              </h3>

              <p className="text-white/60 mt-2">
                Aktif Hizmet
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-4xl font-extrabold text-yellow-400">
                5000+
              </h3>

              <p className="text-white/60 mt-2">
                Mutlu Yolcu
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-4xl font-extrabold text-yellow-400">
                5★
              </h3>

              <p className="text-white/60 mt-2">
                Memnuniyet
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-28 px-6 border-t border-white/10 bg-black"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>

            <p className="text-yellow-400 tracking-[6px] uppercase text-sm font-semibold">
              Hakkımızda
            </p>

            <h2 className="text-5xl font-extrabold mt-6 leading-tight">
              Kars’ın

              <span className="block text-yellow-400">
                Güvenilir Taksi Durağı
              </span>
            </h2>

            <p className="mt-8 text-white/70 leading-8 text-lg">
              Hukukçular Taksi Durağı olarak Haydar Aliyev Caddesi’nde
              yıllardır güvenilir ve profesyonel ulaşım hizmeti sunuyoruz.
              7/24 aktif çalışan ekibimizle şehir içi ulaşım, havalimanı
              transferi ve özel yolculuk hizmetleri sağlıyoruz.
            </p>

            <p className="mt-6 text-white/60 leading-8">
              Ani Ören Yeri ve Çıldır Gölü başta olmak üzere Kars’ın
              önemli turistik noktalarına özel ulaşım ve gezi hizmetleri
              düzenlemekteyiz. Güvenli sürüş, temiz araçlar ve müşteri
              memnuniyeti önceliğimizdir.
            </p>

          </div>

          <div className="grid gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-2xl font-bold text-yellow-400">
                7/24 Hizmet
              </h3>

              <p className="text-white/60 mt-3">
                Günün her saatinde kesintisiz ulaşım desteği.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-2xl font-bold text-yellow-400">
                Profesyonel Sürücüler
              </h3>

              <p className="text-white/60 mt-3">
                Deneyimli sürücülerle güvenli ve konforlu yolculuk.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-105 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-2xl font-bold text-yellow-400">
                Özel Kars Turları
              </h3>

              <p className="text-white/60 mt-3">
                Ani Harabeleri ve Çıldır Gölü için özel ulaşım hizmeti.
              </p>
            </div>

          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-6">

          <div className="bg-yellow-400 text-black rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <h3 className="text-3xl font-extrabold">
              KarstaTaksi
            </h3>

            <p className="mt-4 font-medium leading-7">
              Kars merkezli modern ulaşım ve özel tur hizmetleri.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <h3 className="text-2xl font-bold text-yellow-400">
              Ani Harabeleri
            </h3>

            <p className="text-white/60 mt-4">
              Profesyonel ulaşım ve özel gezi organizasyonları.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <h3 className="text-2xl font-bold text-yellow-400">
              Çıldır Gölü
            </h3>

            <p className="text-white/60 mt-4">
              Güvenli, konforlu ve deneyimli sürücülerle özel turlar.
            </p>
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 px-6 bg-zinc-950 border-t border-white/10"
      >

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            Hizmetlerimiz
          </h2>

          <p className="text-white/60 mt-5">
            Profesyonel ulaşım çözümleri
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {[
              {
                title: "Şehir İçi",
                desc: "Hızlı ve güvenli şehir içi ulaşım",
              },
              {
                title: "Havalimanı",
                desc: "Zamanında premium transfer",
              },
              {
                title: "KarstaTaksi.com.tr",
                desc: "Ani Ören Yeri ve Çıldır Gölü başta olmak üzere özel tur ve ulaşım hizmetleri sunuyoruz",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="text-white/60 mt-4">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* RESERVATION */}
      <section
        id="reservation"
        className="py-28 px-6 border-t border-white/10 bg-black"
      >

        <div className="max-w-3xl mx-auto">

          <h2 className="text-5xl font-bold text-center">
            Rezervasyon Yap
          </h2>

          <p className="text-white/60 text-center mt-4">
            Formu doldur → WhatsApp otomatik açılsın
          </p>

          <form
            className="space-y-5 mt-14"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.target as HTMLFormElement;

              const formData = new FormData(form);

              const name = formData.get("name");
              const userPhone = formData.get("phone");
              const from = formData.get("from");
              const to = formData.get("to");
              const time = formData.get("time");

              const msg = `
🚖 Yeni Rezervasyon

👤 ${name}
📞 ${userPhone}
📍 ${from} → ${to}
🕒 ${time}
              `;

              window.open(
                `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(msg)}`,
                "_blank"
              );
            }}
          >

            <input
              name="name"
              placeholder="Ad Soyad"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-yellow-400 transition"
            />

            <input
              name="phone"
              placeholder="Telefon"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-yellow-400 transition"
            />

            <input
              name="from"
              placeholder="Nereden"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-yellow-400 transition"
            />

            <input
              name="to"
              placeholder="Nereye"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-yellow-400 transition"
            />

            <input
              name="time"
              placeholder="Saat"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-yellow-400 transition"
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-black py-5 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-green-500/40 hover:shadow-2xl transition-all duration-300"
            >
              WhatsApp ile Gönder
            </button>

          </form>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 border-t border-white/10 text-center bg-zinc-950"
      >

        <h2 className="text-5xl font-bold">
          İletişim
        </h2>

        <div className="mt-8 space-y-4 text-white/70 text-lg">

          <p>
            📞{" "}
            <a
              href={`tel:${phone}`}
              className="text-yellow-400 hover:underline"
            >
              +90 552 219 86 85
            </a>
          </p>

          <p>
            💬{" "}
            <a
              href={`https://wa.me/${phone.replace("+", "")}`}
              className="text-green-400 hover:underline"
            >
              WhatsApp Üzerinden Yazın
            </a>
          </p>

          <p>
            📍{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Haydar+Aliyev+Caddesi+Hukukçular+Taksi+Kars"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              Haydar Aliyev Caddesi, Hukukçular Taksi Durağı, Kars Merkez
            </a>
          </p>

        </div>

      </section>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

        <a
          href={`tel:${phone}`}
          className="bg-yellow-400 text-black w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition text-2xl"
        >
          📞
        </a>

        <a
          href={`https://wa.me/${phone.replace("+", "")}`}
          target="_blank"
          className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition"
        >
          <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
            <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.35-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          </svg>
        </a>

      </div>

    </main>
  );
}