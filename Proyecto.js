let fecha = [25, 3, 2022]

let cajaDeHoy = 0

let ganaciaDeHoy = 0

let inversionDeHoy = 0

let precio = 400

let ventasDeHoy = []

let pedidosCanceladosDeHoy = []

let pedidos = []

let cajas = []

let ganancias = []

let inversiones = []

let ventas = []

let pedidosCancelados = []

let stock = [ 
  {Ingrediente: "Harina", Cantidad: 0}, {Ingrediente: "Huevos", Cantidad: 0}, {Ingrediente: "Sal", Cantidad: 0}, 
  {Ingrediente: "Aceite", Cantidad: 0}, {Ingrediente: "Vinagre", Cantidad: 0}, 
  {Rellenos: [{Ingrediente: "Ricota", Cantidad: 0}, {Ingrediente: "Jamon", Cantidad: 0}, {Ingrediente: "Muzzarela",Cantidad: 0}, {Ingrediente: "Cebolla", Cantidad: 0}, 
  {Ingrediente: "Calabaza", Cantidad: 0}, {Ingrediente: "Choclo", Cantidad: 0}, {Ingrediente: "Nuez", Cantidad: 0}, {Ingrediente: "Tomate", Cantidad: 0}, {Ingrediente: "Albahaca", Cantidad: 0},
  {Ingrediente: "Roquefort", Cantidad: 0}, {Ingrediente: "Pollo", Cantidad: 0}, {Ingrediente: "Espinaca", Cantidad: 0}]}
]

let sabores = ["JamonYQueso", "CalabazaYMuzza", "RicotaConNuez", "TomateYAlbahaca", "Roquefort", "Espinaca", "PolloYJamon", "Humita"]

function agregarStock(producto, cantidad) {
  for(ingrediente of stock) {
    if (producto===ingrediente.Ingrediente) {
      ingrediente.Cantidad += cantidad
    }
  }
  for (relleno of stock[5].Rellenos){
    if (producto===relleno.Ingrediente) {
          relleno.Cantidad += cantidad
    }
  }
  return "Listo =)"
}


function entregado(cliente, cantidad, sabor) {
  for(pedid of pedidos) {
    if (cliente===pedid[0]) {
      let index = pedidos.indexOf(pedid)
      pedidos.splice(index, 1)
    }
  }
  cajaDeHoy += cantidad * precio
  ventasDeHoy.push({Cliente: cliente, Cantidad: cantidad, Sabor: sabor})
}

function pedido(clientee, cantidadd, saborr) {
  pedidos.push([clientee, cantidadd, saborr])
}


function hacerKilo(sabor) {
  stock[0].Cantidad -= 0.5
  stock[1].Cantidad -= 3
  
  if (sabor==="JamonYQueso") {
    stock[5].Rellenos[1].Cantidad -= 0.3
    stock[5].Rellenos[2].Cantidad -= 0.15
  } else if (sabor==="CalabazaYMuzza") {
    stock[5].Rellenos[4].Cantidad -= 0
    stock[5].Rellenos[2].Cantidad -= 0
  } else if (sabor==="RicotaConNuez") {
    stock[5].Rellenos[0].Cantidad -= 0
    stock[5].Rellenos[6].Cantidad -= 0
  } else if (sabor==="TomateYAlbahaca") {
    stock[5].Rellenos[7].Cantidad -= 0
    stock[5].Rellenos[8].Cantidad -= 0
  } else if (sabor==="Roquefort") {
    stock[5].Rellenos[9].Cantidad -= 0 
  } else if (sabor==="PolloYJamon") {
    stock[5].Rellenos[1].Cantidad -= 0
    stock[5].Rellenos[10].Cantidad -= 0
  } else if (sabor==="Humita") {
    stock[5].Rellenos[5].Cantidad -= 0
    stock[5].Rellenos[2].Cantidad -= 0
  } else if (sabor==="Espinaca") {
    stock[5].Rellenos[11].Cantidad -= 0
  }
}

function cerrarCaja() {
  let fechadh = fecha
  cajas.push({Caja: cajaDeHoy, Fecha: fechadh})
  cajaDeHoy = 0
  ventas.push({Fecha: fechadh, Ventas: ventasDeHoy})
  ventasDeHoy = []
}

function NuevoDia() {
  fecha[0]++
}

function cancelarPedido(cliente, cantidad, sabor) {
    pedidos.shift()
    pedidosCancelados.push([cliente, cantidad])
    return "Cancelado :("
}

pedido("Luisa", 2, "JamonYQueso")
pedido("TiaAli", 1, "RicotaConNuez")
pedido("dsa", 1, "dsa")
pedido("wdq", 2, "dwqd")
pedido("fewf", 5, "few")
pedido("dwqd", 7, "dwqdwq")
pedido("Marisa", 1, "PolloYJamon")
entregado("fewf", 5, "few")
entregado("Marisa", 1, "PolloYJamon")
entregado("Luisa", 2, "JamonYQueso")
entregado("dwqd", 7, "dwqdwq")
entregado("wdq", 2, "dwqd")
entregado("dsa", 1, "dsa")
entregado("TiaAli", 1, "RicotaConNuez")

cerrarCaja()
NuevoDia()

pedido("as", 1, "as")
entregado("as", 1, "as")

NuevoDia()

pedido("qw", 1, "qw")