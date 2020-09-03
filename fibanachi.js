function fibanachi(n) {
    let basik = [0, 1]

    for (let i = 0; i < n - 2; i++) {
        basik.push(basik[basik.length - 1] + basik[basik.length - 2])

    }
    console.log(basik)
}
fibanachi(10)