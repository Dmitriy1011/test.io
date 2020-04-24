let itemElem = $('.item') //считали элемент

itemElem.text()  // метод text - возвращает содержимое. Работает с текстом (откидывает html)

console.log(itemElem.text())

itemElem.text('пока')


console.log(itemElem.html()) //метод html - возвращает строку в виде верстки
itemElem.html('Пока')


//метод Val применим только к элементам input
let inputElem = $('.inputElem')

inputElem.val('входное значение') //метод val. Работает только с полями ввода.

console.log(inputElem.val())














function inputText() {
    let source = $('.source');
    let output = $('.output');
    let item = addItem(source.val());
    output.append(item)
    
    //output.text(output.text() + ' ' + source.val());
    //return output
}

$('.addBtn').on('click', inputText);

function addItem(text) {
    let newElem = $('<a>'); //так создали новый элемент li
    newElem.text(text)
    newElem.attr('href', 'http://google.com');
    return newElem
}




function addItem(img) {
    let newElem = $('<img>'); //так создали новый элемент li
    newElem.attr({
        'src': img,
        'height': '100px',
        'width': '100px'
    });
    return newElem
}
    $('.addBtn').on('click', inputText);





//function addImg(text) {
//    let newElem2 = $('<a>'); //так создали новый элемент li
//    newElem2.text(text)
//    newElem2.attr('href', 'http://google.com');
//   return newElem
//}

//$('.addBtn').on('click', AddImg);



//val() //без аргументов -> чтение
//val('значение') //с аргументом -> запись



//function plus(v1, v2) {
//    return v1+v2
//}

//function mult(v1,v2) {
  //  return v1*v2
//}

//function handler (func) {
  //  console.log(func(15,65))
//}

//handler(plus)
//handler(mult)








 function addSmth(title, descr) {
       let container = $('<div>');
       let titleContainer = $('<div>');
       let descrContainer = $('<div>');

       let closeElem = $('<div>');
       closeElem.addClass('.close');
       closeElem.text('x');
       container.append(closeElem);


       let titleElem=$('<h2>');
       let descrElem=$('<p>');

       titleContainer.append(titleElem);
       descrContainer.append(descrElem);

       container.append(titleContainer);
       container.append(descrContainer);
       container.addClass('item1')
       
       titleElem.on('dblclick', changeVal);
       titleElem.text(title);
       descrElem.text(descr);

       return container

 }


 function saveChange() {
     let cur = $(this);
     let curText = cur.val();
     let h2Elem = $('<h2>');
     h2Elem.text(curText);
     let parent = cur.closest('.item1');
     parent.prepend(h2Elem);
     cur.remove();
     
 }

 function changeVal(){
     let cur = $(this);
     let curText = cur.text(); //вытягиваем текст из элемента
     let input = $('<input>');//добавляем новый элемент
     input.val(curText);
     let parent = cur.closest('.item1');   //метод closest - находит в родителях ближайший элемент, который подходит под наш селектор
     parent.prepend(input); //метод prepend - добавляет в начало
     cur.remove();//удаляем текущий элемент
     input.on('blur', saveChange);

 }


 $('.to-do-form').on('submit', function(event) { //event - описывает событие
    event.preventDefault();
    let title = $('.title').val();
    let descr = $('.descr').val();
    $('.output1').append(addSmth(title,descr));
})



closeElem.on('click', function () {
    $(this).closest('.item').remove(); //находим блмжайший item и методом remove его удаляем
})


   

let result; //создаем переменную, хотим сохранить в нее инфу

function getData() {
    $.ajax ({
        url: 'https://reqres.in/api/users?page=2',
        success: function(data) {
            console.log(data); {
               //сделали запрос на сайт и получили инфу в переменную data
            }
        }
    })
}

getData();
console.log(result); // при первом вызове в result ничего не будет сохранено, так как она не ждет завершения получения информации при выполнении функции, а опережает её и идёт дальше
                     //нельзя "поженить" дополнительный процесс с основным
                     // ВСЕ должно происходить в функции, мы не должны из нее ничего доставать



//деструктивное присвоение работает для объектов и массивов