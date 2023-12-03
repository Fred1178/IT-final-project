class Enemy {
    constructor(name, img, health, maxHealth, damage) {
        this.name = name;
        this.img = img;
        this.health = health;
        this.maxHealth = maxHealth;
        this.damage = damage;
    }

    takeDamage(damageNum) {
        this.health = Math.max(0, this.health - damageNum);
    }

    get defeated() {
        return(this.health <=0);
    }
}


export default Enemy;

