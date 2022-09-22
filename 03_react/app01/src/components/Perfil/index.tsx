import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import './styles.css'

export function Perfil(props: { name: string }){

    return (
        <div className='perfil'>
            <h2>{props.name}</h2>
        </div>
    )
}