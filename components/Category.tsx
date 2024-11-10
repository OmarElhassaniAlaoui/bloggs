"use client" ;  
import Link from 'next/link';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const Category = ({cat}:{cat:any}) => {

    // todo : imp
  return (
    <li>
      <Link href={`/category/${cat.slug}`}>
       {cat.title.toUpperCase()}
      </Link>
    </li>

  )
}

export default Category