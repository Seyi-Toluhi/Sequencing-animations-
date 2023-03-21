const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//const run = async function () {


//const animation1 =

//const animation2 = alice2.animate(aliceTumbling, aliceTiming)

//const animation3 = alice3.animate(aliceTumbling, aliceTiming)


/*const animateNow = async function () {
    const animation1 =
    const animation2 = alice2.animate(aliceTumbling, aliceTiming)
    const animation3 = alice3.animate(aliceTumbling, aliceTiming)

    const x = await alice1.animate(aliceTumbling, aliceTiming)

}



animateNow()

const fetchPromise = alice1.animate(aliceTumbling, aliceTiming).finished
fetchPromise.then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
    .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
    .catch((e) => { console.log(e) })
//.then(() => { return alice2.animate(aliceTumbling, aliceTiming) })

//}
//run() .then(() => { alice3.animate(aliceTumbling, aliceTiming) })*/



function fetchPromise() { alice1.animate(aliceTumbling, aliceTiming) }
function fetchPromise2() { alice2.animate(aliceTumbling, aliceTiming) }
function fetchPromise3() { alice3.animate(aliceTumbling, aliceTiming) }

async function doOperations() {
    try {
        await alice1.animate(aliceTumbling, aliceTiming).finished
        await alice2.animate(aliceTumbling, aliceTiming).finished
        alice3.animate(aliceTumbling, aliceTiming)
    }
    catch (error) {
        console.log(`Could not get products`);
    }
    //catch (e) { console.log(`Await spelt wrongly ${e}`) }
    //await fetchPromise(fetchPromise2(fetchPromise3()))
}

doOperations()
/*fetchPromise.then(() => alice2.animate(aliceTumbling, aliceTiming).finished)


    .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
    .catch((e) => { console.log(e) })*/


