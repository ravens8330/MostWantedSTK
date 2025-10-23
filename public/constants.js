class ItemTypes {
    static #_KNIFE = 0;
    static #_CABIN = 1;
    static #_KILLER = 2;
    static #_CRATE = 3;

    static get KNIFE() { return this.#_KNIFE; }
    static get CABIN() { return this.#_CABIN; }
    static get KILLER() { return this.#_KILLER; }
    static get CRATE() { return this.#_CRATE; }

    static get values() {
        return [this.KNIFE, this.CABIN, this.KILLER, this.CRATE];
    }

    static get #names() {
        return {
            [this.#_KNIFE]: "KNIFE",
            [this.#_CABIN]: "CABIN",
            [this.#_KILLER]: "KILLER",
            [this.#_CRATE]: "CRATE",
        };
    }

    static get #valuesByName() {
        const names = this.#names;
        return Object.fromEntries(
            Object.entries(names).map(([k, v]) => [v, Number(k)])
        );
    }

    static toString(type) {
        return this.#names[type] ?? `UNKNOWN(${type})`;
    }

    static fromString(name) {
        return this.#valuesByName[name.toUpperCase()] ?? null;
    }
}

const items = [
    {
        image: "2nd birthday blade.jpg",
        name: "Example Item",
        type: ItemTypes.KNIFE,
        mwvalue: 170000
    },
    {
        image: "axe of the reaper.jpg",
        name: "Axe of the Reaper",
        type: ItemTypes.KNIFE,
        mwvalue: 2500000
    },
    {
        image: "Grimsley's Slycer.jpg",
        name: "Grimsley's Slycer",
        type: ItemTypes.KNIFE,
        mwvalue: 3750000
    },
    {
        image: "milky way.jpg",
        name: "Milky Way",
        type: ItemTypes.KNIFE,
        mwvalue: 22500000 
    },
    {
        image: "galaxy.jpg",
        name: "Galaxy",
        type: ItemTypes.KNIFE,
        mwvalue: 200000000
    },
    {
        image: "cosmic axecution.jpg",
        name: "Cosmic Axecution",
        type: ItemTypes.KNIFE,
        mwvalue: 175000
    },
    {
        image: "dynamite dredger.jpg",
        name: "Dynamite Dredger",
        type: ItemTypes.KNIFE,
        mwvalue: 21000000
    },
    {
        image: "Skystave.jpg",
        name: "Skystave",
        type: ItemTypes.KNIFE,
        mwvalue: 75000
    },
    {
        image: "Void Pickaxe.jpg",
        name: "Void Pickaxe",
        type: ItemTypes.KNIFE,
        mwvalue: 230000 
    },
    {
        image: "Fang of Fortune.jpg",
        name: "Fang of Fortune",
        type: ItemTypes.KNIFE,
        mwvalue: 75000 
    },
    {
        image: "Glacial Lance.jpg",
        name: "Glacial Lance",
        type: ItemTypes.KNIFE,
        mwvalue: 100000 
    },
    {
        image: "Glacial Titan.jpg",
        name: "Glacial Titan",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Snowshard Blade.jpg",
        name: "Snowshard Blade",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Snuggle Slycer.jpg",
        name: "Snuggle Slycer",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Frost Edge.jpg",
        name: "Frost Edge",
        type: ItemTypes.KNIFE,
        mwvalue: 100000 
    },
    {
        image: "Ghostly Broomstick.jpg",
        name: "Ghostly Broomstick",
        type: ItemTypes.KNIFE,
        mwvalue: 150000
    }, 
    {
        image: "Ghostly Candle.jpg",
        name: "Ghostly Candle",
        type: ItemTypes.KNIFE,
        mwvalue: 150000 
    },
    {
        image: "Ghostly Lantern.jpg",
        name: "Ghostly Lantern",
        type: ItemTypes.KNIFE,
        mwvalue: 150000 
    },
    {
        image: "Ghostly Scallywag.jpg",
        name: "Ghostly Scallywag",
        type: ItemTypes.KNIFE,
        mwvalue: 150000
    },
    {
        image: "Ghostly Splinter.jpg",
        name: "Ghostly Splinter",
        type: ItemTypes.KNIFE,
        mwvalue: 150000
    },
    {
        image: "Ghostly Webbed Hatchet.jpg",
        name: "Ghostly Webbed Hatchet",
        type: ItemTypes.KNIFE,
        mwvalue: 150000
    },
    {
        image: "Shard of Winter.jpg",
        name: "Shard of Winter",
        type: ItemTypes.KNIFE,
        mwvalue: 0
    },
    {
        image: "Witch's Broomstick.jpg",
        name: "Witch's Broomstick",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Arcane Candle.jpg",
        name: "Arcane Candle",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Barbaric Junk Reclaimer.jpg",
        name: "Barbaric Junk Reclaimer",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Cursed Scallywag.jpg",
        name: "Cursed Scallywag",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "DYN-4MO.jpg",
        name: "DYN-4MO",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Hallowed Lantern.jpg",
        name: "Hallowed Lantern",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Phaseblade Incinerator.jpg",
        name: "Phaseblade Incinerator",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Pizza Cutter.jpg",
        name: "Pizza Cutter",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "The World First Mystifier.jpg",
        name: "The World First Mystifier",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Armen's Heart.jpg",
        name: "Armen's Heart",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    }, 
    {
        image: "Cherished Heartblade.jpg",
        name: "Cherished Heartblade",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Cold Cupid Heartstopper.jpg",
        name: "Cold Cupid Heartstopper",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Cold Heartsplitter Axe.jpg",
        name: "Cold Heartsplitter Axe",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Heartsplitter Axe.jpg",
        name: "Heartsplitter Axe",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Radiant Desire.jpg",
        name: "Radiant Desire",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Radiant Heartseeker.jpg",
        name: "Radiant Heartseeker",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Rudolph's Ravager.jpg",
        name: "Rudolph's Ravager",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Umbra's Heart.jpg",
        name: "Umbra's Heart",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Glaive of the Void.jpg",
        name: "Glaive of the Void",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Northsunder.jpg",
        name: "Northsunder",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Polar Ice Wall.jpg",
        name: "Polar Ice Wall",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Polar Lance.jpg",
        name: "Polar Lance",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Polar Ravager.jpg",
        name: "Polar Ravager",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Polarbane.jpg",
        name: "Polarbane",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Polarsunder.jpg",
        name: "Polarsunder",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Squeeky Void Hammer.jpg",
        name: "Squeeky Void Hammer",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Winterbane.jpg",
        name: "Winterbane",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Searing Wand.jpg",
        name: "Searing Wand",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Staff of the Void.jpg",
        name: "Staff of the Void",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Void Balloon Sword.jpg",
        name: "Void Balloon Sword",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Void Bat.jpg",
        name: "Void Bat",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Void Latern.jpg",
        name: "Void Latern",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Void Rune.jpg",
        name: "Void Rune",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Wand of the Void.jpg",
        name: "Wand of the Void",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Glaive of the Hallowed.jpg",
        name: "Glaive of the Hallowed",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Advernica.jpg",
        name: "Advernica",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Cactus.jpg",
        name: "Cactus",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },    
    {
        image: "Dark Rune.jpg",
        name: "Dark Rune",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Harvest Lantern.jpg",
        name: "Harvest Lantern",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Marrowell.jpg",
        name: "Marrowell",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Noctis AEterna.jpg",
        name: "Noctis AEterna",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Purplexia Prime.jpg",
        name: "Purplexia Prime",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Purplexia Rex.jpg",
        name: "Purplexia Rex",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Tua Glas.jpg",
        name: "Tua Glas",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Claiumh Glas.jpg",
        name: "Claiumh Glas",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Cold Heart.jpg",
        name: "Cp;d Heart",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Cold Hearted Cupid's Bow.jpg",
        name: "Cold Hearted Cupid's Bow",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Cupid's Bow.jpg",
        name: "Cupid's Bow",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Devotion.jpg",
        name: "Devotion",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Empress Lillian's Bow.jpg",
        name: "Empress Lillian's Bow",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Frostbreath.jpg",
        name: "Frostbreath",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Gloomhammer.jpg",
        name: "Gloomhammer",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Poltergeist Scythe.jpg",
        name: "Poltergeust Scythe",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Arachnophobia.jpg",
        name: "Arachnophobia",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Cupid's Heartstopper.jpg",
        name: "Cupid's Heartstopper",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Deadly Dark Scythe.jpg",
        name: "Deadly Dark Scythe",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Permafrost.jpg",
        name: "Permafrost",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Shamrock Scimitar.jpg",
        name: "Shamrock Scimitar",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Axe of the Fairy.jpg",
        name: "Axe of the Fairy",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "cool-image.jpg",
        name: "cool-image",
        type: ItemTypes.KILLER,
        mwvalue: 25000
    },
    {
        image: "cool-image.jpg",
        name: "Grimsley's Slycer",
        type: ItemTypes.CABIN,
        mwvalue: 6
    },
    {
        image: "1st Generation Crate 1.jpg",
        name: "1st Generation Crate",
        type: ItemTypes.CRATE,
        mwvalue: 6
    },
    
    
   
];

// Where to add new tournaments
const tournaments = [
    {
        name: "MOST WANTED NOVEMBER SURVIVAL CHALLENGE",
        date: new Date(Date.UTC(2025, 10, 9, 16, 0, 0, 0)),
        video: "MOST WANTED NOVEMBER SURVIVAL CHALLENGE.mov",
    },    
];

const staffMembers = [
    {
        title: "Owner & Admin",
        nickname: "MW CoOwner Alice",
        handle: "@luna131583",
        link: "https://www.roblox.com/users/3866793566/profile",
        image: "staff0.png"
    },
    {
        title: "Owner & Admin",
        nickname: "MWxFlowerXo",
        handle: "@fl0wers4days",
        link: "https://www.roblox.com/users/2962129336/profile",
        image: "staff1.png"
    },
    {
        title: "Owner & Admin",
        nickname: "xxxth3_goatxxx",
        handle: "@XxxTh3_GoatxxX",
        link: "https://www.roblox.com/users/2350981953/profile",
        image: "staff2.png"
    },
    {
        title: "CM & Lead Tourney Host",
        nickname: "MWTxBamaRoo22x",
        handle: "@BamaRoo22",
        link: "https://www.roblox.com/users/5614807769/profile",
        image: "staff3.png"
    },
    {
        title: "Mod & Tech & Host",
        nickname: "MWXxRavens8330xXRAV",
        handle: "@ravens8330",
        link: "https://www.roblox.com/users/1637031057/profile",
        image: "staff4.png"
    },
    {
        title: "Mod",
        nickname: "KatrinaXmw",
        handle: "@Katrinagiselle",
        link: "https://www.roblox.com/users/2378430206/profile",
        image: "staff5.png"
    },
    {
        title: "Mod & Farm Lead",
        nickname: "TREEXMW",
        handle: "@xXShakinmybranchesXx",
        link: "https://www.roblox.com/users/1524570753/profile",
        image: "staff6.png"
    },
    {
        title: "Mod & Farm Lead",
        nickname: "MWxXRoyaltyXx",
        handle: "@kacprorxd",
        link: "https://www.roblox.com/users/673573315/profile",
        image: "staff7.png"
    },
    {
        title: "Farm Lead",
        nickname: "2Many",
        handle: "@2ManyPoopPatrols",
        link: "https://www.roblox.com/users/2396384953/profile",
        image: "staff8.png"
    },
    {
        title: "Farm Lead",
        nickname: "xBlackAngelxMWx",
        handle: "@XbeXcuteX",
        link: "https://www.roblox.com/users/2335485423/profile",
        image: "staff9.png"
    },
    {
        title: "Farm Lead",
        nickname: "MWxXMeepYXx",
        handle: "@MeepTVonly",
        link: "https://www.roblox.com/users/5712802915/profile",
        image: "staff10.png"
    },
    {
        title: "Mod & Farm Lead",
        nickname: "Angelrosalve_MW",
        handle: "@mommyp331",
        link: "https://www.roblox.com/users/6098423687/profile",
        image: "staff11.png"
    },
    {
        title: "Farm Lead",
        nickname: "MWxCahPray_x",
        handle: "@cahmusa",
        link: "https://www.roblox.com/users/3665348206/profile",
        image: "staff12.png"
    },
    {
        title: "Farm Lead",
        nickname: "MWxMeelyxSTK",
        handle: "@Meelymo123",
        link: "https://www.roblox.com/users/2718840541/profile",
        image: "staff13.png"
    },
    {
        title: "Farm Lead",
        nickname: "MWxWihelminaAxX",
        handle: "@zeya_452",
        link: "https://www.roblox.com/users/5014961500/profile",
        image: "staff14.png"
    },
    {
        title: "Farm Lead",
        nickname: "MW GUERA",
        handle: "@LaGuera417",
        link: "https://www.roblox.com/users/1581059726/profile",
        image: "staff15.png"
    },
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