const calcula = new Promise (function (resolve, reject) {
    setTimeout(function () {
        const suma = 4 + 5;
        if (isNaN(suma)) {
            reject('error al sumar')
        } else {
            resolve(suma);
        }
    }, 2000);
});
calcula
.then(result => {
    console.log('esto suma: ');
    console.log(result);
})
.catch(error => {
    console.log(error);
});

