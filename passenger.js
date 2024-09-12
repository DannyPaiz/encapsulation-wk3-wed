class Passenger {
    #name;
    #passportNum;

    constructor(name, passportNum, seatNumber) {
        this.#name = name;
        this.#passportNum = passportNum;
        this.seatNumber = seatNumber;
    }

    setPassportNum = (newPassportNum) => {
        if(!newPassportNum) throw new Error('invalid passport');
        else this.#passportNum = newPassportNum;
    }

    setName = (newName) => {
        if(!newName) {
            throw new Error('invalid name');
        } else {
            this.#name = name;
        }
    }

    getName = () => {
        return this.#name;
    }

    getPassportNum = () => {
        return this.#passportNum;
    }
}

exports.modules = {
    Passenger,
};