async function calcula() {
    let sum=0;
    setTimeout(function () {
        sum = 4 + 5 + 'b';
    if (isNaN(sum)) {
        console.log('Error while calculating sum.');
    } else {
        console.log(sum);
    }
}, 2000);
};
async function inici(){
    await calcula();
    console.log('resultado: ');
}
inici();
console.log("ACABAT EL PROGRAMA");