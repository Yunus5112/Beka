import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from '../contexts/LanguageContext';

const Appointment = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    { id: 'financial', name: t('navigation.financialServices') },
    { id: 'accounting', name: t('navigation.accountingServices') },
    { id: 'notary', name: t('navigation.notaryServices') },
    { id: 'insurance', name: t('navigation.insuranceServices') },
    { id: 'consultation', name: t('appointment.generalConsultation') }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    if (step < 3) {
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
    // Here you would integrate with your booking system
    console.log('Appointment booked:', {
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    alert('Randevunuz başarıyla oluşturuldu! Onay e-postası gönderilecek.');
    setStep(4); // Success step
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0; // Disable Sundays
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E272D] to-[#6B7473] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('appointment.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('appointment.subtitle')}
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {[
              { number: 1, title: t('appointment.steps.service'), icon: User },
              { number: 2, title: t('appointment.steps.datetime'), icon: Calendar },
              { number: 3, title: t('appointment.steps.info'), icon: MessageSquare },
              { number: 4, title: t('appointment.steps.confirmation'), icon: CheckCircle }
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('appointment.selectService')}</h2>
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
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleNextStep}
                    disabled={!formData.service}
                    className="bg-gradient-to-r from-[#1E272D] to-[#6B7473] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#2A363E] hover:to-[#7A8588] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t('appointment.form.continue')}
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('appointment.selectDateTime')}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('appointment.form.selectDate')}</h3>
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('appointment.form.selectTime')}</h3>
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
                    {t('common.previous')}
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-gradient-to-r from-[#1E272D] to-[#6B7473] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#2A363E] hover:to-[#7A8588] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t('appointment.form.continue')}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('appointment.personalInfo')}</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('appointment.form.fullName')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t('appointment.form.placeholders.fullName')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('appointment.form.email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t('appointment.form.placeholders.email')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('appointment.form.phone')} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={t('appointment.form.placeholders.phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('appointment.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('appointment.form.placeholders.message')}
                    />
                  </div>
                </form>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePrevStep}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    {t('common.previous')}
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="bg-gradient-to-r from-[#1E272D] to-[#6B7473] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#2A363E] hover:to-[#7A8588] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t('appointment.form.confirmAppointment')}
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('appointment.success')}</h2>
                <p className="text-xl text-gray-600 mb-8">
                  {t('appointment.successMessage')}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('appointment.appointmentSummary')}</h3>
                  <div className="space-y-2">
                    <div>
                      <span>{t('appointment.summary.service')}: </span>
                      <span className="font-medium">
                        {services.find(s => s.id === formData.service)?.name}
                      </span>
                    </div>
                    <div>
                      <span>{t('appointment.summary.date')}: </span>
                      <span className="font-medium">
                        {selectedDate?.toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                    <div>
                      <span>{t('appointment.summary.time')}: </span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href="/"
                    className="bg-gradient-to-r from-[#1E272D] to-[#6B7473] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#2A363E] hover:to-[#7A8588] transition-all inline-block"
                  >
                    {t('appointment.backToHome')}
                  </a>
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
