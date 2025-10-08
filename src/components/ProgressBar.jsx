import React, {useEffect, useRef, useState} from 'react';

/**
 * percent:number(0～100)
 * label:string,可选
 * animationDuration:number(ms),可选,默认1200
 */
export default function ProgressBar({percent, label, animationDuration=1200}) {
  const displayPercent=Math.max(0,Math.min(percent,100));
  const [animatedPercent,setAnimatedPercent]=useState(0);
  const didAnimateRef=useRef(false);

  useEffect(()=>{
    if(didAnimateRef.current) return;
    didAnimateRef.current=true;

    const prefersReducedMotion=window.matchMedia?.('(prefers-reduced-motion:reduce)').matches;
    if(prefersReducedMotion){
      setAnimatedPercent(displayPercent);
      return;
    }

    const id=requestAnimationFrame(()=>setAnimatedPercent(displayPercent));
    return()=>cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return(
    <div style={{margin:'1em 0',width:'35%'}}>
      {label&&(
        <div style={{marginBottom:4,fontWeight:'bold'}}>
          {label}
        </div>
      )}
      <div style={{display:'flex',alignItems:'center'}}>
        <div style={{
          flex:1,
          height:'12px',
          background:'#dadadaff',
          borderRadius:'10px',
          overflow:'hidden'
        }}>
          <div style={{
            width:`${animatedPercent}%`,
            height:'100%',
            background:'linear-gradient(90deg,#4fd1c5 0%,#19a395 100%)',
            transition:`width ${animationDuration}ms ease`
          }}/>
        </div>
        <div style={{fontSize:12,marginLeft:8,whiteSpace:'nowrap'}}>
          {displayPercent}%
        </div>
      </div>
    </div>
  );
}
