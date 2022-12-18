import React, { useContext, useEffect, useState } from 'react'
import ContainerCourse from '../components/courses/ContainerCourse'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Layout from '../components/layout/Layout'

const Home = () => {
    
  return (
    <div>
        <Layout>
            <Header/>
            <Hero/>
            <ContainerCourse/>
        </Layout>
    </div>
  )
}

export default Home