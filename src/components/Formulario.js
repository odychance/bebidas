import React, {useContext, useState} from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'


const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const { categorias } = useContext(CategoriasContext)
    const { getBusqueda, setConsultar } = useContext(RecetasContext)

    const obtenerDatosReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

  return (
    <form
        className='col-12'
        onSubmit={e => {
            e.preventDefault()
            getBusqueda(busqueda)
            setConsultar(true)
        }}
    >
        <fieldset className='text-center'>
            <legend>Busca Bebidas por Categoria o Ingrediente</legend>
        </fieldset>

        <div className='row mt-4'>
            <div className='col-md-4'>
                <input
                    name="nombre"
                    type="text"
                    className="form-control"
                    placeholder="Buscar por Ingredientes"
                    onChange={obtenerDatosReceta}
                />
            </div>
            <div className='col-md-4'>
                <select
                    className='form-control'
                    name='categoria'
                    onChange={obtenerDatosReceta}
                >
                    <option value="">-- Seleccione Categoria --</option>
                    {categorias.map(categoria => (
                        <option
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                        >{categoria.strCategory}</option>
                    ))}
                </select>
            </div>
            <div className='col-md-4'>
                <input
                    type="submit"
                    className="btn btn-block btn-primary"
                    value="Buscar Bebidas"
                />
            </div>
        </div>
    </form>
    )
}

export default Formulario