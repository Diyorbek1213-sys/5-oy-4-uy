alert('1-vazifa')

// Vazifa: Sahifada bir nechta bo‘sh kvadratlar (div) bo‘lsin. Har bir kvadrat ustiga "Rasm qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi rasm (img elementi) kvadratning ichiga qo‘shilsin. Kvadrat ichida avvaldan rasm bo‘lsa, o‘sha rasmni o‘chirib, yangisini qo‘shsin.
const div_1 = document.querySelector('.div_1')
const div_2 = document.querySelector('.div_2')
const div_3 = document.querySelector('.div_3')
const btn_1 = document.querySelector('.btn_1')
const btn_2 = document.querySelector('.btn_2')
const btn_3 = document.querySelector('.btn_3')
const newww = document.createElement('img')

btn_1 && btn_1.addEventListener('click', function() {
   const search = div_1.querySelector('img')
   if(search) {
      div_1.removeChild(div_1.firstChild)
   }

   div_1.append(newww)
   newww.setAttribute('src', 'https://picsum.photos/200/300')
   div_1.classList.toggle('salom') 
})

alert('2-vazifa')

// Vazifa: HTML sahifasida daraxt shaklidagi tuzilma (ul, li) berilgan bo‘lsin. Foydalanuvchi har bir element ustiga bosganda, o‘sha elementning:
alert("2-vazifa")
const strong = document.querySelector('.strong')
const blockquote = document.querySelector('.blockquote')
const span = document.querySelector('.span')

strong && strong.addEventListener('click', function() {
   let parent = strong.parentNode
   console.log(parent)
})

blockquote && blockquote.addEventListener('click', function() {
   let prev = blockquote.previousSibling
   console.log(prev)
})

span && span.addEventListener('click', function() {
   let child = span.childNodes
   console.log(child)
})

// Vazifa: Sahifada ikkita kvadrat (div) bo‘lsin. Har bir kvadrat ichida matn yozilgan bo‘lsin. Foydalanuvchi tugma bosganda, ushbu kvadratlarning o‘z ichidagi matnlari almashib qolsin.
alert("3-vazifa")
const div_4 = document.querySelector('.div_4')
const div_5 = document.querySelector('.div_5')
const btn_4 = document.querySelector('.btn_2')
const p_1 = document.querySelector('.p_1')
const p_2 = document.querySelector('.p_2')

btn_4 && btn_4.addEventListener('click', function() {
   div_4.appendChild(p_2)
   div_5.appendChild(p_1)
})

// Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har safar foydalanuvchi sahifaga kirganda, tugmalardan biriga avtomatik ravishda "qizil" klassi qo‘shiladi. Foydalanuvchi boshqa tugmalarni bosganda, yangi tugmaga "qizil" klassi o‘tadi, avvalgisi esa "qizil" klassini yo‘qotadi.
alert("4-vazifa")
const btn_5 = document.querySelector('.btn_3')
const btn_6 = document.querySelector('.btn_4')
btn_5.classList.add('qizil')

btn_6 && btn_6.addEventListener('click', function() {
   btn_6.classList.add('qizil')
   if(btn_5.classList.contains('qizil')) {
      btn_5.classList.remove('qizil')
   }
})

// Vazifa: Sahifada bir nechta paragraflar va bitta "Yangi paragraf qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi paragraf qo‘shilsin va u maqolaning oxiriga yoki boshiga joylashtirilsin (foydalanuvchi oldindan tanlaydi).
alert("5-vazifa") // ? savolni yaxshi tushunmadim maqolaning boshiga yoki oxiriga dedi qaysi maqolani aytayotganini bilolmadim
// const p_3 = document.querySelector('.p_3')
// const p_4 = document.querySelector('.p_4')
// const btn_7 = document.querySelector('.btn_5')
// const input = document.querySelector('.input_1')

// btn_7 && btn_7.addEventListener('click', function() {
//    let newwww = document.createElement('p')
//    if(input.value === 'boshiga') {
//       p_3.prepend(newwww)
//    }

//    if(input.value === 'oxiriga' || input.value === 'ohiriga') {
//       p_4.append(newwww)
//    }
// })

// Vazifa: Sahifada bir nechta rangli kvadratlar bo‘lsin. Har bir kvadratning tagida "Chapga qo‘shish" va "O‘ngga qo‘shish" tugmalari joylashtiriladi. Tugma bosilganda kvadratning chap yoki o‘ng tomoniga yangi kvadrat qo‘shilsin.
alert("6-vazifa")
const div_6 = document.querySelector('.div_6')
const div_7 = document.querySelector('.div_7')
const div_8 = document.querySelector('.div_8')
const btn_8 = document.querySelector('.btn_6')
const btn_9 = document.querySelector('.btn_7')
const btn_10 = document.querySelector('.btn_8')
const btn_11 = document.querySelector('.btn_9')
const btn_12 = document.querySelector('.btn_10')
const btn_13 = document.querySelector('.btn_11')
const simple_2 = document.createElement('div')

btn_8 && btn_8.addEventListener('click', function() {
   div_6.before(simple_2)
})

btn_9 && btn_9.addEventListener('click', function() {
   div_6.after(simple_2)
})

btn_10 && btn_10.addEventListener('click', function() {
   div_6.before(simple_2)
})

btn_11 && btn_11.addEventListener('click', function() {
   div_6.after(simple_2)
})

btn_12 && btn_12.addEventListener('click', function() {
   div_6.before(simple_2)
})

btn_13 && btn_13.addEventListener('click', function() {
   div_6.after(simple_2)
})

// Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har bir tugmaning yonida "Yashirish" tugmasi bo‘lsin. "Yashirish" tugmasi bosilganda asosiy tugma yashirinadi. Sahifaning pastida "Yashirilgan tugmalarni ko‘rsatish" tugmasi bo‘lib, u barcha yashirilgan tugmalarni qayta ko‘rsatadi.
// Ishlatiladigan mavzular: remove, appendChild, classList.toggle.

alert("7-vazifa")
const btn_14 = document.querySelector('.btn_12')
const btn_15 = document.querySelector('.btn_13')
const btn_16 = document.querySelector('.btn_14')
const btn_17 = document.querySelector('.btn_15')
const btn_18 = document.querySelector('.btn_16')

btn_15 && btn_15.addEventListener('click', function() {
   btn_14.style.display = 'none'
})

btn_17 && btn_17.addEventListener('click', function() {
   btn_16.style.display = 'none'
})

btn_18 && btn_18.addEventListener('click', function() {
   btn_14.style.display = 'inline'
   btn_16.style.display = 'inline'
})

// Vazifa: Sahifada bir nechta matnli elementlar (p) va "Kesish" tugmasi bo‘lsin. Foydalanuvchi biror matnni tanlab, uning yonidagi "Kesish" tugmasini bossa, o‘sha matn kesilib, boshqa bir bo‘sh joyga (kvadrat) o‘tkazilsin.
// Ishlatiladigan mavzular: removeChild, appendChild.

alert("8-vazifa")
const p_5 = document.querySelector('.p_5')
const p_6 = document.querySelector('.p_6')
const p_7 = document.querySelector('.p_7')
const div_9 = document.querySelector('.div_9')
const btn_19 = document.querySelector('.btn_17')
const btn_20 = document.querySelector('.btn_18')
const btn_21 = document.querySelector('.btn_19')

btn_19 && btn_19.addEventListener('click', function() {
   div_9.appendChild(p_5)
})

btn_20 && btn_20.addEventListener('click', function() {
   div_9.appendChild(p_6)
})

btn_21 && btn_21.addEventListener('click', function() {
   div_9.appendChild(p_7)
})

// Vazifa: Sahifada bir nechta rang tugmalari bo‘lsin (masalan, "qizil", "ko‘k", "yashil"). Foydalanuvchi rang tugmalaridan birini bossa, asosiy blokning (katta kvadratning) foni tanlangan rangga o‘zgaradi. Tanlangan tugmaga "faol" klassi qo‘shilsin.
// Ishlatiladigan mavzular: classList.add, classList.contains, style.backgroundColor.

alert("9-vazifa")
const btn_22 = document.querySelector('.btn_20')
const btn_23 = document.querySelector('.btn_21')
const btn_24 = document.querySelector('.btn_22')
const div_10 = document.querySelector('.div_10')

btn_22 && btn_22.addEventListener('click', function() {
   div_10.style.backgroundColor = 'red'
   btn_22.classList.add('faol')
})

btn_23 && btn_23.addEventListener('click', function() {
   div_10.style.backgroundColor = 'blue'
   btn_23.classList.add('faol')
})

btn_24 && btn_24.addEventListener('click', function() {
   div_10.style.backgroundColor = 'green'
   btn_24.classList.add('faol')
})

// Vazifa: Sahifada ul ro‘yxati va "Yangi element qo‘shish" tugmasi bo‘lsin. Har bir ro‘yxat elementida "O‘chirish" tugmasi bo‘lsin. Foydalanuvchi yangi element qo‘shganda, u ro‘yxatning oxiriga qo‘shiladi. O‘chirish tugmasi bosilganda, tegishli element ro‘yxatdan o‘chiriladi.
alert("10-vazifa") // ustoz savolga yaxshi tushunmadim 

// Vazifa: Sahifada bir nechta blok (div) elementlari bo‘lsin. Ularning barchasi ko‘rinadigan holatda bo‘lsin. Har bir blok yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda blok yashiringan bo‘lsin (display: none; usuli orqali). Sahifaning pastida "Hammasini ko‘rsatish" tugmasi bo‘lsin, bu barcha yashirilgan bloklarni qayta ko‘rsatadi.
alert("11-vazifa")
const div_11 = document.querySelector('.div_11')
const div_12 = document.querySelector('.div_12')
const div_13 = document.querySelector('.div_13')
const btn_25 = document.querySelector('.btn_23')
const btn_26 = document.querySelector('.btn_24')
const btn_27 = document.querySelector('.btn_25')
const btn_28 = document.querySelector('.btn_26')

btn_25 && btn_25.addEventListener('click', function() {
   div_11.style.display = 'none'
})

btn_26 && btn_26.addEventListener('click', function() {
   div_12.style.display = 'none'
})

btn_27 && btn_27.addEventListener('click', function() {
   div_13.style.display = 'none'
})

btn_28 && btn_28.addEventListener('click', function() {
   div_11.style.display = 'block'
   div_12.style.display = 'block'
   div_13.style.display = 'block'
})

// Vazifa: Sahifada bir nechta rangli kvadratlar (div) bo‘lsin. Har bir kvadratni boshqa kvadrat bilan almashtirish tugmasi bo‘lsin. Tugma bosilganda, o‘sha kvadrat boshqa tanlangan kvadrat bilan joylarini almashtirsin (ularni DOM ichida joylashtirish tartibi o‘zgaradi).
alert("12-vazifa") // ustoz replace child bilan qilinsin depti lekin replace child faqat ichidagi elementlarni almashtirsa kerak divni o'zini almashtirmasa kerak

// Vazifa: Sahifada bir nechta matn bo‘laklari (p) bo‘lsin. Har bir matnning yonida "Uzunligini ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda, matn uzunligi (belgilar soni) alert orqali foydalanuvchiga ko‘rsatiladi. Matn uzunligini ko‘rsatgandan so‘ng, "Qisqartirish" tugmasi paydo bo‘lib, u matnni kesib, oxiriga ... qo‘shadi.
alert("13-vazifa") // ?

// Vazifa: Sahifada bir nechta matn bo‘laklari (p) bo‘lsin. Har bir matnning yonida "Uzunligini ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda, matn uzunligi (belgilar soni) alert orqali foydalanuvchiga ko‘rsatiladi. Matn uzunligini ko‘rsatgandan so‘ng, "Qisqartirish" tugmasi paydo bo‘lib, u matnni kesib, oxiriga ... qo‘shadi.
alert("14-vazifa") // ustoz qanday qilib sanatishni bilmadim yani bosganimda sanab ketishi kerak edi bu kod ohiriga yetmagan
// const div_14 = document.querySelector('.div_14')
// const div_15 = document.querySelector('.div_15')
// const div_16 = document.querySelector('.div_16')
// const div_17 = document.querySelector('.div_17')
// const btn_29 = document.querySelector('.btn_27')
// const btn_30 = document.querySelector('.btn_28')
// const btn_31 = document.querySelector('.btn_29')
// let counter_1 = 0
// let counter_2 = 0
// let counter_3 = 0

// btn_29 && btn_29.addEventListener('click', function() {
//    counter_1++
// })

// btn_30 && btn_30.addEventListener('click', function() {
//    counter_2++
   
// })

// btn_31 && btn_31.addEventListener('click', function() {
//    counter_3++ 
// })

// Vazifa: Sahifada bir nechta elementlar (matnli bloklar) bo‘lsin. Har bir element yonida "Yuqoriga" va "Pastga" tugmalari bo‘lsin. Tugmalar yordamida foydalanuvchi elementlarni yuqoriga yoki pastga surib tartibini o‘zgartira olsin.
alert("15-vazifa")
const div_18 = document.querySelector('.div_18')
const div_19 = document.querySelector('.div_19')
const div_20 = document.querySelector('.div_20')
const btn_32 = document.querySelector('.btn_30')
const btn_33 = document.querySelector('.btn_31')
const btn_34 = document.querySelector('.btn_32')
const btn_35 = document.querySelector('.btn_33')
const btn_36 = document.querySelector('.btn_34')
const btn_37 = document.querySelector('.btn_35')

btn_32 && btn_32.addEventListener('click', function() {
   div_18.style.marginBottom = '50px'
})

btn_33 && btn_33.addEventListener('click', function() {
   div_18.style.marginTop = '50px'
})

btn_34 && btn_34.addEventListener('click', function() {
   div_19.style.marginBottom = '50px'
})

btn_35 && btn_35.addEventListener('click', function() {
   div_19.style.marginTop = '50px'
})

btn_36 && btn_36.addEventListener('click', function() {
   div_20.style.marginBottom = '50px'
})

btn_37 && btn_37.addEventListener('click', function() {
   div_20.style.marginTop = '50px'
})