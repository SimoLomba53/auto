const auto=[
    {
      marca: Audi,
      modello:tt,
      alimentazione:benzina,
    },
    {
      marca: RangeRover,
      modello: evoque,
      alimentazione: benzina,
    },
    {
        marca: Ferrari,
        modello: California,
        alimentazione: Gpl,
    },
    {
        marca: Porsche,
        modello:Carrera,
        alimentazione: diesel,
    },
    {
        marca:Lancia,
        modello:Stratos,
        alimentazione: benzina,
    },
]

const benz= auto.filter((auto) => {
    if (auto.alimentazione=benzina){
        console.log(auto);
    }
}

)

const td = auto.filter((auto) => {
    if (auto.alimentazione = diesel) {
        console.log(auto);
    }
}

)

const rest = auto.filter((auto) => {
    if (auto.alimentazione != benzina && auto.alimentazione != diesel) {
        console.log(auto);
    }
}
)

