

function main() {
    abreEFechaSubDivsDadosUsuario(botoes_io)
    adicionaElementosCurriculo(btns_adicionar, sub_divs_dados_usuario, dados_usuario_json)
    apagarDadosDasSessoesCurriculo(btns_remover, sub_divs_dados_usuario, dados_usuario_json)
    mudaItensUnicosCurriculo(divsDadosUsuario) 
    mudaCurriculo(preview, dados_usuario_json)
    baixarCurriculo(dados_usuario_json)
}


main()