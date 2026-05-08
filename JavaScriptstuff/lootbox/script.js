var lootBox = document.getElementById("lootbox");

var common = 0;
var common_counter = document.getElementById("common-counter");

var uncommon = 0;
var uncommon_counter = document.getElementById("uncommon-counter");

var rare = 0;
var rare_counter = document.getElementById("rare-counter");

var epic = 0;
var epic_counter = document.getElementById("epic-counter");

var legendary = 0;
var legendary_counter = document.getElementById("legendary-counter");

var mythic = 0;
var mythic_counter = document.getElementById("mythic-counter");

function rollLootbox(){
    number = Math.round(Math.random() * 100);

    if (number <= 50){
    lootBox.innerHTML = "COMMON";
    lootBox.style.backgroundColor = "grey";
    common = common + 1;
    common_counter.innerHTML = common;
    }

    else if (number <= 75){
    lootBox.innerHTML = "UNCOMMON";
    lootBox.style.backgroundColor = "green";
    uncommon = uncommon + 1;
    uncommon_counter.innerHTML = uncommon;
    }

    else if (number <= 90){
    lootBox.innerHTML = "RARE";
    lootBox.style.backgroundColor = "blue";
    rare = rare + 1;
    rare_counter.innerHTML = rare;
    }

    else if (number <= 95){
    lootBox.innerHTML = "EPIC";
    lootBox.style.backgroundColor = "purple";
    epic = epic + 1;
    epic_counter.innerHTML = epic;
    }

    else if (number <= 99){
    lootBox.innerHTML = "LEGNEDARY";
    lootBox.style.backgroundColor = "gold";
    legendary = legendary + 1;
    legendary_counter.innerHTML = legendary;
    }

    else if (number <= 100){
    lootBox.innerHTML = "MYTHIC";
    lootBox.style.backgroundColor = "red";
    mythic = mythic + 1;
    mythic_counter.innerHTML = mythic;
    }
}

document.getElementById("roll").addEventListener("click", rollLootbox);