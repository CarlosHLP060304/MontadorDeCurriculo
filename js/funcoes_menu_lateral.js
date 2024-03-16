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

function adicionarElementosParteMenuLateral(btns_adicionar,sub_divs_dados_usuario){
    btns_adicionar.forEach(
        btn_adicionar => btn_adicionar.addEventListener("click",()=>{
            sub_divs_dados_usuario.forEach(
                sub_div_dados_usuario => { 
                    final_div_id = sub_div_dados_usuario.id.split("sub_div_")[1]
                    final_btn_id = btn_adicionar.id.split("btn_adicionar_")[1]
                    if(final_div_id === final_btn_id){
                        sub_div_dados_usuario.querySelectorAll("input").forEach(
                            input=>input.value = ""
                        )
                    }
                }
            )
        })
    )
}
