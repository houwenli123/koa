function takeLongTime() {
    console.log('123');
    setTimeout(() => { console.log('wer') }, 0)
    return new Promise(resolve => {
        console.log("ert")
    })
}

async function test() {
    const v1 = await takeLongTime();
    console.log(v1);
}

test()
console.log("234")