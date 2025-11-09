import {products} from "./data.js"
import template from "./template.hbs"


const list = document.querySelector(".list")

list.innerHTML = template({products})

