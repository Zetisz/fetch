// await
// // JSON: JavaScript Object Notation

async function init() {
    const response = await (fetch('./tartalom.txt'));
    console.log('Headerek letöltve');

    const text = await response.text();
    console.log('Tartalom letöltve');
    const main = document.getElementsByTagName('main')[0];
    main.textContent = text;
}
init();
console.log('Betöltött');

/*
fetch('./tartalom.txt').then(response => {
    console.log('Headerek letöltve');
    return response.text();
}).then(text => {
    console.log('Tartalom letöltve');
    const main = document.getElementsByTagName('main')[0];
    main.textContent = text;
})
console.log('Betöltött')
*/