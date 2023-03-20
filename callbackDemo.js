
function walkTheDog(personName, dogName, callback) {
    console.log(`${personName} is walking ${dogName} and will be home in 30 minutes`);
    callback(personName, dogName);
}

function watchAMovie(personName, dogName) {
    console.log(`${personName} and ${dogName} and Joel will watch a movie!`);
}

walkTheDog('Olivia', 'Hunt', watchAMovie);