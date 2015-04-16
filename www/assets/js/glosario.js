/**
 * [description]
 * @return {[type]} [description]
 */
    (function() {
        var app = angular.module('gemStore', []);
        app.controller('StoreController', ['$scope', function($scope){
            this.alphabet = abc;
        }]);


        // variable

var imgBase = 'assets/img/alphabet/';
var abc = [
{
    name : 'AVION',
    image : imgBase + 'a/1.png',
    description : 'Un avión utilitario es un aeroplano ligero de propósito general, normalmente usado para transportar personas o carga.'
},
{
    name : 'ARBOL',
    image : imgBase + 'a/2.png',
    description : 'Un árbol es una planta perenne, de tallo leñoso, que se ramifica a cierta altura del suelo. El término hace referencia habitualmente a aquellas plantas cuya altura supera un determinado límite.'
},
{
    name : 'ALPACA',
    image : imgBase + 'a/3.png',
    description : 'La alpaca (del quechua allpaqa, paqu) (Vicugna pacos) es una especie doméstica de mamífero artiodáctilo de la familia Camelidae.'
},
{
    name : 'BANDERA',
    image : imgBase +'b/1.png',
    description : 'Una bandera es una pieza de tela, normalmente rectangular, aunque puede adoptar formas muy variadas.'
},
{
    name : 'BARCO',
    image : imgBase +'b/2.png',
    description : 'Un barco es cualquier construcción cóncava y fusiforme, de madera, metal, fibra de vidrio u otro material, incluso de hormigón, como el SS Faith, que por su forma es capaz de flotar en el agua y que se utiliza para navegar como medio de transporte.'
},
{
    name : 'BALLENA',
    image : imgBase +'b/3.png',
    description : 'Balaenidae, familia de cetáceos.'
},
{
    name : 'CÓNDOR',
    image : imgBase +'a/1.png',
    description : 'El cóndor andino, cóndor de los Andes o simplemente cóndor (Vultur gryphus)2 es una especie de ave de la familia Cathartidae que habita en Sudamérica.'
},
{
    name : 'CUY',
    image : imgBase +'a/1.png',
    description : 'Cavia porcellus es una especie híbrida doméstica de roedor histricomorfo de la familia Caviidae, resultado del cruce de varias especies del género Cavia realizado en la región andina de América del Sur.'
},
{
    name : 'CHINCHILLA',
    image : imgBase +'a/1.png',
    description : 'Chinchilla es un género de roedores histricomorfos de la familia Chinchillidae conocidos vulgarmente como chinchillas. Es endémico de la mitad sur de los Andes.'
},
{
    name : 'DADO',
    image : imgBase +'a/1.png',
    description : 'Un dado es un objeto de forma poliédrica (aunque la RAE en su definición solo prevé que sean cúbicos) preparado para mostrar un resultado aleatorio cuando es lanzado sobre una superficie horizontal.'
},
{
    name : 'DELFÍN',
    image : imgBase +'a/1.png',
    description : 'Los delfínidos (Delphinidae), llamados comúnmente delfines oceánicos (para distinguirlos de los platanistoideos o delfines de río), son una familia de cetáceos odontocetos bastante heterogénea, que comprende unas 34 especies.'
},
{
    name : 'DINOSAURIO',
    image : imgBase +'a/1.png',
    description : 'Los dinosaurios (Dinosauria, deinos sauros, 'lagarto terrible') son un grupo (clado) de reptiles (saurópsidos) que aparecieron durante el período Triásico, hace unos 231 millones de años. Fueron los vertebrados terrestres dominantes durante 135 millones de años.'
},
{
    name : 'EDIFICIO',
    image : imgBase +'a/1.png',
    description : 'Un edificio es una construcción dedicada a albergar distintas actividades humanas: vivienda, templo, teatro, comercio, etc.'
},
{
    name : 'ELEFANTE',
    image : imgBase +'a/1.png',
    description : 'Los elefantes o elefántidos (Elephantidae) son una familia de mamíferos placentarios del orden Proboscidea. Antiguamente se clasificaban, junto con otros animales de piel gruesa.'
},
{
    name : 'ERIZO',
    image : imgBase +'a/1.png',
    description : 'Los erinacinos (Erinaceinae), conocidos vulgarmente como erizos, son una subfamilia de pequeños mamíferos cubiertos de púas; pertenecen al orden Erinaceomorpha, aunque antiguamente eran considerados del orden Insectivora, hoy en día obsoleto.'
},
{
    name : 'FRESA',
    image : imgBase +'a/1.png',
    description : 'Fragaria, llamado comúnmente fresa o frutilla, es un género de plantas rastreras estoloniferas de la familia Rosaceae. Agrupa unos 400 taxones descritos, de los cuales solo unos 20 están aceptados.'
},
{
    name : 'FLOR',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'FOCA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'GATO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'GUITARRA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'GALLITO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'HELADO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'HORMIGA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'HELICÓPTERO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'IGLESIA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'IMÁN',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'IGUANA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'JIRAFA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'JAGUAR',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'JABALÍ',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'KIWI',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'KOALA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'KARATE',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'LUNA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'LLAMA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'LÚCUMA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'MANZANA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'MAÍZ',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'MARIPOSA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'NUBE',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'NUTRIA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'NEVADO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'ÑU',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'ÑANDU',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'ÑUSTA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'OSO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'OJOS',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'OÍDOS',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'PUMA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'PAPAGAYO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'PINGÜINO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'QUESO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'QUENA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'QUÍMICA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'RATÓN',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'RANA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'RUEDA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'SOL',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'SOFÁ',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'SILLA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'TOMATE',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'TITÍ',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'TUCÁN',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'UVA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'UÑA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'UNICORNIO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'VACA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'VENADO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'VOLCÁN',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'WATERPOLO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'WAPITI',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'WINDSURF',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'XILÓFONO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'YOYO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'YEGUA',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'YACARÉ',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'ZORRO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'ZAPATO',
    image : imgBase +'a/1.png',
    description : ''
},
{
    name : 'ZAMPOÑA',
    image : imgBase +'a/1.png',
    description : ''
},
];



    })();
