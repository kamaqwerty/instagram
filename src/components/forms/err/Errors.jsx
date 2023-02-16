import React from 'react'

import classNames from "classnames";

import cls from '../../../assets/styles/forms/Forms.module.scss'

import Icons from "../../../assets/images/icons/sprite_core_2x.png"

export default function Errors({err}) {

  console.log(err);
  
  const errHandle = () => {
    if(err === undefined) {
      return cls.icons 
    }else if(err === "err") {
      return classNames(cls.err_icons, cls.icons)
    }else if(err === "success") {
      return classNames(cls.ok_icons, cls.icons)
    }
  }

  return (
    <div 
      style={{background: `url(${Icons})`}} 
      className={errHandle()}
    />
  )
}
