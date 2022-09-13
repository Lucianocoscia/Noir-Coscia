import React from 'react';
import './Categories.css';
import portada from '../../../images/portada.jpg';
import portada1 from '../../../images/ropa4-byn.jpg';
import portada2 from '../../../images/ropa3.jpg';


const Categories = () => {
  return (
    <>

    <div className='container'>
                    <div className='grid_portada'>
                        <img className='img_portada' src={portada1} alt=''/>
                        <img className='img_portada'  src={portada2} alt=''/>
                        <img className='img_portada'  src={portada} alt=''/>
                    </div>
    </div>
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