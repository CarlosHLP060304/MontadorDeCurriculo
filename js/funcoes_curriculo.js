function mudaCurriculo(preview,dados_usuario) {
    preview.innerHTML = retornaCurriculo(dados_usuario)
}


function retornaCurriculo(dados_usuario){
    return  `
    <div>
    <h1>${dados_usuario.nome}</h1>
    <h2>${dados_usuario.area_desejada}</h2>
    <div class="preview_divisoria"></div>
    </div>
    <div class="mt-2">
    <h3>Perfil pessoal</h3>
    <p>${dados_usuario.descricao_pessoal}</p>
    </div>
    <div class="d-flex">
    <div>
        <div>
            <h3>Contato</h3>
            <ul>
                ${dados_usuario.contatos.map(
                   contato =>  `<li>${contato.tipo_contato} : ${contato.dado_contato}</li>` 
                ).join("")}
            </ul>
        </div>
        <div>
            <h3>Idiomas</h3>
            <ul id="lista_idiomas">
                ${dados_usuario.idiomas.map(
                    idioma => `<li> ${idioma.nome} - ${idioma.nivel}</li>`
                ).join("")}
                
            </ul>
        </div>
        <div>
            <h3>Competências</h3>
            <ul id="lista_competencias">
                ${dados_usuario.competencias.map(
                    competencia =>{
                        return `<li>${competencia}</li>`
                    }
                ).join("")}
            </ul>
        </div>
    
    </div>
    <div>
        <div>
            <ul class="list-unstyled px-3">
                <h3>Projetos</h3>
                ${
                    dados_usuario.projetos.map(
                        projeto=>{
                             return `
                            <li>
                            <h4>${projeto.nome}</h4>
                            <p>${projeto.descricao}</p>
                            </li>
                        
                        `
                    }
                        
                    ).join("")
                }
                
            </ul>
        </div>
    
        <div>
            <ul id = "lista_formacoes">
                <h3>Formação Acadêmica</h3>
                ${dados_usuario.formacao.map(
                    formacao=>`
                    <li>
                    <h4> ${formacao.nomeInstituicao}</h4>
                    <p>${formacao.nomeCurso}</p>
                    <p>Período: ${formacao.data_inicio} até ${formacao.data_termino}</p>
                </li>`
                )}
               
            </ul>
            
        </div>
    </div>
    </div>
    `
}

function armazenaNoLocalStorage(dados_usuario) {
    let curriculoString = retornaCurriculo(dados_usuario)
    localStorage.setItem("curriculo",curriculoString)
}


function adicionaElementosCurriculo(btns_adicionar,sub_divs_dados_usuario,dados_usuario){
    btns_adicionar.forEach(
        btn_adicionar => btn_adicionar.addEventListener("click",()=>{
            sub_divs_dados_usuario.forEach(
                sub_div_dados_usuario => { 
                    final_div_id = sub_div_dados_usuario.id.split("sub_div_")[1]
                    final_btn_id = btn_adicionar.id.split("btn_adicionar_")[1]
                    if(final_div_id === final_btn_id){
                        switch (final_div_id) {
                            case "idiomas":
                                adicionaIdiomaCurriculo(preview,dados_usuario)  
                                break;
                            case "formacao":
                                adicionaFormacaoCurriculo(preview,dados_usuario)
                                break;
                            case "competencias":
                                adicionaCompetenciaCurriculo(preview,dados_usuario)
                                break;
                            case "projetos":
                                adicionaProjetoCurriculo(preview,dados_usuario)
                                break
                            case "contato":
                                adicionaContatoCurriculo(preview,dados_usuario)
                                break
                            default:
                                break;
                        }

                        sub_div_dados_usuario.querySelectorAll("input").forEach(
                            input=>input.value = ""
                        )
                        
                    }
                }
            )
        })
    )
}

function adicionaContatoCurriculo(preview,dados_usuario){
    const tipo_contato = document.getElementById("tipo_contato").value
    const dado_contato =  document.querySelector("#dado_contato").value
    dados_usuario.contatos.push({
        "tipo_contato":tipo_contato,
        "dado_contato":dado_contato
    })
    mudaCurriculo(preview,dados_usuario)
}

function adicionaIdiomaCurriculo(preview,dados_usuario) {
    const nome_idioma = document.getElementById("nome_idioma").value
    const nivel =  document.querySelector("#nivel").value
    dados_usuario.idiomas.push({
        "nome":nome_idioma,
        "nivel":nivel
    })
    mudaCurriculo(preview,dados_usuario)
}

function adicionaFormacaoCurriculo(preview,dados_usuario) {
    const nome_instituicao = document.getElementById("nome_instituicao").value
    const nome_curso =  document.querySelector("#nome_curso").value
    const data_inicio = document.getElementById("data_inicio").value
    const data_termino = document.getElementById("data_termino").value
    dados_usuario.formacao.push({
        "nomeInstituicao":nome_instituicao,
        "nomeCurso": nome_curso,
        "data_inicio": data_inicio,
        "data_termino": data_termino
    })
    mudaCurriculo(preview,dados_usuario) 
}

function adicionaCompetenciaCurriculo(preview,dados_usuario) {
    const competencia = document.getElementById("competencia").value
    dados_usuario.competencias.push(competencia)
    mudaCurriculo(preview,dados_usuario)
}

function adicionaProjetoCurriculo(preview,dados_usuario) {
    const nome = document.getElementById("nome_projeto").value
    const descricao = document.getElementById("descricao_projeto").value
    dados_usuario.projetos.push({
        "nome": nome,
        "descricao": descricao
    })
    mudaCurriculo(preview,dados_usuario)
}

function apagarDadosDasSessoesCurriculo(btns_remover,sub_divs_dados_usuario,dados_usuario) {
    btns_remover.forEach(
        btn_remover => btn_remover.addEventListener("click",()=>{
            sub_divs_dados_usuario.forEach(
                sub_div_dados_usuario => { 
                    final_div_id = sub_div_dados_usuario.id.split("sub_div_")[1]
                    final_btn_id = btn_remover.id.split("btn_remover_")[1]
                    console.log(final_div_id)
                    console.log(final_btn_id)
                    if(final_div_id === final_btn_id){
                        switch (final_div_id) {
                            case "idiomas":
                                removerItensJson(preview,dados_usuario,"idiomas")  
                                break;
                            case "formacao":
                                removerItensJson(preview,dados_usuario,"formacao")
                                break;
                            case "competencias":
                                removerItensJson(preview,dados_usuario,"competencias")
                                break;
                            case "projetos":
                                removerItensJson(preview,dados_usuario,"projetos")
                                break;
                            case "contato":
                                removerItensJson(preview,dados_usuario,"contatos")
                                break;
                            default:
                                break;
                        }
                        
                    }
                }
            )
        })
    )
}

function mudaItensUnicosCurriculo(divsDadosUsuario) {
    divsDadosUsuario.forEach(
        divDadosUsuario =>{
            divDadosUsuario.querySelectorAll("input").forEach(
                input =>
                    input.addEventListener("keyup", (e) => {
    
                        dados_usuario_json[input.id] = input.value
                        console.log(input.id)
                        mudaCurriculo(preview, dados_usuario_json)
                    }
    
                    )
            )
                
            divDadosUsuario.querySelectorAll("textarea").forEach(
                textarea =>
                    textarea.addEventListener("keyup", (e) => {
                        dados_usuario_json[textarea.id] = textarea.value
                        mudaCurriculo(preview, dados_usuario_json)
                    }
            
                    )
            )
        
        }
    
    )
}

function removerItensJson(preview,dados_usuario,sessao){
    dados_usuario[sessao] = []
    mudaCurriculo(preview,dados_usuario)
}


function baixarCurriculo(dados_usuario){
    document.getElementById("baixar_curriculo").addEventListener(
        "click",()=>{
            armazenaNoLocalStorage(dados_usuario)
        }
    )
}
