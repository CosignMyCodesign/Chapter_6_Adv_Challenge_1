// Chapter6_practice1_Advanced Challenge1

/*Using createElement(), you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

1. Put an article DOM element in your index.html with the id attribute value of messages.
2. In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
3. Create five (5) section components, each with a class of message, and with the content of your choosing.
4. Using appendChild(), attach each message as a child to the messages element.
*/

// const getElem = document.querySelector('#messages')

//   // Two different functions, one creating the sections elements, the other inserting the messages into the DOM by calling on the first function
  
//   let messageArr = ["What's the score of the game?", "You don't wanna know, same thing week after week. Blah", " I just don't understand, where's the creativeness? Can't expect to win running the same plays and formations you ran three years ago.", "Atleast basketball season is here!", "True, I guess all is not lost!"]

// let createSection = () => {
//   sections = document.createElement('section')
//   sections.className = "message"
//   pushContent();
// }

//   let pushContent = () => {
//     for (let i = 0; i < messageArr.length; i++) {
//     sections.textContent += messageArr[i]
//   }}

//   // Loop create and push in third functions
// createSection();
// getElem.appendChild(sections);

// __________Doing exercise this time using DOM FRAGMENTS___________

// fragment creation
let fragment = document.createDocumentFragment()

// creating an article
let messageArticle = document.createElement("article");
messageArticle.setAttribute("id", "messages");
fragment.appendChild(messageArticle);

// function creating messages
function createSection(content) {
  let messageSect = document.createElement("section");
  messageSect.classList.add("message")
  messageSect.textContent = content;
  fragment.appendChild(messageSect)
};

// calling function to make message sections
createSection("What's the score of the game?");
createSection("You don't wanna know, same thing week after week. Blah")
createSection("I just don't understand, where's the creativeness? Can't expect to win running the same plays and formations you ran three years ago.")
createSection("Atleast basketball season is here!")
createSection("True, I guess all is not lost!")


document.body.appendChild(fragment);

