import React from 'react'
 import { pageLinks } from '../data';
 import Pagelink from './Pagelink';
const Pagelinks = ({parentClass,itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
    {
        pageLinks.map((link)=>{
            return ( <Pagelink key={link.id} link={link} itemClass={itemClass}/>);
        })
    }
   
  </ul>
  )
}

export default Pagelinks