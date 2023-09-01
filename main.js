/*var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for (let i = 0; i < harryPotterTitles.length; i++){
    console.log("Harry Potter " + harryPotterTitles[i]);
}*/

/*let aGrades = {
    score: 0,
    actualGrade: "A"
}
let bGrades = {
    score: 0,
    actualGrade: "B"
}
let cGrades = {
    score: 0,
    actualGrade: "C"
}
let dGrades = {
    score: 0,
    actualGrade: "D"
}
let fGrades = {
    score: 0,
    actualGrade: "F"
}

let percentageGrades = 0

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(let i = 0; i < grades.length; i++){

if (grades[i] >= 0 && grades[i] <= 69){
    console.log("You got an F");
    fGrades.score++
} if (grades[i] >= 70 && grades[i] <= 76){
    console.log("You got a D");
    dGrades.score++
} if (grades[i] >= 77 && grades[i] <= 84){
    console.log("You got a C");
    cGrades.score++
} if (grades[i] >= 85 && grades[i] <= 92){
    console.log("You got a B");
    bGrades.score++
} if (grades[i] >= 93 && grades[i] <= 100){
    console.log("You got an A");
    aGrades.score++
}}

let letterGrades = [aGrades,bGrades, cGrades, dGrades, fGrades]
let highScore = {
    score: 0,
    actualGrade: "" 
}

for(let i=0; i < letterGrades.length; i++){
    if(letterGrades[i].score > highScore.score)
    {
        highScore = letterGrades[i]
    }
}
console.log(highScore)                    // problem 3)
console.log(aGrades, "This is A grades")  // problem 1)
console.log(bGrades, "This is B grades")  // problem 2)


// Goal: Average Grades

// 1) add up all of the #'s in the array. we should store that in a variable  use for loop

let totalSum = 0

for(let i=0; i < grades.length; i++){
    totalSum = totalSum + grades[i]
}
console.log(totalSum)


// 2) we need to get the length of the array   use .length

let gradesLength = grades.length
console.log(grades.length)
console.log(gradesLength)

// 3) divide variable from step one by variable from step 2

let averageGrade = (totalSum / gradesLength)

// 4) console.log the answer

console.log(averageGrade)

if (averageGrade >= 0 && averageGrade <= 69){
    console.log("The most common grade is an F");
    
} if (averageGrade >= 70 && averageGrade <= 76){
    console.log("The most common grade is a D");
    
} if (averageGrade >= 77 && averageGrade <= 84){
    console.log("The most common grade is a C");
    
} if (averageGrade >= 85 && averageGrade <= 92){
    console.log("The most common grade is a B");
    
} if (averageGrade >= 93 && averageGrade <= 100){
    console.log("The most common grade is an A");
    
}*/

let array = [2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < array.length; i += 2){}
    


let cheerString = ""

for(let i = 2; i <= 8; i += 2){
    cheerString += `${i} `
}
cheerString += "Who do we appreciate?"

//console.log(cheerString)




var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let sentence = ""

for (let i = 0; i < sentenceArray.length; i++ ){
    if ((i % 3) === 0 && i !== 0){
        sentence += `MOOOOOOOO ${sentenceArray[i]}`
    } else {
        sentence += `${sentenceArray[i]} `
    }   
    
}




const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

for(let i=0; i < 4; i++){
    let string =`${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth}. He contributed heavily to the ${beatles.albums[i]} Album.`

    if(beatles.members[i].death){
        string += `They died in ${beatles.members[i].death}`
    }
    console.log(string)
}