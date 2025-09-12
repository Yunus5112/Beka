import { CreditCard, ExternalLink } from 'lucide-react';

interface PaymentButtonProps {
  amount: string;
  service: string;
  className?: string;
}

const PaymentButton = ({ amount, service, className = '' }: PaymentButtonProps) => {
  const handlePayment = (method: 'stripe' | 'paypal') => {
    // This is where you would integrate with actual payment processors
    // For now, we'll just show placeholders
    
    if (method === 'stripe') {
      // Stripe integration would go here
      window.open('https://buy.stripe.com/test_example', '_blank');
    } else if (method === 'paypal') {
      // PayPal integration would go here  
      window.open('https://www.paypal.com/paypalme/bekasolutions', '_blank');
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {service} - {amount}
      </h3>
      
      <div className="space-y-2">
        <button
          onClick={() => handlePayment('stripe')}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <CreditCard className="w-5 h-5" />
          <span>Kredi Kartı ile Öde</span>
          <ExternalLink className="w-4 h-4" />
        </button>

        <button
          onClick={() => handlePayment('paypal')}
          className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2"
        >
          <span>PayPal ile Öde</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Güvenli ödeme işlemi için SSL şifreleme kullanılmaktadır
        </p>
      </div>
    </div>
  );
};

export default PaymentButton;
