export async function allData(){
    const key = localStorage.getItem("code_login")
    const data_user = await fetch("https://zone01normandie.org/api/graphql-engine/v1/graphql",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${key}`
    },
    body: JSON.stringify({
        query: `query {
            user {
              auditRatio
              campus
              attrs
            }
            xp_view {
              amount
              path
            }
            transaction {
              type
               amount
           }
            result (where:{type:{_eq:"tester"}}){
             grade
             path
             objectId
               eventId
             }
          }
            `
    })
  });
  const data_userJ = await data_user.json();
  console.log(data_userJ)
  return [xpTotal(data_userJ), skills(data_userJ), user(data_userJ), piscineGO(data_userJ), piscineJS(data_userJ)]
}

function xpTotal(dataGEN){
  if (dataGEN === undefined){
    return
  }
  var xp = dataGEN["data"]["xp_view"]
  let xpGO = 0;
  let xpJS = 0;
  let xpGEN = 0;
  for (let i = 0; i < xp.length;i++){
    if (xp[i]["path"].includes("piscine-js/") == true){
      xpJS = xpJS + parseInt(xp[i]["amount"]);
    } else if (xp[i]["path"].includes("piscine-go/") == true){
      xpGO = xpGO + parseInt(xp[i]["amount"]);
    } else {
      xpGEN = xpGEN + parseInt(xp[i]["amount"]);
    }
  };
  return [xpGEN, xpGO, xpJS];
}

function skills(dataGEN){
  let skill = dataGEN["data"]["transaction"]
  let skillGO = 0
  let skillJS = 0
  let skillHTML = 0
  let skillCSS = 0
  let skillSQL = 0
  for (let i = 0; i < skill.length;i++){
    if (skill[i]["type"].includes("skill_go")){
      if (parseInt(skill[i]["amount"]) > skillGO){
         skillGO = parseInt(skill[i]["amount"])
      }
    } else if (skill[i]["type"].includes("skill_js")){
       if (parseInt(skill[i]["amount"]) > skillJS){
         skillJS = parseInt(skill[i]["amount"])
      }
   
    } else if (skill[i]["type"].includes("skill_html")){
       if (parseInt(skill[i]["amount"]) > skillHTML){
       skillHTML = parseInt(skill[i]["amount"])
    }
 
    } else if (skill[i]["type"].includes("skill_css")){
        if (parseInt(skill[i]["amount"]) > skillCSS){
     skillCSS = parseInt(skill[i]["amount"])
  }

    } else if (skill[i]["type"].includes("skill_sql")){
        if (parseInt(skill[i]["amount"]) > skillSQL){
     skillSQL = parseInt(skill[i]["amount"])
  }

}
}
return [skillGO, skillJS, skillHTML, skillCSS, skillSQL];
}

function user(dataGEN){
  const userData = dataGEN["data"]["user"][0]
  let lastName = userData["attrs"]["lastName"]
  let firstName = userData["attrs"]["firstName"]
  let auditRatio = userData["auditRatio"]
  let campus = userData["campus"]
  let phone = userData["attrs"]["Phone"]
  let email = userData["attrs"]["email"]
  let attentes = userData["attrs"]["attentes"]
  let city = userData["attrs"]["addressCity"]
  let adress = userData["attrs"]["addressStreet"]
  return [firstName, lastName, phone, email, city, adress, campus, auditRatio, attentes];
}

function piscineGO(dataGEN){
  let exercice = dataGEN["data"]["result"]
  let passGO = 0
  let failGO = 0
  let attempTabGO = []
  let attempGO = 0
  let currentPath = ""
  for (let i = 6; i < exercice.length;i++){
    if (exercice[i]["path"].includes("piscine-go/quest")){
      if (exercice[i]["grade"] == 1){
        passGO = passGO + 1
      }else if (exercice[i]["grade"] == 0 && (exercice[i-1]["grade"] != 0)) {
        failGO = failGO + 1
      }
      if (exercice[i]["path"] != exercice[i-1]["path"]){
        attempGO = attempGO + 1
        attempTabGO.push([currentPath, attempGO])
        currentPath = exercice[i]["path"]
        attempGO = 0
      } else if (exercice[i]["path"] == currentPath){
        attempGO = attempGO + 1
      }
    }
  }
  return [passGO, failGO, attempTabGO];
}

function piscineJS(dataGEN){
  let exercice = dataGEN["data"]["result"]
  let passJS = 0
  let failJS = 0
  let attempTabJS = []
  let attempJS = 0
  let currentPath = ""
  for (let i = 6; i < exercice.length;i++){
    if (exercice[i]["path"].includes("piscine-js")){
      if (exercice[i]["grade"] == 1){
        passJS = passJS + 1
      }else if (exercice[i]["grade"] == 0 && (exercice[i-1]["grade"] != 0)) {
        failJS = failJS + 1
      }
      if (exercice[i]["path"] != exercice[i-1]["path"]){
        attempJS = attempJS + 1
        attempTabJS.push([currentPath, attempJS])
        currentPath = exercice[i]["path"]
        attempJS = 0
      } else if (exercice[i]["path"] == currentPath){
        attempJS = attempJS + 1
      }
    }
  }
  return [passJS, failJS, attempTabJS];
}