import style from "../../styles/navbar.module.css"

export default function dropdown(props){
    return(
        <div className={style.dropdown}>
            <a href={props.link}>{props.children}</a>
        </div>
    )

}