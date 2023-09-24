class MyClass {
    constructor() {
        console.log("constructor");
    }

    add(arg1, arg2) {
        const result = arg1 + arg2;
        return result;
    }
}

module.exports = MyClass;