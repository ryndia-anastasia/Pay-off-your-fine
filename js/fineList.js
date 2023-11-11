"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey) {

    if (searchKey !== null) {
        let outcome = [];

        for (let value in DB) {
            if (DB[value].номер === searchKey || DB[value].тип === searchKey) {
                outcome.push({
                    номер: DB[value].номер,
                    тип: DB[value].тип,
                    сума: DB[value].сума,
                    дата: DB[value].дата
                });
            }
        }

        if (outcome.length > 0) {
            return outcome;
        } else {
            alert("Please, enter the correct value");
        }
    }
}
    /* Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */


