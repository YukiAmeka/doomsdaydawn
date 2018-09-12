class Character {
    constructor(name, image, alt, descrip, role, stat) {
        this.name = name;
        this.image = image;
        this.alt = alt;
        this.descrip = descrip;
        this.role = role;
        this.stat = stat;
    }
}

const sator = new Character("Sator", "images/sator_token.png", "Image of Sator - a cleric of Sarenrae", 
    "Genial cleric of Sarenrae the Dawnflower. He travels looking for anyone who needs healing or other kind of help and maybe for a little bit of fun in between", "pc", "active");