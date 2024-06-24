export async function storeData (){
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value
    const abd = user+":"+pass
    const crypt_login = btoa(abd);
    const url = "https://zone01normandie.org/api/auth/signin"
    try {
         const response = await fetch(url,{
        method:"POST", 
        headers: {
            'Authorization': `Basic ${crypt_login}`
        },
    });
    const login = await response.json();
    localStorage.setItem( "code_login" ,login);
   
    if (!response.ok) {
        alert("Alerte alerte, intrusion");
        throw new Error("Network response was not OK");
    } else {
        const element = document.getElementById("mess-login");
        element.remove();

        const logout = document.createElement("button")
        logout.id = "logout"
        logout.className = "logout"
        logout.innerHTML = "Logout"
        logout.addEventListener("click", reload)
        document.getElementById("submit").replaceWith(logout)
    return true
    }
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
};

function reload(){
    location.reload()
}