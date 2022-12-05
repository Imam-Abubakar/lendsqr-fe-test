import React from 'react'
import { Link } from "react-router-dom";
import ErrorStyle from './_error.module.scss';

const index = () => {
  return (
    <div className={ErrorStyle.error__container}>
    <h1 className={ErrorStyle.error__header}>404</h1>
    <p className={ErrorStyle.error__details} data-testid="page-not-found">Page Not Found</p>
    <button className={ErrorStyle.error__btn}><Link to="/" >Back To Home</Link></button>
</div>
  )
}

export default index
