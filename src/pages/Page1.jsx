import React, { useRef, useState } from 'react'
//import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import TiltText from '../components/TiltText'
//import { useGSAP } from '@gsap/react'

const Page1 = () => {

const tiltRef = useRef(null)
const [Xval, setXVal] = useState(0)
const [Yval, setYVal] = useState(0)

  const mouseMoving = (e) => {
    setXVal((e.clientX-tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/70);
    setYVal(-(e.clientY -tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20);
/*console.log(tiltRef.current.getBoundingClientRect());
setXval(e.clientX/100)
setYval(e.clientX/100)*/
tiltRef.current.style.transform= `rotateX(${Yval}deg) rotateY(${Xval}deg)`
  }
 {/* useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform : `rotateX(${Yval}deg) rotateY(${Xval}deg)`,
      duration:2
      ease:elastic
  })
  },[Xval,Yval]) */}
  return ( 
  <div id='page1' onMouseMove= {(e) =>{ mouseMoving(e)}} className='h-screen relative p-7 bg-white '>
    <div id ='page1-in' className='shadow-xl absolute  p-28 shadow-gray-700 h-full w-full rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_580,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>
  <img  className ='py-5 'src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"/>

    <TiltText abc={tiltRef}/>

  <Page1Bottom />
  
  
  </div>
  </div>
   
  )
}
export default Page1
