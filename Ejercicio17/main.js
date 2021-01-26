class  Factura  {
    constructor ( cliente ,  elementos )  {
        this.cliente  =  cliente ;
        this.elementos  =  elementos ;
        this.informacion  =  {
            baseImponible : 0,
            iva : 21,
            total : 0,
            formaPago: "efectivo"
        }
    
        this.calculaTotal  =  function() {
            for  ( var  i  =  0 ;  i  < this.elementos.length ;  i ++ )  {
                this.informacion.baseImponible  +=  this.elementos[i].cantidad * this.elementos[i].precio;
            }
            this.informacion.total  =  this.informacion.baseImponible * (1+(this.informacion.iva/100));
        }
    
        this.mostrarTotal  =  function  ( )  {
            this.calculaTotal();
            alert("El total de los productos es"  +  this.informacion.total  +  "euros" ) ;
        } 
    }
}

class  Cliente  {
    constructor ( nombre ,  direccion ,  telefono ,  nif )  {
      this.nombre  =  nombre;
      this.direccion  =  direccion;
      this.telefono  =  telefono;
      this.nif  =  nif;
    }
}

class  Elemento  {
    constructor ( descripcion ,  cantidad ,  precio )  {
      this.descripcion  =  descripcion ;
      this.cantidad  =  cantidad ;
      this.precio  =  precio ;
    }
}

const primerCliente = new Cliente("Pepa", "Madrid", "654321123", "12345670");
const arrayElementos = [new Elemento("Objeto 1", 1, 5),new Elemento("Objeto 2", 3, 4)];
const facturaDelTotal = new Factura(primerCliente, arrayElementos);
facturaDelTotal.mostrarTotal();
