import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import './styles.css'

export function Perfil(props: { name: string, avatar:string}){
    return (
        <div className='perfil'>
            <img src={props.avatar} alt="" />
            <p>{props.name}</p>
        </div>
    )
}