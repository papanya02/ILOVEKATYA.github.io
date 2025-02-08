document.getElementById("calc").onclick = function() {
    loveCalc();
    document.getElementById("output").innerHTML = "<p>" + loveCalc() + "% Сумісності!</p>";
}

function loveCalc() {
    var name1 = document.getElementById("input1").value.trim().toLowerCase();  // Перетворюємо в нижній регістр і видаляємо пробіли
    var name2 = document.getElementById("input2").value.trim().toLowerCase(); // Перетворюємо в нижній регістр і видаляємо пробіли

    // Перевірка на відповідність "Катя" і "Андрій" (у будь-якому порядку та з урахуванням англійської/української версії)
    if (
        (name1 === "катя" && name2 === "андрій") ||
        (name1 === "андрій" && name2 === "катя") ||
        (name1 === "katya" && name2 === "andrii") ||
        (name1 === "andrii" && name2 === "katya")
    ) {
        return 101; // Якщо імена збігаються, повертаємо 101%
    }

    // Якщо це не "Катя" і "Андрій", генеруємо випадковий відсоток
    var result = Math.floor(Math.random() * 100 + 1);
    return result;
}
