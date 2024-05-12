window.onload = async function getEquipamento() {
    const token = sessionStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        Authorization: token,
    };

    try {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");
        const dadosBrutos = await fetch(
            `http://localhost:8000/estoque/${id}`, { headers }
        );
        const equipamento = await dadosBrutos.json();

        document.getElementById("idEquipamento").value = equipamento.id;
        document.getElementById("equipamento").value = equipamento.equipamento;
        document.getElementById("marca").value = equipamento.marca;
        document.getElementById("modelo").value = equipamento.modelo;
        document.getElementById("dataEntrada").value = equipamento.dataEntrada;
        document.getElementById("localizacao").value = equipamento.localizacao;
        document.getElementById("descricao").value = equipamento.descricao;
    } catch (error) {
        console.log(error);
    }
};

async function putEquipamento(e) {
    const token = sessionStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        Authorization: token,
    };
    e.preventDefault();
    const equipamentoid = document.getElementById("idEquipamento").value;

    try {
        const body = {};

        if (e.target.equipamento.value) {
            body.equipamento = e.target.equipamento.value;
        }
        if (e.target.marca.value) {
            body.marca = e.target.marca.value;
        }
        if (e.target.modelo.value) {
            body.modelo = e.target.modelo.value;
        }
        if (e.target.dataEntrada.value) {
            body.dataEntrada = e.target.dataEntrada.value;
        }
        if (e.target.localizacao.value) {
            body.localizacao = e.target.localizacao.value;
        }
        if (e.target.descricao.value) {
            body.descricao = e.target.descricao.value;
        }

        const response = await fetch(
            `http://localhost:8000/estoquePut/${equipamentoid}`, {
                method: "PUT",
                headers,
                body: JSON.stringify(body),
            }
        );

        const dados = await response.json();
        console.log(dados);

        alert = "Equipamento atualizado com sucesso";
        window.location.href = "../html/crudCliente.html";
    } catch (erro) {
        console.log(erro);
    }
}