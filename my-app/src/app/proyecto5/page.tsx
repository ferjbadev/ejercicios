"use client";
import Link from "next/link";
import { useState } from "react";

export default function Proyecto5() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState<string | number | null>(null);

  const calcularSuma = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Ingresa números válidos");
      return;
    }

    setResultado(n1 + n2);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-yellow-100 via-orange-100 to-red-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-orange-600 mb-6">
          ➕ Calculadora de Suma
        </h1>

        {/* Primer número */}
        <input
          type="number"
          placeholder="Ingresa el primer número"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-center"
        />

        {/* Segundo número */}
        <input
          type="number"
          placeholder="Ingresa el segundo número"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-center"
        />

        {/* Botón */}
        <button
          onClick={calcularSuma}
          className="w-full px-6 py-2 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition"
        >
          Calcular Suma
        </button>

        {/* Resultado */}
        {resultado !== null && (
          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-lg font-semibold text-orange-700">
              {typeof resultado === "string"
                ? resultado
                : `${num1} + ${num2} = ${resultado}`}
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
