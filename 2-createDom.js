//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
//2
const firstParagraph = document.querySelector('p');
console.log('First Paragraph:', firstParagraph.textContent);

//3
const firstPara =document.querySelector('fPara')
const secondParagraph = document.querySelector('#sPara');
const thirdParagraph = document.querySelector('#tPara');
const fourthParagraph = document.querySelector('#foPara');
console.log('First paragraph:',firstPara);
console.log('Second Paragraph:', secondParagraph);
console.log('Third Paragraph:', thirdParagraph);
console.log('Fourth Paragraph:', fourthParagraph);

//4
const paragraphs = document.querySelectorAll('p');

//5
paragraphs.forEach((para, index) => {
    console.log(`Paragraph ${index + 1}:`, para.textContent);
});

//6
fourthParagraph.textContent = 'This is the updated fourth paragraph.';

//7
paragraphs.forEach((para, index) => {
    para.id = `paragraph-${index + 1}`; 
    para.className = `class-paragraph-${index + 1}`;
});

//8
paragraphs.forEach(para => {
    para.style.color = 'black';
    para.style.backgroundColor = 'white';
    para.style.border = '2px solid black';
    para.style.fontSize = '16px';
    para.style.fontFamily = 'Arial, sans-serif';
});

//9
paragraphs.forEach((para, index) => {
    if (index % 2 === 0) { 
        para.style.color = 'green';
    } else { 
        para.style.color = 'red';
    }
});

