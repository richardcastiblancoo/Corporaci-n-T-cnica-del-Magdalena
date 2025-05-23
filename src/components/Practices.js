import Link from 'next/link';

const Practices = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Convenio de Prácticas</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6">REQUISITOS</h2>
        <ul className="space-y-3 text-gray-700 list-decimal list-inside">
          <li>Solicitud de prácticas formativas (Formato entregado en COTEMAG)</li>
          <li>Dos hoja de vida impresa a color en el formato de COTEMAG</li>
          <li>Dos foto 3x4 fondo azul tipo documento (No escaneada, No tipo selfie)</li>
          <li>Dos fotocopia del documento de identidad al 100%</li>
          <li>Una fotocopia del documento de identidad al 150%</li>
          <li>Esquema de vacunación al día para el área de salud</li>
          <li>Dos certificado de Fosyga</li>
          <li>Dos fotocopia del Seguro Estudiantil o recibo de pago del mismo</li>
          <li>Una fotocopia del recibo de pago de pólizas</li>
          <li>Paz y salvo académico</li>
          <li>Paz y salvo financiero</li>
          <li>Permiso de trabajo notariado para menores de edad</li>
          <li>Certificado de la procuraduría</li>
          <li>Certificado de contraloría</li>
          <li>Certificado de policía</li>
          <li>Fotocopia del diploma de bachiller y de otros estudios incluyendo seminarios realizados en COTEMAG (Una fotocopia de cada documento)</li>
          <li>Una carpeta blanca</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">ANEXOS PRÁCTICAS FORMATIVAS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-4">Formato solicitud de prácticas</h3>
            <p className="text-gray-600 mb-4">
              Este documento esta diseñado en Microsoft Word (docx), el cual es desarrollado por Sistema de Gestión de la Calidad – Corporación Técnica del Magdalena con el título de SOLICITUD DE PRÁCTICAS FORMATIVAS Código: GC-F007.
            </p>
            <Link 
              href="#" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              DESCARGAR
            </Link>
          </div>

          <div className="border p-6 rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-4">Hoja de Vida</h3>
            <p className="text-gray-600 mb-4">
              Este documento esta diseñado en Microsoft Word (docx), el cual es desarrollado por Sistema de Gestión de la Calidad – Corporación Técnica del Magdalena HOJA DE VIDA DE PRACTICANTES Código: GC-F008.
            </p>
            <Link 
              href="#" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              DESCARGAR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practices;