window.addEventListener("load", displayWorkshops());

async function addEquipamento(e) {
    const token = sessionStorage.getItem("token"); //PEGA O TOKEM DO LOCAL STORAGE E JOGA NO HEADERS PARA VERIFICACAO
    const headers = {
        "Content-Type": "application/json",
        Authorization: token,
    };
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:8000/estoque", {
            method: "POST",
            headers,
            body: JSON.stringify({
                equipamento: e.target.equipamento.value,
                marca: e.target.marca.value,
                modelo: e.target.modelo.value,
                quantidade: e.target.quantidade.value,
                dataEntrada: e.target.dataEntrada.value,
                localizacao: e.target.localizacao.value,
                descricao: e.target.descricao.value,
            }),
        });
        const dados = await response.json();
        console.log(dados);
        window.alert("Equipamento Cadastrado Com Sucesso!");
        window.location.href = "../index.html";
    } catch (erro) {
        console.log(erro);
    }
}
async function displayWorkshops() {
    const table = document.getElementById("displayEquipamentos");
    table.innerHTML = "";
    const token = sessionStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        Authorization: token,
    };
    let dadoBruto = await fetch("http://localhost:8000/estoque", { headers });
    let workshops = await dadoBruto.json();

    workshops.forEach(async(workshop) => {
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${workshop.equipamento}</td>
            <td>${workshop.marca}</td>
            <td>${workshop.modelo}</td>
            <td>${workshop.quantidade}</td>
            <td>${workshop.dataEntrada}</td>
            <td>${workshop.localizacao}</td> 
            <td>${workshop.descricao}</td>
            <td>
            <a class="btn btn-primary" href="html/attEstoque.html?id=${workshop.id}">Editar →</a>
            <br>
            <br>
            <button onclick="deleteEquipamento(${workshop.id})">
            <img src="../img/botao.jpg" alt="Excluir" width="30" height="30">
        </button>
            </td>
        `;
    });
}

async function deleteEquipamento(index) {
    const token = sessionStorage.getItem("token"); //PEGA O TOKEM DO LOCAL STORAGE E JOGA NO HEADERS PARA VERIFICACAO
    const headers = {
        "Content-Type": "application/json",
        Authorization: token,
    };

    const response = await fetch(`http://localhost:8000/estoque/${index}`, {
        method: "DELETE",
        headers,
    });

    displayWorkshops();
}