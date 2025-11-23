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