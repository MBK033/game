class Boss extends Sprite{
    constructor({ 
        position, 
        velocity,  
        framesHold,
        image,
        scale = 1,
        framesMax = 1,
        offset = { x: 0, y: 0 },
        sprites
        }) {
            super({
        position,
        image,
        scale,
        framesMax,
        })
        this.position = position;
        this.velocity = velocity;
        this.width = 120; this.height = 240;

        this.swordheight = this.position.y;
        this.sword = { position: { x: 660, y: 100 }, width: 400, height: 20 };

        this.health = 100;

        this.offset = offset;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = framesHold;
        this.sprites = sprites;
        
       
        
    }

    registerDamage(damage) {
        this.health -= damage;
        document.querySelector('#enemyHealth').style.width = enemy.health +'%'
        console.log("enemy health: " + this.health);

        setTimeout(function() {
            if (this.health <= 0) {
              document.querySelector('.alertBox').classList.add('visible');
            }
          }.bind(this), 2000);
    }

    update() {
        
        const swordOffset = isAttacking2 ? 2 : -40;
        this.sword.position.y = this.position.y + swordOffset;
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    
        this.velocity.y = (this.position.y + this.height >= canvas.height - 110) ? 0 : this.velocity.y + gravity;
    
        this.animateFrames("boss");
        this.draw();
    }    
}


const enemy = new Boss({
    position: { x: 800, y: 100 },
    velocity: { x: 0, y: 10 },
    offset: { x: 180, y: 100 },
    scale: 5,
    image: imageIdleEnemy,
    sprites: {
        idle:    { image: imageIdleEnemy,   framesMax: 5, framesHold: 12, framesCurrent: 0 },
        attack:  { image: imageAttackEnemy, framesMax: 9, framesHold: 7, framesCurrent: 0 },
    }
});
console.log(enemy)

