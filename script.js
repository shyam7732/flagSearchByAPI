let input = document.querySelector("input");
let searchBtn = document.querySelector("a");


searchBtn.onclick = ((e) => {
    e.preventDefault()
    let flagbox = document.querySelector("#box2");
    flagbox.innerHTML = "";

    fetch("https://flagcdn.com/en/codes.json")
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result);
            showflag(result)
        })
})

function showflag(result) {
    let flagname = input.value;
    let flagCapitalize = flagname.charAt(0).toUpperCase() + flagname.slice(1)
    for (let [key, value] of Object.entries(result)) {
        if (value === flagCapitalize) {
            let img = document.createElement("img");
            img.src = "https://flagcdn.com/160x120/" + ([key][0]) + ".png";
            document.querySelector("#box2").append(img);
        }
    }
}




