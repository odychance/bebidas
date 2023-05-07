import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idReceta, setIdReceta] = useState(null)


    return( 
        <ModalContext.Provider
            value={{
                informacion, 
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}

export default ModalProvider
