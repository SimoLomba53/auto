const auto=[
    {
      marca: "Audi",
      modello:"tt",
      alimentazione:"benzina",
    },
    {
      marca: "RangeRover",
      modello: "evoque",
      alimentazione: "benzina",
    },
    {
        marca: "Ferrari",
        modello: "California",
        alimentazione: "Gpl",
    },
    {
        marca: "Porsche",
        modello:"Carrera",
        alimentazione: "diesel",
    },
    {
        marca:"Lancia",
        modello:"Stratos",
        alimentazione: "benzina",
    },
]

const benz= auto.filter((auto) => {
    return auto.alimentazione=="benzina";
        
    }
)

const td = auto.filter((auto) => {
     return auto.alimentazione == "diesel"; 
        
    }


)

const rest = auto.filter((auto) => {
    return auto.alimentazione != "benzina" && auto.alimentazione != "diesel"; 
       
    }

)

console.log(benz);
console.log(td);
console.log(rest);