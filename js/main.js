//constantes relacionadas a ações no menu lateral

const botoes_io = document.querySelectorAll("[io_button]")
const sub_divs_dados_usuario = document.querySelectorAll(".sub_div_dados_usuario")
const btns_adicionar  = document.querySelectorAll(".btn_adicionar") 

//constantes relacionadas a ações no curriculo
const preview = document.querySelector("#preview")
const divsDadosUsuario = document.querySelectorAll("[div-dados-usuario]")

divsDadosUsuario.forEach(
    divDadosUsuario => 
        divDadosUsuario.querySelectorAll("input").forEach(
            input=>
             input.addEventListener("keyup",(e)=>{
                console.log(input.id)
                dados_usuario_json[input.id] = input.value
                mudaCurriculo(preview,dados_usuario_json)
            }

        )))





function recebeInformacoesUsuario(){

} 



function main() {
    abreEFechaSubDivsDadosUsuario(botoes_io)
    adicionaElementosCurriculo(btns_adicionar,sub_divs_dados_usuario,dados_usuario_json)
    mudaCurriculo(preview,dados_usuario_json)
}






main()