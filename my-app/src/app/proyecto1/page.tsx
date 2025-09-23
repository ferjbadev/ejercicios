"use client"; 
import { useState } from "react";

export default function Proyecto1() {
  const [cantidad, setCantidad] = useState<string>(""); // cantidad de notas a ingresar
  const [notas, setNotas] = useState<string[]>([]); // array dinámico de notas
  const [promedio, setPromedio] = useState<string | null>(null); // resultado final

  // Maneja cuando el usuario cambia el número de notas
  const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCantidad(value);

    // Creamos un array del tamaño ingresado con valores vacíos
    setNotas(Array(value).fill(""));
  };

  // Maneja cuando el usuario escribe en cada input de nota
  const handleNotaChange = (index: number, value: string) => {
    const nuevasNotas = [...notas];
    nuevasNotas[index] = value;
    setNotas(nuevasNotas);
  };

  // Calcula el promedio
  const calcularPromedio = () => {
    // Convertimos las notas a números y filtramos vacíos
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">
        Promedio de Notas 📘
      </h1>

      {/* Input para definir la cantidad de notas */}
      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={handleCantidadChange}
        placeholder="Cantidad de notas"
        className="mb-4 px-4 py-2 border rounded-lg w-64 text-center"
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
            className="px-3 py-2 border rounded-lg text-center"
          />
        ))}
      </div>

      {/* Botón para calcular */}
      <button
        onClick={calcularPromedio}
        className="px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
      >
        Calcular Promedio
      </button>

      {/* Resultado */}
      {promedio && (
        <p className="mt-6 text-lg font-semibold text-green-600">
          Promedio: {promedio}
        </p>
      )}
    </div>
  );
}
