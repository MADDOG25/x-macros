import React, { useState } from 'react'

const Calculator: React.FC = () => {

    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [age, setAge] = useState<number>(0);

    //FUNCIONES PARA CALCULAR LOS MACROS SEGUN FORMULAS

  return (
    <div className='max-w-3xl mx-auto mt-8 p-4 rounded-lg shadow'>
        <h2 className='text-2xl font-bold mb-4'>Calculadora de Macros</h2>

        {/* FORMULA PARA INGRESAR DATOS */}

        <div className='grid grid-row-3 gap-y-6 justify-center items-center'>

        <div className='flex justify-center items-center gap-2 w-full'>
            <label className='text-lg font-semibold' htmlFor="">Peso:</label>
            <input className='py-2 text-center text-sm font-normal bg-slate-400 rounded-lg flex-1' type="number" name="weight" id="ip_weight" />
        </div>

        <div className='flex justify-center items-center gap-2 w-full'>
            <label className='text-lg font-semibold' htmlFor="">Altura:</label>
            <input className='py-2 text-center text-sm font-normal bg-slate-400 rounded-lg flex-1' type="number" name="weight" id="ip_weight" />
        </div>

        <div className='flex justify-center items-center gap-2 w-full'>
            <label className='text-lg font-semibold' htmlFor="">Edad:</label>
            <input className='py-2 text-center text-sm font-normal bg-slate-400 rounded-lg flex-1' type="number" name="weight" id="ip_weight" />
        </div>

        </div>

    </div>
  )
}
export default Calculator;