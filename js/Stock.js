let stock = [ 
    {Ingrediente: "Harina", Cantidad: 0}, {Ingrediente: "Huevos", Cantidad: 0}, {Ingrediente: "Sal", Cantidad: 0}, 
    {Ingrediente: "Aceite", Cantidad: 0}, {Ingrediente: "Vinagre", Cantidad: 0}, 
    {Rellenos: [{Ingrediente: "Ricota", Cantidad: 0}, {Ingrediente: "Jamon", Cantidad: 0}, {Ingrediente: "Muzzarela",Cantidad: 0}, {Ingrediente: "Cebolla", Cantidad: 0}, 
    {Ingrediente: "Calabaza", Cantidad: 0}, {Ingrediente: "Choclo", Cantidad: 0}, {Ingrediente: "Nuez", Cantidad: 0}, {Ingrediente: "Tomate", Cantidad: 0}, {Ingrediente: "Albahaca", Cantidad: 0},
    {Ingrediente: "Roquefort", Cantidad: 0}, {Ingrediente: "Pollo", Cantidad: 0}, {Ingrediente: "Espinaca", Cantidad: 0}]}
    ]




function agregar() {
    const form = document.getElementById("formAgregar")

    let transactionFormData = new FormData(form)

    stock[0].Cantidad += transactionFormData.get("Cantidad1")
    stock[1].Cantidad += transactionFormData.get("Cantidad2")
    stock[5].Rellenos[1].Cantidad += transactionFormData.get("Cantidad3")
    stock[5].Rellenos[2].Cantidad += transactionFormData.get("Cantidad4")
    stock[5].Rellenos[0].Cantidad += transactionFormData.get("Cantidad5")
    stock[5].Rellenos[6].Cantidad += transactionFormData.get("Cantidad6")
    stock[5].Rellenos[11].Cantidad += transactionFormData.get("Cantidad7")
    stock[5].Rellenos[4].Cantidad += transactionFormData.get("Cantidad8")
    stock[5].Rellenos[9].Cantidad += transactionFormData.get("Cantidad9")
    stock[5].Rellenos[7].Cantidad += transactionFormData.get("Cantidad10")
    stock[5].Rellenos[8].Cantidad += transactionFormData.get("Cantidad11")
    stock[5].Rellenos[10].Cantidad += transactionFormData.get("Cantidad12")
    stock[5].Rellenos[5].Cantidad += transactionFormData.get("Cantidad13")

    alert("Agregado con exito")
}

function actualizar() {
    document.getElementById("Harina").innerText = stock[0].Cantidad
    document.getElementById("Huevos").innerText = stock[1].Cantidad
    document.getElementById("Jamon").innerText = stock[5].Rellenos[1].Cantidad
    document.getElementById("Queso").innerText = stock[5].Rellenos[2].Cantidad
    document.getElementById("Ricota").innerText = stock[5].Rellenos[0].Cantidad
    document.getElementById("Nuez").innerText = stock[5].Rellenos[6].Cantidad
    document.getElementById("Espinaca").innerText = stock[5].Rellenos[11].Cantidad
    document.getElementById("Calabaza").innerText = stock[5].Rellenos[4].Cantidad
    document.getElementById("Roquefort").innerText = stock[5].Rellenos[9].Cantidad
    document.getElementById("Tomate").innerText = stock[5].Rellenos[7].Cantidad
    document.getElementById("Albahaca").innerText = stock[5].Rellenos[8].Cantidad
    document.getElementById("Pollo").innerText = stock[5].Rellenos[10].Cantidad
    document.getElementById("Choclo").innerText = stock[5].Rellenos[5].Cantidad
}