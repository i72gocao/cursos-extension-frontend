import React, { useEffect } from 'react'
import ContainerCourse from '../components/courses/ContainerCourse'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Layout from '../components/layout/Layout'

const Home = () => {
  useEffect(() => {
    // const timeOut = setTimeout(() => {
      // window.location.reload();
    // },90000)

    // const interval = setInterval(() => {
    //   console.log("viendo")
    //   clearTimeout(timeOut)
    // },900)

    // if(interval === 4){
    //   console.log("se acabó")
    //   clearInterval(interval)
    // }
  }, []);
  
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