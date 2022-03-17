class Robot {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.bearing = 'NORTH';
        this.command = ''
    }

    execute(inputString) {
        const splitString = inputString.split(" ");
        this.x = Number(splitString[0]);
        this.y = Number(splitString[1]);
        this.bearing = splitString[2];
        this.command = splitString[3];
        for (let i = 0; i<this.command.length; i++) {
            this.move(this.command[i])
        }
        return `${this.x} ${this.y} ${this.bearing}`
    }

    move(direction) {
        if (direction === 'A') {
            return this.bearing === 'NORTH' ? this.y += 1
            : this.bearing === 'EAST' ? this.x += 1
            : this.bearing === 'SOUTH' ? this.y -= 1
            : this.x -= 1
        }
    }
}

const robot = new Robot();

console.log(robot.execute('0 0 NORTH A'))