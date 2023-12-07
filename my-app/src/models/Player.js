class Player {
    constructor({name, img, level, health, maxHealth, armor, damage, potionNum, gold}) {
        this.name = name;
        this.img = img;
        this.level = level;
        this.health = health;
        this.maxHealth = maxHealth;
        this.armor = armor;
        this.damage = damage;
        this.potionNum = potionNum;
        this.gold = gold;
    }

    takeDamage(damageNum) {
        this.health = Math.max(0, this.health - damageNum);
    }


    
    heal(amount) {
        if(this.health === this.maxHealth) {
            return;
        }
        if(this.potionNum > 0) {
            this.health = Math.min(this.maxHealth, this.health + amount);
            this.potionNum--;
        }
    }

    //levels up the player
    levelUp() {
        this.level++;
    }

    //adds loot to the player object
    getLoot(lootedPotions, lootedGold) {
        this.gold = this.gold + lootedGold;
        this.potionNum = this.potionNum + lootedPotions;
    }

    get defeated() {
        return(this.health <=0);
    }
    
};

export default Player;