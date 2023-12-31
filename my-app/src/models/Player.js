class Player {
    constructor({name, img, level, health, maxHealth, weapon, armor, damage, potionNum, gold}) {
        this.name = name;
        this.img = img;
        this.level = level;
        this.health = health;
        this.maxHealth = maxHealth;
        this.weapon = weapon;
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
        //increases maxHealth 
        this.maxHealth = this.maxHealth + 30;
        //increases damage
        this.damage = this.damage + 10;
    }

    //adds loot to the player object
    getLoot(lootedPotions, lootedGold) {
        this.potionNum = this.potionNum + lootedPotions;
        this.gold = this.gold + lootedGold;
    }

    get defeated() {
        return(this.health <=0);
    }
    
};

export default Player;