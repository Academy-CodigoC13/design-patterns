// Interfaz común para todos los productos (Transporte)
interface Transporte {
  entrega(): void;
}

// Clase concreta de producto (Camión)
class Camion implements Transporte {
  entrega(): void {
    console.log("Entrega por tierra");
  }
}

// Clase concreta de producto (Barco)
class Barco implements Transporte {
  entrega(): void {
    console.log("Entrega por mar");
  }
}

// Clase creadora abstracta
abstract class Logistica {
  // Método fábrica abstracto que debe ser implementado por las subclases
  abstract crearTransporte(): Transporte;

  // Método cliente que utiliza el producto creado por el método fábrica
  planificarEntrega(): void {
    const transporte = this.crearTransporte();
    console.log("Planificando entrega...");
    transporte.entrega();
  }
}

// Clase creadora concreta para logística terrestre
class LogisticaTerrestre extends Logistica {
  // Implementación del método fábrica
  crearTransporte(): Transporte {
    return new Camion();
  }
}

// Clase creadora concreta para logística marítima
class LogisticaMaritima extends Logistica {
  // Implementación del método fábrica
  crearTransporte(): Transporte {
    return new Barco();
  }
}

// Ejemplo de uso
const logisticaTerrestre = new LogisticaTerrestre();
logisticaTerrestre.planificarEntrega();

const logisticaMaritima = new LogisticaMaritima();
logisticaMaritima.planificarEntrega();
