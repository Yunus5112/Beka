import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CreditCard, CheckCircle } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    paymentMethod: ''
  });

  const services = [
    { id: 'financial', name: 'Finansal Danışmanlık', price: '$150' },
    { id: 'accounting', name: 'Muhasebe Servisi', price: '$100' },
    { id: 'notary', name: 'Noterlik ve Tercümanlık', price: '$80' },
    { id: 'insurance', name: 'Sigorta Hizmetleri', price: '$120' },
    { id: 'consultation', name: 'Genel Danışmanlık', price: '$75' }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  const paymentMethods = [
    { id: 'stripe', name: 'Kredi Kartı ile Ödeme', description: 'Stripe güvenli ödeme' },
    { id: 'paypal', name: 'PayPal', description: 'PayPal hesabınızla ödeyin' },
    { id: 'bank', name: 'Banka Havalesi', description: 'Banka hesabına havale' },
    { id: 'cash', name: 'Nakit Ödeme', description: 'Randevu sırasında nakit ödeme' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your booking system and payment processor
    console.log('Appointment booked:', {
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    alert('Randevunuz başarıyla oluşturuldu! Onay e-postası gönderilecek.');
    setStep(5); // Success step
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0; // Disable Sundays
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Randevu Al</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Uzman ekibimizle görüşmek için randevu alın. Online ödeme seçenekleri mevcuttur.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {[
              { number: 1, title: 'Hizmet Seçimi', icon: User },
              { number: 2, title: 'Tarih & Saat', icon: Calendar },
              { number: 3, title: 'Bilgiler', icon: MessageSquare },
              { number: 4, title: 'Ödeme', icon: CreditCard },
              { number: 5, title: 'Onay', icon: CheckCircle }
            ].map((stepItem) => {
              const Icon = stepItem.icon;
              return (
                <div
                  key={stepItem.number}
                  className={`flex items-center space-x-2 ${
                    step >= stepItem.number ? 'text-blue-600' : 'text-gray-400'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepItem.number
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="hidden sm:block font-medium">{stepItem.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hizmet Seçin</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                        formData.service === service.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setFormData({ ...formData, service: service.id })}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {service.name}
                        </h3>
                        <span className="text-2xl font-bold text-blue-600">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleNextStep}
                    disabled={!formData.service}
                    className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Devam Et
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tarih ve Saat Seçin</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tarih Seçin</h3>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      inline
                      minDate={new Date()}
                      filterDate={isWeekday}
                      className="w-full"
                    />
                  </div>
                  
                  {selectedDate && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Saat Seçin</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-lg border text-center transition-colors ${
                              selectedTime === time
                                ? 'border-blue-600 bg-blue-600 text-white'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePrevStep}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Geri
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Devam Et
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kişisel Bilgiler</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj (Opsiyonel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Randevunuz hakkında detaylar..."
                    />
                  </div>
                </form>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePrevStep}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Geri
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Devam Et
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ödeme Yöntemi</h2>
                
                {/* Selected Service Summary */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Randevu Özeti</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Hizmet:</span>
                      <span className="font-medium">
                        {services.find(s => s.id === formData.service)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarih:</span>
                      <span className="font-medium">
                        {selectedDate?.toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saat:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-blue-600 border-t pt-2 mt-4">
                      <span>Toplam:</span>
                      <span>{services.find(s => s.id === formData.service)?.price}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.paymentMethod === method.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{method.name}</h4>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          formData.paymentMethod === method.id
                            ? 'border-blue-600 bg-blue-600'
                            : 'border-gray-300'
                        }`}>
                          {formData.paymentMethod === method.id && (
                            <div className="w-3 h-3 bg-white rounded-full m-0.5"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePrevStep}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Geri
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.paymentMethod}
                    className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Randevuyu Onayla
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Randevunuz Oluşturuldu!</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Randevu detayları e-posta adresinize gönderildi. 
                  Randevu saatinden 15 dakika önce bekliyoruz.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Randevu Detayları</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Hizmet:</span>
                      <span className="font-medium">
                        {services.find(s => s.id === formData.service)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarih:</span>
                      <span className="font-medium">
                        {selectedDate?.toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saat:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => window.print()}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Yazdır
                  </button>
                  <div>
                    <a
                      href="/"
                      className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all inline-block"
                    >
                      Ana Sayfaya Dön
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
