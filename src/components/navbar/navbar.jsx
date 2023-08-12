import style from '../../styles/navbar.module.css'


export default function navbar(props){
    return(

        <nav className={style.navbar}>
            
            <ul className={style.navbar_nav}>
                <img className={style.logo} src={props.logo} alt="" />
                <h2>{props.slogan}</h2>
                <div className={style.search}>
                        <input type="text" name='query' className={style.search_input} placeholder="Buscar"/>
                        <button className={style.search_submit} type="submit"><span class="material-symbols-outlined">
                                search
                            </span></button>
                    </div>

                <div className={style.nav_links}>

                    
                    {props.children}
                    <li className={style.nav_item}>
                        <a href="javascript:;" className={style.icon_button}>
                        <span class="material-symbols-outlined">
                        dark_mode
                        </span>
                        </a>
                    
                    </li>
                </div>

                <li className={style.nav_item}>

                    <div className={style.hamburguer}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
            </ul>
            
        </nav>

        
    )
}

