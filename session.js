const chars = {
    a: Math.round(Math.random() * 100),
    b: Math.round(Math.random() * 100),
    c: Math.round(Math.random() * 100),
    d: Math.round(Math.random() * 100),
    e: Math.round(Math.random() * 100),
    f: Math.round(Math.random() * 100),
    g: Math.round(Math.random() * 100),
    h: Math.round(Math.random() * 100),
    i: Math.round(Math.random() * 100),
    j: Math.round(Math.random() * 100),
    k: Math.round(Math.random() * 100),
    l: Math.round(Math.random() * 100),
    m: Math.round(Math.random() * 100),
    n: Math.round(Math.random() * 100),
    o: Math.round(Math.random() * 100),
    p: Math.round(Math.random() * 100),
    q: Math.round(Math.random() * 100),
    r: Math.round(Math.random() * 100),
    s: Math.round(Math.random() * 100),
    t: Math.round(Math.random() * 100),
    u: Math.round(Math.random() * 100),
    v: Math.round(Math.random() * 100),
    w: Math.round(Math.random() * 100),
    x: Math.round(Math.random() * 100),
    y: Math.round(Math.random() * 100),
    z: Math.round(Math.random() * 100),
    aa: Math.round(Math.random() * 100),
    bb: Math.round(Math.random() * 100),
    cc: Math.round(Math.random() * 100),
    dd: Math.round(Math.random() * 100),
    ee: Math.round(Math.random() * 100),
    ff: Math.round(Math.random() * 100),
    gg: Math.round(Math.random() * 100),
    hh: Math.round(Math.random() * 100),
    ii: Math.round(Math.random() * 100),
    jj: Math.round(Math.random() * 100),
    kk: Math.round(Math.random() * 100),
    ll: Math.round(Math.random() * 100),
    mm: Math.round(Math.random() * 100),
    nn: Math.round(Math.random() * 100),
    oo: Math.round(Math.random() * 100),
    pp: Math.round(Math.random() * 100),
    qq: Math.round(Math.random() * 100),
    rr: Math.round(Math.random() * 100),
    ss: Math.round(Math.random() * 100),
    tt: Math.round(Math.random() * 100),
    uu: Math.round(Math.random() * 100),
    vv: Math.round(Math.random() * 100),
    ww: Math.round(Math.random() * 100),
    xx: Math.round(Math.random() * 100)
}

let charKeys = []


for (let key in chars) {
    charKeys.push(chars[key])
}

const sorted = charKeys.sort()
const maxThreeNumbers = charKeys.slice(charKeys.length - 3, charKeys.length)


const str = "qaxaqapetaran"
let charIndices = Object.create({})

for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (!charIndices[char]) {
        charIndices[char] = []
    }
    charIndices[char].push(i)
}


const users = [
    {
        name: "Eric",
        surName: "Antonyan",
        profession: "Web Developer",
        budget: 500000
    },
    {
        name: "Andranik",
        surName: "Hoveyan",
        profession: "Web Developer",
        budget: 450500
    },
    {
        name: "Elen",
        surName: "Hakobyan",
        profession: "Web Designer",
        budget: 400000
    },
    {
        name: "Anna",
        surName: "Qaramyan",
        profession: "Web Designer",
        budget: 300000
    },
    {
        name: "Anatoli",
        surName: "Poghosyan",
        profession: "Software Developer",
        budget: 400000
    },
    {
        name: "Maqsim",
        surName: "Minasyan",
        profession: "Software Developer",
        budget: 900000
    },
    {
        name: "Armen",
        surName: "Baghdasaryan",
        profession: "Graphic Designer",
        budget: 100000
    },
    {
        name: "Arkadi",
        surName: "Dumikyan",
        profession: "Music",
        budget: 1500000
    },
    {
        name: "Ashot",
        surName: "Hovhannisyan",
        profession: "Blogger",
        budget: 200000
    },
    {
        name: "Elen",
        surName: "Sargsyan",
        profession: "Blogger",
        budget: 850000
    },
    {
        name: "Erik",
        surName: "Karapetyan",
        profession: "Dev Ops",
        budget: 65400
    },
    {
        name: "Arkadi",
        surName: "Dumikyan",
        profession: "Music",
        budget: 75000
    },
    {
        name: "Ashot",
        surName: "Hovhannisyan",
        profession: "Blogger",
        budget: 200000
    },
    {
        name: "Elen",
        surName: "Sargsyan",
        profession: "Blogger",
        budget: 85247
    },
    {
        name: "Erik",
        surName: "Karapetyan",
        profession: "Dev Ops",
        budget: 452684
    }
]

let professionWithUsers = []

for (let i = 0; i < users.length; i++) {
    const matchedProfession = 'Web Developer'
    const user = users[i]

    if (user.profession === matchedProfession) {
        professionWithUsers.push(user)
    }
}

let bigBugetUser = {}

for (let i = 1; i < professionWithUsers.length; i++) {
    for (let j = 0; j < professionWithUsers.length - 1; j++) {
        if (professionWithUsers[j].budget > professionWithUsers[j + 1].budget) {
            bigBugetUser = professionWithUsers[j]
        }
    }
}

const erics = {}

for (let i = 1; i < users.length; i++) {
    let user = users[i]
    if (nam) {

    }
}

console.log(erics);