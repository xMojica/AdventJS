let nombres = ["Juan", "Pedro", "Oliva", "Argemiro", "Jerusalenvkil"];

function createFrame(names) {
    let array = [];
    let longitud = [];
    let printer = "";

    names.forEach((name) => {
        array.push(name.length);
    });
    array.sort((a, b) => b - a);
    longitud = array[0];

    for (let i = 0; i <= names.length + 1; i++) {
        if (i == 0 || i == names.length + 1) {
            for (let i = 0; i < longitud; i++) {
                printer = printer + "*";
            }
            printer = printer + "****";
        } else {
            printer =
                printer +
                "* " +
                names[i - 1] +
                " ".repeat(longitud - names[i - 1].length) +
                " *";
        }
        if (i != names.length + 1) {
            printer = printer + "\n";
        }
    }
    return printer;
}

console.log(createFrame(nombres));
