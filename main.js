import { graph } from "./graph.js";
import { storeData } from "./login.js";
import { allData } from "./query.js";

const loginButton = document.getElementById("submit")
loginButton.addEventListener("click", but)

async function but(){
   const reponse = await storeData()
   if (reponse == true){
    graph()
   }
}