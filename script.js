class Mouse {
    constructor(el) {
        this.text = document.querySelector(el);
        this.funck();
    }

    funck() {
        this.text.addEventListener('mouseenter', () => this.move());
    }

    move() {
        const kordinotaX = window.innerWidth,
            kordinataY = window.innerHeight,
            x = Math.random() * kordinotaX,
            y = Math.random() * kordinataY;

        this.text.style.marginLeft = `${x}px`;
        this.text.style.marginTop = `${y}px`;

        

       
    }
}

new Mouse(".text");

