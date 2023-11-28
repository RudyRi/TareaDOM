import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'

document.querySelector('#app').innerHTML = `
  <h1>Testing App</h1>
`

setupCounter(document.querySelector('#counter'))
