

import React from 'react'
import { useForm } from 'react-hook-form'
import { Components } from '../../../components'

import cls from "../../../assets/styles/login/Login.module.scss"

import Logo from "../../../assets/images/logo/insta.png"

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors , isValid },
  } = useForm();

  const onSubmit = (data) => {
    
  }
  return (
    <Components.Container>
      <section className={cls.login_page}>
        <div className={cls.login_page_card}>
          <Components.Image  src={Logo}/>

        </div>
      </section>
    </Components.Container>
  )
}
