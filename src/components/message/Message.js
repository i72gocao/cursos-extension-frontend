import RowData from './RowData';

const Message = ({data,setData}) => {

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e,i) => <RowData key={e.id} i={i} index={e.id} fullname={e.fullname} username={e.username} email={e.email} setData={setData} data={data}/>)}
                </tbody>
            </table>
        </>
    )
}

export default Message