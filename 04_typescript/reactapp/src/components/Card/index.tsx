import './styles.css'

export type CardPropos = {
    name: string, 
    time: string,
}


export function Card(props: CardPropos){
    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )

}