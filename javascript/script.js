//Anadir saltos de linea
//Volver a probar


//Java Test
/*
function saludo() {
    
    alert("Hola que tal");

}

window.onload = saludo();
*/



//Each recipe is an array with the following parameters [title, time, difficulty, ingredients, steps, imgSource];
var option0 = ["Papas bravas a la española", "30 mins", "Sencilla", "3 papas cocidas y peladas<br />1 taza de aceite<br />Sal al gusto<br />Hojuelas de chile molido al gusto", "Corta las papas en gajos o en cuadros grandes<br />.En un sartén amplio pon a calentar el aceite. Una vez que esté caliente agrega las papas y fríelas hasta que tomen un color dorado<br />.Condimenta con la sal y el chile<br />.Colócalas en una cazuelita o plato.", "images/papasbravas.jpg" ];


var option1 = ["Mousse de turrón y avellanas", "1 hr 30 mins", "Sencilla", "2 sobres de grenetina<br />4 cdas. de agua<br />1 tableta de turrón cortada en trozos pequeños<br />2 taza de leche evaporada<br />1 taza de crema para batir<br />Crema de avellana con chocolate, la necesaria<br />60 grs. de avellanas troceadas<br />Hojas de menta para decorar", "Poner a hidratar la grenetina en agua fría hasta que se forme una esponja firme y reservar. <br />En la licuadora moler el turrón junto con la leche evaporada hasta obtener una pasta ligera y suave<br />.Montar la crema con la batidora hasta que esté a punto de nieve, no batir en exceso porque se corre el riesgo de cortar la crema<br />.Verter la crema montada a la pasta de turrón y con una miserable o pala mezclar despacio y de forma envolvente<br />.Meter la grenetina hidratada al microondas de 5 segundos en 5 segundos hasta que se torne líquida", "images/mouse.jpg"];

//document.getElementById("pruebita").innerHTML = option1;



var option2 = ["Gazpacho picante", "45 mins", "Sencilla", "jitomates guaje<br />1 pimiento verde<br />1 pepino chico en cubos<br />1 cdita de ajo picado<br />3 cdas de vinagre<br />1/4 tz de aceite de oliva<br />1 bolillo en pedacitos<br />2 cditas de salsa tabasco<br />Sal y pimienta<br /><br />1/4 de camarones cocidos<br />Verduras cortadas para decorar","Cortar los jitomates por la mitad y retirar las semillas<br />.Partir por la mitad el pimiento, retirar venas, semillas y cortar en cuadritos<br />.Hacer lo mismo con el pepino y licuar junto con los jitomates, el pimiento, el ajo, el vinagre y el aceite de oliva<br />.Una vez que se han incorporado perfectamente los ingredientes, continuar moliendo e ir agregando el pan de poco en poco para ajustar la consistencia que deberá ser semi-espesa<br />.Agregar el picante, sazonar con sal y pimienta<br />.Guardar por un rato en el refrigerador para que enfríe. Por último salpimentar y rectificar sazón<br />.Decorar con las verduras cortadas y servir de inmediato acompañado de camarones.", "images/gazpacho.jpg"];

var option3 = ["Bocaditos de tortilla española", "25 mins", "Sencilla", "1 papa grande<br />2 tzs de aceite de oliva<br />1 cebolla finamente rebanada<br />Sal<br />5 huevos<br />1 jitomate saladet","Pelar y rebanar las papas finamente, colocar por 10 minutos en un tazón con agua. Escurrir y secar<br />.Vaciar el aceite de oliva en una sartén profunda, a fuego medio<br />.Agregar la cebolla y freír hasta que esté dorada, retirar del aceite y dejar escurrir sobre papel absorbente.", "images/bocaditostortilla.jpg"];

var option4 = ["Crema Catalana", "30 mins", "Sencilla", "2 tzs de leche<br />3/4 tz de azúcar<br />1 raja de canela<br />Cáscara de 1 limón<br />4 yemas<br />2 cdas de fécula de maíz<br />Azúcar para la costra<br />1 soplete", "En una cacerola verter la leche junto con la mitad del azúcar, mezclar hasta disolver, agregar la raja de canela y la cáscara de limón<br />.Dejar infusionar, es decir, que tome el sabor de los ingredientes, colar y regresar a la cacerola<br />.En un tazón mezclar las yemas con la fécula de maíz y el resto del azúcar con el batidor de globo para que se integren bien.", "images/catalana.jpg"];



var originalRecipeBook = [option0, option1, option2, option3, option4];
var randomBook = [option0, option1, option2, option3, option4];

//First of all I sort the randomBookArray, and later I choose the first three elements to be shown
randomBook.sort(function () {return Math.random() - 0.5});

//I created an array for every class where I want to introduce the array values (the random recipe section)
var vtitles = [];
var vtime = [];
var vdifficulty = [];
var vrecImages = [];
var vingredients = [];
var vsteps = [];

vtitles = document.getElementsByClassName("title2");
vtime = document.getElementsByClassName("time2");
vdifficulty = document.getElementsByClassName("difficulty2");
vrecImages = document.getElementsByClassName("recImages2");
vingredients = document.getElementsByClassName("ingredients2");
vsteps = document.getElementsByClassName("steps2");

//Now I show the first three recipes of the shuffled array in each class
for (var i = 0; i < 3; i++) {
    vtitles[i].innerHTML = randomBook[i][0];
    vtime[i].innerHTML = randomBook[i][1];
    vdifficulty[i].innerHTML = randomBook[i][2];
    vingredients[i].innerHTML = randomBook[i][3];
    vsteps[i].innerHTML = randomBook[i][4];
    vrecImages[i].src = randomBook[i][5];


}


/*
Before making the exercise, I did it with a simple 3 recipes array to be randomly shown in 2 recipe boxes.

function saludo(){
    
    alert("Hola que tal");

}

window.onload=saludo();



var rec0 = ["Facil", "Tomates y pepinos", "Batir lento", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnj-zUdCa6MsOzPsr4tBl7jHbVfKDlcoK60uZj0atwjVi6bro9uQ"];
var rec1 = ["Medio", "Leche... Azucar... Cafe Crema", "Batir medio", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuR-fFiYhlopYfbuFT-aWKaEdv_08wFndeXC3DnS2KTcX8X_NF"];
var rec2 = ["Dificil", "Pan rallado"+ "" + "Huevo Molido.<br> Cacahuetes", "Batir durisimo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDL56we_2YehDwK-6aEqzhJ5lBmXC2MsPc3mEVWy-W7WpPN-gOug"];
var originalOrder = [rec0, rec1, rec2];
var recipeArray = [rec0, rec1, rec2];

recipeArray.sort(function() {return Math.random() - 0.5});

var dificultades = [];
var ingredientes = [];
var proceso = [];
var imagenes = [];


dificultades = document.getElementsByClassName("dificultad");
ingredientes = document.getElementsByClassName("ingredientes");
proceso = document.getElementsByClassName("proceso");
imagenes = document.getElementsByClassName("imagenes");

var i;
for (i = 0; i<3; i++) {
    dificultades[i].innerHTML = recipeArray[i][0];
    ingredientes[i].innerHTML = recipeArray[i][1];
    proceso[i].innerHTML = recipeArray[i][2];
    imagenes[i].src = recipeArray[i][3];

}



//document.getElementClassName("dificultad").innerHTML = recipeArray[0][0];



for (i=0; i<2; i++){
    document.getElementsByClassName[i].innerHTML = recipeArray[i][0];
    document.getElementByClassName[i].innerHTML = recipeArray[i][1];
    document.getElementByClassName[i].innerHTML = recipeArray[i][2];
}




*/

