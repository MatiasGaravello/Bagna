const products = [
    {
        idProducto: '100',
        nombre: "Mini-pocket",
        precio: 2000,
        hasTalle: false,
        pathImage1: "../images/minipocket.png",
        descripcion: "",
        categoria: "billeteras"
    },
    {
        idProducto: '101',
        nombre: "Cartera Total Black",
        precio: 4200,
        hasTalle: true,
        pathImage1: "../images/cartera_total_black.png",
        descripcion: "",
        categoria: "carteras"
    },
    {
        idProducto: '102',
        nombre: "Bandolera negra con cadena",
        precio: 3000,
        hasTalle: true,
        pathImage1: "../images/bandolera-negra.png",
        descripcion: "",
        categoria: "bandoleras"
    },
    {
        idProducto: '103',
        nombre: "Bolso Blanco",
        precio: 5000,
        hasTalle: true,
        pathImage1: "../images/bolso-mendiano-blanco.png",
        descripcion: "",
        categoria: "bolsosYmaletines"
    },
    {
        idProducto: '104',
        nombre: "Bolso de viaje XXL",
        precio: 5200,
        hasTalle: true,
        pathImage1: "../images/bolso-de-viaje-1.png",
        // "../images/bolso-de-viaje-2.png"
        descripcion: "En esta ocasión combinamos Charol Negro con Nude Mate y le dimos brillo con nuestro Glitter multicolor en las correas. Que les parece?",
        categoria: "bolsosYmaletines"
    },
    {
        idProducto: '105',
        nombre: "Mochila beige",
        precio: 4500,
        hasTalle: true,
        pathImage1: "../images/mochila_beige.png",
        descripcion: "",
        categoria: "mochilas"
    },
    {
        idProducto: '106',
        nombre: "Mochila Croco Negro",
        precio: 4700,
        hasTalle: true,
        pathImage1: "../images/mochila-croco-negro.png",
        descripcion: "",
        categoria: "mochilas"
    },
    {
        idProducto: '107',
        nombre: "Riñonera Negra",
        precio: 3000,
        hasTalle: false,
        pathImage1: "../images/riñonera_negra.png",
        descripcion: "",
        categoria: "riñoneras"
    },
    {
        idProducto: '108',
        nombre: "Portanotebook con manija",
        precio: 3400,
        hasTalle: true,
        pathImage1: "../images/portanotebook_con_manija.png",
        descripcion: "",
        categoria: "portanotebooks"
    },
    {
        idProducto: '109',
        nombre: "Mochila Negra",
        precio: 4000,
        hasTalle: true,
        pathImage1: "../images/mochi-small-negra.png",
        descripcion: "",
        categoria: "mochilas"
    },
    {
        idProducto: '110',
        nombre: "Mochila Silver Metalizado",
        precio: 4500,
        hasTalle: true,
        pathImage1: "../images/mochi_metalizada.png",
        descripcion: "",
        categoria: "mochilas"
    },
    {
        idProducto: '111',
        nombre: "Mini Bag Riñonera 2 en 1",
        precio: 4000,
        hasTalle: true,
        pathImage1:
            "../images/imagen-producto-1.png",
        // "../images/imagen-producto-2.png",
        // "../images/imagen-producto-3.png",
        // "../images/imagen-producto-4.png"
        descripcion: "Si así es, cambiándole la posición de la correa la podes usar como Riñonera o solo como Bandolera. Vos elegí la opción que más te guste según tu outfit.",
        categoria: "riñoneras"
    },
    {
        idProducto: '112',
        nombre: "Clutch Negro",
        precio: 3000,
        hasTalle: false,
        pathImage1: "../images/clutch.png",
        descripcion: "CLUTCH/SOBRE DE FIESTA✨✨✨. Lo hacemos del color que necesites para tu outfit🔥. Muy cómodo para esa fiesta que tenés, podes guardar el celular, billetera, llave su makeup 🔥",
        categoria: "clutches"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}


export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.idProducto === id))
        }, 2000)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === category))
        }, 3000)
    })
}