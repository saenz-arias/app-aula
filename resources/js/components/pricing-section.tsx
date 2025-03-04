import React from 'react';



const PricingSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Básico */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-gray-600 mb-4">Ideal para empezar</p>
            <p className="text-4xl font-bold mb-4">$10<span className="text-lg text-gray-600">/mes</span></p>
            <ul className="mb-6">
              <li className="mb-2">✔ 1 Usuario</li>
              <li className="mb-2">✔ 10 GB Almacenamiento</li>
              <li className="mb-2">✔ Soporte Básico</li>
              <li className="mb-2">✖ Acceso Premium</li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Suscribirse
            </button>
          </div>

          {/* Plan Estándar */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform md:scale-110 relative z-10">
            <h3 className="text-xl font-semibold mb-4">Estandar</h3>
            <p className="text-gray-600 mb-4">Perfecto para equipos pequeños</p>
            <p className="text-4xl font-bold mb-4">$25<span className="text-lg text-gray-600">/mes</span></p>
            <ul className="mb-6">
              <li className="mb-2">✔ 5 Usuarios</li>
              <li className="mb-2">✔ 50 GB Almacenamiento</li>
              <li className="mb-2">✔ Soporte Prioritario</li>
              <li className="mb-2">✔ Acceso Premium</li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Suscribirse
            </button>
          </div>

          {/* Plan Premium */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-gray-600 mb-4">Para empresas grandes</p>
            <p className="text-4xl font-bold mb-4">$50<span className="text-lg text-gray-600">/mes</span></p>
            <ul className="mb-6">
              <li className="mb-2">✔ Usuarios Ilimitados</li>
              <li className="mb-2">✔ 500 GB Almacenamiento</li>
              <li className="mb-2">✔ Soporte 24/7</li>
              <li className="mb-2">✔ Acceso Premium</li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;