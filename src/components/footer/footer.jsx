export default function footer(props){
    return(
    <footer>
        <div class="footer-content">
    
            <div class="contacts">
                <h1>{props.name}</h1>
                <p>{props.slogan}</p>
                <div class="social-media">
                    {props.socials}
                </div>
            </div>

            <ul class="list">
            
                <li>
                    <h3>Nossa Empresa</h3>
                </li>
                {props.extra}
            </ul>

            <ul class="list">
                <li>
                    <h3>Parceirias</h3>
                </li>
                
                {props.partners}

            </ul>




        </div>

        <div class="copyright">
            &#169
            {props.year}, Feito com amor por {props.name}
        </div>
</footer>

    )
}