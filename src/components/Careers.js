'use client'

import React, { useState } from 'react';

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [showModal, setShowModal] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);

  const careers = [
    {
      id: 1,
      name: "Auxiliar en Salud Oral",
      description: "Forma profesionales en el cuidado de la salud oral.",
      duration: "18 Módulos / 3 Semestres / 1 Año y medio / 1.800 horas",
      category: "salud",
      image: "/images/Salud_Oral_1080x1080.jpg",
      nivel: "Técnico Laboral por competencias",
      practicas: "Incluidas",
      fullDescription: "Auxiliar en Salud Oral estarás en capacidad de apoyar al profesional en todos los procedimientos específicos de la odontología como recepción de pacientes, organización del instrumental, preparación de materiales dentales y control de citas. Además brindarás capacitación a las personas sobre el cuidado de la salud oral, aportando especial interés por el cuidado integral al individuo, la familia y la comunidad con un énfasis en la Promoción y la Prevención.",
      modules: [
        "Ética y valores técnico",
        "Fundamentos de seguridad y salud en el trabajo",
        "Fundamentos básicos de salud",
        "Bioseguridad",
        "Atención y orientación al usuario",
        "Biomateriales",
        "Fundamentos en salud oral",
        "Radiología dental básica",
        "Instrumental",
        "Técnicas odontológicas",
        "Periodoncia",
        "Endodoncia"
      ],
      practiceHours: "960 horas",
      requirements: [
        "Ser mayor de 16 años",
        "Noveno grado aprobado",
        "Documento de identidad",
        "Certificado de estudios",
        "2 fotos tipo documento"
      ]
    },
    {
      id: 2,
      name: "Administración de Empresas",
      description: "Prepara líderes para gestionar organizaciones exitosas.",
      duration: "4 años",
      category: "negocios",
      image: "/images/business-admin.jpg",
      fullDescription: "La carrera de Administración de Empresas te forma en la gestión empresarial, finanzas, marketing, recursos humanos y estrategia empresarial para liderar organizaciones hacia el éxito.",
    },
    {
      id: 3,
      name: "Marketing Digital",
      description: "Especialización en estrategias de marketing moderno.",
      duration: "4 años",
      category: "marketing",
      image: "/images/digital-marketing.jpg",
      fullDescription: "En Marketing Digital aprenderás sobre estrategias digitales, análisis de datos, redes sociales, SEO, SEM y comercio electrónico para impulsar marcas en el entorno digital.",
    }
  ];

  const categories = [
    { id: 'todas', name: 'Todas las Carreras' },
    { id: 'tecnologia', name: 'Tecnología' },
    { id: 'negocios', name: 'Negocios' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const filteredCareers = selectedCategory === 'todas' 
    ? careers 
    : careers.filter(career => career.category === selectedCategory);

  const handleOpenModal = (career) => {
    setSelectedCareer(career);
    setShowModal(true);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestras Carreras</h2>
        
        {/* Filtros */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de carreras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <div key={career.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={career.image}
                  alt={career.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{career.name}</h3>
                <p className="text-gray-600 mb-4">{career.description}</p>
                <p className="text-sm text-gray-500 mb-4">Duración: {career.duration}</p>
                <button
                  onClick={() => handleOpenModal(career)}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedCareer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              {/* Encabezado del Modal */}
              <div className="sticky top-0 bg-white p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-bold text-gray-800">{selectedCareer.name}</h3>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contenido del Modal */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Columna de Imagen */}
                  <div>
                    <img
                      src={selectedCareer.image}
                      alt={selectedCareer.name}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Columna de Información Principal */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg text-blue-700">Nivel</h4>
                        <p className="text-gray-700">{selectedCareer.nivel}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg text-blue-700">Duración</h4>
                        <p className="text-gray-700">{selectedCareer.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-blue-700">Prácticas Laborales</h4>
                        <p className="text-gray-700">{selectedCareer.practicas}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-blue-700 mb-2">Descripción del Programa</h4>
                      <p className="text-gray-700 leading-relaxed">{selectedCareer.fullDescription}</p>
                    </div>
                  </div>
                </div>

                {/* Sección de Módulos */}
                {selectedCareer.modules && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-xl text-blue-700 mb-4">Módulos</h4>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedCareer.modules.map((module, index) => (
                          <li key={index} className="flex items-start text-gray-700">
                            <span className="text-blue-700 mr-2">•</span>
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Sección de Requisitos */}
                {selectedCareer.requirements && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-xl text-blue-700 mb-4">Requisitos</h4>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-2">
                        {selectedCareer.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-gray-700">
                            <span className="text-blue-700 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Botón de Cerrar */}
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Careers;