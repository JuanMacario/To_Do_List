let data = []

if (JSON.parse(localStorage.getItem('data')).length > 0) {
    data = JSON.parse(localStorage.getItem('data'))
} else {
    localStorage.setItem('data', JSON.stringify([])) // Permite enviar la informacion
}

let valorInput = document.querySelector("#inputTarea")
let botonAgregar = document.querySelector("#btnTarea")
let tareas = document.querySelector("#tareas")

//localStorage.getItem([]) //Permite traer la informacion

const getNextId = () => {
    return data.length > 0 ? data[data.length - 1].id + 1 : 1
}

const dibujarElementos = (info = null, i = null) => {
    //Dibujando div
    let div = document.createElement('div')
    div.className = "cajaTarea"
    //Dobujando checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', info[i].id)
    checkbox.classList = "checkbox me-2"

    //Dibujando el lablel
    let label = document.createElement('label')

    let sub = document.createElement('button')
    sub.classList = "btn botonEliminar btn-danger"
    sub.textContent = 'X'

    if (info == null || i == null) {
        checkbox.setAttribute('id', getNextId())
        sub.setAttribute('id', getNextId())
        label.textContent = valorInput.value
    } else {
        checkbox.setAttribute('id', info[i].id)
        label.textContent = info[i].texto
        sub.setAttribute('id', info[i].id)
    }
    div.append(checkbox)
    div.append(label)
    div.append(sub)

    return { div, checkbox, label, sub }
}

const dibujarTodo = () => {
    if (data.length > 0) {
        for (let i = 0; i <= data.length - 1; i++) {

            const { div, checkbox, label, sub } = dibujarElementos(data, i)

            if (data[i].estado) {
                checkbox.checked = true
                label.classList.add('text-decoration-line-through')
                // label.classList.add("text-secondary")
            } else {
                checkbox.checked = false
                label.classList.remove('text-decoration-line-through')
                // label.classList.remove("text-secondary")
            }
            tareas.append(div)
        }
    }
}

//Agregar elementos al Div

botonAgregar.addEventListener('click', () => {

    data.push(
        { id: getNextId(), texto: valorInput.value, estado: false }
    )
    localStorage.setItem('data', JSON.stringify(data))
    tareas.innerHTML = ''
    dibujarTodo();
    valorInput.value = ''
})

tareas.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox')) {
        let tareaBuscar = data.find(item => item.id == event.target.id)
        tareaBuscar.estado = !tareaBuscar.estado

        if (tareaBuscar.estado) {
            event.target.nextSibling.classList.add('text-decoration-line-through')
        } else {
            event.target.nextSibling.classList.remove('text-decoration-line-through')
        }
    } else if (event.target.classList.contains('botonEliminar')) {
        event.target.parentElement.remove()
        data = data.filter(item => item.id != event.target.id)
    }
    localStorage.setItem('data', JSON.stringify(data))
})

dibujarTodo()
