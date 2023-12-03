class Player {
    constructor({name, img, level, health, maxHealth, armor, damage, potions, gold}) {
        this.name = name;
        this.img = img;
        this.level = level;
        this.health = health;
        this.maxHealth = maxHealth;
        this.armor = armor;
        this.damage = damage;
        this.potions = potions;
        this.gold = gold;
    }

    heal(amount) {
        if(this.health === this.maxHealth) {
            return;
        }
        if(this.potions > 0) {
            this.health = Math.min(this.maxHealth, this.health + amount);
            this.potions--;
        }
    }
    /*
    name: "You",
    img: "",
    level: 1,
    health: 100,
    maxHealth: 100,
    armor: "none",
    damage: 20,
    potions: 10
    */

    levelUp() {
        this.level++;
    }

    getLoot(lootedPotions, lootedGold) {
        this.gold = this.gold + lootedGold;
        this.potions = this.potions + lootedPotions;
    }
    
};

export default Player;