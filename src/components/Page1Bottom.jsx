//import { useGSAP } from '@gsap/react'
import React from 'react'
const Page1Bottom = () => {
 {/* useGSAP(function(){
    gsap.to('#banner, img',{
      rotate:360, duration:-1, repeat:-1

    })
  })*/}
  return ( 
  <div className='absolute left-0 bottom-0 w-full  p-24 flex items-end justify-between'>
<div>
    <h2 className='text-xl font-[anzo2]  text-gray-400'>WEB DEVELOPER| RESEARCH ANALYST </h2>
       <h3 className='text-xl font-[anzo2] text-gray-500 '> CHEMICAL ENGINEER
    </h3>
</div>
<div id='banner'>
    <img   className='mb-(-1)' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
</div>
<div>
    <img className='mb-(-1) ' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
</div>
  </div>    
  )
}
export default Page1Bottom