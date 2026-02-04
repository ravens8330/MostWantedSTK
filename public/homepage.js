const filterOptions = [
    "Name",
    "Type",
    "MW Value (low - high)",
    "MW Value (high - low)",
];

let itemFilterText = "";
let itemFiltered = Object.fromEntries(
    ItemTypes.values.map(v => [v, true])
);

function removeAllChildren(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// // This function tells the page what to display when you click on the home button
// // This function tells the page what to display when you click on the home button
// function homeButton() {
//     removeAllChildren(document.getElementById("contentWrapper"));

//     let homeWrapper = document.createElement("div");
//     homeWrapper.id = "homeWrapper";

//     let homeTitle = document.createElement("p");
//     homeTitle.id = "homeTitle";
//     homeTitle.textContent = "Most Wanted";

//     let homeDescription = document.createElement("span");
//     homeDescription.id = "homeDescription";
//     homeDescription.innerHTML = `Welcome to Most Wanted,
//         where the values are popping and our Farmers are grinding.
//         Don’t miss out on our high flying action of our Most Wanted tournaments and gamenights. We are a community of courteous individuals and respectfulness. 
//         Join in on the fun and can’t wait to see you there!<br><br><br>
//         Thank you,<br>
//             The MW Staff`;

//     // // Create leaderboard section (below description)
//     // let leaderboardWrapper = document.createElement("div");
//     // leaderboardWrapper.id = "leaderboardWrapper";

//     // let leaderboardTitle = document.createElement("h2");
//     // leaderboardTitle.id = "leaderboardTitle";
//     // leaderboardTitle.textContent = "🏆 Current Leaderboard";

//     // // Example leaderboard items — replace with real data later
//     // let leaderboardList = document.createElement("ul");
//     // leaderboardList.id = "leaderboardList";

//     // const leaderboardData = [
//     //     { rank: "1st", name: "Daniel", points: 6320 },
//     //     { rank: "2nd", name: "Mini", points: 5380 },
//     //     { rank: "3rd", name: "Crimson", points: 5260 },
//     //     { rank: "4th", name: "Bama", points: 4700 },
//     //     { rank: "5th", name: "Raven", points: 4580 },
//     //     { rank: "6th", name: "Karma", points: 3200 },
//     //     { rank: "7th", name: "Mambas", points: 3000 },
//     //     { rank: "8th", name: "Spawn", points: 2240 },
//     //     { rank: "9th", name: "Angel", points: 2200 },
//     //     { rank: "10th", name: "Kiso", points: 1620 }
               
//     // ];

//     // for (let i = 0; i < leaderboardData.length; i++) {
//     //     let player = leaderboardData[i];
//     //     const li = document.createElement("li");
//     //     li.className = "leaderboardItem";
//     //     li.textContent = `${i+1}. ${player.name} — ${player.points} points`;
//     //     leaderboardList.appendChild(li);
//     // }
//     // leaderboardData.forEach(player => {
//     //     const li = document.createElement("li");
//     //     li.className = "leaderboardItem";
//     //     li.textContent = `${player.rank} ${player.name} — ${player.points} points`;
//     //     leaderboardList.appendChild(li);
//     // });

//     // leaderboardWrapper.appendChild(leaderboardTitle);
//     // leaderboardWrapper.appendChild(leaderboardList);

   
//     // Append in order — description first, leaderboard below it
//     homeWrapper.appendChild(homeTitle);6
//     homeWrapper.appendChild(homeDescription);
//     // homeWrapper.appendChild(leaderboardWrapper);

//     document.getElementById("contentWrapper").appendChild(homeWrapper);
// }

// This function tells the page what to display when you click on the home button
function homeButton() {
    removeAllChildren(document.getElementById("contentWrapper"));

    let homeWrapper = document.createElement("div");
    homeWrapper.id = "homeWrapper";

    let homeMiddleImage = document.createElement("img");
    homeMiddleImage.src = "https://i.postimg.cc/zv0tZy5j/image.png";
    homeMiddleImage.id = "homeMiddleImage";

    let homeTitle = document.createElement("p");
    homeTitle.id = "homeTitle";
    homeTitle.textContent = "Most Wanted";

    let homeDescription = document.createElement("span");
    homeDescription.id = "homeDescription";
    homeDescription.innerHTML = `Welcome to Most Wanted,
        where the values are popping and our Farmers are grinding.
        Don’t miss out on our high flying action of our Most Wanted tournaments and gamenights. We are a community of courteous individuals and respectfulness. 
        Join in on the fun and can’t wait to see you there!<br><br><br>
        Thank you,<br>
        The MW Staff`;

    // ===============================
    // CAROUSEL SECTION
    // ===============================
    const carouselWrapper = document.createElement("div");
    carouselWrapper.id = "homepageCarousel";

    const carouselTrack = document.createElement("div");
    carouselTrack.id = "carouselTrack";
    carouselWrapper.appendChild(carouselTrack);

    // ---- SLIDE DATA (5 slides) ----
    const slides = [
        { type: "video", src: "./videos/MOST WANTED STK HIGHLIGHT.mp4" },
        { type: "video", src: "./videos/FARMING 2.mp4" },
        { type: "video", src: "./videos/FARMING 3.mp4" },
        { type: "video", src: "./videos/FARMING 4.mp4" },
        { type: "video", src: "./videos/FARMING 5.mp4" }
    ];

    // ---- CREATE SLIDES ----
    slides.forEach((slide, index) => {
        const slideEl = document.createElement("div");
        slideEl.className = "carouselSlide";
        slideEl.dataset.index = index;

        if (slide.type === "video") {
            const video = document.createElement("video");
            video.src = slide.src;
            video.muted = true;
            video.playsInline = true;
            video.preload = "metadata";

            // Cap video at 25 seconds
            video.addEventListener("timeupdate", () => {
                if (video.currentTime >= 25) {
                    video.pause();
                }
            });

            slideEl.appendChild(video);
        } else {
            const img = document.createElement("img");
            img.src = slide.src;
            img.alt = "Carousel Slide";
            slideEl.appendChild(img);
        }

        carouselTrack.appendChild(slideEl);
    });

    // ---- CAROUSEL LOGIC ----
    let currentSlide = 0;
    const ROTATE_TIME = 30000; // 30 seconds
    let carouselTimer;

    function showSlide(index) {
        const allSlides = carouselTrack.querySelectorAll(".carouselSlide");

        allSlides.forEach((slide, i) => {
            const video = slide.querySelector("video");
            if (video) {
                video.pause();
                video.currentTime = 0;
            }

            slide.style.display = i === index ? "flex" : "none";

            if (i === index && video) {
                video.play().catch(() => {});
            }
        });

        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function startCarousel() {
        carouselTimer = setInterval(nextSlide, ROTATE_TIME);
    }

    // Init carousel
    showSlide(0);
    startCarousel();

    // ===============================
    // FOOTER SECTION (YELLOW/GOLD/BLACK)
    // ===============================
    const footer = document.createElement("footer");
    footer.className = "mw-footer";

    footer.innerHTML = `
        <div class="mw-footer-inner">

            <div class="mw-footer-top">
                <div class="mw-footer-brand">
                    <div class="mw-footer-logo">MOST WANTED</div>
                    <div class="mw-footer-tagline">Official Links • Credits • Community</div>
                </div>

                <div class="mw-footer-links">
                    <div class="mw-footer-section">
                        <h3>Official Links</h3>

                        <a class="mw-footer-link" href="https://discord.gg/UbhbgPrv" target="_blank">
                            Most Wanted Discord Server
                        </a>

                        <a class="mw-footer-link" href="https://www.roblox.com/communities/35553608/Most-Wanted#!/about" target="_blank">
                            Most Wanted Roblox Community
                        </a>

                        <a class="mw-footer-link" href="https://www.youtube.com/@mostwanted-w5d" target="_blank">
                            Most Wanted YouTube
                        </a>
                    </div>

                    <div class="mw-footer-section">
                        <h3>Owners</h3>
                        <div class="mw-footer-userlist">
                        <a class="mw-footer-user" href="https://www.roblox.com/users/profile?username=luna131583" target="_blank">
                                @luna131583
                            </a>
                            <a class="mw-footer-user" href="https://www.roblox.com/users/profile?username=fl0wers4days" target="_blank">
                                @fl0wers4days
                            </a>
                            <a class="mw-footer-user" href="https://www.roblox.com/users/profile?username=XxxTh3_GoatxxX" target="_blank">
                                @XxxTh3_GoatxxX
                            </a>
                        </div>
                    </div>

                    <div class="mw-footer-section">
                        <h3>Team</h3>

                        <div class="mw-footer-role">
                            <span class="mw-footer-role-title">Community Manager</span>
                            <a class="mw-footer-user" href="https://www.roblox.com/users/profile?username=BamaRoo22" target="_blank">
                                @BamaRoo22
                            </a>
                        </div>

                        <div class="mw-footer-role">
                            <span class="mw-footer-role-title">Website Developer</span>
                            <a class="mw-footer-user" href="https://www.roblox.com/users/profile?username=ravens8330" target="_blank">
                                @ravens8330
                            </a>
                        </div>

                        <div class="mw-footer-role">
                            <span class="mw-footer-role-title">Website Designer</span>
                            <a class="mw-footer-user" href="https://www.roblox.com/users/profile?username=XZop0999" target="_blank">
                                @XZop0999
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mw-footer-bottom">
                <span>© <span id="mwYear"></span> Most Wanted. All rights reserved.</span>
                <span class="mw-footer-divider">•</span>
                <span class="mw-footer-mini">Yellow • Gold • Black Theme</span>
            </div>

        </div>
    `;

    // ===============================
    // APPEND CONTENT IN ORDER
    // ===============================
    homeWrapper.appendChild(homeTitle);
    homeWrapper.appendChild(homeDescription);
    homeWrapper.appendChild(carouselWrapper);

    // Add footer under everything
    homeWrapper.appendChild(footer);

    document.getElementById("contentWrapper").appendChild(homeWrapper);

    // Set footer year
    const yearEl = document.getElementById("mwYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
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
            <img class="staffPicture" src="./images/staff/${staffMembers[i].image}">
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

    let itemFeatureWrapper = document.createElement("div");
    itemFeatureWrapper.id = "itemFeatureWrapper";

    let itemSearchBar = document.createElement("input");
    itemSearchBar.id = "itemSearchBar";
    itemSearchBar.type = "search";
    itemSearchBar.placeholder = "Search...";
    itemSearchBar.addEventListener("input", () => {
        itemFilterText = itemSearchBar.value;
        updateItemFilter();
    });

    let itemSearchOptionsWrapper = document.createElement("div");
    itemSearchOptionsWrapper.id = "itemSearchOptionsWrapper";

    for (let itemType of ItemTypes.values) {
        let filterTypeButton = document.createElement("button");
        filterTypeButton.className = "filterTypeButton";
        filterTypeButton.textContent = ItemTypes.toString(itemType);

        if (itemFiltered[itemType]) {
            filterTypeButton.style.outline = "5px solid white";
        } else {
            filterTypeButton.style.outline = "none";
        }

        filterTypeButton.addEventListener("click", () => {
            itemFiltered[itemType] = !itemFiltered[itemType];
            filterTypeButton.style.outline = itemFiltered[itemType]
                ? "5px solid white"
                : "none";
            updateItemFilter();
        });

        itemSearchOptionsWrapper.appendChild(filterTypeButton);
    }

    let filterDropdownWrapper = document.createElement("div");
    filterDropdownWrapper.id = "filterDropdownWrapper";

    let filterDropdownLabel = document.createElement("div");
    filterDropdownLabel.id = "filterDropdownLabel";
    filterDropdownLabel.textContent = "Sort by:";

    let filterDropdown = document.createElement("select");
    filterDropdown.id = "filterDropdown";

    filterOptions.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        option.value = item;
        filterDropdown.appendChild(option);
    });

    filterDropdown.addEventListener("change", () => {
        updateItemFilter();
    });

    filterDropdownWrapper.appendChild(filterDropdownLabel);
    filterDropdownWrapper.appendChild(filterDropdown);

    itemSearchOptionsWrapper.appendChild(filterDropdownWrapper);

    itemFeatureWrapper.appendChild(itemSearchBar);
    itemFeatureWrapper.appendChild(itemSearchOptionsWrapper);

    let itemDisplayWrapper = document.createElement("div");
    itemDisplayWrapper.id = "itemDisplayWrapper";

    // -----------------------------
    // Item Library Listing
    // -----------------------------
    for (let i = 0; i < items.length; i++) {
        let itemWrapper = document.createElement("div");
        itemWrapper.className = "itemWrapper";
        itemWrapper.draggable = true;

        itemWrapper.addEventListener("click", () => {
            addItemToTrade(items[i]);
        });

        itemWrapper.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("item", JSON.stringify(items[i]));
        });

        let itemImage = document.createElement("img");
        itemImage.className = "itemImage";
        itemImage.src = `./images/items/${items[i].image}`;

        let itemLabel = document.createElement("p");
        itemLabel.className = "itemLabel";
        itemLabel.textContent = items[i].name;

        let itemType = document.createElement("p");
        itemType.className = "itemType";
        itemType.textContent = ItemTypes.toString(items[i].type);

        let itemMWValueWrapper = document.createElement("div");
        itemMWValueWrapper.className = "valueWrapper";
        itemMWValueWrapper.innerHTML = `
            <p class="valueLabel">MW Value:</p>
            <p class="valueField">${numberWithCommas(items[i].mwvalue)}</p>
        `;

        itemWrapper.appendChild(itemImage);
        itemWrapper.appendChild(itemLabel);
        itemWrapper.appendChild(itemType);
        itemWrapper.appendChild(itemMWValueWrapper);

        itemDisplayWrapper.appendChild(itemWrapper);
    }

    // -----------------------------
    // Trade Calculator UI
    // -----------------------------
    let tradeCalculator = document.createElement("div");

    tradeCalculator.innerHTML = `
        <div align="center">
            <font color="white">
                <h2>TRADE CALCULATOR</h2>
            </font>
        </div>

        <div class="trade-container">
            <div class="side" id="you-side">
                <div class="total">TRADE VALUE: <span>0</span></div>
                <div class="slot-grid">
                    ${"<div class='slot plus-slot'></div>".repeat(8)}
                </div>
                <div style="text-align:center;color:white; font-size:24px;margin-top:10px;"><u>YOU</u></div>
            </div>

            <div class="side" id="them-side">
                <div class="total">TRADE VALUE: <span>0</span></div>
                <div class="slot-grid">
                    ${"<div class='slot plus-slot'></div>".repeat(8)}
                </div>
                <div style="text-align:center; font-size:24px;color:white;margin-top:10px;"><u>THEM</u></div>
            </div>
        </div>
    `;
    tradeCalculator.id = "tradeCalculatorWrapper";

    itemsWrapper.appendChild(tradeCalculator);
    itemsWrapper.appendChild(itemFeatureWrapper);
    itemsWrapper.appendChild(itemDisplayWrapper);

    document.getElementById("contentWrapper").appendChild(itemsWrapper);

    updateItemFilter();

    // ------------------------------------------
    // Enable drag + drop between slots
    // ------------------------------------------
    const slots = document.querySelectorAll('.slot');

    // Assign unique IDs to each slot
    let index = 0;
    slots.forEach(slot => {
        slot.dataset.slotId = "slot-" + index++;

        slot.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        slot.addEventListener('drop', (event) => {
            event.preventDefault();

            const itemData = event.dataTransfer.getData("item");
            const sourceSlotId = event.dataTransfer.getData("sourceSlotId");
            const item = JSON.parse(itemData);

            const sourceSlot = document.querySelector(`[data-slot-id="${sourceSlotId}"]`);

            // CASE 1: Dropping into empty slot
            if (!slot.hasChildNodes()) {
                addItemToSlot(item, slot);
                if (sourceSlot && sourceSlot !== slot) sourceSlot.innerHTML = "";
                updateTradeValue();
                return;
            }

            // CASE 2: Swap items
            const targetEl = slot.firstChild;

            const targetItem = {
                name: targetEl.querySelector("p").textContent,
                image: targetEl.querySelector("img").src.split("/").pop(),
                mwvalue: parseFloat(targetEl.dataset.value)
            };

            slot.innerHTML = "";
            if (sourceSlot) sourceSlot.innerHTML = "";

            addItemToSlot(item, slot);
            if (sourceSlot) addItemToSlot(targetItem, sourceSlot);

            updateTradeValue();
        });

    //-------------------------------------------------------------
    // Add and delete individual imgs in trade calc containers
    //-------------------------------------------------------------
    
    // ------------------------------------------------------------
    // Remove your imgs in trade calc containers
    //-------------------------------------------------------------

    // ------------------------------------------------------------
    // Remove their imgs in trade calc containers
    //-------------------------------------------------------------

    });
}

// Add to YOU by default
function addItemToTrade(item) {
    const side = document.querySelector("#you-side .slot");
    addItemToSlot(item, side);
}

// Add an item into a specific slot
function addItemToSlot(item, slot) {
    const itemElement = document.createElement("div");
    itemElement.className = "itemInSlot";
    itemElement.draggable = true;

    itemElement.dataset.value = item.mwvalue;

    // Allow item itself to be dragged
    itemElement.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("item", JSON.stringify(item));
        event.dataTransfer.setData("sourceSlotId", slot.dataset.slotId);
    });

    const itemImage = document.createElement("img");
    itemImage.className = "itemImage";
    itemImage.src = `./images/items/${item.image}`;

    const itemLabel = document.createElement("p");
    itemLabel.textContent = item.name;

    const itemValue = document.createElement("p");
    itemValue.className = "valueField";
    itemValue.textContent = numberWithCommas(item.mwvalue);

    itemElement.appendChild(itemImage);

    slot.innerHTML = "";
    slot.appendChild(itemElement);

    updateTradeValue();
}

// Recalculate totals
function updateTradeValue() {
    const youSlots = document.querySelectorAll("#you-side .slot");
    const themSlots = document.querySelectorAll("#them-side .slot");

    let totalYou = 0;
    let totalThem = 0;

    youSlots.forEach(slot => {
        if (slot.hasChildNodes()) {
            const item = slot.firstChild;
            totalYou += parseFloat(item.dataset.value);
        }
    });

    themSlots.forEach(slot => {
        if (slot.hasChildNodes()) {
            const item = slot.firstChild;
            totalThem += parseFloat(item.dataset.value);
        }
    });

    document.querySelector("#you-side .total span").textContent =
        numberWithCommas(totalYou);
    document.querySelector("#them-side .total span").textContent =
        numberWithCommas(totalThem);
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

function getMWValueOfItem(itemName) {
    let item = items.find(item => item.name === itemName);

    return item.mwvalue;
}

function getGalaxyValueOfItem(itemName) {
    let item = items.find(item => item.name === itemName);

    return item.galaxyvalue;
}

function getSTKValueOfItem(itemName) {
    let item = items.find(item => item.name === itemName);

    return item.stkvalue;
}

function updateItemFilter() {
    let items = document.getElementsByClassName("itemWrapper");

    for (let item of items) {
        let label = item.getElementsByClassName("itemLabel")[0].textContent;
        let type = ItemTypes.fromString(item.getElementsByClassName("itemType")[0].textContent);

        if ((label.toLowerCase().includes(itemFilterText.toLowerCase()) || itemFilterText == "") && (itemFiltered[type])) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    }

    if (!document.getElementById("filterDropdown")) {
        return;
    }

    let sortValue = filterOptions.indexOf(document.getElementById("filterDropdown").value);

    let itemDisplayWrapper = document.getElementById("itemDisplayWrapper")
    let itemArray = Array.from(itemDisplayWrapper.children);

    console.log(sortValue);
    switch (sortValue) {
        case 0:
            itemArray.sort((a, b) => {
                aString = a.getElementsByClassName("itemLabel")[0].textContent;
                bString = b.getElementsByClassName("itemLabel")[0].textContent;
                return aString.toLowerCase().localeCompare(bString.toLowerCase());
            });
            break;
        case 1:
            itemArray.sort((a, b) => {
                aType = ItemTypes.fromString(a.getElementsByClassName("itemType")[0].textContent);
                bType = ItemTypes.fromString(b.getElementsByClassName("itemType")[0].textContent);
                return aType - bType;
            });
            break;
        case 2:
            itemArray.sort((a, b) => {
                aMWvalue = getMWValueOfItem(a.getElementsByClassName("itemLabel")[0].textContent);
                bMWvalue = getMWValueOfItem(b.getElementsByClassName("itemLabel")[0].textContent);
                return aMWvalue - bMWvalue;
            });
            break;
        case 3:
            itemArray.sort((a, b) => {
                aMWvalue = getMWValueOfItem(a.getElementsByClassName("itemLabel")[0].textContent);
                bMWvalue = getMWValueOfItem(b.getElementsByClassName("itemLabel")[0].textContent);
                return bMWvalue - aMWvalue;
            });
            break;
        case 4:
            itemArray.sort((a, b) => {
                aGalaxyvalue = getGalaxyValueOfItem(a.getElementsByClassName("itemLabel")[0].textContent);
                bGalaxyvalue = getGalaxyValueOfItem(b.getElementsByClassName("itemLabel")[0].textContent);
                return aGalaxyvalue - bGalaxyvalue;
            });
            break;
        case 5:
            itemArray.sort((a, b) => {
                aGalaxyvalue = getGalaxyValueOfItem(a.getElementsByClassName("itemLabel")[0].textContent);
                bGalaxyvalue = getGalaxyValueOfItem(b.getElementsByClassName("itemLabel")[0].textContent);
                return bGalaxyvalue - aGalaxyvalue;
            });
            break;
        case 6:
            itemArray.sort((a, b) => {
                aSTKvalue = getSTKValueOfItem(a.getElementsByClassName("itemLabel")[0].textContent);
                bSTKvalue = getSTKValueOfItem(b.getElementsByClassName("itemLabel")[0].textContent);
                return aSTKvalue - bSTKvalue;
            });
            break;
        case 7:
            itemArray.sort((a, b) => {
                aSTKvalue = getSTKValueOfItem(a.getElementsByClassName("itemLabel")[0].textContent);
                bSTKvalue = getSTKValueOfItem(b.getElementsByClassName("itemLabel")[0].textContent);
                return bSTKvalue - aSTKvalue;
            });
            break;
    }

    itemArray.forEach(itemElement => itemDisplayWrapper.appendChild(itemElement));
}

window.setInterval(updateCountdown, 200);
