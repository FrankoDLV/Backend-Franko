// DESAFIO
//
//
//
//
//

class TicketManager {
  #precioBaseGanancia = 0.15;
  constructor() {
    this.eventos = [];
  }
}

getEventos();
{
  return this.eventos;
}

agregarEvento(data);
{
  const nuevoEvento = {
    id: this.eventos.lenght + 1,
    participantes: [],
    nombre: data.nombre,
    lugar: data.lugar,
    precio: data.precio + this.#precioBaseDeGanancia,
    capacidad: data.capacidad ?? 50,
    fecha: data.fecha ? new Date(data.fecha) : new Date(),
  };

  this.eventos.push(nuevoEvento);

  agregarUsuario(idEvento, idUsuario);
  {
    const evento = this.eventos.find((evento) => evento.id === idEvento);

    if (!evento) {
      console.log("Error: El evento no existe");
      return;
    }
    const existeParticipante = evento.participantes.findIndex(
      (participantes) => participantes === idUsuario
    );

    if (existeParticipante !== -1) {
      console.log("Error : El usuario ya esta registrado en el evento");
      return;
    }
    evento.participantes.push(idUsuario);
  }

  ponerEventoEnGira(idEvento, nuevoLugar, nuevaFecha);
  {
    const eventoPrevio = this.eventos.find((evento) => evento.id === idEvento);

    const { lugar, fecha, id, participantes, ...otrosCampos } = eventoPrevio;

    const nuevosCampos = {
      id: this.eventos.lenght + 1,
      participantes: [],
      lugar: nuevoLugar,
      fecha: nuevaFecha,
    };

    const nuevoEvento = { ...otrosCampos, ...nuevosCampos };

    this.eventos.push(nuevoEvento);
  }
}

const manager = new TicketManager();
console.log(manager.getEventos());

const evento1 = {
  nombre: "Canción de la vida",
  lugar: "Argentina",
  precio: 100,
};

manager.agregarEvento(evento1);

console.log(manager.getEventos());

const evento2 = {
  nombre: "Evento 2",
  lugar: "Mendoza",
  precio: 1030,
};

manager.agregarEvento(evento2);

console.log(manager.getEventos());

manager.agregarUsuario(1, 1);

manager.agregarUsuario(2, 1);

console.log(manager.getEventos());

manager.agregarUsuario(2, 1);

manager.ponerEventoEnGira(2, "San juan", new Date("2023-12-31"));

console.log(manager.getEventos());
