import style from '../../styles/navbar.module.css'


export default function navbar(props){
    return(

        <nav className={style.navbar}>
            <ul className={style.navbar_nav}>
                {props.children}
            </ul>
        </nav>
        
    )
}

