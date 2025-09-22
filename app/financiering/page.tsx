'use client';

import { useState } from 'react';
import { NewNavigation } from '@/components/NewNavigation';
import { FixedContactButtons } from '@/components/FixedContactButtons';
import { Footer } from '@/components/Footer';
import { Calculator, Euro, TrendingUp, Shield, CheckCircle } from 'lucide-react';

export default function FinancieringPage() {
  const [carPrice, setCarPrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(10000);
  const [leaseTerm, setLeaseTerm] = useState(48);
  const [interestRate, setInterestRate] = useState(3.5);

  // Calculate lease payment
  const calculateLeasePayment = () => {
    const principal = carPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, leaseTerm)) / (Math.pow(1 + monthlyRate, leaseTerm) - 1);
    return Math.round(payment);
  };

  const monthlyPayment = calculateLeasePayment();
  const totalAmount = monthlyPayment * leaseTerm + downPayment;

  return (
    <div className="min-h-screen bg-white">
      <NewNavigation />
      <FixedContactButtons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8">
            Financiering
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Maak je droomauto betaalbaar met onze flexibele financieringsopties.
            Bereken direct je maandlasten en ontdek welke mogelijkheden er zijn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Calculator */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 md:p-10">
            <div className="flex items-center mb-8">
              <Calculator className="w-8 h-8 text-black mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-black">Lease Calculator</h2>
            </div>

            <div className="space-y-6">
              {/* Car Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Autoprijs
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="20000"
                    max="200000"
                    step="1000"
                    value={carPrice}
                    onChange={(e) => setCarPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>€20.000</span>
                    <span>€200.000</span>
                  </div>
                </div>
                <div className="mt-2 text-lg font-semibold text-black">
                  €{carPrice.toLocaleString('nl-NL')}
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aanbetaling
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max={Math.floor(carPrice * 0.5)}
                    step="1000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>€0</span>
                    <span>€{Math.floor(carPrice * 0.5).toLocaleString('nl-NL')}</span>
                  </div>
                </div>
                <div className="mt-2 text-lg font-semibold text-black">
                  €{downPayment.toLocaleString('nl-NL')}
                </div>
              </div>

              {/* Lease Term */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Looptijd (maanden)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[24, 36, 48, 60].map((months) => (
                    <button
                      key={months}
                      onClick={() => setLeaseTerm(months)}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        leaseTerm === months
                          ? 'bg-black text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {months}m
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rentepercentage
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1%</span>
                    <span>10%</span>
                  </div>
                </div>
                <div className="mt-2 text-lg font-semibold text-black">
                  {interestRate}%
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-4">Jouw maandlasten</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Maandelijkse betaling:</span>
                  <span className="text-2xl font-bold text-black">€{monthlyPayment.toLocaleString('nl-NL')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Totaal te betalen:</span>
                  <span className="font-semibold text-gray-900">€{totalAmount.toLocaleString('nl-NL')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Looptijd:</span>
                  <span className="font-semibold text-gray-900">{leaseTerm} maanden</span>
                </div>
              </div>
            </div>
          </div>

          {/* Financing Options */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Financieringsopties
              </h2>
              <p className="text-gray-600 mb-8">
                Bij Beek Automotive bieden we verschillende financieringsmogelijkheden
                om jouw droomauto binnen handbereik te brengen.
              </p>
            </div>

            {/* Financing Options Cards */}
            <div className="space-y-6">
              {/* Private Lease */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Euro className="w-8 h-8 text-black" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black mb-2">Private Lease</h3>
                    <p className="text-gray-600 mb-4">
                      Rij zorgeloos in jouw droomauto met een all-in maandprijs.
                      Inclusief verzekering, onderhoud en wegenbelasting.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        All-in maandprijs
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Geen aanschafkosten
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Flexibele looptijd
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financial Lease */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-black" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black mb-2">Financial Lease</h3>
                    <p className="text-gray-600 mb-4">
                      Ideaal voor ondernemers. Lease jouw auto en profiteer van
                      fiscale voordelen en BTW-aftrek.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Fiscale voordelen
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        BTW-aftrek mogelijk
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Eigendom na afloop
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Traditional Financing */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Shield className="w-8 h-8 text-black" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black mb-2">Klassieke Financiering</h3>
                    <p className="text-gray-600 mb-4">
                      Traditionele autofinanciering met vaste maandlasten en
                      direct eigendom van jouw auto.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Direct eigenaar
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Vaste maandlasten
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Geen kilometerbeperking
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-black rounded-3xl p-8 text-white text-center">
              <h3 className="text-xl font-semibold mb-4">
                Interesse in een van onze financieringsopties?
              </h3>
              <p className="text-gray-300 mb-6">
                Neem contact met ons op voor een persoonlijk advies op maat.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <span>Contact opnemen</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}