"use client";
import { useState } from "react";

export default function Proyecto3() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState<string | null>(null);

  const convertir = () => {
    const c = Number(celsius);

    if (isNaN(c)) {
      setFahrenheit("⚠️ Ingresa un número válido.");
      return;
    }

    const resultado = (c * 9/5 + 32).toFixed(2); // Fórmula
    setFahrenheit(resultado);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-200 via-cyan-100 to-indigo-200 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          🌡️ Conversor de Temperatura
        </h1>

        {/* Input */}
        <input
          type="number"
          placeholder="Temperatura en °C"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={convertir}
          className="w-full px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
        >
          Convertir a Fahrenheit
        </button>

        {/* Resultado */}
        {fahrenheit && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-lg font-semibold text-blue-700">
              {typeof fahrenheit === "string"
                ? fahrenheit
                : `${celsius} °C = ${fahrenheit} °F`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
