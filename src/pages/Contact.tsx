import { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: '+1-857-343-3120',
      description: 'Pazartesi - Cuma: 09:00 - 18:00'
    },
    {
      icon: Mail,
      title: 'E-posta',
      details: 'bostonconsultinghub@gmail.com',
      description: '24 saat içinde yanıt garantisi'
    },
    {
      icon: MapPin,
      title: 'Adres',
      details: '420 Lincoln Ave Saugus MA 01906',
      description: 'Boston, Massachusetts'
    },
    {
      icon: Globe,
      title: 'Web Sitesi',
      details: 'www.bostonconsultinghub.com',
      description: 'Online hizmetler ve bilgiler'
    }
  ];

  const workingHours = [
    { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00' },
    { day: 'Cumartesi', hours: '10:00 - 16:00' },
    { day: 'Pazar', hours: 'Kapalı' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">İletişime Geçin</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Sorularınız için bizimle iletişime geçin. Uzman ekibimiz size en kısa sürede 
            yardımcı olmak için burada.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-800 font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Mesaj Gönderin
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Adınızı ve soyadınızı girin"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="E-posta adresinizi girin"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Telefon numaranızı girin"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Konu *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Konu seçin</option>
                        <option value="financial">Finansal Danışmanlık</option>
                        <option value="accounting">Muhasebe Servisi</option>
                        <option value="notary">Noterlik ve Tercümanlık</option>
                        <option value="insurance">Sigorta Hizmetleri</option>
                        <option value="general">Genel Bilgi</option>
                        <option value="appointment">Randevu Talebi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Mesajınızı detaylı olarak yazın..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Mesaj Gönder</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              {/* Working Hours */}
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-blue-600" />
                  Çalışma Saatleri
                </h3>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Acil Durum İletişim</h3>
                <p className="mb-4">
                  Acil durumlar için doğrudan telefon ile ulaşabilirsiniz.
                </p>
                <a
                  href="tel:+18573433120"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Hemen Ara
                </a>
              </div>

              {/* Location Map */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ofis Konumu
                </h3>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-600">
                    Harita burada görüntülenecek
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 font-medium">
                    420 Lincoln Ave Saugus MA 01906
                  </p>
                  <p className="text-gray-600 text-sm">
                    Boston, Massachusetts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
