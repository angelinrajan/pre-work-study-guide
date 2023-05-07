
 /*var shapes = ["triangle", "square", "pentagon", "circle"];
 for(var x = 0; x<shapes.length; x++) {
    console.log(shapes[x]);
}
 //this is one way of getting all values in console: console.log(shapes);
This is another way of adding all values to console:
 var shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);

 //For loop is the most efficient way to log all the shapes in console
 //x++ is a shortcut way of writing x+1. this allows the array to increase by 1
 */

    var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
    var randomTopic = topics[Math.floor(Math.random() * topics.length)];
    function listTopics() {
        for(var a = 0; a<topics.length; a++) {
            console.log(topics[a]);
    }
}
 
function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
       } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
       } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
       } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
       } else {
        console.log('Please try again!');
       }
}
console.log('Here are the topics we learned through Prework:');
listTopics()
console.log('Which topic should we study first?');
selectTopic()
