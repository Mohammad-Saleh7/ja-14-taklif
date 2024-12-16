//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */
const characterImages = {
    "Harry Potter": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxpaNPAfBQO7NZxWYhSGsFQVpnLGsN7xlkg&usqp=CAU",
    "Hermione Granger": "https://miro.medium.com/v2/resize:fit:768/1*obDCz57X7D2Kd1XvcdI0Iw.jpeg",
    "Ron Weasley": "https://assets.mugglenet.com/wp-content/uploads/2020/08/Ron-Weasley.jpg",
    "Severus Snape": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ca4517e2-46dc-45cf-8f97-bd7ec63df289/dehapiz-4ba3ed16-95d3-4fa5-9de8-3f92f39ef160.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhNDUxN2UyLTQ2ZGMtNDVjZi04Zjk3LWJkN2VjNjNkZjI4OVwvZGVoYXBpei00YmEzZWQxNi05NWQzLTRmYTUtOWRlOC0zZjkyZjM5ZWYxNjAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ym4O-bDOJGuHVNHEwEwuvuo4rcSmaGstQS2IIm8n9EU",
    "Draco Malfoy": "https://i.pinimg.com/736x/11/c5/a3/11c5a3dc93a313731e411fc0baf3e109.jpg",
    "Cedric Diggory": "https://i.pinimg.com/736x/2e/2a/3f/2e2a3f8bd17150295ca2b46477d337b2.jpg",
    "Lord Voldemort": "https://www.looper.com/img/gallery/dumbledores-history-with-voldemort-explained/intro-1641410297.jpg",
    "Bellatrix Lestrange": "https://contentful.harrypotter.com/usf1vwtuqyxm/6hVoJ8zOTKogikQYYQKEmc/b0787760161f3b860630b3541e611058/BellatrixLestrange_WB_F7_BellatrixCastingSpell_V2_Still_080615_Port.jpg"
};

// Get all card elements
const cards = document.querySelectorAll('.card');

// Iterate over each card and assign the corresponding image
Object.keys(characterImages).forEach((character, index) => {
    if (cards[index]) { // Ensure the card exists
        const img = cards[index].querySelector('img');
        img.src = characterImages[character];
        img.alt = character;
    }
});