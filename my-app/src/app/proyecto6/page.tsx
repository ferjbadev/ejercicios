"use client";
import Link from "next/link";
import { useState } from "react";

export default function Proyecto6() {
  const [palabra, setPalabra] = useState("");
  const [contador, setContador] = useState<number | string | null>(null);

  const contarLetras = () => {
    if (!palabra.trim()) {
      setContador("⚠️ Ingresa una palabra válida.");
      return;
    }

    // Quitamos espacios con replace y contamos longitud
    const cantidad = palabra.replace(/\s+/g, "").length;
    setContador(cantidad);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 via-emerald-100 to-teal-200 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-6">
          🔤 Contador de Letras
        </h1>

        {/* Input */}
        <input
          type="text"
          placeholder="Escribe una palabra"
          value={palabra}
          onChange={(e) => setPalabra(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={contarLetras}
          className="w-full px-6 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
        >
          Contar Letras
        </button>

        {/* Resultado */}
        {contador !== null && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-lg font-semibold text-green-700">
              {typeof contador === "string"
                ? contador
                : `La palabra "${palabra}" tiene ${contador} letras.`}
            </p>
          </div>
        )}
      </div>
         <div className="mt-24">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}
