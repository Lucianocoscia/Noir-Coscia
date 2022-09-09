import React from 'react'
import './Categories.css'
import foto from '../../images/dunk.jpg'

const Categories = () => {
  return (
    <>
    <div className='container'>
        <div className='grid_categorias'>
            <div className='grid_categorias_hijo  grid_categorias_hijo-1'>
                <h3 className='texto_img'>Abrigos</h3>
            </div>

            <div className='grid_categorias_hijo grid_categorias_hijo-2'>
                <h3 className='texto_img' >Pantalones</h3>
            </div>

            <div className='grid_categorias_hijo grid_categorias_hijo-3'>
                <h3 className='texto_img'>Remeras</h3>
            </div>
        </div>
        <div className='grid_sales'>
            <div className='grid_categorias_hijo grid_categorias_hijo-4'>
                <h3 className='texto_img'>Sale</h3>
                <button className='button_img'>Ver Mas</button>
            </div>
            <div className='grid_categorias_hijo grid_categorias_hijo-5'>
                <h3 className='texto_img'>New</h3>
                <button className='button_img'>Ver Mas</button>
            </div>


        </div>
    </div>

</>

  )
}

export default Categories