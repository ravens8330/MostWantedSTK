class ItemTypes {
    static #_KNIFE = 0;
    static #_CABIN = 1;

    static get KNIFE() { return this.#_KNIFE; }
    static get CABIN() { return this.#_CABIN; }
}

const items = [
    {
        image: "example-item.jpg",
        name: "Example Item",
        type: ItemTypes.KNIFE,
        mwvalue: 25000,
        galaxyvalue: 20000,
        stkvalue: 15000
    },
    {
        image: "cool-image.jpg",
        name: "Cool Item",
        type: ItemTypes.CABIN,
        mwvalue: 15000,
        galaxyvalue: 10000,
        stkvalue: 99999
    },
    {
        image: "Grimsley's Slycer.jpg",
        name: "Grimsley's Slycer",
        type: ItemTypes.CABIN,
        mwvalue: 6,
        galaxyvalue: 5,
        stkvalue: 99999999
    }
];

const tournaments = [
    {
        name: "Reach for Gold",
        date: new Date(Date.UTC(2025, 8, 6, 16, 0, 0, 0)),
        video: "reach_for_gold.mov",
    },
    {
        name: "The Golden Goat",
        date: new Date(Date.UTC(2025, 8, 13, 16, 0, 0, 0)),
        video: "the_golden_goat.mov"
    }
];

const staffMembers = [
    {
        title: "Owner & Admin",
        nickname: "MW CoOwner Alice",
        handle: "@luna131583",
        link: "https://www.roblox.com/users/3866793566/profile"
    },
    {
        title: "Owner & Admin",
        nickname: "MWxFlowerXo",
        handle: "@fl0wers4days",
        link: "https://www.roblox.com/users/2962129336/profile",
    },
    {
        title: "Owner & Admin",
        nickname: "xxxth3_goatxxx",
        handle: "@XxxTh3_GoatxxX",
        link: "https://www.roblox.com/users/2350981953/profile"
    },
    {
        title: "CM & Lead Tourney Host",
        nickname: "MWTxBamaRoo22x",
        handle: "@BamaRoo22",
        link: "https://www.roblox.com/users/5614807769/profile"
    },
    {
        title: "Mod & Tech & Host",
        nickname: "MWXxRavens8330xXRAV",
        handle: "@ravens8330",
        link: "https://www.roblox.com/users/1637031057/profile"
    },
    {
        title: "Mod",
        nickname: "KatrinaXmw",
        handle: "@Katrinagiselle",
        link: "https://www.roblox.com/users/2378430206/profile"
    },
    {
        title: "Mod & Farm Lead",
        nickname: "TREEXMW",
        handle: "@xXShakinmybranchesXx",
        link: "https://www.roblox.com/users/1524570753/profile"
    },
    {
        title: "Mod & Farm Lead",
        nickname: "MWxXRoyaltyXx",
        handle: "@kacprorxd",
        link: "https://www.roblox.com/users/673573315/profile"
    },
    {
        title: "Farm Lead",
        nickname: "2Many",
        handle: "@2ManyPoopPatrols",
        link: "https://www.roblox.com/users/2396384953/profile"
    },
    {
        title: "Farm Lead",
        nickname: "xBlackAngelxMWx",
        handle: "@XbeXcuteX",
        link: "https://www.roblox.com/users/2335485423/profile"
    },
    {
        title: "Farm Lead",
        nickname: "MWxXMeepYXx",
        handle: "@MeepTVonly",
        link: "https://www.roblox.com/users/5712802915/profile"
    },
    {
        title: "Mod & Farm Lead",
        nickname: "Angelrosalve_MW",
        handle: "@mommyp331",
        link: "https://www.roblox.com/users/6098423687/profile",
    },
    {
        title: "Farm Lead",
        nickname: "MWxCahPray_x",
        handle: "@cahmusa",
        link: "https://www.roblox.com/users/3665348206/profile"
    },
    {
        title: "Farm Lead",
        nickname: "MWxMeelyxSTK",
        handle: "@Meelymo123",
        link: "https://www.roblox.com/users/2718840541/profile"
    },
    {
        title: "Farm Lead",
        nickname: "MWxWihelminaAxX",
        handle: "@zeya_452",
        link: "https://www.roblox.com/users/5014961500/profile"
    },
    {
        title: "Farm Lead",
        nickname: "MxiDXRK.AURAZx",
        handle: "@Azfelix_6557",
        link: "https://www.roblox.com/users/7216750872/profile"
    },
    {
        title: "Farm Lead",
        nickname: "MW GUERA",
        handle: "@LaGuera417",
        link: "https://www.roblox.com/users/1581059726/profile"
    }
];

const youtubers = [
    {
        name: "Bunster STK",
        link: "https://www.youtube.com/@Bunsterstk",
    },
    {
        name: "Clamton",
        link: "https://www.youtube.com/@CIamton",
    },
    {
        name: "EternalX0",
        link: "https://www.youtube.com/channel/UCdhwtNcdxLTTrHP2xsPNZwQ",
    },
    {
        name: "STKWARRIOR",
        link: "https://www.youtube.com/channel/UCyXviPD71qzkDkvjhoc3h2A",
    },
    {
        name: "StuSTK",
        link: "https://www.youtube.com/channel/UCYG5jOJtzcV3w-b1yua2x2Q",
    },
    {
        name: "Crazy_GamerSTK",
        link: "https://youtube.com/@smukgamer01?si=A_JcbCZaaiFMzQ16",
    },
    {
        name: "Roblox",
        link: "https://www.youtube.com/@roblox-user07",
    },
];