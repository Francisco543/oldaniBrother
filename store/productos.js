
const handleOnClick = () => {
    const carritoCompras = document.getElementById("compras")
    console.log(carritoCompras.style.visibility == "hidden")
    if(carritoCompras.style.visibility == "hidden"){
        carritoCompras.style.visibility = "visible"
    }else{
        carritoCompras.style.visibility = "hidden"
    }
}

const cartDiv = document.getElementById("compras")
cartDiv.innerHTML= localStorage.getItem("productos")
const precioDiv = document.getElementById("total")
precioDiv.innerHTML=`Total: ${localStorage.getItem("precioFinal")}`

const handleBuy = (numeroProducto) => {
    const cartDiv = document.getElementById("compras")

    switch (numeroProducto) {
        case 1:
            console.log("numero", numeroProducto)
            const html = `
            <div class= "productCart">
            <img src="../imagenes/zeus-fondo-blanco.jpg" alt="" class="imagen_card"></img>
            <div class="productCartColumn">
            <p class= "productCartTitle">Sillon Negro</p>
            <p class="precio">$2500</p>
            </div>
            </div>
            `
            if(localStorage.getItem("productos")){
                const currentProductos = localStorage.getItem("productos")
                localStorage.setItem("productos",`${currentProductos}${html}`)
                cartDiv.innerHTML= localStorage.getItem("productos")
            }else{
                localStorage.setItem("productos",`${html}`)
                cartDiv.innerHTML= localStorage.getItem("productos")
            }

            if(localStorage.getItem("precioFinal")){
                const currentPrecio = localStorage.getItem("precioFinal")
                localStorage.setItem("precioFinal",`${parseInt(currentPrecio) + 2500}`)
                console.log(localStorage.getItem("precioFinal"))   
                const precioDiv = document.getElementById("total") 
                precioDiv.innerHTML=`Total: ${parseInt(currentPrecio) + 2500}`
            }else{
                localStorage.setItem("precioFinal",`2500`)
                console.log(localStorage.getItem("precioFinal"))
                const precioDiv = document.getElementById("total") 
                precioDiv.innerHTML=`Total: 2500`
            }
            
            break;
        case 2:
            console.log("numero", numeroProducto)
            const html2 = `
            <div class= "productCart">
            <img src="../imagenes/producto2.jpg" alt="" class="imagen_card">
            <div class="productCartColumn">
            <p class= "productCartTitle">Sillon Blanco</p>
            <p class="precio">$3600</p>
            </div>
            </div>
            `
            if(localStorage.getItem("productos")){
                const currentProductos = localStorage.getItem("productos")
                localStorage.setItem("productos",`${currentProductos}${html2}`)
                cartDiv.innerHTML= localStorage.getItem("productos")
            }else{
                localStorage.setItem("productos",`${html2}`)
                cartDiv.innerHTML= localStorage.getItem("productos")
            }

            if(localStorage.getItem("precioFinal")){
                const currentPrecio = localStorage.getItem("precioFinal")
                localStorage.setItem("precioFinal",`${parseInt(currentPrecio) + 3600}`)
                const precioDiv = document.getElementById("total") 
                precioDiv.innerHTML=`Total: ${parseInt(currentPrecio) + 3600}`
            }else{
                localStorage.setItem("precioFinal",`3600`)
                const precioDiv = document.getElementById("total") 
                precioDiv.innerHTML=`Total: 3600`
            }
            
           
            break;
        case 3:
            console.log("numero", numeroProducto)
            const html3 = `
            <div class= "productCart">
            <img src="../imagenes/producto3.jpg" alt="" class="imagen_card">
            <div class="productCartColumn">
            <p class= "productCartTitle">Sillon Gris</p>
            <p class="precio">$5850</p>
            </div>
            </div>
            `
            if(localStorage.getItem("productos")){
                const currentProductos = localStorage.getItem("productos")
                localStorage.setItem("productos",`${currentProductos}${html3}`)
                cartDiv.innerHTML= localStorage.getItem("productos")
            }else{
                localStorage.setItem("productos",`${html3}`)
                cartDiv.innerHTML= localStorage.getItem("productos")
            }

            if(localStorage.getItem("precioFinal")){
                const currentPrecio = localStorage.getItem("precioFinal")
                localStorage.setItem("precioFinal",`${parseInt(currentPrecio) + 5850}`)
                const precioDiv = document.getElementById("total") 
                precioDiv.innerHTML=`Total: ${parseInt(currentPrecio) + 5850}`
            }else{
                localStorage.setItem("precioFinal",`5850`)
                const precioDiv = document.getElementById("total") 
                precioDiv.innerHTML=`Total: 5850`
            }
            
        
            break;
        case 4:
            console.log("numero", numeroProducto)
            const html4 = `
            <div class= "productCart">
            <img src="../imagenes/producto4.jpg" alt="" class="imagen_card">
            <div class="productCartColumn">
            <p class= "productCartTitle">Sillon Azul</p>
            <p class="precio">$7550</p>
            </div>
            </div>
            `
            if(localStorage.getItem("productos")){
                const currentProductos = localStorage.getItem("productos")
                localStorage.setItem("productos",`${currentProductos}${html4}`)
                cartDiv.innerHTML= localStorage.getItem("productos")
            }else{
                localStorage.setItem("productos",`${html4}`)
                cartDiv.innerHTML= localStorage.getItem("productos")
            }

            if(localStorage.getItem("precioFinal")){
                const currentPrecio = localStorage.getItem("precioFinal")
                localStorage.setItem("precioFinal",`${parseInt(currentPrecio) + 7550}`)
                const precioDiv = document.getElementById("total") 
                precioDiv.innerHTML=`Total: ${parseInt(currentPrecio) + 7550}`
            }else{
                localStorage.setItem("precioFinal",`7550`)
                const precioDiv = document.getElementById("total") 
                precioDiv.innerHTML=`Total: 7550`
            }
            
 
            break;    
    
        default:
            break;
    }
}

