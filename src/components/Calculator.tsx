import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("");

  const [protein, setProtein] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);
  const [fats, setFats] = useState<number>(0);

  const [maxWeight, setMaxWeight] = useState<number>();
  const [lessWeight, setLessWeight] = useState<number>();
  const [manteinWeight, setManteinWeight] = useState<number>();

  //FUNCIONES PARA CALCULAR LOS MACROS SEGUN FORMULAS
  const calculateMacros = () => {
    const totalCalories = weight * 25;
    const maxCalories = totalCalories + 500;
    const lessCalories = totalCalories - 500;
    const proteinPercentage = gender === "hombre" ? 0.3 : 0.25;
    const carbsPercentage = 0.5;
    const fatPercentage = 1 - proteinPercentage - carbsPercentage;

    const proteinGrams = (totalCalories * proteinPercentage) / 4;
    const carbsGrams = (totalCalories * carbsPercentage) / 4;
    const fatGrams = (totalCalories * fatPercentage) / 9;

    const tmb =
      gender === "hombre"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    setProtein(proteinGrams);
    setCarbs(carbsGrams);
    setFats(fatGrams);

    setMaxWeight(maxCalories);
    setLessWeight(lessCalories);
    setManteinWeight(totalCalories);
  };

  return (
    <div className="max-w-3xl mx-auto w-full mt-6 p-4 rounded-lg shadow">
      <h2 className="text-2xl sm:text-xl text-center font-bold mb-4">
        Calculadora de Macros
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <label className="text-lg sm:text-md font-semibold" htmlFor="gender">
            Sexo:
          </label>
          <select
            className="py-2 px-4 text-center text-sm font-normal bg-slate-400 rounded-lg"
            name="gender"
            id="id-gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value=""></option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <label className="text-lg sm:text-md font-semibold" htmlFor="weight">
            Peso:
          </label>
          <input
            className="py-2 px-2 text-center text-sm font-normal bg-slate-400 rounded-lg"
            type="number"
            name="weight"
            id="id-weight"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <label className="text-lg sm:text-md font-semibold" htmlFor="height">
            Altura:
          </label>
          <input
            className="py-2 px-2 text-center text-sm font-normal bg-slate-400 rounded-lg"
            type="number"
            name="height"
            id="id-height"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <label className="text-lg sm:text-md font-semibold" htmlFor="age">
            Edad:
          </label>
          <input
            className="py-2 px-2 text-center text-sm font-normal bg-slate-400 rounded-lg"
            type="number"
            name="age"
            id="id-age"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          className="mt-6 bg-purple-800 hover:bg-purple-500 text-white text-md font-bold py-2 px-4 rounded"
          onClick={calculateMacros}
        >
          Calcular
        </button>
      </div>

      <div className="mt-4 md:text-center">
        <h3 className="font-bold">Macronutrientes:</h3>
        <p>Proteínas: {protein.toFixed(2)} gr</p>
        <p>Carbohidratos: {carbs.toFixed(2)} gr</p>
        <p>Grasas: {fats.toFixed(2)} gr</p>
      </div>

      <div className="mt-4 md:text-center">
        <h3 className="font-bold">
          Calorias para subir, bajar y mantener peso:
        </h3>
        <p>Aumentar: {maxWeight}</p>
        <p>Bajar: {lessWeight}</p>
        <p>Mantener: {manteinWeight}</p>
      </div>
    </div>
  );
};
export default Calculator;
