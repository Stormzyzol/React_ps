import style from '../../styles/navbar.module.css'


export default function navbar(props){
    return(

        <nav className={style.navbar}>
            
            <ul className={style.navbar_nav}>
                <img className={style.logo} src={props.logo} alt="" />
                <div className={style.search}>
                    <input type="text" name='query' className={style.search_input} placeholder="Buscar"/>
                    <button className={style.search_submit} type="submit"><span class="material-symbols-outlined">
                            search
                        </span></button>
                </div>
                {props.children}
            </ul>
        </nav>
        
    )
}

