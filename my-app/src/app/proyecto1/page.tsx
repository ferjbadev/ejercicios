"use client";

import Link from "next/link";
import { useState } from "react";

export default function Proyecto1() {
  const [nombre, setNombre] = useState<string>(""); // nombre del alumno
  const [cantidad, setCantidad] = useState<string>(""); // cantidad de notas como string
  const [notas, setNotas] = useState<string[]>([]); // array dinámico de notas
  const [promedio, setPromedio] = useState<string | null>(null); // resultado final

  // Maneja cuando el usuario cambia el nombre
  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  // Maneja cuando el usuario cambia la cantidad de notas
  const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCantidad(value); // guardamos como string

    const num = value === "" ? 0 : Number(value);
    setNotas(Array(num).fill(""));
  };

  // Maneja cuando el usuario escribe en cada input de nota
  const handleNotaChange = (index: number, value: string) => {
    const nuevasNotas = [...notas];
    nuevasNotas[index] = value;
    setNotas(nuevasNotas);
  };

  // Calcula el promedio
  const calcularPromedio = () => {
    const numeros = notas.map((n) => Number(n)).filter((n) => !isNaN(n));

    if (numeros.length === 0) {
      setPromedio("⚠️ Ingresa al menos una nota válida");
      return;
    }

    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
    const resultado = (suma / numeros.length).toFixed(2);
    setPromedio(resultado);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-6">
      {/* Contenedor principal */}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-600 text-center">
          Promedio de Notas 📘
        </h1>

        {/* Input para el nombre */}
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Nombre del alumno"
          className="mb-4 px-4 py-2 border text-black border-black rounded-lg w-full text-center"
        />

        {/* Input para definir la cantidad de notas */}
        <input
          type="number"
          min="0"
          value={cantidad}
          onChange={handleCantidadChange}
          placeholder="Cantidad de notas"
          className="mb-4 px-4 py-2 border text-black border-black rounded-lg w-full text-center"
        />

        {/* Inputs dinámicos para las notas */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {notas.map((nota, index) => (
            <input
              key={index}
              type="number"
              placeholder={`Nota ${index + 1}`}
              value={nota}
              onChange={(e) => handleNotaChange(index, e.target.value)}
              className="px-3 py-2 border text-black border-black rounded-lg text-center"
            />
          ))}
        </div>

        {/* Botón para calcular */}
        <button
          onClick={calcularPromedio}
          className="px-6 py-2 bg-blue-500 text-white border border-black rounded-xl shadow hover:bg-blue-600 transition w-full"
        >
          Calcular Promedio
        </button>

        {/* Resultado */}
        {promedio && (
       <p className="mt-6 text-lg font-semibold text-center text-black">
       {nombre
         ? `${nombre} tiene un promedio de ${promedio}, ${
             Number(promedio) >= 10 ? "Aprobaste pero a que costo" : "Reprobaste eres un inútil"
           }`
         : `Promedio: ${promedio}, ${
             Number(promedio) >= 10 ? "Aprobaste pero a que costo" : "Reprobaste eres un inútil"
           }`}
     </p>
     
        )}

        {/* Botón de regresar */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 border border-black"
          >
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
}
