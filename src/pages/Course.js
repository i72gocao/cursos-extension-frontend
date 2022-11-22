import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';

const Course = () => {
    let {id} = useParams();
    console.log("ID: ",id);

  return (
    <Layout>
        <Header/>
        <div>
            {id}
        </div>
    </Layout>
  )
}

export default Course