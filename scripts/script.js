// Задание 1

/* let n = 1;

while(n <= 50) {
    console.log(n);
    n++;
}

    n = 35;

while(n >= 8) {
    console.log(n);
    n--;
} */


// Задание 2

/* let i = 89;

while(i >= 11) {
    document.write(`${i} <br />`);
    i--;
} */


// Задание 3

/* let m = 0,
    sum = 0;

for(; m <= 100; m++) {
    sum += m;
}

console.log(sum);
alert(`Сумма чисел от 0 до 100 равна ${sum}`); */


// Задание 4 

/* let z = 1,
    j = 1,
    sumZ = 0;

for(; z <= 5; z++) {
    for(; j <= z; j++) {
        sumZ += j;
    }
    console.log(`Сумма чисел ${z} равна ${sumZ}`);
} */


// Задание 5

/* let d = 8;

for(; d <= 56; d++) {
    if (d % 2 !== 0) continue;
    console.log(d);
}

// while?
    d = 7;

while(d <= 56) {
    d++;
    if (d % 2 !== 0) {
        continue; 
    }
    console.log(d);
} */


// Задание 6

/* let mult = 0,
    c = 2;

for(; c <= 10; c++) {
    console.log('Число ' + c);
    for(let f = 1; f <= 10; f++) {
        mult = c * f;
        console.log(`${c}x${f}=${mult}`);
        document.write(`${c}x${f}=${mult} <br />`);
    }
} */


// Задание 7

/* let n = 1000,
    num = 0;

for(; n > 50; ) {
    n = n / 2;
    num++;
}
console.log('Число итераций ' + num, 'последнее число ' + n); */


// Задание 8

/* let q,
    sumQ = 0,
    iter = 0;

for (; ;) {
    q = +prompt('Введите число', '');
        if (q == 0) {
            break;
        } else if (!parseInt(q)) {
            alert('Ошибка ввода');
            break;    
        } else {
            sumQ += q;
            iter++;
        } 
}
console.log('Cумма введенных чисел ' + sumQ, 'Среднее арифметическое ' + (sumQ / iter)); */


// Задание 9??? 

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    strNum = '',
    min = +Infinity,
    max = -Infinity;
for(let i = 0; i < str.length+1; i++) {
    if(str[i] != ' ' && str[i] != undefined) {
        strNum += str[i];
    } else {
        console.log(strNum);
        min = min < strNum ? min : strNum;
        max = max > strNum ? max : strNum;
        strNum = '';
    }
}
console.log('Min: ' + min);
console.log('Max: ' + max);

// Задание 10

/* let v = '356',
    vNum,
    vRvrs = '',
    vSum = 0;
for (let i = 0; i < v.length; i++) {
    vNum = +v[i];
    vSum += +v[i];
    console.log('Число ' + vNum);
}   
for (let j = v.length - 1; j >= 0; j--) {
    vRvrs += +v[j];
}
console.log('Количество чисел ' + v.length);
console.log('Сумма чисел ' + vSum);
console.log('Обратные числа ' + vRvrs);
 */
