import { useState } from 'react';
import {cultureItems,foodItems,footerLinks} from './constants'
import './index.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* header.jsx */}
      {/* Navbar */}
       <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hero" className="text-white font-bold text-[27px]">Quảng Bình</a>
          {/* Hamburger icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 text-lg font-medium">
            <a href="#overview" className="text-white hover:text-yellow-400">Tổng quan</a>
            <a href="#culture" className="text-white hover:text-yellow-400">Văn hóa</a>
            <a href="#food" className="text-white hover:text-yellow-400">Ẩm thực</a>
            <a href="#contact" className="text-white hover:text-yellow-400">Liên hệ</a>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 text-white px-4 py-4 space-y-2 text-center shadow-lg">
            <a href="#overview" className="block hover:text-yellow-400">Tổng quan</a>
            <a href="#culture" className="block hover:text-yellow-400">Văn hóa</a>
            <a href="#food" className="block hover:text-yellow-400">Ẩm thực</a>
            <a href="#contact" className="block hover:text-yellow-400">Liên hệ</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero-section h-[80vh] flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://sdl.quangbinh.gov.vn/documents/53105/0/WCQB.jpg/7daeeb8b-e671-a7e1-f67f-88f56620b14f?t=1641348864095')" }}>
      </header>

      {/* Content.jsx */}
      <section id="overview" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Giới thiệu Quảng Bình</h2>
            <p className="text-gray-700 text-lg">
              Quảng Bình là một tỉnh miền Trung Việt Nam, nổi bật với những cảnh quan thiên nhiên hùng vĩ như Phong Nha - Kẻ Bàng. Dân số khoảng 900.000 người với nét văn hóa độc đáo và lòng hiếu khách nồng hậu.
            </p>
          </div>
          <img
            src="https://www.hoangviettravel.com.vn/sites/default/files/hinh-anh-chuong-trinh-du-lich-quang-binh-2024.jpg"
            alt="Quảng Bình"
            className="rounded-xl shadow-md w-full"
          />
        </div>
      </section>
{/* van hoa */}
     <section id="culture" className="py-16 mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Văn hóa & Truyền thống</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cultureItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* am thuc */}
      <section id="food" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Ẩm thực nổi tiếng</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {foodItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow hover:shadow-md transition">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Thư viện ảnh</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <img
                key={n}
                src={`/img/${n}.png`}
                alt={`Ảnh ${n}`}
                className="w-full h-52 object-cover rounded-lg shadow hover:shadow-md transition-shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Gửi phản hồi</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Tên của bạn"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <textarea
              rows="4"
              required
              placeholder="Bạn thích nhất điều gì ở quảng bình?"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
              >
                Gửi phản hồi
              </button>
            </div>
          </form>
        </div>
      </section>
{/* footer.jsx */}
       <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-4">Liên kết hữu ích:</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="flex items-center justify-center gap-2 text-white hover:text-yellow-400 transition"
                target="_blank"
                rel="noreferrer"
              >
                {link.icon} <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;