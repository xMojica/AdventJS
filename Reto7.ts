function fixPackages(packages: string): string {
    const array = [];

    for (let char of packages) {
        if (char === ")") {
            let temp = "";
            while (array.length && array[array.length - 1] !== "(") {
                temp = array.pop() + temp;
            }
            array.pop();
            array.push(temp.split("").reverse().join(""));
        } else {
            array.push(char);
        }
    }

    return array.join("");
}

console.log(fixPackages("abc(def(gh)i)jk"));
