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
            if(!selected.language.includes(e.target.innerText)){
                selected.language.push(e.target.innerText) 
                let html = selected.language.map(lang => {
                    return `<p>${lang}</p>`
                }).join('')

                document.querySelector(".selector__lang").innerHTML = html
            }
        })
    })

    document.querySelectorAll(".job--tool").forEach(element => {
        element.addEventListener("click", (e)=> {
            
            if (!selected.tools.includes(e.target.innerText)){ 
                selected.tools.push(e.target.innerText)
                let html = selected.tools.map(tool => {
                    return `<p>${tool}</p>`
                }).join('')

                document.querySelector(".selector__tool").innerHTML = html
            }
        })
            
    })

    document.querySelectorAll(".job--level").forEach(element => {
        element.addEventListener("click", (e)=> {
            selected.level = e.target.innerText
            let html = `<p>${selected.level}</p>`
            document.querySelector(".selector__level").innerHTML = html
        })     
    })
    
    document.querySelectorAll(".job--role").forEach(element => {
        element.addEventListener("click", (e)=> {
            selected.role = e.target.innerText
            console.log(selected.role)
            let html = `<p>${selected.role}</p>` 
            document.querySelector(".selector__role").innerHTML = html
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
                    <div class="job--info">
                        <div class="job--company_details">
                            <p class="job--company">${job.company}</p>
                            ${job.new ? '<p class= "job--company__new">NEW!</p>' : ""}
                            ${job.featured ? '<p class= "job--company__featured">FEATURED</p>' : ""}
                        </div>
                        <p class="job--position">${job.position}</p>
                        <p class="job--about">${job.postedAt} · ${job.contract} · ${job.location}</p>
                    </div>
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
