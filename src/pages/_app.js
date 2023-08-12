import '@/styles/globals.css'
import Cards from '../components/cards'
import Navbar from '../components/navbar/navbar'
import NavItems from '../components/navbar/navitems'
import Dropdown from "../components/navbar/dropdown"

export default function App() {
return (
<div>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

  <Navbar
  logo="https://emojitool.com/img/htc/sense-7/soccer-ball-483.png">
  <NavItems
    link="#"
    icon="Inicio"/>

    <NavItems
    link="#0"
    icon="Time">
      <Dropdown
     link="#"
     children="Cruzeiro"/> 
     <Dropdown
     link="#"
     children="Atletico"/> 
     <Dropdown
     link="#"
     children="Flamengo"/> 
     
    </NavItems>

    <NavItems
    link="javascript:;"
    icon="Nacionalidade"
    >
     <Dropdown
     link="#"
     children="Brasileiro"/> 
     <Dropdown
     link="#"
     children="Argentino"/> 
     <Dropdown
     link="#"
     children="Chileno"/> 
     
    </NavItems>


  <NavItems
      link="javascript:;"
      icon="Darkmode"/>
  </Navbar>

  <div className='wrapper'>
    
    <Cards
    img="https://conteudo.imguol.com.br/c/esporte/b8/2022/10/11/vini-jr-do-real-madrid-em-jogo-contra-o-shakhtar-pela-liga-dos-campeoes-1665522959902_v2_1x1.jpg"
    name="Vini Jr"
    team="Real Madrid"
    age="23"
    nationality="Brasileiro"/>

  <Cards
    img="https://conteudo.imguol.com.br/c/esporte/cc/2023/07/27/neymar-durante-aquecimento-do-psg-antes-de-amistoso-contra-o-al-nassr-1690473390851_v2_4x3.jpg"
    name="Neymar Jr"
    team="Paris Saint-Germain"
    age="31"
    nationality="Brasileiro"/>

  <Cards
    img="https://conteudo.imguol.com.br/c/esporte/b8/2022/10/11/vini-jr-do-real-madrid-em-jogo-contra-o-shakhtar-pela-liga-dos-campeoes-1665522959902_v2_1x1.jpg"
    name="Vini Jr"
    team="Real Madrid"
    age="23"
    nationality="Brasileiro"/>

  <Cards
    img="https://conteudo.imguol.com.br/c/esporte/cc/2023/07/27/neymar-durante-aquecimento-do-psg-antes-de-amistoso-contra-o-al-nassr-1690473390851_v2_4x3.jpg"
    name="Neymar Jr"
    team="Paris Saint-Germain"
    age="31"
    nationality="Brasileiro"/>

  <Cards
    img="https://conteudo.imguol.com.br/c/esporte/b8/2022/10/11/vini-jr-do-real-madrid-em-jogo-contra-o-shakhtar-pela-liga-dos-campeoes-1665522959902_v2_1x1.jpg"
    name="Vini Jr"
    team="Real Madrid"
    age="23"
    nationality="Brasileiro"/>

  <Cards
    img="https://conteudo.imguol.com.br/c/esporte/cc/2023/07/27/neymar-durante-aquecimento-do-psg-antes-de-amistoso-contra-o-al-nassr-1690473390851_v2_4x3.jpg"
    name="Neymar Jr"
    team="Paris Saint-Germain"
    age="31"
    nationality="Brasileiro"/>

  <Cards
    img="https://conteudo.imguol.com.br/c/esporte/b8/2022/10/11/vini-jr-do-real-madrid-em-jogo-contra-o-shakhtar-pela-liga-dos-campeoes-1665522959902_v2_1x1.jpg"
    name="Vini Jr"
    team="Real Madrid"
    age="23"
    nationality="Brasileiro"/>

  <Cards
    img="https://conteudo.imguol.com.br/c/esporte/cc/2023/07/27/neymar-durante-aquecimento-do-psg-antes-de-amistoso-contra-o-al-nassr-1690473390851_v2_4x3.jpg"
    name="Neymar Jr"
    team="Paris Saint-Germain"
    age="31"
    nationality="Brasileiro"/>

  <Cards
    img="https://conteudo.imguol.com.br/c/esporte/b8/2022/10/11/vini-jr-do-real-madrid-em-jogo-contra-o-shakhtar-pela-liga-dos-campeoes-1665522959902_v2_1x1.jpg"
    name="Vini Jr"
    team="Real Madrid"
    age="23"
    nationality="Brasileiro"/>

  <Cards
    img="https://conteudo.imguol.com.br/c/esporte/cc/2023/07/27/neymar-durante-aquecimento-do-psg-antes-de-amistoso-contra-o-al-nassr-1690473390851_v2_4x3.jpg"
    name="Neymar Jr"
    team="Paris Saint-Germain"
    age="31"
    nationality="Brasileiro"/>
    
  </div>
</div>
)
}
