import React from 'react'
import Header from '../components/header/Header'
import Layout from '../components/layout/Layout'
import ListCourse from '../components/list-course-user/ListCourse'

const ListaCursos = () => {
  return (
    <>
      <Layout>
        <Header/>
        <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
            <div>        
              <div className='mb-4 fw-bold'>
                <h2><i className='fas fa-list'></i> Mi lista de cursos</h2>
              </div>
            </div>
            <ListCourse />
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default ListaCursos