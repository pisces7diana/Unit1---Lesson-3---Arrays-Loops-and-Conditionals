// Part 1: HTML & CSS //
    // 3 - I almost feel like I've got it //

// Part II: Javascript Reps //
    // Easy Going //
for (let i = 1 ; i < 21; i++)
    console.log(i)

    // Get Even //
for (let i = 0; i < 201; i+=2)
    console.log(i);

    // Fizz Buzz //
for (let i = 0 ; i < 101; i++)
    console.log(i)
// 2. I had a tough time understanding the % symbol
// 3.
// 4.

    // Wild Wild Life //
    const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
    const sharky = ["Sharky", "shark", 20, "Left Coast"]
    const plantee = ["Plantee", "plant",  5000 , "Mordor"]
    const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
    const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001;
console.log(plantee);

wolfy[3] = "Gotham City";
console.log(wolfy);

dart[4] = "Hawkins"
console.log(dart);

wolfy[0] = "Gameboy";
console.log(wolfy);

    // Yell at the Ninja //
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (const members of ninjaTurtles){
    console.log(members.toUpperCase())
}

    // Methods, Revisited //
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8]);
console.log(favMovies.sort()); // it sorted the array in alphabetical order
console.log(favMovies.pop()); // after console.log(favMovies), Volver dropped from the list
console.log(favMovies.push('Guardians of the Galaxy')); // after console.log(favMovies), Guardians of the Galaxy was added to the bottom of the list
console.log(favMovies.reverse()); // the list flipped over to show 'Guardians of the Galaxy' on top and 'Black Panther' at the bottom of the list
console.log(favMovies.shift()); // after console.log(favMovies), Guardians of the Galaxy dropped from the top of the list
console.log(favMovies.unshift()); // after console.log(favMovies), the list was still the same as shift... nothing happened
// console.log(favMovies.splice["Django Unchained"]); I tried this and console.log(favMovies); and it kept showing "Django Unchained" on the list

    // Where is Waldo //
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];

// console.log(whereIsWaldo.splice[1]); // I thought "Eggbert" has an index of [1] - error

// console.log(whereIsWaldo);

// whereIsWaldo[2][2] = "No One"; - error

// console.log(whereIsWaldo);

// console.log(whereIsWaldo[3][1][1]); - error

// console.log(whereIsWaldo);

    const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];

    whereIsWaldo.splice(1,1);
    
    console.log(whereIsWaldo);

    whereIsWaldo[1][2] = "No One";

    console.log(whereIsWaldo);

    // Excited Kitten //
const kitten = 0

for (i = 0; i < 21; i++){
    console.log("Love me, pet me! HSSSSSS!", i)
}

let kitty = ["human... why you taking pictures of me", "... the catnip made me do it", "... why does the red dot always get away"]

kittyTalk[1];
kittyTalk[2];
kittyTalk[3];

        // Hint 3-5: I didn't understand how hint 3 tied with hints 1-2 and the math.random()

    // Find the Median //

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]
    nums[Math.floor(nums.length / 2)];
Expected output:
=> 15
console.log(nums); // I'm not sure why the expected output wasn't 15 because the instructions suggested Math.floor