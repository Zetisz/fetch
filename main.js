// await
// // JSON: JavaScript Object Notation

async function init() {
    const response = await (fetch('https://petrik-12e-2026-default-rtdb.europe-west1.firebasedatabase.app/kutyak.json'));
    console.log('Headerek letöltve');

    const adatok = await response.json();
    const main = document.getElementsByTagName('main')[0];
    for (const kutya of adatok) {
        const p = document.createElement('p');
        p.textContent = `${kutya.nev} (${kutya.eletkor} éves), ${kutya.fajta}, ${kutya.suly} kg`;
        main.appendChild(p);
    }
    console.log('Tartalom letöltve');
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