class Venta
    def initialize(cliente, cantidad, sabor)
        @cliente = cliente
        @cantidad = cantidad
        @sabor = sabor
    end

    def cantidad
        @cantidad
    end

    def sabor
        @sabor
    end

    def self.
        dw
    end

    Caja.venta! @cantidad
end

class Pedido
    def initialize(cliente, cantidad, sabor)
        @cliente = cliente
        @cantidad = cantidad
        @sabor = sabor
    end

    def cantidad
        @cantidad
    end

    def sabor
        @sabor
    end

    @sabor.hacer_kilo!
end

Luisa = Pedido.new "Luisa", 2, JamonYQueso

module Caja
    @caja = 0

    def caja
        @caja
    end

    def self.venta! cantidad
        @caja += (cantidad * 400)
    end

    def self.caja=(caja_nueva)
        @caja = caja_nueva
    end
end

module Cajas
    @cajas = []

    def self.buenas_cajas
        @cajas.select { |caja| caja>2500 }
    end

    def self.caja_buena_al_azar
        @cajas.find { |caja| caja>2500 }
    end

    def self.todas_buenas?
        @cajas.all? { |caja| caja>2500 }
    end

    def self.por_lo_menos_una_buena?
        @cajas.any? { |caja| caja>2500 }
    end

    def self.cuantas_buenas?
        @cajas.count { |caja| caja>2500 }
    end

    def self.suma_de_todas_las_cajas
        @cajas.sum { |cajaa| cajaa.caja }
    end
end

class Producto
    def initialize
    @stock = 0

    def self.agregar! cantidad
        @stock += cantidad
    end

    def self.gastar! cantidad
        @stock -= cantidad
    end

    def stock
        @stock
    end
end

Harina = Producto.new
Huevos = Producto.new
Jamon = Producto.new
Queso = Producto.new
Ricota = Producto.new
Nuez = Producto.new
Espinaca = Producto.new
Calabaza = Producto.new
Roquefort = Producto.new
Tomate = Producto.new
Albahaca = Producto.new
Pollo = Producto.new
Choclo = Producto.new


module Sabores 
    @sabores = {JamonYQueso, RicotaConNuez, Verdura, CalabazaYMuzza, TomateYAlbahaca, Roquefort, PolloYJamon, Humita}

    def self.stock!
        @sabores.map { |sabor| sabor.stock }
    end

    def self.hacer_un_kilo_de_todo!
        @sabores.each { |sabor| sabor.hacer_kilo! }
    end

    def self.hacer_un_kilo_de_las_que_quede_mucho!
        @sabores.select { |sabor| sabor.stock.first>5 && sabor.stock.last>5 }
    end
end

class Sabor
    def initialize(sabor1, cantidad1, sabor2, cantidad2)
    @stock = [sabor1.stock, sabor2.stock]
    
    def self.hacer_kilo!
        sabor1.gastar! cantidad1
        sabor2.gastar! cantidad2
    end

    def self.queda?
        sabor1.stock>cantidad1 && sabor2.stock>cantidad2
    end

    def self.stock
        @stock
    end
end

JamonYQueso = Sabor.new Jamon, 0.3, Queso, 0.2
RicotaConNuez = Sabor.new Ricota, 0.5, Nuez, 0.1
CalabazaYMuzza = Sabor.new Calabaza, 0, Queso, 0
TomateYAlbahaca = Sabor.new Tomate, 0, Albahaca, 0
PolloYJamon = Sabor.new Pollo, 0, Jamon, 0
Humita = Sabor.new Choclo, 0, Queso, 0
Verdura = Sabor.new Espinaca, 0
Roque = Sabor.new Roquefort, 0