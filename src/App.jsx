import { useRef,useState } from "react" // O UseRef serve para pegarmos os dados de um elemento (ex: Linha: 27 )
import { v4 } from "uuid" // Usamos esse comando para criarmos um ID aleatório para os elementos (ex: Linha: 11 )         
 

function App(){
  const [produtos, setProd] = useState([])
  const UseRef = useRef()
  
  function enviarDados(){
    setProd([
      {
        id: v4(),
        nome: UseRef.current.value
      }, ...produtos] // Colocar esse três pontos serve para pegar os outros elementos de um array;
      
    )
    UseRef.current.value = ' ' // Aqui estamos tirando o que estiver dentro do input após clicar no btn
  }

  function ExcluirItem(id){
    setProd(produtos.filter(produto => produto.id !== id))
  }

  return(
    <div className="container">
      <h1>Lista de Compras</h1> 
      <div className="form_compras">
        <input type="text" placeholder="PRODUTO" ref={UseRef} className="enviarDados"/>
        <button onClick={enviarDados} id="btn_enviar"><h4>Enviar</h4></button>
      </div>
  
        <div>
          {
            produtos.map( prod=>(
              <div key={prod.id} className="prod">
                <p><h3>{prod.nome}</h3></p>
                <button onClick={() => ExcluirItem(prod.id)} id="btn_delete">Deletar</button>
              </div>
            ))
          }
        </div>
      
      
        
    </div>
  )
}

export default App // Sempre exporte o arquivo com o mesmo nome da função!