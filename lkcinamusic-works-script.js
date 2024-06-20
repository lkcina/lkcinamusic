const largeEnsembleContainer = document.getElementById("large-ensemble-container");

const cardContainer = document.getElementById("card-container");

const worksDir = [
    {
        "category": "Large Ensemble",
        "content": [
            {
                "title": "All Creatures of Our God and King",
                "subtitle": "for String Orchestra",
                "year": "2021",
                "instrumentation": "Wind Ensemble",
                "thumbnail": "./Images/JL-65.jpg",
                "media": "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1086377341&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/landon-cina\" title=\"L.K. Cina\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">L.K. Cina</a> · <a href=\"https://soundcloud.com/landon-cina/all-creatures-of-our-god-and-king\" title=\"All Creatures Of Our God And King\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">All Creatures Of Our God And King</a></div>"
            },
            {
                "title": "All Creatures of Our God and King",
                "subtitle": "for Wind Ensemble",
                "year": "2019",
                "instrumentation": "Wind Ensemble",
                "thumbnail": null,
                "media": null
            },
            {
                "title": "At What Cost?",
                "subtitle": "for Orchestra",
                "year": "2022",
                "instrumentation": "3.3.3.3 - 4.3.3.1 - timp.perc(3) - hrp - pno - strings",
                "thumbnail": null,
                "media": "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1385861539&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/landon-cina\" title=\"L.K. Cina\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">L.K. Cina</a> · <a href=\"https://soundcloud.com/landon-cina/at-what-cost\" title=\"At What Cost?\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">At What Cost?</a></div>"
            }
        ]
    },
    {
        "category": "Chamber Ensemble",
        "content": [
            {
                "title": "Æther",
                "subtitle": "for Harp, Piano, and Percussion",
                "year": "2019",
                "instrumentation": "Harp, Piano, and Percussion",
                "thumbnail": null,
                "media": "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1086376177&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/landon-cina\" title=\"L.K. Cina\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">L.K. Cina</a> · <a href=\"https://soundcloud.com/landon-cina/aether\" title=\"AEther\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">AEther</a></div>"
            },
            {
                "title": "All Creatures of Our God and King",
                "subtitle": "for Wind Ensemble",
                "year": "2019",
                "instrumentation": "Wind Ensemble",
                "thumbnail": null,
                "media": null
            },
            {
                "title": "At What Cost?",
                "subtitle": "for Orchestra",
                "year": "2022",
                "instrumentation": "Orchestra: 3.3.3.3 - 4.3.3.1 - timp.perc(3) - hrp - pno - strings",
                "thumbnail": null,
                "media": "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1385861539&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/landon-cina\" title=\"L.K. Cina\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">L.K. Cina</a> · <a href=\"https://soundcloud.com/landon-cina/at-what-cost\" title=\"At What Cost?\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">At What Cost?</a></div>"
            }
        ]
    }
]

const showWorks = (data, index) => {
    let htmlStr = "";
    for (let i = 0; i < data[index].content.length; i++) {
        const piece = data[index].content[i];
        const id = `${index}-${i}`;
        htmlStr += `<p id="${id}" class="card-click"><span class="italic">${piece.title}</span><span class="subtitle"> : ${piece.subtitle} (${piece.year})</span></p>`;
    }
    console.log(htmlStr)
    return htmlStr;
}


const showCard = (obj) => {
    const card = document.getElementById("card");
    card.innerHTML = "";
    card.innerHTML += obj.title ? `<h3 id="card-title">${obj.title}</h3>` : "";
    card.innerHTML += obj.subtitle ? `<p id="card-subtitle">${obj.subtitle}</p>` : "";
    card.innerHTML += obj.year ? `<p id="card-year">Year: ${obj.year}</p>` : "";
    card.innerHTML += obj.instrumentation ? `<p id="card-instrumentation">Instrumentation: ${obj.instrumentation}</p>` : "";
    card.innerHTML += obj.thumbnail ? `<img id="card-thumbnail" src="${obj.thumbnail}">` : "";
    card.innerHTML += obj.subtitle ? obj.media : "";
    
    cardContainer.style.display = "block";
};


largeEnsembleContainer.innerHTML = showWorks(worksDir, 0);


const cardClicks = document.querySelectorAll(".card-click");

cardClicks.forEach((element) => {
    element.addEventListener("click", () => {
        const indexes = element.id.split("-");
        showCard(worksDir[indexes[0]].content[indexes[1]]);
    })
})