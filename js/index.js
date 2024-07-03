// 1-masala
// bu yerda global scope da bitta uzgaruvchi elon qilinmoqda
var a = 1;
// bitta funksiya yozilyabdi va uni ichiga daclered lar yozilyabdi 
// funksiyaning ichiga yozilgan narsaar funcsion scope ichida buladi
// yani functsiyaning blogi function scope deyiladi
function outer() {
    var b = 2;
    // funktsiya ischida yana funksiya yozilgan bu ham function scope deyiladi
    function inner() {
       var c = 3;
    //    bu yerda barcha uzgaruvchilarni ekranga chiqarmoqda 
    // bular ekranga chiqadi
       console.log(a);
       console.log(b);
       console.log(c);

    }
    inner()
}
outer()
// agar funksiya ichidagi uzgaruvchini tawqaridan turib chaqirlisa bu iwlamaydi
// faqat var nomi bilan uzgaruvchi berilgan bulsa ishlaydi




// 2-masala
// Hoisting yani kutarilish yani biz yozgan dasturimizni ishag tushirishimiz bilanoq berilgan uzgaruvchilar tepaga ko'tariladi
// bu yerda uzgaruvchi elon qilishdan oldin uni chaqirdik javoni undefined chiqadi yani dastur 
// chaqirishdan keyin qayerdadir uwa narsa elon qilinganini biladi agar uzgaruvchi yuq bulganda
// eror berar edi wu yerda hoisting amalga oshmoqda dastur ishga tushiririshi bilanoq uzgaruvchi tepaga kutrilmoqda
// va uzini borligini kursatmoqda ammo qiymatini emas
console.log(x);
var x = 5;
// bu yerda chaqirilganda esa javob chiqamoqda chunki u uzgaruvchidan keyin turibdi
console.log(x);




// 3-masala
// TDZ (Temporal Dead Zone) yani biz uzgaruvchi tayilashdan oldin uni chaqirsak u hoistingga uchraydi va uzgaruvchilar
// kutaradi.shu kutarilishdan sung birinchi chaqirilganda qiymatdan foydalana olmaydi shu foydalana olmasligi
// yoki shu foydalana olmaydigan hudud Temporal Dead Zone deb ataladi(o'lik hudud)
console.log(z);
var z = 6;
console.log(z);


// 5-masala

const student = {
    nmae : "alica",
    age : 25,
    course: "Computer Science"
}
// for...in  bu loopni obyektlar uchu qulash qulayroq.U obyektgagi kalitni ham hususiyatni ham 
// ekranga chiqarishga yordam beradi 
// buni massive stringlar uchun ham qullasa buladi lekin obyekt uchun juda qulay
for (const key in student) {
    console.log(key + ":" + student[key]);
};

// for...of bu massiv,string va boshqalarni har bir elementini ushlashga va ekranga chiqarishga yordam beradi
const grades = [90,85,88];

for (const iterator of grades) {
    console.log(iterator);
}






// 6-masala
// birinchi bulim
console.log('Task 1 :');

// hoisting kutarilish
function HoistExample() {
    console.log(a);
    var a = 5
    console.log(a);
}
HoistExample()

console.log("Task 2 :");

function ScopeExample() {
    var x = 10;
    if (true) {
        let y = 20;
        const z =30;
        // bu yerda x for scopida bulmasa ham ekranga chiqadi chunki x unish otasi bulgan fumction scopeda joylashgan
        console.log(x);
        console.log(y);
        console.log(z);
    }
    console.log(x);
    // console.log(y); bu yerda bularni ekrancha chiqaraman desangiz bu hatoik beradi chunki u funksiyaning
    // ichidagi for scopeda joylashgan undan tashqariga chiqa olmaydi
    // console.log(z)
}
ScopeExample()



console.log("Task 3 :");

// bu yerda objekt berilmoqda va for...in yordamida uning ichidagi marcha kalitlar va hususiyatlarni ekranga chiqarilmoqda
const obj = {name:`Jone`,age:30}
for (const prop in obj) {
    console.log(prop + ":" + obj[prop]);
}
// bu yerda esa for...of bu esa massiv ichidagi har bir elementni ushalash va ekranga chiqarishga yordam beradi
const arr =[10,20,30];
for (const value of arr) {
    console.log(value);
}
