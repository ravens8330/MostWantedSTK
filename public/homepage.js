function removeAllChildren(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function homeButton() {
    removeAllChildren(document.getElementById("contentWrapper"));

    let homeWrapper = document.createElement("div");
    homeWrapper.id = "homeWrapper";

    let homeTitle = document.createElement("p");
    homeTitle.id = "homeTitle";
    homeTitle.textContent = "Most Wanted";

    let homeDescription = document.createElement("span");
    homeDescription.id = "homeDescription";
    homeDescription.innerHTML = `Welcome to Most Wanted,
        where the values are popping and our Farmers are grinding.
        Don’t miss out on our high flying action of our Most Wanted tournaments. We are a community of courteous individuals and respectfulness. 
        Join in on the fun and can’t wait to see you there!<br><br><br>
        Thank you,<br>
            The MW Staff`;

    homeWrapper.appendChild(homeTitle);
    homeWrapper.appendChild(homeDescription);

    document.getElementById("contentWrapper").appendChild(homeWrapper);
}

function staffButton() {
    removeAllChildren(document.getElementById("contentWrapper"));

    let contentBox = document.createElement("div");
    contentBox.id = "contentBox";

    let staffHeader = document.createElement("p");
    staffHeader.id = "staffHeader";

    let staffWrapper = document.createElement("div");
    staffWrapper.id = "staffWrapper";

    for (let i = 0; i < staffMembers.length; i++) {
        let staffItemWrapper = document.createElement("div");
        staffItemWrapper.className = "staffItemWrapper";

        staffItemWrapper.innerHTML = `
            <img class="staffPicture" src="./images/staff/staff${i}.png">
            <div class="staffLabels">
                <div class="staffTitle">${staffMembers[i].title}</div>
                <div class="staffNickname">${staffMembers[i].nickname}</div>
                <a href="${staffMembers[i].link}">${staffMembers[i].handle}</a>
            </div>
        `;

        staffWrapper.appendChild(staffItemWrapper);
    }

    contentBox.appendChild(staffHeader);
    contentBox.appendChild(staffWrapper);
    
    document.getElementById("contentWrapper").appendChild(contentBox);
}

function itemsButton() {
    removeAllChildren(document.getElementById("contentWrapper"));

    let itemsWrapper = document.createElement("div");
    itemsWrapper.id = "itemsWrapper";

    let itemDisplayWrapper = document.createElement("div");
    itemDisplayWrapper.id = "itemDisplayWrapper";

    for (let i = 0; i < items.length; i++) {
        let itemWrapper = document.createElement("div");
        itemWrapper.className = "itemWrapper";

        let itemImage = document.createElement("img");
        itemImage.className = "itemImage";
        itemImage.src = `./images/items/${items[i].image}`;

        let itemLabel = document.createElement("p");
        itemLabel.className = "itemLabel";
        itemLabel.textContent = items[i].name;

        let itemType = document.createElement("p");
        itemType.className = "itemType";
        switch (items[i].type) {
            case ItemTypes.KNIFE:
                itemType.textContent = "Knife";
                break;
            case ItemTypes.CABIN:
                itemType.textContent = "Cabin";
                break;
        }

        let itemMWValueWrapper = document.createElement("div");
        itemMWValueWrapper.className = "valueWrapper";
        itemMWValueWrapper.innerHTML = `
            <p class="valueLabel">MW Value:</p>
            <p class="valueField">${numberWithCommas(items[i].mwvalue)}</p>
        `;

        let itemGalaxyValueWrapper = document.createElement("div");
        itemGalaxyValueWrapper.className = "valueWrapper";
        itemGalaxyValueWrapper.innerHTML = `
            <p class="valueLabel">Galaxy Value:</p>
            <p class="valueField">${numberWithCommas(items[i].galaxyvalue)}</p>
        `;

        let itemSTKWrapper = document.createElement("div");
        itemSTKWrapper.className = "valueWrapper";
        itemSTKWrapper.innerHTML = `
            <p class="valueLabel">STK Value:</p>
            <p class="valueField">${numberWithCommas(items[i].stkvalue)}</p>
        `;

        itemWrapper.appendChild(itemImage);
        itemWrapper.appendChild(itemLabel);
        itemWrapper.appendChild(itemType);
        itemWrapper.appendChild(itemMWValueWrapper);
        itemWrapper.appendChild(itemGalaxyValueWrapper);
        itemWrapper.appendChild(itemSTKWrapper);

        itemDisplayWrapper.appendChild(itemWrapper);
    }

    itemsWrapper.appendChild(itemDisplayWrapper);

    document.getElementById("contentWrapper").appendChild(itemsWrapper);
}

function tournamentsButton() {
    removeAllChildren(document.getElementById("contentWrapper"));

    let tournamentsWrapper = document.createElement("div");
    tournamentsWrapper.id = "tournamentsWrapper";

    let tournamentCountdownWrapper = document.createElement("div");
    tournamentCountdownWrapper.id = "tournamentCountdownWrapper";

    let tournamentCountdownLabel = document.createElement("p");
    tournamentCountdownLabel.id = "tournamentCountdownLabel";
    tournamentCountdownLabel.textContent = "Next Upcoming Tournament:";

    let tournamentCountdownContent = document.createElement("p");
    tournamentCountdownContent.id = "tournamentCountdownContent";

    tournamentCountdownWrapper.appendChild(tournamentCountdownLabel);
    tournamentCountdownWrapper.appendChild(tournamentCountdownContent);

    let tournamentBox = document.createElement("div");
    tournamentBox.id = "tournamentBox";

    for (let i = 0; i < tournaments.length; i++) {
        let tournamentItemWrapper = document.createElement("div");
        tournamentItemWrapper.className = "tournamentItemWrapper";

        let tournamentName = document.createElement("p");
        tournamentName.textContent = tournaments[i].name;
        tournamentName.className = "tournamentName";

        let tournamentDate = document.createElement("p");
        tournamentDate.className = "tournamentDate";
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        tournamentDate.textContent = tournaments[i].date.toLocaleDateString("en-US", options);

        let tournamentVideo = document.createElement("video");
        tournamentVideo.className = "tournamentVideo";
        tournamentVideo.controls = true;
        tournamentVideo.height = "500px";
        tournamentVideo.style.height = "500px";
        
        let tournamentVideoSource = document.createElement("source");
        tournamentVideoSource.src = `./videos/${tournaments[i].video}`;
        tournamentVideoSource.type = "video/mp4";

        tournamentVideo.appendChild(tournamentVideoSource);

        tournamentItemWrapper.appendChild(tournamentName);
        tournamentItemWrapper.appendChild(tournamentDate);
        tournamentItemWrapper.appendChild(tournamentVideo);

        tournamentBox.appendChild(tournamentItemWrapper);
    }

    tournamentsWrapper.appendChild(tournamentCountdownWrapper);
    tournamentsWrapper.appendChild(tournamentBox);

    document.getElementById("contentWrapper").appendChild(tournamentsWrapper);
}

function communityButton() {
    removeAllChildren(document.getElementById("contentWrapper"));

    let communityWrapper = document.createElement("div");
    communityWrapper.id = "communityWrapper";

    let discordWrapper = document.createElement("div");
    discordWrapper.id = "discordWrapper";
    
    let discordImage = document.createElement("img");
    discordImage.id = "discordImage";
    discordImage.src = "./images/discordlogo.png";

    let discordLabel = document.createElement("p");
    discordLabel.id = "discordLabel";
    discordLabel.textContent = "Join us on Discord!";

    let discordLink = document.createElement("a");
    discordLink.id = "discordLink";
    discordLink.href = "https://discord.gg/nCMqcMpNPg";

    discordWrapper.appendChild(discordImage);
    discordWrapper.appendChild(discordLabel);
    discordWrapper.appendChild(discordLink);

    let youtubeWrapper = document.createElement("div");
    youtubeWrapper.id = "youtubeWrapper";

    for (let i = 0; i < youtubers.length; i++) {
        let youtubeItemWrapper = document.createElement("div");
        youtubeItemWrapper.className = "youtubeItemWrapper";

        let youtubeImage = document.createElement("img");
        youtubeImage.src = "./images/youtubelogo.png";
        youtubeImage.className = "youtubeImage";

        let youtubeLabel = document.createElement("p");
        youtubeLabel.className = "youtubeLabel";
        youtubeLabel.textContent = youtubers[i].name;

        let youtubeLink = document.createElement("a");
        youtubeLink.href = youtubers[i].link;
        youtubeLink.className = "youtubeLink";

        youtubeItemWrapper.appendChild(youtubeImage);
        youtubeItemWrapper.appendChild(youtubeLabel);
        youtubeItemWrapper.appendChild(youtubeLink);

        youtubeWrapper.appendChild(youtubeItemWrapper);
    }

    communityWrapper.appendChild(discordWrapper);
    communityWrapper.appendChild(youtubeWrapper);

    document.getElementById("contentWrapper").appendChild(communityWrapper);
}

function loginButton() {
    removeAllChildren(document.getElementById("contentWrapper"));
}

homeButton();

function updateCountdown() {
    if (document.getElementById("tournamentCountdownContent")) {
        if (tournaments.length == 0) {
            return;
        }

        let tournamentDate = tournaments[0].date;
        for (let i = 1; i < tournaments.length; i++) {
            if (tournaments[i].date.getTime() < tournamentDate.getTime()) {
                tournamentDate = tournaments[i].date;
            }
        }

        let difference = tournamentDate.getTime() - Date.now();
        if (difference < 0) {
            document.getElementById("tournamentCountdownContent").textContent = `NOW!`;
            return;
        }

        let days = Math.floor(difference / (24 * 60 * 60 * 1000));
        difference -= days * 24 * 60 * 60 * 1000;
        let hours = Math.floor(difference / (60 * 60 * 1000));
        difference -= hours * 60 * 60 * 1000;
        let minutes = Math.floor(difference / (60 * 1000));
        difference -= minutes * 60 * 1000;
        let seconds = Math.floor(difference / (1000));
        
        document.getElementById("tournamentCountdownContent").textContent = `${days} day${days != 1 ? "s" : ""}, ${hours} hour${hours != 1 ? "s" : ""}, ${minutes} minute${minutes != 1 ? "s" : ""}, and ${seconds} second${seconds != 1 ? "s" : ""}`;
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.setInterval(updateCountdown, 200);
