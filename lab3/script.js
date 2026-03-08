(function () {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  console.log("--- Основне завдання (пункт 1.2.2) ---");
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  console.log("\n--- Додатковий функціонал: Селекція за довжиною імені ---");
  console.log("Анотація: Якщо ім'я складається більше ніж з 4 літер, воно вважається довгим, інакше - коротким.");
  
  for (var j = 0; j < names.length; j++) {
    var name = names[j];
    
    if (name.length > 4) {
      console.log(name + " - це довге ім'я.");
    } else {
      console.log(name + " - це коротке ім'я.");
    }
  }
})();
