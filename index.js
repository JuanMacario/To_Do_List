const data = [
    { id: 1, texto: "Among us", estado: true },
    { id: 2, texto: "Among us 2", estado: true }
]

let valorInput = document.querySelector("#inputTarea")
let boton = document.querySelector("#btnTarea")
let tareas = document.querySelector("#tareas")


if (data.length > 0) {
    for (let i = 0; data.length - 1; i++) {
        //Dibujando div
        let div = document.createElement('div')
        div.className = "cajaTarea"
        //d-flex w-100 justify-content-between align-items-center
        //dibujando Creckbox

        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('id', data[i].id)
        checkbox.classList = "me-2"
        //Dibujando el lablel
        let lebel = document.createElement('label')
        //Pendiente algo ... insertar el texto a label

        checkbox.addEventListener('click', (event) => {
            console.log(event.target.id)
            console.log(data)
            let tareaABuscar = data.find(item => item.id == event.target.id)
            tareaABuscar.estado = !tareaABuscar.estado
            lebel.classList.toggle('text-decoration-line-through')
            lebel.classList.toggle("text-secondary")
        })

        //Dibujar el sub
        let sub = document.createElement('button')
        sub.classList = "btn boton btn-danger"
        sub.textContent = 'X'

        sub.addEventListener('click', (event) => {
            div.remove()
        })

        if (data[i].estado) {
            checkbox.checked = true
            lebel.classList.toggle('text-decoration-line-through')
            lebel.classList.toggle("text-secondary")
        }


        lebel.textContent = data[i].texto
        div.append(checkbox)
        div.append(lebel)
        div.append(sub)
        valorInput.value = ''
        tareas.append(div)
    }
    console.log(data)
}

//Agregar elementos al Div

boton.addEventListener('click', (event) => {
    //Dibujando div
    let div = document.createElement('div')
    div.className = "cajaTarea"
    //d-flex w-100 justify-content-between align-items-center
    //dibujando Creckbox

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList = "me-2"
    //Dibujando el lablel
    let lebel = document.createElement('label')
    //Pendiente algo ... insertar el texto a label

    checkbox.addEventListener('click', (event) => {
        lebel.classList.toggle('text-decoration-line-through')
        lebel.classList.toggle("text-secondary")
    })

    //Dibujar el sub
    let sub = document.createElement('button')
    sub.classList = "btn boton btn-danger"
    sub.textContent = 'X'

    sub.addEventListener('click', (event) => {
        div.remove()
    })

    lebel.textContent = valorInput.value
    div.append(checkbox)
    div.append(lebel)
    div.append(sub)
    valorInput.value = ''
    tareas.append(div)
})

