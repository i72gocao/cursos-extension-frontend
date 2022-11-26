import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Layout from '../../components/layout/Layout'
import Message from '../../components/message/Message';

const ListMessage = () => {
  
  const [data,setData] = useState([]);

  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_API_LOAD_MESSAGE,{
        method:"GET",
        headers: {
          "Content-Type":"application/json"
        }
      })
      .then(res => res.json())
      .then(data => {
        setData(data.data)
      })
    } catch (error) {
      console.log("Ha ocurrido un error al obtener los datos");
    }
  }, [])
  
  return (
    <>
      <Layout>
      <Header />
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
            <div></div>
            {/* {data.map((e,i) => <Message key={e.id} id={e.id} fullname={e.fullname} username={e.username} email={e.email}/>)} */}
            <Message data={data} setData={setData}/>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default ListMessage