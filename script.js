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

        this.text.style.position = "absolute";
        this.text.style.left = `${x}px`;
        this.text.style.top = `${y}px`;
    }
}

new Mouse(".text");
