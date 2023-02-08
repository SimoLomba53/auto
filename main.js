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

const animals = [
    { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
    { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
    { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
]

const mammiferi=animals.filter((animals) => {
    return animals.classe =="mammiferi";
}
)

console.log(mammiferi);

//STESSA FORMA DI SOPRA MA SENZA RETURN SCRITTA IN MODO DIVERSO
const uccelli=animals.filter((animals)=>animals.classe == "uccelli");
console.log(uccelli);

const felidi=animals.filter((animals)=>{
    return animals.famiglia=="felidi"
}

)

console.log(felidi);