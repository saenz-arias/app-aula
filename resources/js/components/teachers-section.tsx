import React from "react";

export default function TeachersSection(){ 
  const teachers = [
    {
      name: "Maria García",
      country: "Spain",
      price: "$25/hour",
      videoUrl: "https://www.youtube.com/embed/ejemplo1", // Reemplaza con el enlace real
      description: "Experienced Spanish teacher with 10+ years of teaching. Specializes in conversational Spanish.",
    },
    {
      name: "Carlos Martínez",
      country: "Mexico",
      price: "$20/hour",
      videoUrl: "https://www.youtube.com/embed/ejemplo2", // Reemplaza con el enlace real
      description: "Certified DELE examiner. Focuses on grammar and exam preparation.",
    },
    {
      name: "Ana López",
      country: "Argentina",
      price: "$22/hour",
      videoUrl: "https://www.youtube.com/embed/ejemplo3", // Reemplaza con el enlace real
      description: "Passionate about teaching Spanish through cultural immersion.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative aspect-w-16 aspect-h-9">
                <iframe
                  src={teacher.videoUrl}
                  title={`${teacher.name} presentation`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Country:</span> {teacher.country}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Price:</span> {teacher.price}
                </p>
                <p className="text-gray-700 mb-4">{teacher.description}</p>
                <a
                  href={`/teachers/${teacher.name.toLowerCase().replace(/ /g, "-")}`} // Ruta dinámica para más detalles
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
