import React from 'react'
import Info from './Info';
import RowData from './RowData';

const Course = ({data,setData}) => {

    const updateData = async (data,pos) => {
        const newData = [];
        for (let i = 0; i < data.length; i++) {
            if(data[i].id !== parseInt(pos)){
                newData.push(data[i]);
            }
        }
        await setData(newData);
    }

  return (
    <>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th className='text-center' scope="col">Participantes Min</th>
                    <th className='text-center' scope="col">Participantes Max</th>
                    <th className='text-center'>Acciones</th>
                </tr>
            </thead>
            <tbody className='align-middle'>
                {data.length === 0 ? <Info/> : data.map((e,i) => <RowData key={i} i={i} id={e.id} titulo={e.titulo} min_participantes={e.min_participantes} max_participantes={e.max_participantes} updateData={updateData} setData={setData} data={data}/>)}
            </tbody>
        </table>
    </>
  )
}

export default Course;