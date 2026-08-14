'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
export function Preloader(){const pathname=usePathname();const [visible,setVisible]=useState(true);useEffect(()=>{setVisible(true);const id=setTimeout(()=>setVisible(false),850);return()=>clearTimeout(id)},[pathname]);return <div className={'preloader '+(!visible?'preloader-out':'')} aria-hidden={!visible}><div><img src="/media/cropped-logo-retina-final-freedom-medical-ophtalmologies%20(1).png" alt="Freedom Distribution"/><span/></div></div>}
