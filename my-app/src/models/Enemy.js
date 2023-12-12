class Enemy {
    constructor({name, className, level, img, health, maxHealth, damage, loot}) {
        this.name = name;
        this.className = className;
        this.level = level;
        this.img = img;
        this.level = level;
        this.health = health;
        this.maxHealth = maxHealth;
        this.damage = damage;
        this.loot = loot;
    }

    takeDamage(damageNum) {
        this.health = Math.max(0, this.health - damageNum);
    }

    get defeated() {
        return(this.health <=0);
    }

}
/* 
    might expand enemy class to include loot, with enemy loot being something like 
    loot: {gold: some amount, potions: some amount}
*/


export default Enemy;

