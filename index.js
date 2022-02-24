// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name = 'Ralph') {
    cats.push(name)
}

function destructivelyPrependCat(name = "Garfield") {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop(cats.length - 1);
} 

function destructivelyRemoveFirstCat() {
    cats.shift(0,1);
}

function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats
}

const prependCat = (name) => [name , ...cats]

const removeLastCat = () => cats.slice(0, cats.length - 1);

const removeFirstCat = () => cats.slice(1, cats.length);

