import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("");

  const [protein, setProtein] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);
  const [fats, setFats] = useState<number>(0);

  const [moreWeight, setMoreWeight] = useState<number>();
  const [lessWeight, setLessWeight] = useState<number>();
  const [manteinWeight, setManteinWeight] = useState<number>();


  //FUNCIONES PARA CALCULAR LOS MACROS SEGUN FORMULAS
  const calculateMacros = () => {
    
    const totalCalories = weight * 25;
    const proteinPercentage = gender === "hombre" ? 0.3 : 0.25;
    const carbsPercentage = 0.5;
    const fatPercentage = 1 - proteinPercentage - carbsPercentage;

    const proteinGrams = (totalCalories * proteinPercentage) / 4;
    const carbsGrams = (totalCalories * carbsPercentage) / 4;
    const fatGrams = (totalCalories * fatPercentage) / 9;

    const tmb = gender === "hombre" ? ((10 * weight) + (6.25 * height) - (5 * age) + 5 ) : ((10 * weight) + (6.25 * height) - (5 * age) - 161 );
    const max = tmb + 500;
    const min = tmb - 500;

    setProtein(proteinGrams);
    setCarbs(carbsGrams);
    setFats(fatGrams);

    setMoreWeight(max);
    setLessWeight(min);
    setManteinWeight(tmb);

  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Calculadora de Macros</h2>

      {/* FORMULA PARA INGRESAR DATOS */}

      <div className="grid grid-cols-4 gap-y-6 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <label className="text-lg font-semibold" htmlFor="gender">
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

        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <label className="text-lg font-semibold" htmlFor="weight">
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

        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <label className="text-lg font-semibold" htmlFor="height">
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

        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <label className="text-lg font-semibold" htmlFor="age">
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

        <div className="flex flex-row justify-center items-center gap-2 w-full">
          <label className="text-lg font-semibold" htmlFor="max">
            Aumentar peso:
          </label>
          <input
            className="h-4 w-4 rounded-lg"
            type="radio"
            name="maxmin"
            id="id-max"
            value={moreWeight}
            onChange={(e) => setMoreWeight(parseInt(e.target.value))}
          />
          <label className="text-lg font-semibold" htmlFor="min">
            Disminuir peso:
          </label>
          <input
            className="h-4 w-4 rounded-lg"
            type="radio"
            name="maxmin"
            id="id-min"
            value={lessWeight}
            onChange={(e) => setLessWeight(parseInt(e.target.value))}
          />
          <label className="text-lg font-semibold" htmlFor="min">
            Mantener peso:
          </label>
          <input
            className="h-4 w-4 rounded-lg"
            type="radio"
            name="maxmin"
            id="id-man"
            value={manteinWeight}
            onChange={(e) => setManteinWeight(parseInt(e.target.value))}
          />
        </div>
      </div>

      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={calculateMacros}
      >
        Calcular Macronutrientes
      </button>
      <div className="mt-4">
        <h3 className="font-bold">Macronutrientes:</h3>
        <p>Proteínas: {protein.toFixed(2)}g</p>
        <p>Carbohidratos: {carbs.toFixed(2)}g</p>
        <p>Grasas: {fats.toFixed(2)}g</p>
      </div>
      {/* <div className="mt-4">
        <h3 className="font-bold">Calorias:</h3>
        <p>Calorias: {tmb.toFixed(2)}g</p>
      </div> */}
    </div>
  );
};
export default Calculator;
