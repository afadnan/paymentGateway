import React, { useState } from 'react';
import { ArrowLeft, Lock } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[640px] bg-white rounded-xl shadow-sm">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center">
          <button className="text-gray-600 hover:text-gray-800">
            <ArrowLeft size={20} />
          </button>
          <div className="ml-4 flex items-center">
            <img src="https://via.placeholder.com/24" alt="Logo" className="w-6 h-6 rounded-full" />
            <span className="ml-2 font-medium">PayGet</span>
            <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">TEST MODE</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Left Column */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl text-gray-700">One-time Donation</h2>
              <div className="text-3xl font-bold mt-1">500</div>
              <div className="text-gray-500 text-sm">Minimum Transaction - 500</div>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <button className="bg-black text-white px-4 py-2 rounded-md">
                  G Pay
                </button>
                <button className="bg-emerald-400 text-black px-4 py-2 rounded-md flex items-center">
                  <Lock size={16} className="mr-1" /> Pay faster
                </button>
              </div>
            </div>

            <div className="text-center text-gray-500 text-sm mb-6">Or pay with card</div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Card information</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="1234 1234 1234 1234"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                    <div className="absolute right-2 top-2 flex gap-1">
                      <img src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg" className="h-6 " alt="Visa" />
                      <img src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg" className="h-6" alt="Mastercard" />
                      </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="MM / YY"
                      className="px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      placeholder="CVC"
                      className="px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Name on card</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Country or region</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white">
                    <option>India</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Postal code</label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                    className="mt-1"
                  />
                  <div>
                    <div className="text-sm text-gray-700">Securely save my information for 1-click checkout</div>
                    <div className="text-xs text-gray-500">Pay faster on PayGet and thousands of sites.</div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-400 text-white py-3 rounded-md hover:bg-rose-500 transition-colors"
                >
                  Pay
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-xs text-gray-500">
              Powered by stripe |{' '}
              <a href="#" className="text-gray-600 hover:text-gray-800">Terms</a> |{' '}
              <a href="#" className="text-gray-600 hover:text-gray-800">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;