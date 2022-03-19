module.exports =  class Robot {

    execute(inputString) {
        [this.x, this.y, this.bearing, this.command] = inputString.split(" ");
        for (let command of this.command) {
            switch(command) {
                case 'R':
                    const bearingR = {'NORTH':'EAST', 'EAST':'SOUTH', 'SOUTH':'WEST', 'WEST':'NORTH'};
                    this.bearing = bearingR[this.bearing];
                    break;
                case 'L':
                    const bearingL = {'NORTH':'WEST', 'WEST':'SOUTH', 'SOUTH':'EAST', 'EAST':'NORTH'};
                    this.bearing = bearingL[this.bearing];
                    break;
                case 'A':
                    // ++ and -- used as then don't have to turn string into integer
                    this.bearing === 'NORTH' ? this.y ++
                    : this.bearing === 'EAST' ? this.x ++
                    : this.bearing === 'SOUTH' ? this.y --
                    : this.x --
                    break;
                default:
                    console.error(`Direction ${command} not allowed`);
            }
        }

        return `${this.x} ${this.y} ${this.bearing}`
    }
}