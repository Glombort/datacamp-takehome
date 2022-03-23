module.exports =  class Robot {

    execute(inputString) {
        [this.x, this.y, this.bearing, this.commands] = inputString.split(" ");
        for (let command of this.commands) {
            switch(command) {
                case 'R':
                    this.rightTurn();
                    break;
                case 'L':
                    this.leftTurn();
                    break;
                case 'A':
                    this.advance();
                    break;
                default:
                    console.error(`Direction ${command} not allowed`);
            }
        }

        return `${this.x} ${this.y} ${this.bearing}`
    }

    rightTurn() {
        const bearingR = {'NORTH':'EAST', 'EAST':'SOUTH', 'SOUTH':'WEST', 'WEST':'NORTH'};
        this.bearing = bearingR[this.bearing];
    }

    leftTurn() {
        const bearingL = {'NORTH':'WEST', 'WEST':'SOUTH', 'SOUTH':'EAST', 'EAST':'NORTH'};
        this.bearing = bearingL[this.bearing];
    }

    advance() {
        // ++ and -- used as then don't have to turn string into integer
        this.bearing === 'NORTH' ? this.y ++
        : this.bearing === 'EAST' ? this.x ++
        : this.bearing === 'SOUTH' ? this.y --
        : this.x --
    }
}