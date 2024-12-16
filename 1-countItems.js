//Count the number of <li> in the countItems.html file and show the results in console.
document.querySelector('input[type="button"]').addEventListener('click', function() {
    const listItems = document.querySelectorAll('li');
    console.log('Total number of items in the list:', listItems.length);
});