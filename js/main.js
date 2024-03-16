//constantes relacionadas a ações no menu lateral

const botoes_io = document.querySelectorAll("[io_button]")
const sub_divs_dados_usuario = document.querySelectorAll(".sub_div_dados_usuario")
const btns_adicionar  = document.querySelectorAll(".btn_adicionar") 

//constantes relacionadas a ações no curriculo
const preview = document.querySelector("#preview")

const divAdicionarElementos = document.createElement("div")








function main() {
    abreEFechaSubDivsDadosUsuario(botoes_io)
    adicionarElementosParteMenuLateral(btns_adicionar,sub_divs_dados_usuario)
}

















// preview.innerHTML = mudaTextoHTML(dados_usuario_json)


// //deixa os setores dos dados do usuário dinâmicos
// div_dados_usuario.forEach(
//     div =>{
//         const button = div.querySelector("button")
//         button.addEventListener("click",()=>{
//             nome_do_campo = div.getAttribute("div-dados-usuario")
//         div.innerHTML = conteudo_campos_json[nome_do_campo]
        
//         const dadosUsuario = document.querySelectorAll(".dados_usuario")
//         atualizaCurriculo(dadosUsuario)
//     }) 
//     }    
// )














main()