function inBox(box: string[]): boolean {
    const regex = /#\s*\*+\s*#/;
    let bandera = false;
    box.map((e, i) => {
        if (i !== 0 && i !== box.length - 1) {
            if (regex.test(e) === true) {
                bandera = true;
            }
        }
    });
    return bandera;
}

const caja: string[] = ["###", "#*#", "###"];

console.log(inBox(caja));
