function userDialog() {
    alert("Вітаємо у картинній галереї!");
    const name = prompt("Як вас звати?");
    const likesArt = confirm("Ви любите мистецтво?");
  
    if (likesArt) {
      alert("Дякуємо, що завітали до нашої галереї, " + name + "!");
    } else {
      alert("Шкода, що ви не цікавитесь мистецтвом, " + name + ".");
    }
}
  
// userDialog();
  
function showDeveloperInfo(lastName, firstName, position = "Розробник") {
    alert(
      "Розробник сторінки: " +
        lastName +
        " " +
        firstName +
        "\nПосада: " +
        position
    );
}
  
// showDeveloperInfo("Карина", "");
  
// Функція порівняння двох рядків
function compareStrings() {
    const str1 = prompt("Введіть перший рядок");
    const str2 = prompt("Введіть другий рядок");

    if (str1.length > str2.length) {
      alert("Більший рядок: " + str1);
    } else if (str2.length > str1.length) {
      alert("Більший рядок: " + str2);
    } else {
      alert("Рядки однакової довжини.");
    }
}
  
// compareStrings();
  
function changeBackgroundColor() {
    document.body.style.backgroundColor = "#ff00ff";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 30000);
}
  
// changeBackgroundColor();
  
function redirectPage() {
    location.href = "https://www.louvre.fr/en";
}

// redirectPage();

const section2 = document.getElementById("section2");
section2.style.border = "2px solid #000";

const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((paragraph) => {
    paragraph.style.color = "#4682b4";
});
  
document.addEventListener("DOMContentLoaded", () => {
    // Використання innerHTML
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML += '<p class="text highlight">Доданий параграф за допомогою innerHTML.</p>';

    // Використання outerHTML
    const firstParagraph = document.querySelector(".text");
    alert(firstParagraph.outerHTML);

    // Використання nodeValue / data
    const textNode = document.createTextNode("Текстовий вузол.");
    alert(textNode.nodeValue); 

    // Використання textContent
    const secondParagraph = contentDiv.querySelector(".text:nth-child(2)");
    secondParagraph.textContent = "Змінений текстовий контент за допомогою textContent.";

    // Використання document.createElement і document.createTextNode
    const newDiv = document.createElement("div");
    const newText = document.createTextNode("Це новий div, створений за допомогою createElement та createTextNode.");
    newDiv.appendChild(newText);
    document.body.appendChild(newDiv);

    // Використання node.append
    const newParagraph = document.createElement("p");
    newParagraph.append("Це новий параграф, доданий за допомогою ", document.createElement("strong"), ".");
    contentDiv.append(newParagraph);

    // Використання node.prepend
    const header = document.createElement("h1");
    header.textContent = "Заголовок, доданий за допомогою prepend";
    contentDiv.prepend(header);

    // Використання node.after
    const afterParagraph = document.createElement("p");
    afterParagraph.textContent = "Цей параграф додано за допомогою after.";
    newParagraph.after(afterParagraph);

    // Використання node.replaceWith
    const replacementParagraph = document.createElement("p");
    replacementParagraph.textContent = "Цей параграф замінив попередній за допомогою replaceWith.";
    afterParagraph.replaceWith(replacementParagraph);

    // Використання node.remove
    const removeElement = document.querySelector(".highlight");
    removeElement.remove();

    // Використання document.write
    // якщо розкоментувати, то стопінка повністю перезапишеться і залишиться тільки той текст, що записаний document.write
    // document.write("<p>Доданий параграф за допомогою document.write."); 
});




