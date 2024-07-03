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