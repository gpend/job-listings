let selected = {
    language: [],
    tools: []
}

fetch("./data.json")
.then(response => response.json())
.then(data => {
    const jobHTML = getJobHTML(data)
    document.querySelector(".jobs").innerHTML = jobHTML
    document.querySelectorAll(".job--language").forEach(element => {
       element.addEventListener("click", (e)=> {
           selected.language.push(e.target.innerText)
           console.log(selected)
        })
    })
    document.querySelectorAll(".job--tool").forEach(element => {
        element.addEventListener("click", (e)=> {
            selected.tools.push(e.target.innerText)
            console.log(selected)
        })
    })
    document.querySelectorAll(".job--level").forEach(element => {
        element.addEventListener("click", (e)=> {
            selected.level = e.target.innerText
            console.log(selected)
        })
    })
    document.querySelectorAll(".job--role").forEach(element => {
        element.addEventListener("click", (e)=> {
            selected.role = e.target.innerText
            console.log(selected)
        })
    })
    
})
function getJobHTML(data){
    return data.map(job =>{
        const langs = job.languages.map(language =>{
            return `<p class="job--language">${language}</p>`
        }).join("")

        const tools = job.tools.map(tool =>{
            return `<p class="job--tool">${tool}</p>`
        }).join("")

        return(
            `
            <div class="job${job.featured ? " featured" : ""}">
                <div class="job--details">
                    <img class="job--logo" src=${job.logo}></img>
                    <div class="job--company_details">
                        <p class="job--company">${job.company}</p>
                        ${job.new ? '<p class= "job--company__new">NEW!</p>' : ""} 
                        ${job.featured ? '<p class= "job--company__featured">FEATURED</p>' : ""}
                    </div>
                    <p class="job--position">${job.position}</p>
                    <p class="job--about">${job.postedAt} · ${job.contract} · ${job.location}</p>
                </div>
                <div class="job--attributes">
                    <p class="job--role">${job.role}</p>
                    <p class="job--level">${job.level}</p>
                    ${tools}
                    ${langs}
                </div>
            </div>
            `
        )

    }).join("")

}


// document.getElementsByClassName("job--tool").map(element => {
//     element.addEventListener("click", ()=> {console.log("clicked")})
// })
