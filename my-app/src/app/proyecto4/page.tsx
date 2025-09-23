"use client";
import { useState } from "react";

export default function Proyecto4() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [mensaje, setMensaje] = useState<string | null>(null);

  const generarSaludo = () => {
    if (!nombre.trim() || !edad.trim() || isNaN(Number(edad))) {
      setMensaje("Ingresa un nombre y una edad válida.");
      return;
    }

    setMensaje(`Hola, ${nombre}. Tienes ${edad} años 🎉`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-200 via-purple-100 to-indigo-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-pink-600 mb-6">
          👋 Saludo Personalizado
        </h1>

        {/* Input nombre */}
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-center"
        />

        {/* Input edad */}
        <input
          type="number"
          placeholder="Ingresa tu edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={generarSaludo}
          className="w-full px-6 py-2 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600 transition"
        >
          Generar Saludo
        </button>

        {/* Resultado */}
        {mensaje && (
          <div className="mt-6 p-4 bg-pink-50 border border-pink-200 rounded-lg">
            <p className="text-lg font-semibold text-pink-700">{mensaje}</p>
          </div>
        )}
      </div>
    </div>
  );
}
