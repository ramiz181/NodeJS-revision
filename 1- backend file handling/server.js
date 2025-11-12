import fs from "fs/promises";

console.log("1. script start"); // 1


async function example() {
    console.log("4. async func start writing..."); // 3
    await fs.writeFile("test1.txt", "Callback...");

    setTimeout(() => {
        fs.writeFile("test2.txt", "Callback...");
    }, 5000);

    console.log("5. async func finished writing...!"); // 5
}
async function ex2() {

    console.log('2. inside ex 2...');  /// 2
    await example();
}

ex2()
console.log("3. end of script,....This line runs immediately!"); // 4
