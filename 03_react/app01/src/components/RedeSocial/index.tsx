import './styles.css';

export function RedeSocial(props:{link1: string, link2: string, link3: string, link4: string}){

    return(
        <div className='RedeSocial'>
             <ul>
                <li>
                    <a href="">{props.link1}</a>
                </li>
                <li>
                    <a href="">{props.link2}</a>
                </li>
                <li>
                    <a href="">{props.link3}</a>
                </li>
                <li>
                    <a href="">{props.link4}</a>
                </li>
            </ul>

        </div>
    )
}