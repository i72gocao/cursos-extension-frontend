import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Layout from '../../components/layout/Layout';
import Course from '../../components/manage-course/Course';

const ManageCourses = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_API_MANAGE_COURSE,{
        method: "GET",
        headers: {
          "Content-Type":"application/json"
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data.data);
      })
    } catch (error) {
      console.log("Hubo un problema con el servidor");
    }
  }, [])
  

  return (
    <>
    <Layout>
      <Header />
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
            <div>        
              <div>
                <Link to="/admin/pages/manage-courses/create" className='btn btn-primary'>
                    Crear cursos
                </Link>
              </div></div>
              <Course data={data} setData={setData}/>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default ManageCourses;