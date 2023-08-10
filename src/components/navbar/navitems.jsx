import style from '../../styles/navbar.module.css'


export default function navitems(props){
    return(

        <li className={style.navitems}>
        <a href="#" className='icon-button'>
            {props.icon}
        </a>
    </li>
        )
}