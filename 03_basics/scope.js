

function one() {
    const username = "molu"

    function two() {
        const website = 'youtube'
        console.log(username); // can access from broader block
    }
    // console.log(website) // cannot access from narrower block 
    two()
}

one()