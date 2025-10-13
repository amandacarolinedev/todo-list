/*
Lista de tarefas
        [x] Saber quando o botão foi clicado
        [x] Pegar o texto dentro do Input
        [x] Colocar esse texto na tela
        [x] Deletar a tarefa da tela quando clicar no botão
*/

function adicionarTarefa() {
    let valorDoInput = document.querySelector('input').value

    let li = document.createElement('li')
    li.innerHTML = valorDoInput + "<span onclick='deletarTarefa(this)'>❌</span>"

    document.querySelector('ul').appendChild(li)

    document.querySelector('input').value
}

function deletarTarefa(li) {
    li.parentElement.remove()

}


   

