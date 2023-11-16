"use client"
import { Formik } from 'formik'
import React from 'react'
import Input from '../../../components/Input'
import Button from '../../../components/Button'


const login = () => {
  return (
    <main>
      <Formik>
        {({values}) =>(
          <form 
          noValidate>
            <label >Email</label>
            <Input name="email" type="email" required autocolplete="off"/>
            <label >Senha</label>
            <Input name="password" type="password" required/>
            <Button text="Entrar" type="submit"/>
          </form>
        )}
      </Formik>
      
    </main>
  )
}

export default login