function createXmasTree(height, ornament) {
    let printer = "";
    for (let i = 0; i < height; i++) {
        printer =
            printer +
            "_".repeat(height - (i + 1)) +
            ornament.repeat(i * 2 + 1) +
            "_".repeat(height - (i + 1));

        printer = printer + "\n";
    }
    printer =
        printer + "_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n";
    printer = printer + "_".repeat(height - 1) + "#" + "_".repeat(height - 1);

    return printer;
}

console.log(createXmasTree(9, "@"));
