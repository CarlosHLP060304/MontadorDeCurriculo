function abreEFechaSubDivsDadosUsuario(botoes_io) {
    botoes_io.forEach(
        botao_io => botao_io.addEventListener("click",()=>{
            sub_divs_dados_usuario.forEach(
                sub_div_dados_usuario => { 
                    final_id = sub_div_dados_usuario.id.split("sub_div_")[1]
                    if(final_id == botao_io.getAttribute("io_button")){
                        sub_div_dados_usuario.classList.toggle("d-none")
                    }
                }
            )
        })
    )
}

