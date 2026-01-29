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
        mwvalue: 100000
    }, 
    {
        image: "Ghostly Candle.jpg",
        name: "Ghostly Candle",
        type: ItemTypes.KNIFE,
        mwvalue: 130000 
    },
    {
        image: "Ghostly Lantern.jpg",
        name: "Ghostly Lantern",
        type: ItemTypes.KNIFE,
        mwvalue: 100000 
    },
    {
        image: "Ghostly Scallywag.jpg",
        name: "Ghostly Scallywag",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Ghostly Splinter.jpg",
        name: "Ghostly Splinter",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Ghostly Webbed Hatchet.jpg",
        name: "Ghostly Webbed Hatchet",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Shard of Winter.jpg",
        name: "Shard of Winter",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Witch's Broomstick.jpg",
        name: "Witch's Broomstick",
        type: ItemTypes.KNIFE,
        mwvalue: 75000
    },
    {
        image: "Arcane Candle.jpg",
        name: "Arcane Candle",
        type: ItemTypes.KNIFE,
        mwvalue: 75000
    },
    {
        image: "Barbaric Junk Reclaimer.jpg",
        name: "Barbaric Junk Reclaimer",
        type: ItemTypes.KNIFE,
        mwvalue: 37500 
    },
    {
        image: "Cursed Scallywag.jpg",
        name: "Cursed Scallywag",
        type: ItemTypes.KNIFE,
        mwvalue: 12500 
    },
    {
        image: "DYN-4MO.jpg",
        name: "DYN-4MO",
        type: ItemTypes.KNIFE,
        mwvalue: 600000 
    },
    {
        image: "Hallowed Lantern.jpg",
        name: "Hallowed Lantern",
        type: ItemTypes.KNIFE,
        mwvalue: 75000
    },
    {
        image: "Phaseblade Incinerator.jpg",
        name: "Phaseblade Incinerator",
        type: ItemTypes.KNIFE,
        mwvalue: 10000000
    },
    {
        image: "Pizza Cutter.jpg",
        name: "Pizza Cutter",
        type: ItemTypes.KNIFE,
        mwvalue: 100000 
    },
    {
        image: "The World First Mystifier.jpg",
        name: "The World First Mystifier",
        type: ItemTypes.KNIFE,
        mwvalue: 125000
    },
    {
        image: "Armen's Heart.jpg",
        name: "Armen's Heart",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    }, 
    {
        image: "Cherished Heartblade.jpg",
        name: "Cherished Heartblade",
        type: ItemTypes.KNIFE,
        mwvalue: 125000
    },
    {
        image: "Cold Cupid Heartstopper.jpg",
        name: "Cold Cupid Heartstopper",
        type: ItemTypes.KNIFE,
        mwvalue: 125000
    },
    {
        image: "Cold Heartsplitter Axe.jpg",
        name: "Cold Heartsplitter Axe",
        type: ItemTypes.KNIFE,
        mwvalue: 75000
    },
    {
        image: "Heartsplitter Axe.jpg",
        name: "Heartsplitter Axe",
        type: ItemTypes.KNIFE,
        mwvalue: 75000
    },
    {
        image: "Radiant Desire.jpg",
        name: "Radiant Desire",
        type: ItemTypes.KNIFE,
        mwvalue: 1150000
    },
    {
        image: "Radiant Heartseeker.jpg",
        name: "Radiant Heartseeker",
        type: ItemTypes.KNIFE,
        mwvalue: 3150000
    },
    {
        image: "Rudolph's Ravager.jpg",
        name: "Rudolph's Ravager",
        type: ItemTypes.KNIFE,
        mwvalue: 37500
    },
    {
        image: "Umbra's Heart.jpg",
        name: "Umbra's Heart",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Glaive of the Void.jpg",
        name: "Glaive of the Void",
        type: ItemTypes.KNIFE,
        mwvalue: 300000
    },
    {
        image: "Northsunder.jpg",
        name: "Northsunder",
        type: ItemTypes.KNIFE,
        mwvalue: 75000
    },
    {
        image: "Polar Ice Wall.jpg",
        name: "Polar Ice Wall",
        type: ItemTypes.KNIFE,
        mwvalue: 125000
    },
    {
        image: "Polar Lance.jpg",
        name: "Polar Lance",
        type: ItemTypes.KNIFE,
        mwvalue: 125000
    },
    {
        image: "Polar Ravager.jpg",
        name: "Polar Ravager",
        type: ItemTypes.KNIFE,
        mwvalue: 125000 
    },
    {
        image: "Polarbane.jpg",
        name: "Polarbane",
        type: ItemTypes.KNIFE,
        mwvalue: 150000
    },
    {
        image: "Polarsunder.jpg",
        name: "Polarsunder",
        type: ItemTypes.KNIFE,
        mwvalue: 125000
    },
    {
        image: "Squeeky Void Hammer.jpg",
        name: "Squeeky Void Hammer",
        type: ItemTypes.KNIFE,
        mwvalue: 250000
    },
    {
        image: "Winterbane.jpg",
        name: "Winterbane",
        type: ItemTypes.KNIFE,
        mwvalue: 75000
    },
    {
        image: "Searing Wand.jpg",
        name: "Searing Wand",
        type: ItemTypes.KNIFE,
        mwvalue: 37500
    },
    {
        image: "Staff of the Void.jpg",
        name: "Staff of the Void",
        type: ItemTypes.KNIFE,
        mwvalue: 250000
    },
    {
        image: "Void Balloon Sword.jpg",
        name: "Void Balloon Sword",
        type: ItemTypes.KNIFE,
        mwvalue: 250000
    },
    {
        image: "Void Bat.jpg",
        name: "Void Bat",
        type: ItemTypes.KNIFE,
        mwvalue: 175000
    },
    {
        image: "Void Latern.jpg",
        name: "Void Latern",
        type: ItemTypes.KNIFE,
        mwvalue: 250000
    },
    {
        image: "Void Rune.jpg",
        name: "Void Rune",
        type: ItemTypes.KNIFE,
        mwvalue: 350000
    },
    {
        image: "Wand of the Void.jpg",
        name: "Wand of the Void",
        type: ItemTypes.KNIFE,
        mwvalue: 175000
    },
    {
        image: "Glaive of the Hallowed.jpg",
        name: "Glaive of the Hallowed",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Advernica.jpg",
        name: "Advernica",
        type: ItemTypes.KNIFE,
        mwvalue: 12500
    },
    {
        image: "Cactus.jpg",
        name: "Cactus",
        type: ItemTypes.KNIFE,
        mwvalue: 125000
    },    
    {
        image: "Dark Rune.jpg",
        name: "Dark Rune",
        type: ItemTypes.KNIFE,
        mwvalue: 125000
    },
    {
        image: "Harvest Lantern.jpg",
        name: "Harvest Lantern",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Marrowell.jpg",
        name: "Marrowell",
        type: ItemTypes.KNIFE,
        mwvalue: 12500
    },
    {
        image: "Noctis AEterna.jpg",
        name: "Noctis AEterna",
        type: ItemTypes.KNIFE,
        mwvalue: 700000 
    },
    {
        image: "Purplexia Prime.jpg",
        name: "Purplexia Prime",
        type: ItemTypes.KNIFE,
        mwvalue: 37500
    },
    {
        image: "Purplexia Rex.jpg",
        name: "Purplexia Rex",
        type: ItemTypes.KNIFE,
        mwvalue: 37500
    },
    {
        image: "Tua Glas.jpg",
        name: "Tua Glas",
        type: ItemTypes.KNIFE,
        mwvalue: 125000
    },
    {
        image: "Claiumh Glas.jpg",
        name: "Claiumh Glas",
        type: ItemTypes.KNIFE,
        mwvalue: 200000 
    },
    {
        image: "Cold Heart.jpg",
        name: "Cp;d Heart",
        type: ItemTypes.KNIFE,
        mwvalue: 200000
    },
    {
        image: "Cold Hearted Cupid's Bow.jpg",
        name: "Cold Hearted Cupid's Bow",
        type: ItemTypes.KNIFE,
        mwvalue: 300000
    },
    {
        image: "Cupid's Bow.jpg",
        name: "Cupid's Bow",
        type: ItemTypes.KNIFE,
        mwvalue: 200000
    },
    {
        image: "Devotion.jpg",
        name: "Devotion",
        type: ItemTypes.KNIFE,
        mwvalue: 200000
    },
    {
        image: "Empress Lillian's Bow.jpg",
        name: "Empress Lillian's Bow",
        type: ItemTypes.KNIFE,
        mwvalue: 450000 
    },
    {
        image: "Frostbreath.jpg",
        name: "Frostbreath",
        type: ItemTypes.KNIFE,
        mwvalue: 1500000 
    },
    {
        image: "Gloomhammer.jpg",
        name: "Gloomhammer",
        type: ItemTypes.KNIFE,
        mwvalue: 100000
    },
    {
        image: "Poltergeist Scythe.jpg",
        name: "Poltergeust Scythe",
        type: ItemTypes.KNIFE,
        mwvalue: 525000
    },
    {
        image: "Arachnophobia.jpg",
        name: "Arachnophobia",
        type: ItemTypes.KNIFE,
        mwvalue: 800000
    },
    {
        image: "Cupid's Heartstopper.jpg",
        name: "Cupid's Heartstopper",
        type: ItemTypes.KNIFE,
        mwvalue: 275000
    },
    {
        image: "Deadly Dark Scythe.jpg",
        name: "Deadly Dark Scythe",
        type: ItemTypes.KNIFE,
        mwvalue: 1250000
    },
    {
        image: "Permafrost.jpg",
        name: "Permafrost",
        type: ItemTypes.KNIFE,
        mwvalue: 650000
    },
    {
        image: "Shamrock Scimitar.jpg",
        name: "Shamrock Scimitar",
        type: ItemTypes.KNIFE,
        mwvalue: 325000
    },
    {
        image: "Axe of the Fairy.jpg",
        name: "Axe of the Fairy",
        type: ItemTypes.KNIFE,
        mwvalue: 250000
    },
    {
        image: "Burrow.jpg",
        name: "Burrow",
        type: ItemTypes.CABIN,
        mwvalue: 200000
    },
    {
        image: "Direwick Tent.jpg",
        name: "Direwick Tent",
        type: ItemTypes.CABIN,
        mwvalue: 350000
    },
    {
        image: "Forest Cabin.jpg",
        name: "Forest Cabin",
        type: ItemTypes.CABIN,
        mwvalue: 50000
    },
    {
        image: "Gingerbread Cabin.jpg",
        name: "Ginberbread Cabin",
        type: ItemTypes.CABIN,
        mwvalue: 75000
    },
    {
        image: "Haunted Manor.jpg",
        name: "Haunted Manor",
        type: ItemTypes.CABIN,
        mwvalue: 350000
    },
    {
        image: "Krampus Workshop.jpg",
        name: "Krampus Workshop",
        type: ItemTypes.CABIN,
        mwvalue: 250000
    },
    {
        image: "Northern Cabin.jpg",
        name: "Northern Cabin",
        type: ItemTypes.CABIN,
        mwvalue: 50000
    },
    {
        image: "Saloon.jpg",
        name: "Saloon",
        type: ItemTypes.CABIN,
        mwvalue: 100000
    },
    {
        image: "Snow Castle.jpg",
        name: "Snow Castle",
        type: ItemTypes.CABIN,
        mwvalue: 2000000
    },
    {
        image: "Victorian Cabin.jpg",
        name: "Victorian Cabin",
        type: ItemTypes.CABIN,
        mwvalue: 125000
    },
    {
        image: "Watchtower Cabin.jpg",
        name: "Watchtower Cabin",
        type: ItemTypes.CABIN,
        mwvalue: 10000
    },
    {
        image: "Corrupt Cupid 2021.jpg",
        name: "Corrupt Cupid 2021",
        type: ItemTypes.KILLER,
        mwvalue: 600000
    },
    {
        image: "Corrupt Maya Rose.jpg",
        name: "Corrupt Maya Rose",
        type: ItemTypes.KILLER,
        mwvalue: 1100000
    },
    {
        image: "Corrupt Papa Roni.jpg",
        name: "Corrupt Papa Roni",
        type: ItemTypes.KILLER,
        mwvalue: 500000
    },
    {
        image: "Cosmic Grimsley.jpg",
        name: "Cosmic Grimsley",
        type: ItemTypes.KILLER,
        mwvalue: 600000
    },  
    {
        image: "Deadly Dark Reaper.jpg",
        name: "Deadly Dark Reaper",
        type: ItemTypes.KILLER,
        mwvalue: 1000000
    },  
    {
        image: "Ghost Grimsley.jpg",
        name: "Ghost Grimsley",
        type: ItemTypes.KILLER,
        mwvalue: 600000
    },  
    {
        image: "Polter-Clucky.jpg",
        name: "Polter Clucky",
        type: ItemTypes.KILLER,
        mwvalue: 550000
    },
    {
        image: "Poltergeist.jpg",
        name: "Poltergeist",
        type: ItemTypes.KILLER,
        mwvalue: 1000000
    },   
    {
        image: "Brutostein.jpg",
        name: "Brutostein",
        type: ItemTypes.KILLER,
        mwvalue: 175000
    }, 
    {
        image: "Clucky the Leprechaun 2020.jpg",
        name: "Clucky the Leprechaun 2020",
        type: ItemTypes.KILLER,
        mwvalue: 300000
    }, 
    {
        image: "Clucky the Leprechaun 2021.jpg",
        name: "Clucky the Leprechaun 2021",
        type: ItemTypes.KILLER,
        mwvalue: 150000
    }, 
    {
        image: "Corrupt Alfred.jpg",
        name: "Corrupt Alfred",
        type: ItemTypes.KILLER,
        mwvalue: 400000
    }, 
    {
        image: "Corrupt Beatrice.jpg",
        name: "Corrupt Beatrice",
        type: ItemTypes.KILLER,
        mwvalue: 200000
    }, 
    {
        image: "Corrupt Clucky.jpg",
        name: "Corrupt Clucky",
        type: ItemTypes.KILLER,
        mwvalue: 450000
    }, 
    {
        image: "Divine Cupid.jpg",
        name: "Divine Cupid",
        type: ItemTypes.KILLER,
        mwvalue: 450000
    }, 
    {
        image: "Empress Lillian.jpg",
        name: "Empress Lillian",
        type: ItemTypes.KILLER,
        mwvalue: 175000
    }, 
    {
        image: "Ghost Kringler.jpg",
        name: "Ghost Kringler",
        type: ItemTypes.KILLER,
        mwvalue: 250000
    }, 
    {
        image: "Grimsley.jpg",
        name: "Grimsley",
        type: ItemTypes.KILLER,
        mwvalue: 200000
    }, 
    {
        image: "Kringler.jpg",
        name: "Kringler",
        type: ItemTypes.KILLER,
        mwvalue: 175000
    }, 
    {
        image: "Santa Roni 2022.jpg",
        name: "Santa Roni 2022",
        type: ItemTypes.KILLER,
        mwvalue: 275000
    }, 
    {
        image: "Santa Roni 2023.jpg",
        name: "Santa Roni 2023",
        type: ItemTypes.KILLER,
        mwvalue: 175000
    }, 
    {
        image: "The Grim Reaper.jpg",
        name: "The Grim Reaper",
        type: ItemTypes.KILLER,
        mwvalue: 400000
    },  
    {
        image: "Clucky the Leprechaun 2022.jpg",
        name: "Clucky the Leprechaun 2022",
        type: ItemTypes.KILLER,
        mwvalue: 75000
    }, 
    {
        image: "Corrupt Cupid 2020.jpg",
        name: "Corrupt Cupid 2020",
        type: ItemTypes.KILLER,
        mwvalue: 125000
    }, 
    {
        image: "Corrupt Cupid 2025.jpg",
        name: "Corrupt Cupid 2025",
        type: ItemTypes.KILLER,
        mwvalue: 25000
    }, 
    {
        image: "Corrupt Santa.jpg",
        name: "Corrupt Santa",
        type: ItemTypes.KILLER,
        mwvalue: 50000
    }, 
    {
        image: "Corrupt Cupid 2022.jpg",
        name: "Corrupt Cupid 2022",
        type: ItemTypes.KILLER,
        mwvalue: 50000
    }, 
    {
        image: "Corrupt Frosty.jpg",
        name: "Corrupt Frosty",
        type: ItemTypes.KILLER,
        mwvalue: 100000
    }, 
    {
        image: "Dread.jpg",
        name: "Dread",
        type: ItemTypes.KILLER,
        mwvalue: 50000
    }, 
    {
        image: "Flotsam Direwick 2023.jpg",
        name: "Flotsam Direwick 2023",
        type: ItemTypes.KILLER,
        mwvalue: 37500
    }, 
    {
        image: "Flotsam Direwick 2024.jpg",
        name: "Flotsam Direwick 2024",
        type: ItemTypes.KILLER,
        mwvalue: 37500
    }, 
    {
        image: "Franz the Nutcracker.jpg",
        name: "Franz the Nutcracker",
        type: ItemTypes.KILLER,
        mwvalue: 100000
    }, 
    {
        image: "Ghostly Flotsam.jpg",
        name: "Ghostly Flotsam",
        type: ItemTypes.KILLER,
        mwvalue: 125000
    },
    {
        image: "Ghostly Scary Beary.jpg",
        name: "Ghostly Scary Beary",
        type: ItemTypes.KILLER,
        mwvalue: 37500
    },
    {
        image: "Krill.jpg",
        name: "Krill",
        type: ItemTypes.KILLER,
        mwvalue: 125000
    },
    {
        image: "Lucia the Lucky.jpg",
        name: "Lucia the Lucky",
        type: ItemTypes.KILLER,
        mwvalue: 125000
    },
    {
        image: "Malvus the Magician.jpg",
        name: "Malvus the Magician",
        type: ItemTypes.KILLER,
        mwvalue: 75000
    },
    {
        image: "Papa Roni.jpg",
        name: "Papa Roni",
        type: ItemTypes.KILLER,
        mwvalue: 100000
    },
    {
        image: "Present Head 2023.jpg",
        name: "Present Head 2023",
        type: ItemTypes.KILLER,
        mwvalue: 37500
    },
    {
        image: "Present Head.jpg",
        name: "Present Head",
        type: ItemTypes.KILLER,
        mwvalue: 50000
    },
    {
        image: "Professor Ratthew Cheeseworth.jpg",
        name: "Professor Ratthew Cheeseworth",
        type: ItemTypes.KILLER,
        mwvalue: 50000
    },
    {
        image: "Riley O'Stabby.jpg",
        name: "Riley O'Stabby",
        type: ItemTypes.KILLER,
        mwvalue: 125000
    },
    {
        image: "Scarlett the Cursed.jpg",
        name: "Scarlett the Cursed",
        type: ItemTypes.KILLER,
        mwvalue: 37500
    },
    {
        image: "Skadi the Ice Queen.jpg",
        name: "Skadi the Ice Queen",
        type: ItemTypes.KILLER,
        mwvalue: 125000
    },
    {
        image: "The Banshee.jpg",
        name: "The Banshee",
        type: ItemTypes.KILLER,
        mwvalue: 25000
    },
    {
        image: "Voldar.jpg",
        name: "Voldar",
        type: ItemTypes.KILLER,
        mwvalue: 50000
    },
    {
        image: "Armen the Eternal.jpg",
        name: "Armen the Eternal",
        type: ItemTypes.KILLER,
        mwvalue: 25000
    },
    {
        image: "Clucky the Leprechaun 2024.jpg",
        name: "Clucky the Leprechaun 2024",
        type: ItemTypes.KILLER,
        mwvalue: 25000
    },
    {
        image: "Corrupt Cupid 2024.jpg",
        name: "Corrupt Cupid 2024",
        type: ItemTypes.KILLER,
        mwvalue: 25000
    },
    {
        image: "Corrupt Santa 2023.jpg",
        name: "Corrupt Santa 2023",
        type: ItemTypes.KILLER,
        mwvalue: 25000
    },
    {
        image: "Jack Frost.jpg",
        name: "Jack Frost",
        type: ItemTypes.KILLER,
        mwvalue: 25000
    },
    {
        image: "Lyreth the Elf.jpg",
        name: "Lyreth the Elf",
        type: ItemTypes.KILLER,
        mwvalue: 25000
    },
    {
        image: "Skulk.jpg",
        name: "Skulk",
        type: ItemTypes.KILLER,
        mwvalue: 25000
    },
    {
        image: "Clucky the Leprechaun 2025.jpg",
        name: "Clucky the Leprechaun 2025",
        type: ItemTypes.KILLER,
        mwvalue: 12500
    },
    {
        image: "Layfa Ashwell.jpg",
        name: "Layfa Ashwell",
        type: ItemTypes.KILLER,
        mwvalue: 12500
    },
    {
        image: "Matilda.jpg",
        name: "Matilda",
        type: ItemTypes.KILLER,
        mwvalue: 6250
    },
    {
        image: "Mayor Marrow.jpg",
        name: "Mayor Marrow",
        type: ItemTypes.KILLER,
        mwvalue: 6250
    },
    {
        image: "Mr. Risus.jpg",
        name: "Mr Risus",
        type: ItemTypes.KILLER,
        mwvalue: 12500
    },    
    {
        image: "Scary Beary.jpg",
        name: "Scary Beary",
        type: ItemTypes.KILLER,
        mwvalue: 6250
    },    
    {
        image: "Scraphos the Searing 2023.jpg",
        name: "Scraphos the Searing 2023",
        type: ItemTypes.KILLER,
        mwvalue: 12500
    },    
    {
        image: "The Prospector.jpg",
        name: "The Prospector",
        type: ItemTypes.KILLER,
        mwvalue: 12500
    },    
    {
        image: "Ulzad.jpg",
        name: "Voldar",
        type: ItemTypes.KILLER,
        mwvalue: 6250
    },    
    {
        image: "Applejack the Butcher.jpg",
        name: "Applejack the Butcher",
        type: ItemTypes.KILLER,
        mwvalue: 1600
    },    
    {
        image: "Beatrice.jpg",
        name: "Beatrice",
        type: ItemTypes.KILLER,
        mwvalue: 500
    }, 
    {
        image: "Chadthew Dudesworth.jpg",
        name: "Chadthew Dudesworth",
        type: ItemTypes.KILLER,
        mwvalue: 400
    },    
    {
        image: "Count Dracthar.jpg",
        name: "Count Dracthar",
        type: ItemTypes.KILLER,
        mwvalue: 6250
    },    
    {
        image: "Headless Harry.jpg",
        name: "Headless Harry",
        type: ItemTypes.KILLER,
        mwvalue: 6250
    },    
    {
        image: "Lady Belle.jpg",
        name: "Lady Belle",
        type: ItemTypes.KILLER,
        mwvalue: 3125
    },    
    {
        image: "Night Rider.jpg",
        name: "Night Rider",
        type: ItemTypes.KILLER,
        mwvalue: 3125
    },    
    {
        image: "Patches.jpg",
        name: "Patches",
        type: ItemTypes.KILLER,
        mwvalue: 1600
    },    
    {
        image: "Alfred the Assassin.jpg",
        name: "Alfred the Assassin",
        type: ItemTypes.KILLER,
        mwvalue: 400
    },    
    {
        image: "Burlap Brute.jpg",
        name: "Burlap Brute",
        type: ItemTypes.KILLER,
        mwvalue: 100
    },    
    {
        image: "Felicia the Fool.jpg",
        name: "Felicia the Fool",
        type: ItemTypes.KILLER,
        mwvalue: 100
    },    
    {
        image: "Gnasher Slasher.jpg",
        name: "Gnasher Slasher",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },       
    {
        image: "Happy The Clown.jpg",
        name: "Happy The Clown",
        type: ItemTypes.KILLER,
        mwvalue: 50
    },       
    {
        image: "Jackman Blade.jpg",
        name: "Jackman Blade",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },       
    {
        image: "Sawblade.jpg",
        name: "Sawblade",
        type: ItemTypes.KILLER,
        mwvalue: 100
    },       
    {
        image: "Siren Head.jpg",
        name: "Siren Head",
        type: ItemTypes.KILLER,
        mwvalue: 50
    },       
    {
        image: "Asylum Doctor.jpg",
        name: "Asylum Doctor",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },    
    {
        image: "Constable Plum.jpg",
        name: "Constable Plum",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },  
    {
        image: "Darius Howley.jpg",
        name: "Darius Howley",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },     
    {
        image: "Dead Fred.jpg",
        name: "Dead Fred",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },  
    {
        image: "Dr. Devious.jpg",
        name: "Dr. Devious",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },  
    {
        image: "Mike the Menace.jpg",
        name: "Mike the Menace",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },  
    {
        image: "Nightmare.jpg",
        name: "Nightmare",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },  
    {
        image: "Red Shrieker.jpg",
        name: "Red Shrieker",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },  
    {
        image: "Annie.jpg",
        name: "Annie",
        type: ItemTypes.KILLER,
        mwvalue: 20
    },  
    {
        image: "1st Generation Crate 1.jpg",
        name: "1st Generation Crate",
        type: ItemTypes.CRATE,
        mwvalue: 6250
    },
    {
        image: "Bunnybane.jpg",
        name: "Bunnybane",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Carrot Crusher.jpg",
        name: "Carrot Crusher",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Void Reaver.jpg",
        name: "Void Reaver",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Cursed Mirage.jpg",
        name: "Cursed Mirage",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "T-Z Thorn.jpg",
        name: "T-Z Thorn",
        type: ItemTypes.KNIFE,
        mwvalue: 6250 
    },{
        image: "Vampire Vanquisher.jpg",
        name: "Vampire Vanquisher",
        type: ItemTypes.KNIFE,
        mwvalue: 225000 
    },{
        image: "Wand of the Wicked.jpg",
        name: "Wand of the Wicked",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },{
        image: "Webbed Hatchet.jpg",
        name: "Webbed Hatchet",
        type: ItemTypes.KNIFE,
        mwvalue: 12500 
    },
    {
        image: "The Sundered Dune.jpg",
        name: "The Sundered Dune",
        type: ItemTypes.KNIFE,
        mwvalue: 50000 
    },
    {
        image: "Tormented Khopesh.jpg",
        name: "Tormented Khopesh",
        type: ItemTypes.KNIFE,
        mwvalue: 37500 
    },
    {
        image: "Sunbladed Revolver.jpg",
        name: "Sunbladed Revolver",
        type: ItemTypes.KNIFE,
        mwvalue: 12500 
    },
    {
        image: "The Alchemists Shattered Fang.jpg",
        name: "The Alchemists Shattered Fang",
        type: ItemTypes.KNIFE,
        mwvalue: 37500 
    },
    {
        image: "Staff of the Dead Forest.jpg",
        name: "Staff of the Dead Forest",
        type: ItemTypes.KNIFE,
        mwvalue: 37500 
    },
    {
        image: "Squeeky Hammer.jpg",
        name: "Squeeky Hammer",
        type: ItemTypes.KNIFE,
        mwvalue: 37500 
    },
    {
        image: "Skadi's Glacier Spike.jpg",
        name: "Skadi's Glacier Spike",
        type: ItemTypes.KNIFE,
        mwvalue: 100000 
    },
    {
        image: "Rude-olph.jpg",
        name: "Rude-olph",
        type: ItemTypes.KNIFE,
        mwvalue: 37500 
    },
    {
        image: "Rune of Cataclysm.jpg",
        name: "Rune of Cataclysm",
        type: ItemTypes.KNIFE,
        mwvalue: 25000
    },
    {
        image: "Rings of Saturn.jpg",
        name: "Rings of Saturn",
        type: ItemTypes.KNIFE,
        mwvalue: 37500
    },
    {
        image: "Radioactive Slycer.jpg",
        name: "Radioactive Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  150000
    },
    {
        image: "Pink Eye of Cupid.jpg",
        name: "Pink Eye of Cupid",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Purple Eye of Cupid.jpg",
        name: "Purple Eye of Cupid",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Motherlode Slycer.jpg",
        name: "Motherlode Slycer",
        type: ItemTypes.KNIFE,
        mwvalue: 37500 
    },
    {
        image: "Molten Railroad Wrench.jpg",
        name: "Molten Railroad Wrench",
        type: ItemTypes.KNIFE,
        mwvalue: 6250
    },
    {
        image: "Light Blade.jpg",
        name: "Light Blade",
        type: ItemTypes.KNIFE,
        mwvalue: 37500 
    },
    {
        image: "Jolly Lance.jpg",
        name: "Jolly Lance",
        type: ItemTypes.KNIFE,
        mwvalue: 12500 
    },
    {
        image: "Ironworks.jpg",
        name: "Ironworks",
        type: ItemTypes.KNIFE,
        mwvalue: 12500 
    },
    {
        image: "Illuminated Light Blade.jpg",
        name: "Illuminated Light Blade",
        type: ItemTypes.KNIFE,
        mwvalue: 37500 
    },
    {
        image: "Ice Lance.jpg",
        name: "Ice Lance",
        type: ItemTypes.KNIFE,
        mwvalue: 12500 
    },
    {
        image: "Holly Lance.jpg",
        name: "Holly Lance",
        type: ItemTypes.KNIFE,
        mwvalue: 12500 
    },
    {
        image: "High Noon Hatchet.jpg",
        name: "High Noon Hatchet",
        type: ItemTypes.KNIFE,
        mwvalue: 6250 
    },
    {
        image: "Hallow's End.jpg",
        name: "Hallow's End",
        type: ItemTypes.KNIFE,
        mwvalue: 225000 
    },
    {
        image: "Hallowed Splinter.jpg",
        name: "Hallowed Splinter",
        type: ItemTypes.KNIFE,
        mwvalue: 12500   
    },
    {
        image: "Gold Pickaxe.jpg",
        name: "Gold Pickaxe",
        type: ItemTypes.KNIFE,
        mwvalue: 50000 
    },
    {
        image: "Gleaming Hope.jpg",
        name: "Gleaming Hope",
        type: ItemTypes.KNIFE,
        mwvalue: 75000 
    },
    {
        image: "Gleaming Despair.jpg",
        name: "Gleaming Despair",
        type: ItemTypes.KNIFE,
        mwvalue: 75000 
    },
    {
        image: "Frigid Frostar.jpg",
        name: "Frigid Frostar",
        type: ItemTypes.KNIFE,
        mwvalue: 25000 
    },
    {
        image: "Fang of the Black Widow.jpg",
        name: "Fang of the Black Widow",
        type: ItemTypes.KNIFE,
        mwvalue: 225000 
    },
    {
        image: "Fallen Angel.jpg",
        name: "Fallen Angel",
        type: ItemTypes.KNIFE,
        mwvalue: 12500 
    },
    {
        image: "Evergreen Splinter.jpg",
        name: "Evergreen Splinter",
        type: ItemTypes.KNIFE,
        mwvalue: 12500 
    },
    {
        image: "Elf Lance.jpg",
        name: "Elf Lance",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "D-A Thorn.jpg",
        name: "D-A Thorn",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "D-1 Thorn.jpg",
        name: "D-1 Thorn",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Cupid's Wing.jpg",
        name: "Cupid's Wing",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Cryo Cleaver.jpg",
        name: "Cryo Cleaver",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Coco Hammer.jpg",
        name: "Coco Hammer",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Clucky's Lucky Lasher.jpg",
        name: "Clucky's Lucky Lasher",
        type: ItemTypes.KNIFE,
        mwvalue:  100000
    },
    {
        image: "Christmas Tree Cutter.jpg",
        name: "Christmas Tree Cutter",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Chocolate Sword.jpg",
        name: "Chocolate Sword",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Chocolate Radiant.jpg",
        name: "Chocolate Radiant",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Chocolate Heartstopper.jpg",
        name: "Chocolate Heartstopper",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Chocolate Heartsplitter.jpg",
        name: "Chocolate Heartsplitter",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Cataclysm.jpg",
        name: "Cataclysm",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Brutostein's Bonesaw.jpg",
        name: "Brutostein's Bonesaw",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Brimstone Bat.jpg",
        name: "Brimstone Bat",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Brass Junk Reclaimer.jpg",
        name: "Brass Junk Reclaimer",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Bane of Misery.jpg",
        name: "Bame of Misery",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Bane of Desire.jpg",
        name: "Bane of Desire",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Astroid.jpg",
        name: "Astroid",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Astral Tear.jpg",
        name: "Astral Tear",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Amethyst Khopesh.jpg",
        name: "Amethyst Khopesh",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Alien Metal.jpg",
        name: "Alien Metal",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Abominable Boardsword.jpg",
        name: "Abominable Boardsword",
        type: ItemTypes.KNIFE,
        mwvalue:  100000
    },
    {
        image: "Aurora of Luna.jpg",
        name: "Aurora of Luna",
        type: ItemTypes.KNIFE,
        mwvalue:  100000
    },
    {
        image: "Aurora of Sol.jpg",
        name: "Aurora of Sol",
        type: ItemTypes.KNIFE,
        mwvalue:  100000
    },
    {
        image: "Gift-Maker 1000.jpg",
        name: "Gift-Maker 1000",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Santerror.jpg",
        name: "Santerror",
        type: ItemTypes.KNIFE,
        mwvalue:  6500000
    },
    {
        image: "Lumina Caelestia.jpg",
        name: "Lumina Caelestia",
        type: ItemTypes.KNIFE,
        mwvalue:  300000
    },
    {
        image: "Despair Noel.jpg",
        name: "Despair Noel",
        type: ItemTypes.KNIFE,
        mwvalue:  125000
    },
    {
        image: "Snowglobe Slycer.jpg",
        name: "Snowglobe Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Frosted Gingerblade.jpg",
        name: "Frosted Gingerblade",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Roseblade Reagent.jpg",
        name: "Roseblade Reagent",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Molten Gold Reagent.jpg",
        name: "Molten Gold Reagent",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Midnight Reagent.jpg",
        name: "Midnight Reagent",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Emerald Reagent.jpg",
        name: "Emerald Reagent",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Coldsteel Reagent.jpg",
        name: "Coldsteel Reagent",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Deep Ruby Reagent.jpg",
        name: "Deep Ruby Reagent",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Bunny Basher.jpg",
        name: "Bunny Basher",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Frost O' The Fearie.jpg",
        name: "Frost O' The Fearie",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Thread of Desire.jpg",
        name: "Thread of Desire",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Cursed Encore.jpg",
        name: "Cursed Encore",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Zombie Skin Scimitar.jpg",
        name: "Zombie Skin Scimitar",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Tree Light Trauma.jpg",
        name: "Tree Light Trauma",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Toxic Lantern.jpg",
        name: "Toxic Lantern",
        type: ItemTypes.KNIFE,
        mwvalue:  75000
    },
    {
        image: "The Void Blade.jpg",
        name: "The Void Blade",
        type: ItemTypes.KNIFE,
        mwvalue:  500000
    },
    {
        image: "The Final Rose.jpg",
        name: "The Final Rose",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "The City Hereafter.jpg",
        name: "The City Hereafter",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "The Baron's Arrangement.jpg",
        name: "The Baron's Arrangement",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Stone Riptar.jpg",
        name: "Stone Riptar",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Steel Knuckle Carbonator.jpg",
        name: "Steel Knuckle Carbonator",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Snowman Splinter.jpg",
        name: "Snowman Splinter",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Skulk's Arrowhead.jpg",
        name: "Skulk's Arrowhead",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Seabed Spectica.jpg",
        name: "Seabed Spectica",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Sapphire Longsword.jpg",
        name: "Sapphire Longsword",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Sapphire Cave Slycer.jpg",
        name: "Sapphire Cave Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Plastic Puncture.jpg",
        name: "Plastic Puncture",
        type: ItemTypes.KNIFE,
        mwvalue:  250
    },
    {
        image: "O'Stabby's O'Stabber.jpg",
        name: "O'Stabby's O'Stabber",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Orange Stalking Eyes.jpg",
        name: "Orange Stalking Eyes",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Oath of Darkness.jpg",
        name: "Oath of Darkness",
        type: ItemTypes.KNIFE,
        mwvalue:  250000
    },
    {
        image: "Nuclover Bomb.jpg",
        name: "Nuclover Bomb",
        type: ItemTypes.KNIFE,
        mwvalue:  125000
    },
    {
        image: "North Star.jpg",
        name: "North Star",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Muerte Violeta.jpg",
        name: "Muerte Violeta",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Lucia's Golden Tune.jpg",
        name: "Lucia's Golden Tune",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Layers of Ardor.jpg",
        name: "Layers of Ardor",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Kunzite Crusader.jpg",
        name: "Kunzite Crusader",
        type: ItemTypes.KNIFE,
        mwvalue:  250
    },
    {
        image: "Jewels of Stone.jpg",
        name: "Jewels of Stone",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Ironclad Gouger.jpg",
        name: "Ironclad Gouger",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Ice Skate Stabber.jpg",
        name: "Ice Skate Stabber",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Green Stalking Eyes.jpg",
        name: "Green Stalking Eyes",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Grave Robber.jpg",
        name: "Grave Robber",
        type: ItemTypes.KNIFE,
        mwvalue:  75000
    },
    {
        image: "Gold Cave Slycer.jpg",
        name: "Gold Cave Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Glacial Splinter.jpg",
        name: "Glacial Splinter",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Gilded Slime Slycer.jpg",
        name: "Gilded Slime Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Gilded Powerwheel Slycer.jpg",
        name: "Gilded Powerwheel Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Galactic.jpg",
        name: "Galactic",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Duskbound Athame.jpg",
        name: "Duskbound Athame",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Dreadstained Riptar.jpg",
        name: "Dreadstained Riptar",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Dragon Web.jpg",
        name: "Dragon Web",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Dracthar's Arrowhead.jpg",
        name: "Dracthar's Arrowhead",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Death's Dance.jpg",
        name: "Death's Dance",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Dagger of Cold.jpg",
        name: "Dagger of Cold",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Cupid's Nightmare.jpg",
        name: "Cupid's Nightmare",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Coal Cave Slycer.jpg",
        name: "Coal Cave Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Chill Piercer.jpg",
        name: "Chill Piercer",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Breath of Winter.jpg",
        name: "Breath of Winter",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Brass Knuckle Carbonator.jpg",
        name: "Brass Knuckle Carbonator",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Bluesteel Riptar.jpg",
        name: "Bluesteel Riptar",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Bloodplated Riptar.jpg",
        name: "Bloodplated Riptar",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Aurora Splinter.jpg",
        name: "Aurora Splinter",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Amethyst Cave Slycer.jpg",
        name: "Amethyst Cave Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Amber Riptar.jpg",
        name: "Amber Riptar",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Aether Core.jpg",
        name: "Aether Core",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Acidic Scimitar.jpg",
        name: "Acidic Scimitar",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Sharpened Sleigh.jpg",
        name: "Sharpened Sleigh",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Chocolate Bar.jpg",
        name: "Chocolate Bar",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Sugar Fang.jpg",
        name: "Sugar Fang",
        type: ItemTypes.KNIFE,
        mwvalue:  600
    },
    {
        image: "Bun Byte.jpg",
        name: "Bun Byte",
        type: ItemTypes.KNIFE,
        mwvalue:  600
    },
    {
        image: "Night Root.jpg",
        name: "Night Root",
        type: ItemTypes.KNIFE,
        mwvalue:  600
    },
    {
        image: "Rosy Whisper.jpg",
        name: "Rosy Whisper",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Passion Slycer.jpg",
        name: "Passion Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Love Strike.jpg",
        name: "Love Strike",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Cosmic Heart.jpg",
        name: "Cosmic Heart",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Wings of Corrupt Cupid.jpg",
        name: "Wings of Corrupt Cupid",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Violet Nebula.jpg",
        name: "Violet Nebula",
        type: ItemTypes.KNIFE,
        mwvalue:  200
    },
    {
        image: "Viper Fang.jpg",
        name: "Viper Fang",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Venomshank.jpg",
        name: "Venomshank",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Zebra Knife.jpg",
        name: "Zebra Knife",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Titanium Trident.jpg",
        name: "Titanium Trident",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Tiger Knife.jpg",
        name: "Tiger Knife",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "The Void.jpg",
        name: "The Void",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "The Viper Cluster.jpg",
        name: "The Viper Cluster",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "The Violet Cluster.jpg",
        name: "The Violet Cluster",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "The Reverse Medkit.jpg",
        name: "The Revere Medkit",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "The Jade Forest.jpg",
        name: "The Jade Forest",
        type: ItemTypes.KNIFE,
        mwvalue:  200
    },
    {
        image: "Star Bound.jpg",
        name: "Star Bound",
        type: ItemTypes.KNIFE,
        mwvalue:  250
    },
    {
        image: "Splatter Slasher.jpg",
        name: "Splatter Slasher",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Smiley Slycer.jpg",
        name: "Smiley Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  480
    },
    {
        image: "Sleigh Ride.jpg",
        name: "Sleigh Ride",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Skeletal Bowie.jpg",
        name: "Skeletal Bowie",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Siren Head Slycer.jpg",
        name: "Siren Head Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Silent Knife.jpg",
        name: "Silent Knife",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Sheetmetal Shank.jpg",
        name: "Sheetmetal Shank",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Sharpened Torch.jpg",
        name: "Sharpened Torch",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Shadow Kraken.jpg",
        name: "Shadow Kraken",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Sapphire Sparkle Time.jpg",
        name: "Sapphire Sparkle Time",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Sapphire Ice Wall.jpg",
        name: "Sapphire Ice Wall",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Saloon Door Splinter.jpg",
        name: "Saloon Door Splinter",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Saint Galactica.jpg",
        name: "Saint Galactica",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Ruby Ice Wall.jpg",
        name: "Ruby Ice Wall",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Ruby Carver.jpg",
        name: "Ruby Carver",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Rings of Fire.jpg",
        name: "Rings of Fire",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Redstone Sparkle Time.jpg",
        name: "Redstone Sparkle Time",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Red Slycer.jpg",
        name: "Red Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Red Gummy Slycer.jpg",
        name: "Red Gummy Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Recycled Paint Slycer.jpg",
        name: "Recycled Paint Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Recycled Cyan Slycer.jpg",
        name: "Recycled Cyan Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  200
    },
    {
        image: "Reactor Core.jpg",
        name: "Reactor Core",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Rattlebone's Cutclass.jpg",
        name: "Rattlebone's Cutclass",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Purple Slycer.jpg",
        name: "Purple Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Petal Prism.jpg",
        name: "Petal Prism",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Patched.jpg",
        name: "Patched",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Orange Slycer.jpg",
        name: "Orange Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Obsidian.jpg",
        name: "Obsidian",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Not-So Frosty.jpg",
        name: "Not-So Frosty",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Night Howler.jpg",
        name: "Night Howler",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Night Hawk.jpg",
        name: "Night Hawk",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Motif Dombre.jpg",
        name: "Motif Dombre",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Motif Dange.jpg",
        name: "Motif Dange",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Motif Aquatique.jpg",
        name: "Motif Aquatique",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Moonstone.jpg",
        name: "Moonstone",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Molten Core.jpg",
        name: "Molten Core",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Mechatorque.jpg",
        name: "Mechatorque",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Knife Behind The Slaughter.jpg",
        name: "Knife Behind The Slaughter",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Killefficient.jpg",
        name: "Killefficient",
        type: ItemTypes.KNIFE,
        mwvalue:  75000
    },
    {
        image: "Jerry-Rigged Jabber.jpg",
        name: "Jerry-Rigged Jabber",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Iron Pickaxe.jpg",
        name: "Iron Pickaxe",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Inconspicuous Gift.jpg",
        name: "Inconspicuous Gift",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Ice Breaker.jpg",
        name: "Ice Breaker",
        type: ItemTypes.KNIFE,
        mwvalue:  75000
    },
    {
        image: "Heartfelt Slycer.jpg",
        name: "Heartfelt Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Greenstone Sparkle Time.jpg",
        name: "Greenstone Sparkle Time",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Green Slycer.jpg",
        name: "Green Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Green Gummy Slycer.jpg",
        name: "Green Gummy Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Graffiti Knife.jpg",
        name: "Graffiti Knife",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Golden Hour.jpg",
        name: "Golden Hour",
        type: ItemTypes.KNIFE,
        mwvalue:  200
    },
    {
        image: "Gliding Ocean.jpg",
        name: "Gliding Ocean",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Gingerbread Mangler.jpg",
        name: "Gingerbread Mangler",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Gingerbread Jabber.jpg",
        name: "Gingerbread Jabber",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Ghastly Gasher.jpg",
        name: "Ghastly Gasher",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Full Moon Fuller.jpg",
        name: "Full Moon Fuller",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Frozen Ice Wall.jpg",
        name: "Frozen Ice Wall",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
     {
        image: "Frosty Lake.jpg",
        name: "Frosty Lake",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
     {
        image: "Frost Armor.jpg",
        name: "Frost Armor",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
     {
        image: "Freddy Favourite.jpg",
        name: "Freddy Favourite",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
     {
        image: "Flower Power.jpg",
        name: "Flower Power",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
     {
        image: "Floating Points.jpg",
        name: "Floating Points",
        type: ItemTypes.KNIFE,
        mwvalue:  480
    },
     {
        image: "Fallen Oath.jpg",
        name: "Fallen Oath",
        type: ItemTypes.KNIFE,
        mwvalue:  1500
    },
     {
        image: "Emerald Ice Wall.jpg",
        name: "Emerald Ice Wall",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
     {
        image: "Emerald Dream.jpg",
        name: "Emerald Dream",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
     {
        image: "Emerald Carver.jpg",
        name: "Emerald Carver",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
     {
        image: "Dust Light.jpg",
        name: "Dust Light",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
     {
        image: "Dragonstone Sparkle Time.jpg",
        name: "Dragonstone Sparkle Time",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
     {
        image: "Dr. Devious' Roses.jpg",
        name: "Dr. Devious' Roses",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
     {
        image: "Delta Dawn.jpg",
        name: "Delta Dawn",
        type: ItemTypes.KNIFE,
        mwvalue:  480
    },
     {
        image: "Deadly Dazzler.jpg",
        name: "Deadly Dazzler",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
     {
        image: "Dead Fred Redemption.jpg",
        name: "Dead Fred Redemption",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
     {
        image: "David's Dagger.jpg",
        name: "David's Dagger",
        type: ItemTypes.KNIFE,
        mwvalue:  480
    },
     {
        image: "Data Rain.jpg",
        name: "Data Rain",
        type: ItemTypes.KNIFE,
        mwvalue:  75000
    },
     {
        image: "Darkfelt Slycer.jpg",
        name: "Darkfelt Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
     {
        image: "Cyber Slasher.jpg",
        name: "Cyber Slasher",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
     {
        image: "Cyan Slycer.jpg",
        name: "Cyan Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
     {
        image: "Cowprint Slasher.jpg",
        name: "Cowprint Slasher",
        type: ItemTypes.KNIFE,
        mwvalue:  250
    },
     {
        image: "Cosmic Jab.jpg",
        name: "Cosmic Jab",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
     {
        image: "Clover Field.jpg",
        name: "Clover Field",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
     {
        image: "Cable Rogue.jpg",
        name: "Cable Rogue",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
     {
        image: "Burst O' Luck.jpg",
        name: "Burst O' Luck",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
     {
        image: "Brisk Rainbow.jpg",
        name: "Brisk Rainbow",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
     {
        image: "Blushing Heart.jpg",
        name: "Blushing Heart",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
     {
        image: "Blue Gummy Slycer.jpg",
        name: "Blue Gummy Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
     {
        image: "Blood Moon.jpg",
        name: "Blood Moon",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
     {
        image: "Blackout Meson.jpg",
        name: "Blackout Meson",
        type: ItemTypes.KNIFE,
        mwvalue:  50
    },
    {
        image: "Berry Aura.jpg",
        name: "Berry Aura",
        type: ItemTypes.KNIFE,
        mwvalue:  480
    },
    {
        image: "Baseball Bat.jpg",
        name: "Baseball Bat",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Awesome Blossom.jpg",
        name: "Awesome Blossom",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Annie Dolly Dagger.jpg",
        name: "Annie Dolly Dagger",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Amethyst.jpg",
        name: "Amethyst",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Amethyst Carver.jpg",
        name: "Amethyst Carver",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Amber Sparkle Time.jpg",
        name: "Amber Sparkle Time",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "1000 Degree Knife.jpg",
        name: "1000 Degree Knife",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Gashly Gift.jpg",
        name: "Gashly Gift",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Star of the Elves.jpg",
        name: "Star of the Elves",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Snowy Cabin Stabber.jpg",
        name: "Snowy Cabin Stabber",
        type: ItemTypes.KNIFE,
        mwvalue:  800
    },
    {
        image: "Reindeer Slycer.jpg",
        name: "Reindeer Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Knitting Needle.jpg",
        name: "Knitting Needle",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Golden Tinsel.jpg",
        name: "Golden Tinsel",
        type: ItemTypes.KNIFE,
        mwvalue:  800
    },
    {
        image: "Bright Light Tree.jpg",
        name: "Bright Light Tree",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Blade of Bells.jpg",
        name: "Blade of Bells",
        type: ItemTypes.KNIFE,
        mwvalue:  800
    },
    {
        image: "The Slyce Cube.jpg",
        name: "The Slyce Cube",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Trance Fang.jpg",
        name: "Trance Fang",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Pot O' Parel.jpg",
        name: "Pot O' Parel",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Dreamhop.jpg",
        name: "Dreamhop",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Feather Fang.jpg",
        name: "Feather Fang",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Wings of Cupid 2025.jpg",
        name: "Wings of Cupid 2025",
        type: ItemTypes.KNIFE,
        mwvalue:  75000
    },
    {
        image: "Sacred Whisper.jpg",
        name: "Sacred Whisper",
        type: ItemTypes.KNIFE,
        mwvalue:  27500
    },
    {
        image: "Millionth Slycer.jpg",
        name: "Millionth Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Crimson Gambit.jpg",
        name: "Crimson Gambit",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Zombie Infection.jpg",
        name: "Zombie Infection",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Zombie Dagger.jpg",
        name: "Zombie Dagger",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Yellow Test Slycer.jpg",
        name: "Yellow Test Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Yellow Balloon Sword.jpg",
        name: "Yellow Balloon Sword",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Ye Olde Slycer.jpg",
        name: "Ye Olde Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Wraith of the North.jpg",
        name: "Wraith of the North",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Witch's Candy.jpg",
        name: "Witch's Candy",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Wings of Cupid 2023.jpg",
        name: "Wings of Cupid 2023",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Wings of Cupid 2022.jpg",
        name: "Wings of Cupid 2022",
        type: ItemTypes.KNIFE,
        mwvalue:  75000
    },
    {
        image: "Wings of Cupid 2021.jpg",
        name: "Wings of Cupid 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  125000
    },
    {
        image: "Wings of Cupid 2020.jpg",
        name: "Wings of Cupid 2020",
        type: ItemTypes.KNIFE,
        mwvalue:  150000
    },
    {
        image: "Violet Pulse.jpg",
        name: "Violet Pulse",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Valentine's Canvas.jpg",
        name: "valentine's Canvas",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Valentine Vendetta.jpg",
        name: "Valentine Vendetta",
        type: ItemTypes.KNIFE,
        mwvalue:  225000
    },
    {
        image: "Valentine Rose.jpg",
        name: "Valentine Rose",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Valendy Paws.jpg",
        name: "Valendy Paws",
        type: ItemTypes.KNIFE,
        mwvalue:  100000
    },
    {
        image: "Unity of the Games.jpg",
        name: "Unity of the Games",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Undead Candy.jpg",
        name: "Undead Candy",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Ugly Christmas Slycer.jpg",
        name: "Ugly Christmas Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Toxic Waste Slycer.jpg",
        name: "Toxic waste Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Toxic Sorrow.jpg",
        name: "Toxic Sorrow",
        type: ItemTypes.KNIFE,
        mwvalue:  500
    },
    {
        image: "The Scoop.jpg",
        name: "The Scoop",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "The Mystifier.jpg",
        name: "The Mystifier",
        type: ItemTypes.KNIFE,
        mwvalue:  150000
    },
    {
        image: "The Mummy.jpg",
        name: "The Mummy",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "The Missing Avatar.jpg",
        name: "The Missing Avatar",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "The Lost Slycer.jpg",
        name: "The Lost Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "The Jumping Bug.jpg",
        name: "The Jumping Bug",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "The Christmas Caper.jpg",
        name: "The Christmas Caper",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "The Broken Clock.jpg",
        name: "The Broken Clock",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Test Knife.jpg",
        name: "Test Knife",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Ten Million Celebration.jpg",
        name: "Ten Million Celebration",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Talon of Zombification.jpg",
        name: "Talon of Zombification",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Talon of the Wind.jpg",
        name: "Talon of the Wind",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Talon of the Sky.jpg",
        name: "Talon of the Sky",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Talon of the Phoenix.jpg",
        name: "Talon of the Phoenix",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Talon of the Ocean.jpg",
        name: "Talon of the Ocean",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Talon of the Cauldron.jpg",
        name: "Talon of the Cauldron",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Talon of the Baron.jpg",
        name: "Talon of the Baron",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Talon of Steel.jpg",
        name: "Talon of Steel",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Talon of Duality.jpg",
        name: "Talon of Duality",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Talon of Charm.jpg",
        name: "Talon of Charm",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Sweet Revenge.jpg",
        name: "Sweet Revenge",
        type: ItemTypes.KNIFE,
        mwvalue:  100000
    },
    {
        image: "Sus Striped Gift.jpg",
        name: "Sus Striped Gift",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Sus Red Gift.jpg",
        name: "Sus Red Gift",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Sus Holly Gift.jpg",
        name: "Sus Holly Gift",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Sunlit Glass.jpg",
        name: "Sunlit Glass",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Summertime Shank.jpg",
        name: "Summertime Shank",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Stop Sign Stabber.jpg",
        name: "Stop Sign Stabber",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Steel Slycer.jpg",
        name: "Steel Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Stab-O-Lantern.jpg",
        name: "Stab-O-Lantern",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Spoon.jpg",
        name: "Spoon",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Special Snowflake.jpg",
        name: "Special Snowflake",
        type: ItemTypes.KNIFE,
        mwvalue:  350000
    },
    {
        image: "Sparkletime Pumpkin Carver.jpg",
        name: "Sparkletime Pumpkin Carver",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Snowy Slycer.jpg",
        name: "Snowy Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Snakey.jpg",
        name: "Snakey",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Smokey Spirit.jpg",
        name: "Smokey Spirit",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Smokey Blood.jpg",
        name: "Smokey Blood",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Slyce of Pride 2021.jpg",
        name: "Slyce of Pride 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Slyce of Pride 2024.jpg",
        name: "Slyce of Pride 2024",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Silver Ore Slycer.jpg",
        name: "Silver Ore Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  300
    },    
    {
        image: "Shimmerock.jpg",
        name: "Shimmerock",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Shimmerheart Shank.jpg",
        name: "Shimmerheart Shank",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Seamrog.jpg",
        name: "Seamrog",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Scimitar of the Screamer.jpg",
        name: "Scimitar of the Screamer",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Scimitar of the Happy Clown.jpg",
        name: "Scimitar of the Happy Clown",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Scimitar of the Evil Clown.jpg",
        name: "Scimitar of the Evil Clown",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Sawblade's Jigsaw.jpg",
        name: "Sawblade's Jigsaw",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Sapphire Slycer.jpg",
        name: "Sapphire Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  300
    },
    {
        image: "Santa's Slay.jpg",
        name: "Santa's Slay",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Rusty Dagger.jpg",
        name: "Rusty Dagger",
        type: ItemTypes.KNIFE,
        mwvalue:  125000
    },
    {
        image: "Rusted Railroad Spike.jpg",
        name: "Rusted Railroad Spike",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Rudolph's Golden Ravager.jpg",
        name: "Rudolph's Golden Ravager",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Ruby Slycer.jpg",
        name: "Ruby Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  300
    },
    {
        image: "Rose of Anguish.jpg",
        name: "Rose of Anguish",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Rock Candy.jpg",
        name: "Rock Candy",
        type: ItemTypes.KNIFE,
        mwvalue:  300000
    },
    {
        image: "Red Balloon Sword.jpg",
        name: "Red Balloon Sword",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Recycled Drainpipe.jpg",
        name: "Recycled Drainpipe",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Reclaimed Slycer.jpg",
        name: "Reclaimed Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Rainbow Cloverbeat.jpg",
        name: "Rainbow Cloverbeat",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Railroad Wrench.jpg",
        name: "Railroad Wrench",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Putrid Pickaxe.jpg",
        name: "Putrid Pickaxe",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Purple Pinstripe.jpg",
        name: "Purple Pinstripe",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Pumpkin Patch.jpg",
        name: "Pumkin Patch",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Pumpkin Carver.jpg",
        name: "Pumpkin Carver",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Premium Slycer 2025.jpg",
        name: "Premium Slycer 2025",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Premium Slycer 2024.jpg",
        name: "Premium Slycer 2024",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Premium Slycer 2023.jpg",
        name: "Premium Slycer 2023",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Premium Slycer 2022.jpg",
        name: "Premium Slycer 2022",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Premium Slycer 2021.jpg",
        name: "Premium Slycer 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Powerwheel Slycer.jpg",
        name: "Powerwheel Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Pot O Gold 2021.jpg",
        name: "Pot O Gold 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Pot O Gold 2020.jpg",
        name: "Pot O Gold 2020",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Phantom Drape.jpg",
        name: "Phantom Drape",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Pink Balloon Sword.jpg",
        name: "Pink Balloon Sword",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Perish With Liquorice.jpg",
        name: "Perish With Liquorice",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Over the Rainbow 2021.jpg",
        name: "Over the Rainbow 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  100000
    },
    {
        image: "Over the Rainbow 2020.jpg",
        name: "Over the Rainbow 2020",
        type: ItemTypes.KNIFE,
        mwvalue:  1500000
    },
    {
        image: "Orion's Ornament.jpg",
        name: "Orion's Ornament",
        type: ItemTypes.KNIFE,
        mwvalue:  175000
    },
    {
        image: "Oopsie Daisies.jpg",
        name: "Oopsie Daisies",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "O Christmas Tree.jpg",
        name: "O Christmas Tree",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "North Pole Splinter.jpg",
        name: "North Pole Splinter",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Night Stalker.jpg",
        name: "Night Stalker",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Morning Star.jpg",
        name: "Morning Star",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Misfortune's Mangler.jpg",
        name: "Misfortune's Mangler",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Minty Holiday Hook.jpg",
        name: "Minty Holiday Hook",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Metaverse Mangler.jpg",
        name: "Metaverse Mangler",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Metaverse Mangler (SC).jpg",
        name: "Metaverse Mangler (SC)",
        type: ItemTypes.KNIFE,
        mwvalue:  100000
    },
    {
        image: "Metal Season.jpg",
        name: "Metal Season",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Meltdown Splinter.jpg",
        name: "Meltdown Splinter",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Medalist Mangler.jpg",
        name: "Medalist Mangler",
        type: ItemTypes.KNIFE,
        mwvalue:  800000
    },
    {
        image: "Mayor's Machete.jpg",
        name: "Mayor's Machete",
        type: ItemTypes.KNIFE,
        mwvalue:  150
    },
    {
        image: "Machine Dagger (WARNING).jpg",
        name: "Machine Dagger (WARNING)",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Machine Dagger (CAUTION).jpg",
        name: "Machine Dagger (CAUTION)",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Luminescent Feather.jpg",
        name: "Luminescent Feather",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Lucky Mural.jpg",
        name: "Lucky Mural",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Legionaire.jpg",
        name: "Legionaire",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Lazarus.jpg",
        name: "Lazarus",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Kurukos.jpg",
        name: "Kurukos",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Junkyard Jabber.jpg",
        name: "Junkyard Jabber",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Jackman's Blade.jpg",
        name: "Jackman's Blade",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Iron Slycer.jpg",
        name: "Iron Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Iridescent Slycer.jpg",
        name: "Iridescent Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Icy Slycer.jpg",
        name: "Icy Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Hollow Heart.jpg",
        name: "Hollow Heart",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Holiday Splinter.jpg",
        name: "Holiday Splinter",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Heartbreaker 2021.jpg",
        name: "Heartbreaker 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Heartbreaker 2020.jpg",
        name: "Heartbreaker 2020",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Heartbeat.jpg",
        name: "Heartbeat",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Happy Circus Knife.jpg",
        name: "Happy Circus Knife",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Hallowed Moon.jpg",
        name: "Hallowed Moon",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },    
    {
        image: "Gunmetal.jpg",
        name: "Gunmetal",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Green Balloon Sword.jpg",
        name: "Green Balloon Sword",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Goldsunder.jpg",
        name: "Goldsunder",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Golden Order.jpg",
        name: "Golden Order",
        type: ItemTypes.KNIFE,
        mwvalue:  10000
    },
    {
        image: "Golden Lance.jpg",
        name: "Golden Lance",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Golden Ice Wall.jpg",
        name: "Golden Ice Wall",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Gold Slime Slycer.jpg",
        name: "Gold Slime Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Gold Ore Slycer.jpg",
        name: "Gold Ore Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  300
    },
    {
        image: "Gingerbread Splinter.jpg",
        name: "Gingerbread Splinter",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Gilded Valentine 2021.jpg",
        name: "Gilded Valentine 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Gilded Valentine 2020.jpg",
        name: "Gilded Valentine 2020",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Gilded Hearts 2021.jpg",
        name: "Gilded Hearts 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  300000
    },
    {
        image: "Gilded Hearts 2020.jpg",
        name: "Gilded Hearts 2020",
        type: ItemTypes.KNIFE,
        mwvalue:  1250000
    },
    {
        image: "Gilded Charm.jpg",
        name: "Gilded Charm",
        type: ItemTypes.KNIFE,
        mwvalue:  100000
    },
    {
        image: "Gifted Edge.jpg",
        name: "Gifted Edge",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Ghostly Slycer.jpg",
        name: "Ghostly Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Ghostly Grave Spade.jpg",
        name: "Ghostly Grave Spade",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Ghostly Gasher.jpg",
        name: "Ghostly Gasher",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Frozen Candy Cane.jpg",
        name: "Frozen Candy Cane",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Frostbitten, Twice-Shy.jpg",
        name: "Frostbitten, Twice-Shy",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Frostbite.jpg",
        name: "Frostbite",
        type: ItemTypes.KNIFE,
        mwvalue:  350000
    },
    {
        image: "Friendly Spirits.jpg",
        name: "Friendly Spirits",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Flowery Facade.jpg",
        name: "Flowery Facade",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Firework Frenzy.jpg",
        name: "Firework Frenzy",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Fey's Slycer.jpg",
        name: "Fey's Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  600000
    },
    {
        image: "Fae's Lament.jpg",
        name: "Fae's Lament",
        type: ItemTypes.KNIFE,
        mwvalue:  450000
    },
    {
        image: "Fae's Golden Lament.jpg",
        name: "Fae's Golden Lament",
        type: ItemTypes.KNIFE,
        mwvalue:  150000
    },
    {
        image: "Evergreen Edge.jpg",
        name: "Evergreen Edge",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Eroded Blood Rush.jpg",
        name: "Eroded Blood Rush",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Enchanted Forest.jpg",
        name: "Enchanted Forest",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Emerald Slycer.jpg",
        name: "Emerald Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  300
    },
    {
        image: "Element of Wind.jpg",
        name: "Element of Wind",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Element of Lightning.jpg",
        name: "Element of Lightning",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Element of Ice.jpg",
        name: "Element of Ice",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Element of Fire.jpg",
        name: "Element of Fire",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Electro-Slycer.jpg",
        name: "Electro-Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Electro-Slycer (SC).jpg",
        name: "Electro-Slycer (SC)",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Earthen Domascus.jpg",
        name: "Earthen Domascus",
        type: ItemTypes.KNIFE,
        mwvalue:  20
    },
    {
        image: "Duilleoga Tite.jpg",
        name: "Duilleoga Tite",
        type: ItemTypes.KNIFE,
        mwvalue:  175000
    },
    {
        image: "Dragnarok.jpg",
        name: "Dragnarok",
        type: ItemTypes.KNIFE,
        mwvalue:  500
    },
    {
        image: "Diamond Slycer.jpg",
        name: "Diamond Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  300
    },
    {
        image: "Devious Dagger.jpg",
        name: "Devious Dagger",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Dark Wings of Cupid.jpg",
        name: "Dark Wings of Cupid",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Dark Fiend.jpg",
        name: "Dark Fiend",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Cursed Purpleheart.jpg",
        name: "Cursed Purpleheart",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Cupids Arrow.jpg",
        name: "Cupids Arrow",
        type: ItemTypes.KNIFE,
        mwvalue:  50000
    },
    {
        image: "Crimson Crusader.jpg",
        name: "Crimson Crusader",
        type: ItemTypes.KNIFE,
        mwvalue:  600000
    },
    {
        image: "Corrupted Rune.jpg",
        name: "Corrupted Rune",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Cookie Cutter.jpg",
        name: "Cookie Cutter",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Collector's 900M Slycer.jpg",
        name: "Collector's 900M Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  200000
    },
    {
        image: "Collector's 800M Slycer.jpg",
        name: "Collector's 800M Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  225000
    },
    {
        image: "Collector's 700M Slycer.jpg",
        name: "Collector's 700M Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  250000
    },
    {
        image: "Collector's 500M Slycer.jpg",
        name: "Collector's 500M Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  425000
    },
    {
        image: "Cold Wings of Cupid.jpg",
        name: "Cold Wings of Cupid",
        type: ItemTypes.KNIFE,
        mwvalue:  450000
    },
    {
        image: "Code Red.jpg",
        name: "Code Red",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Clucky's Corruptor.jpg",
        name: "Clucky's Corruptor",
        type: ItemTypes.KNIFE,
        mwvalue:  200000
    },
    {
        image: "Clovermend.jpg",
        name: "Clovermend",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Clover Root.jpg",
        name: "Cloover Root",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Clover Carver 2021.jpg",
        name: "Clover Carver 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Clover Carver 2020.jpg",
        name: "Clover Carver 2020",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Charlie's Knife.jpg",
        name: "Charlie's Knife",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Cheesy Chopper.jpg",
        name: "Cheesy Chopper",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Charms O'Plenty 2021.jpg",
        name: "Charms O'Plenty 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Charms O'Plenty.jpg",
        name: "Charms O'Plenty",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Charcoal Slycer.jpg",
        name: "Charcoal Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  1
    },
    {
        image: "Candy Cane 2021.jpg",
        name: "Candy Cane 2021",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Candy Cane 2020.jpg",
        name: "Candy Cane 2020",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Burlap Chainsaw.jpg",
        name: "Burlap Chainsaw",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Brisk Nimbus.jpg",
        name: "Brisk Nimbus",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Box of Candy.jpg",
        name: "Box of Candy",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Blue Balloon Sword.jpg",
        name: "Blue Balloon Sword",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Blood Rush.jpg",
        name: "Blood Rush",
        type: ItemTypes.KNIFE,
        mwvalue:  100
    },
    {
        image: "Blood Ruby.jpg",
        name: "Blood Ruby",
        type: ItemTypes.KNIFE,
        mwvalue:  250000
    },
    {
        image: "Blade of The Wicked.jpg",
        name: "Blade of The Wicked",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Blade of the Supernatural.jpg",
        name: "Blade of the Supernatural",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Blade of the Searing.jpg",
        name: "Blade of the Searing",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Blade of the Scourage.jpg",
        name: "Blade of the Scourage",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "Blade of the Hallowed.jpg",
        name: "Blade of the Hallowed",
        type: ItemTypes.KNIFE,
        mwvalue:  125000
    },
    {
        image: "Blackmetal Blade.jpg",
        name: "Blackmetal Blade",
        type: ItemTypes.KNIFE,
        mwvalue:  400
    },
    {
        image: "Big Red Lollipop.jpg",
        name: "Big Red Lollipop",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "Bejeweled Slycer.jpg",
        name: "Bejeweled Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  6250
    },
    {
        image: "Battery-Powered Gearsaw.jpg",
        name: "Battery-Powered Gearsaw",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Banshee Bite.jpg",
        name: "Banshee Bite",
        type: ItemTypes.KNIFE,
        mwvalue:  1600
    },
    {
        image: "Athame of the Lich.jpg",
        name: "Athame of the Lich",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Athame of Blood.jpg",
        name: "Athame of Blood",
        type: ItemTypes.KNIFE,
        mwvalue:  3125
    },
    {
        image: "Amethyst Pickaxe.jpg",
        name: "Amethyst Pickaxe",
        type: ItemTypes.KNIFE,
        mwvalue:  75000
    },
    {
        image: "All-Seeing Grave Spade.jpg",
        name: "All-Seeing Grave Spade",
        type: ItemTypes.KNIFE,
        mwvalue:  37500
    },
    {
        image: "2022 New Year.jpg",
        name: "2022 New Year",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "900M Slycer.jpg",
        name: "knife",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "800M Slycer.jpg",
        name: "800 Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "700M Slycer.jpg",
        name: "700M Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "300K Slycer.jpg",
        name: "300K Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "200M Slycer.jpg",
        name: "200M Slycer",
        type: ItemTypes.KNIFE,
        mwvalue:  25000
    },
    {
        image: "2nd Birthday Blade.jpg",
        name: "2nd Birthday Blade",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Enhanced Baseball Bat.jpg",
        name: "Enhanced Baseball Bat",
        type: ItemTypes.KNIFE,
        mwvalue:  12500
    },
    {
        image: "Mineshaft Cabin.jpg",
        name: "Mineshaft Cabin",
        type: ItemTypes.CABIN,
        mwvalue:  50000
    },
    {
        image: "North Pole Station.jpg",
        name: "North Pole Station",
        type: ItemTypes.CABIN,
        mwvalue:  250000
    },
    {
        image: "Cosmic Kringler.jpg",
        name: "Cosmic Kringler",
        type: ItemTypes.KILLER,
        mwvalue:  400000
    },
    {
        image: "Corrupt Santa 2025.jpg",
        name: "Corrupt Santa 2025",
        type: ItemTypes.KILLER,
        mwvalue:  12500
    },
    {
        image: "Cosmic Grimsley 2025.jpg",
        name: "Cosmic Grimsley 2025",
        type: ItemTypes.KILLER,
        mwvalue:  600000
    },
    {
        image: "Present Head 2025.jpg",
        name: "Present Head 2025",
        type: ItemTypes.KILLER,
        mwvalue:  25000
    },
    {
        image: "Void Chest.jpg",
        name: "Void Chest",
        type: ItemTypes.CRATE,
        mwvalue:  6000000
    },
    {
        image: "Polar Present.jpg",
        name: "Polar Present",
        type: ItemTypes.CRATE,
        mwvalue:  800000
    },
    {
        image: "Chocolate Valentine's Day Crate.jpg",
        name: "Chocolate Valentine's Day Crate",
        type: ItemTypes.CRATE,
        mwvalue:  600000
    },
    {
        image: "Valentine's Crate.jpg",
        name: "Valentine's Crate",
        type: ItemTypes.CRATE,
        mwvalue:  400000
    },
    {
        image: "Black Market Briefcase.jpg",
        name: "Black Market Briefcase",
        type: ItemTypes.CRATE,
        mwvalue:  350000
    },
    {
        image: "Santa Roni's Present.jpg",
        name: "Santa Roni's Present",
        type: ItemTypes.CRATE,
        mwvalue:  300000
    },
    {
        image: "Ghostly Direwick Chest.jpg",
        name: "Ghostly Direwick Chest",
        type: ItemTypes.CRATE,
        mwvalue:  200000
    },
    {
        image: "Frostbite Chest.jpg",
        name: "Frostbite Chest",
        type: ItemTypes.CRATE,
        mwvalue:  200000
    },
    {
        image: "Cardboard Box.jpg",
        name: "Cardboard Box",
        type: ItemTypes.CRATE,
        mwvalue:  200000
    },
    {
        image: "Mystery Crate.jpg",
        name: "Mystery Crate",
        type: ItemTypes.CRATE,
        mwvalue:  150000
    },
    {
        image: "Valentine's Crate 2023.jpg",
        name: "Valentine's Crate 2023",
        type: ItemTypes.CRATE,
        mwvalue:  100000
    },
    {
        image: "Winter 2023 Present.jpg",
        name: "Winter 2023 Present",
        type: ItemTypes.CRATE,
        mwvalue:  75000
    },
    {
        image: "Direwick Chest.jpg",
        name: "Direwick Chest",
        type: ItemTypes.CRATE,
        mwvalue:  75000
    },
    {
        image: "Aurora Crate.jpg",
        name: "Aurora Crate",
        type: ItemTypes.CRATE,
        mwvalue:  50000
    },
    {
        image: "Halloween Chest 2023.jpg",
        name: "Halloween Chest 2023",
        type: ItemTypes.CRATE,
        mwvalue:  50000
    },
    {
        image: "Christmas Crate.jpg",
        name: "Christmas Crate",
        type: ItemTypes.CRATE,
        mwvalue:  25000
    },
    {
        image: "Smouldering Crate.jpg",
        name: "Smouldering Crate",
        type: ItemTypes.CRATE,
        mwvalue:  25000
    },
    {
        image: "Grimsley's Crate.jpg",
        name: "Grimsley's Crate",
        type: ItemTypes.CRATE,
        mwvalue:  12500
    },
    {
        image: "Valentines Crate.jpg",
        name: "Valentines Crate",
        type: ItemTypes.CRATE,
        mwvalue:  12500
    },
    {
        image: "Winter 2024 Crate.jpg",
        name: "Winter 2024 Crate",
        type: ItemTypes.CRATE,
        mwvalue:  12500
    },
    {
        image: "Direwick 2024 Chest.jpg",
        name: "Direwick 2024 Chest",
        type: ItemTypes.CRATE,
        mwvalue:  12500
    },
    {
        image: "Mining Crate.jpg",
        name: "Mining Crate",
        type: ItemTypes.CRATE,
        mwvalue:  6250
    },
    {
        image: "Brass Strongbox.jpg",
        name: "Brass Strongbox",
        type: ItemTypes.CRATE,
        mwvalue:  6250
    },
    {
        image: "Space Crate.jpg",
        name: "Space Crate",
        type: ItemTypes.CRATE,
        mwvalue:  3125
    },
    {
        image: "Chest of the Pest.jpg",
        name: "Chest of the Pest",
        type: ItemTypes.CRATE,
        mwvalue:  3125
    },
    
    
];

// Where to add new tournaments
const tournaments = [
    {
        name: "MOST WANTED NOVEMBER SURVIVAL CHALLENGE",
        date: new Date(Date.UTC(2026, 0, 24, 16, 0, 0, 0)),
        video: "THE PINNACLE OF WARRIORS.mov",
    },    
];

const staffMembers = [
    {
        title: "OWNER & ADMIN",
        nickname: "MW CoOwner Alice",
        handle: "@luna131583",
        link: "https://www.roblox.com/users/3866793566/profile",
        image: "staff0.png"
    },
    {
        title: "OWNER & ADMIN",
        nickname: "MWxFlowerXo",
        handle: "@fl0wers4days",
        link: "https://www.roblox.com/users/2962129336/profile",
        image: "staff1.png"
    },
    {
        title: "OWNER & ADMIN",
        nickname: "xxxth3_goatxxx",
        handle: "@XxxTh3_GoatxxX",
        link: "https://www.roblox.com/users/2350981953/profile",
        image: "staff2.png"
    },
    {
        title: "CM TOURNAMENT LEAD HOST-MOD",
        nickname: "MWxBamaRoo22x",
        handle: "@BamaRoo22",
        link: "https://www.roblox.com/users/5614807769/profile",
        image: "staff3.png"
    },
    {
        title: "TECH-TOURNAMENT HOST-MOD",
        nickname: "MWxRavens8330xRAV",
        handle: "@ravens8330",
        link: "https://www.roblox.com/users/1637031057/profile",
        image: "staff4.png"
    },    
    {
        title: "SR FARM LEAD & MOD",
        nickname: "TREEXMW",
        handle: "@xXShakinmybranchesXx",
        link: "https://www.roblox.com/users/1524570753/profile",
        image: "staff6.png"
    },
    {
        title: "MOD",
        nickname: "MWxXRoyaltyXx",
        handle: "@kacprorxd",
        link: "https://www.roblox.com/users/673573315/profile",
        image: "staff7.png"
    },
    {
        title: "SR FARM LEAD",
        nickname: "2Many",
        handle: "@2ManyPoopPatrols",
        link: "https://www.roblox.com/users/2396384953/profile",
        image: "staff8.png"
    },
    {
        title: "SR FARM LEAD",
        nickname: "xBlackAngelxMWx",
        handle: "@XbeXcuteX",
        link: "https://www.roblox.com/users/2335485423/profile",
        image: "staff9.png"
    },    
    {
        title: "MOD & FARM LEAD",
        nickname: "Angelrosalve_MW",
        handle: "@mommyp331",
        link: "https://www.roblox.com/users/6098423687/profile",
        image: "staff11.png"
    },    
    {
        title: "FARM LEAD",
        nickname: "MWxMeelyxSTK",
        handle: "@Meelymo123",
        link: "https://www.roblox.com/users/2718840541/profile",
        image: "staff13.png"
    },    
    {
        title: "FARM LEAD",
        nickname: "MW GUERA",
        handle: "@LaGuera417",
        link: "https://www.roblox.com/users/1581059726/profile",
        image: "staff16.png"
    },
    {
        title: "FARM LEAD",
        nickname: "MW_DizWiz",
        handle: "@Azure_Allure",
        link: "https://www.roblox.com/users/2612176815/profile",
        image: "staff5.png"
    },
    {
        title: "MOD",
        nickname: "MW_EMMY",
        handle: "@SlayerLawGirl",
        link: "https://www.roblox.com/users/2448219293/profile",
        image: "staff10.png"
    },
    {
        title: "FARM LEAD",
        nickname: "MW_Lala",
        handle: "@Lala_pink56",
        link: "https://www.roblox.com/users/5146346351/profile",
        image: "staff12.png"
    },
    {
        title: "FARM LEAD",
        nickname: "MW_Noemi",
        handle: "@noemi_r5",
        link: "https://www.roblox.com/users/2708119743/profile",
        image: "staff14.png"
    },
    {
        title: "FARM LEAD",
        nickname: "MW_Rachey",
        handle: "@reidipilled",
        link: "https://www.roblox.com/users/7198283768/profile",
        image: "staff15.png"
    },
    {
        title: "GAME NIGHT HOST",
        nickname: "Mw_Spawn",
        handle: "@Spawn2300",
        link: "https://www.roblox.com/users/1595521935/profile",
        image: "staff17.png"
    },
    {
        title: "FARM LEAD",
        nickname: "XxSapphire_MWxX",
        handle: "@xXS4pph1re_Qu33nXx",
        link: "https://www.roblox.com/users/1595485545/profile",
        image: "staff18.png"
    },
    {
        title: "MOD",
        nickname: "Vel_MW",
        handle: "@b3hind_yOu777",
        link: "https://www.roblox.com/users/7448561620/profile",
        image: "staff19.png"
    },
    {
        title: "FARM LEAD",
        nickname: "MW_Devany",
        handle: "@Devany123806",
        link: "https://www.roblox.com/users/5657814036/profile",
        image: "staff20.png"
    },
    {
        title: "MOD",
        nickname: "xXMwxJust_frogXx",
        handle: "@Rana_MAbdelkader",
        link: "https://www.roblox.com/users/8264484414/profile",
        image: "staff21.png"
    },
    {
        title: "DESIGNER",
        nickname: "xXMW_BunnyXx",
        handle: "@Bunny_STK",
        link: "https://www.roblox.com/users/2064872048/profile",
        image: "staff22.png"
    },
    {
        title: "VALUE CHANGER",
        nickname: "MW_Crow",
        handle: "@XZop0999",
        link: "https://www.roblox.com/users/7768644110/profile",
        image: "staff23.png"
    },

];

const youtubers = [
    {
        name: "MOST WANTED CHANNEL",
        link: "https://youtube.com/@mostwanted-w5d?si=cXVhsTlZaTXI9nA0",
    },
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