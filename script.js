fetch("./data.json")
.then(response => response.json())
.then(data => {
    const jobHTML = getJobHTML(data)
    document.querySelector(".jobs").innerHTML = jobHTML
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
                    <p>${job.role}</p>
                    <p>${job.level}</p>
                    ${tools}
                    ${langs}
                </div>
            </div>
            `
        )

    }).join("")

}

// "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",