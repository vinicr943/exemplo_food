import { useState } from "react"

//ARRAY DE OBJETOS CONTENDO O ESTADO INICIAL DO CARDÁPIO
const cardapio = [
    { id: 1, nome: "Combo-01", preco: 25.00, disponivel: false, quantidade: 0 },
    { id: 2, nome: "Combo-02", preco: 35.00, disponivel: true, quantidade: 0 },
    { id: 3, nome: "Combo-03", preco: 45.00, disponivel: false, quantidade: 0 },
    { id: 4, nome: "Combo-04", preco: 55.00, disponivel: true, quantidade: 0 }
];

const Pedido = () => {

    //Hook- useState - Manipula o estado da variavel
    //Estados para gerenciar a lista de items do cardapio

    const [items, setItems] = useState(cardapio);
    const [status, setStatus] = useState("");
    const [enviar, setEnviar] = useState(false);

    // VALOR FIXO ADICIONADO AO TOTAL QUANDO TIVER NO CARRINHO
    const taxaEntrega = 5.00;

    //FUNÇÃO QUE ALTERA A QUANTIDADE DO PEDIDO
    const AlterarQuantidade = (id, valor) => {
        setItems(alt =>
            //MAP:CRIA UM NOVO ARRAY E PERCORRE OS ITEMS SEM MODIFICAR O ORIGIAL (IMUTABILIDADE)
            //TERNÁRIO: verifica se o item da iteração atual é o que deve ser alterado
            //SPREAD (...item)- Mantem os valores antigos e adiciona os novos
            //Math.max: Objeto que garente que a quantidade nunca será maior que 0

            alt.map(item =>
                item.id === 0 ? { ...item, quantidade: Math.max(0, item.quantidade + valor) } : item
            )
        )
    }

    // FILTER: Seleciona apenas os produtos disponiveis no carrinho
    const produtosDisponiveis = items.filter(item => item.disponivel);
    const carrinho = items.filter(item => item.quantidade > 0);

    //REDUCE: Calcula  soma dos items(preco * quantidade)
    //e adiciona a taxa de entrega
    const subTotal = carrinho.reduce((ac, item) => ac + item.preco * item.quantidade, 0);
    const total = subTotal > 0 ? subTotal + taxaEntrega : 0;

// simulação do ciclo de vida da entrega usandi temporidor assíncrono

const ConfirmarPedido=()=>{
    setEnviar(true)
    setStatus("Restaurante confirmou seu pagamento, preparando seu pedido...")
    setTimeout(() => {
      setStatus("Seu pedido saiu para entrega")
      setEnviar(false)  
    },5000) // 5 segundos

    setTimeout(() => {
       setStatus("Código confirmado. Seu pedido foi entregue com sucesso.")
       setEnviar(false) 
    },10000) // 10 segundos
}


    return (
        <>

        </>
    )
}

export default Pedido