import { allData} from "./query.js";

export async function graph(){
    const getData = await getget()
    user(getData)
    go(getData)
    skill(getData)
    js(getData)
    }
async function getget(){
    const data = await allData()
    const xp = data[0]
    const skills = data[1]
    const infosUser = data[2]
    const piscineGO = data[3]
    const piscineJS = data[4]
    return [xp, skills, infosUser, piscineGO, piscineJS]
}

function user(info){
    let divUser = document.createElement("div")
    divUser.id = "divUser"
    divUser.className = "divUser"
    document.getElementById("fenGEN").appendChild(divUser)
    for (let i = 0; i < info[2].length; i++){
        let infoUser = document.createElement("p")
        if (i == 7){
            infoUser.innerHTML = "Audit Ratio: " + info[2][i]
           
        } else {
             infoUser.innerHTML = info[2][i]
        }
    infoUser.id = i
    document.getElementById("divUser").appendChild(infoUser);
}
    }

function skill(info){
    let divSkill = document.createElement("div")
    divSkill.id = "divSkill"
    divSkill.className = "divSkill"
    document.getElementById("fenGEN").appendChild(divSkill)
    
    let titre = document.createElement("h2")
    titre.id = "Skills"
    titre.className = "Skills"
    titre.innerHTML = "Skills"
    document.getElementById("divSkill").appendChild(titre)

    let xp = document.createElement("h3")
    xp.id = "xpDiv"
    xp.className = "xpDiv"
    xp.innerHTML = "Xp Div: " + info[0][0]
    document.getElementById("divSkill").appendChild(xp)

    let skillSVG = document.createElementNS("http://www.w3.org/2000/svg","svg")
    skillSVG.id = "skillSVG"
    skillSVG.setAttribute("width", `${100}%`)
    skillSVG.setAttribute("height", `${479}px`)
    document.getElementById("divSkill").appendChild(skillSVG)

    let ordonnée = document.createElementNS("http://www.w3.org/2000/svg", "line")
    ordonnée.setAttribute("x1", `${165}`)
    ordonnée.setAttribute("y1", `${30}`)
    ordonnée.setAttribute("x2", `${165}`)
    ordonnée.setAttribute("y2", `${333}`)
    ordonnée.setAttribute("stroke", "black")
    ordonnée.setAttribute("stroke-width", `${3}px`)
    document.getElementById("skillSVG").appendChild(ordonnée)

    let abscisse = document.createElementNS("http://www.w3.org/2000/svg", "line")
    abscisse.setAttribute("x1", `${165}`)
    abscisse.setAttribute("y1", `${333}`)
    abscisse.setAttribute("x2", `${470}`)
    abscisse.setAttribute("y2", `${333}`)
    abscisse.setAttribute("stroke", "black")
    abscisse.setAttribute("stroke-width", `${3}px`)
    document.getElementById("skillSVG").appendChild(abscisse)

    const lang = ["GO", "JS", "HTML", "CSS", "SQL"];
    const pource = ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]

    for (let i = 0; i < info[1].length; i++){
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line")
        line.setAttribute("x1", `${200+i*60}`)
        line.setAttribute("y1", `${330-(300*(info[1][i]/100))}`)
        line.setAttribute("x2", `${200+i*60}`)
        line.setAttribute("y2", `${330}`)
        line.setAttribute("stroke", "yellow")
        line.setAttribute("stroke-width", `${50}px`)
        document.getElementById("skillSVG").appendChild(line)

        let langage = document.createElementNS("http://www.w3.org/2000/svg", "text")
        langage.innerHTML = lang[i]
        langage.setAttribute("fill", "black")
        langage.setAttribute("x", `${(200+i*60)-20}`)
        langage.setAttribute("y", `${350}px`)
        langage.setAttribute("font-size", `${15}`)
        langage.setAttribute("font-weight", `${501}`)
        document.getElementById("skillSVG").appendChild(langage)
    }

    for (let i = 0; i < pource.length; i++){
        let pourcentage = document.createElementNS("http://www.w3.org/2000/svg", "text")
        pourcentage.innerHTML = pource[i]
        pourcentage.setAttribute("fill", "black")
        pourcentage.setAttribute("x", `${110}`)
        pourcentage.setAttribute("y", `${330-(300*(i*10/100))}px`)
        pourcentage.setAttribute("font-size", `${15}`)
        pourcentage.setAttribute("font-weight", `${501}`)
        document.getElementById("skillSVG").appendChild(pourcentage)
    }

  
}

function go(info){
    let divGO = document.createElement("div")
    divGO.id = "divGO"
    divGO.className = "divGO"
    document.getElementById("fenGEN").appendChild(divGO)

    let titre = document.createElement("h2")
    titre.id = "piscine-go"
    titre.className = "piscine-go"
    titre.innerHTML = "Piscine-go"
    document.getElementById("divGO").appendChild(titre)

    let xp = document.createElement("h3")
    xp.id = "xpGO"
    xp.className = "xpGO"
    xp.innerHTML = "Xp: " + info[0][1]
    document.getElementById("divGO").appendChild(xp)

    let goSVG = document.createElementNS("http://www.w3.org/2000/svg","svg")
    goSVG.id = "goSVG"
    goSVG.setAttribute("width", `${100}%`)
    goSVG.setAttribute("height", `${479}px`)
    document.getElementById("divGO").appendChild(goSVG)

    let defsGO = document.createElementNS("http://www.w3.org/2000/svg", "defs")
    defsGO.id = "defsGO"
    document.getElementById("goSVG").appendChild(defsGO)

    let ratio = info[3][1]/(info[3][0]+info[3][1])*100

    let linGrad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")
    linGrad.id = "goGrad"
    linGrad.setAttribute("x1", `${0}%`)
    linGrad.setAttribute("x2", `${0}%`)
    linGrad.setAttribute("y1", `${0}%`)
    linGrad.setAttribute("y2", `${100}%`)
    document.getElementById("defsGO").appendChild(linGrad)

    let Crouge = document.createElementNS("http://www.w3.org/2000/svg", "stop")
    Crouge.setAttribute("offset", `${ratio}%`)
    Crouge.setAttribute("stop-color", "#b51616")
    document.getElementById("goGrad").appendChild(Crouge)

    let Cblue = document.createElementNS("http://www.w3.org/2000/svg", "stop")
    Cblue.setAttribute("stop-color", "#4720d1")
    document.getElementById("goGrad").appendChild(Cblue)

    let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    rectangle.setAttribute("x", `${40}%`)
    rectangle.setAttribute("y", `${30}px`)
    rectangle.setAttribute("width", `${100}px`)
    rectangle.setAttribute("height", `${300}px`)
    rectangle.setAttribute("fill", "url(#goGrad)")
    rectangle.setAttribute("stroke", "#d4ccfe")
    rectangle.setAttribute("stroke-width", `${3}px`) 
    document.getElementById("goSVG").appendChild(rectangle)

    let succeed = document.createElementNS("http://www.w3.org/2000/svg", "text")
    succeed.innerHTML = "Project succeded: " +info[3][0]
    succeed.setAttribute("fill", "#4720d1")
    succeed.setAttribute("x", `${57}%`)
    succeed.setAttribute("y", `${325}px`)
    succeed.setAttribute("font-size", `${20}`)
    succeed.setAttribute("font-weight", `${501}`)
    document.getElementById("goSVG").appendChild(succeed)

    let fail = document.createElementNS("http://www.w3.org/2000/svg", "text")
    fail.innerHTML = "Project failed: " +info[3][1]
    fail.setAttribute("fill", "#b51616")
    fail.setAttribute("x", `${57}%`)
    fail.setAttribute("y", `${50}px`)
    fail.setAttribute("font-size", `${20}`)
    fail.setAttribute("font-weight", `${501}`)
    document.getElementById("goSVG").appendChild(fail)
}

function js(info){
    let divJS = document.createElement("div")
    divJS.id = "divJS"
    divJS.className = "divJS"
    document.getElementById("fenGEN").appendChild(divJS)

    let titre = document.createElement("h2")
    titre.id = "piscine-js"
    titre.className = "piscine-js"
    titre.innerHTML = "Piscine-js"
    document.getElementById("divJS").appendChild(titre)

    let xp = document.createElement("h3")
    xp.id = "xpJS"
    xp.className = "xpJS"
    xp.innerHTML = "Xp: " + info[0][2]
    document.getElementById("divJS").appendChild(xp)

    let jsSVG = document.createElementNS("http://www.w3.org/2000/svg","svg")
    jsSVG.id = "jsSVG"
    jsSVG.setAttribute("width", `${100}%`)
    jsSVG.setAttribute("height", `${479}px`)
    document.getElementById("divJS").appendChild(jsSVG)

    let defsJS = document.createElementNS("http://www.w3.org/2000/svg", "defs")
    defsJS.id = "defsJS"
    document.getElementById("jsSVG").appendChild(defsJS)

    let ratio = info[4][1]/(info[4][0]+info[4][1])*100

    let linGrad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")
    linGrad.id = "jsGrad"
    linGrad.setAttribute("x1", `${0}%`)
    linGrad.setAttribute("x2", `${0}%`)
    linGrad.setAttribute("y1", `${0}%`)
    linGrad.setAttribute("y2", `${100}%`)
    document.getElementById("defsJS").appendChild(linGrad)

    let Crouge = document.createElementNS("http://www.w3.org/2000/svg", "stop")
    Crouge.setAttribute("offset", `${ratio}%`)
    Crouge.setAttribute("stop-color", "#b51616")
    document.getElementById("jsGrad").appendChild(Crouge)

    let Cpink = document.createElementNS("http://www.w3.org/2000/svg", "stop")
    Cpink.setAttribute("stop-color", "#d448d3")
    document.getElementById("jsGrad").appendChild(Cpink)

    let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    rectangle.setAttribute("x", `${40}%`)
    rectangle.setAttribute("y", `${30}px`)
    rectangle.setAttribute("width", `${100}px`)
    rectangle.setAttribute("height", `${300}px`)
    rectangle.setAttribute("fill", "url(#jsGrad)")
    rectangle.setAttribute("stroke", "#d4ccfe")
    rectangle.setAttribute("stroke-width", `${3}px` )
    document.getElementById("jsSVG").appendChild(rectangle)

    let succeed = document.createElementNS("http://www.w3.org/2000/svg", "text")
    succeed.innerHTML = "Project succeded: " +info[4][0]
    succeed.setAttribute("fill", "#d448d3")
    succeed.setAttribute("x", `${57}%`)
    succeed.setAttribute("y", `${325}px`)
    succeed.setAttribute("font-size", `${20}`)
    succeed.setAttribute("font-weight", `${501}`)
    document.getElementById("jsSVG").appendChild(succeed)

    let fail = document.createElementNS("http://www.w3.org/2000/svg", "text")
    fail.innerHTML = "Project failed: " +info[4][1]
    fail.setAttribute("fill", "#b51616")
    fail.setAttribute("x", `${57}%`)
    fail.setAttribute("y", `${50}px`)
    fail.setAttribute("font-size", `${20}`)
    fail.setAttribute("font-weight", `${501}`)
    document.getElementById("jsSVG").appendChild(fail)
}