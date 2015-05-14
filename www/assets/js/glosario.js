/**
 *  LIST OF GLOSARIO
 * @returns {undefined}
 */
(function() {
    var app = angular.module('gemStore', []);
    app.controller('StoreController', ['$scope', function($scope){
        this.alphabet = abc;
    }]);



var imgBase = 'assets/img/alphabet/';
var abc = [
{
    name : 'AVIÓN',
    image : imgBase + 'a/1.png',
    description : 'Aparato de transporte aéreo más pesado que el aire, pero que logra mantenerse suspendido en él gracias a la aplicación de leyes físicas que tienen que ver con la reacción del aire sobre las superficies fijas del vehículo.'
},
{
    name : 'ÁRBOL',
    image : imgBase + 'a/2.png',
    description : 'Planta de tronco elevado y leñoso que tiene ramas grandes y numerosas.'
},
{
    name : 'ALPACA',
    image : imgBase + 'a/3.png',
    description : 'Mamífero rumiante, doméstico. Es propio de Perú. Tiene el cuerpo cubierto de pelos largos, finos y rojizos, y su tamaño es superior al de una cabra. Su cuello es largo y la cabeza pequeña. Se utiliza como bestia de carga, aunque también se aprovecha su carne y su lana.'
},
{
    name : 'BANDERA',
    image : imgBase +'b/1.png',
    description : ' Pedazo de tela, generalmente rectangular y de varios colores, que se usa como símbolo de un país, una región o cualquier agrupación.'
},
{
    name : 'BARCO',
    image : imgBase +'b/2.png',
    description : 'Vehículo de madera o hierro que por sus características físicas es capaz de flotar y moverse en el agua, transportando personas o cargamento.'
},
{
    name : 'BALLENA',
    image : imgBase +'b/3.png',
    description : ' Mamífero marino de gran tamaño. Respira por unos orificios, por donde arroja un chorro de aire caliente cuando sale a la superficie. En lugar de dientes tiene unas láminas duras y elásticas.'
},
{
    name : 'CÓNDOR',
    image : imgBase +'c/1.png',
    description : ' Ave rapaz de hábitos diurnos. Tiene poco más de un metro de largo y tres de ancho, con la cabeza y el cuello desnudos, plumaje fuerte de color negro azulado y collar blanco. Habita en los Andes y es la mayor de las aves que vuelan.'
},
{
    name : 'CUY',
    image : imgBase +'c/2.png',
    description : 'Cavia porcellus es una especie híbrida doméstica de roedor histricomorfo de la familia Caviidae, resultado del cruce de varias especies del género Cavia realizado en la región andina de América del Sur.'
},
{
    name : 'CHINCHILLA',
    image : imgBase +'c/3.png',
    description : 'Animal mamífero del grupo de los roedores, muy parecido a la ardilla y propio de la América del Sur. Su pelaje es gris y su piel es muy estimada, especialmente para la confección de abrigos.'
},
{
    name : 'DADO',
    image : imgBase +'d/1.png',
    description : 'Objeto con forma de cubo en cuyos lados aparecen marcados puntos del uno al seis o una figura distinta en cada lado. Se usa en juegos de azar.'
},
{
    name : 'DELFÍN',
    image : imgBase +'d/2.png',
    description : 'Mamífero cetáceo de hasta 3 m de largo que vive en los mares. Los delfines son muy sociables entre sí, y también con el hombre, por lo que son fácilmente domesticables.'
},
{
    name : 'DINOSAURIO',
    image : imgBase +'d/3.png',
    description : ' Reptil prehistórico vertebrado, cuyos fósiles presentan cabeza pequeña, patas delanteras más cortas que las traseras, y la cola y el cuello largos.'
},
{
    name : 'EDIFICIO',
    image : imgBase +'e/1.png',
    description : 'Obra o construcción grande, de mayor tamaño que una casa, en la cual habitan distintas familias o hay oficinas, comercios, etc.'
},
{
    name : 'ELEFANTE',
    image : imgBase +'e/2.png',
    description : 'Mamífero de gran tamaño y corpulencia, considerado el animal terrestre más grande que existe en nuestros días, pues llega a alcanzar 3 m de alto y 5 de largo. Casi no tiene pelos, es de color gris oscuro, su cabeza es pequeña, los ojos chicos, las orejas grandes y colgantes, la nariz y el labio superior se encuentran unidos y muy prolongados en forma de trompa, la cual extiende y recoge cuando desea y le sirve de mano.'
},
{
    name : 'ERIZO',
    image : imgBase +'e/3.png',
    description : 'Animal mamífero de tamaño aproximado a los 20 o 25 cm de largo, que tiene el dorso y los costados cubiertos de púas agudas; su cabeza es pequeña, el hocico afilado, los ojos chicos y las patas y cola cortas.'
},
{
    name : 'FRESA',
    image : imgBase +'f/1.png',
    description : ' Animal mamífero de tamaño aproximado a los 20 o 25 cm de largo, que tiene el dorso y los costados cubiertos de púas agudas; su cabeza es pequeña, el hocico afilado, los ojos chicos y las patas y cola cortas.'
},
{
    name : 'FLOR',
    image : imgBase +'f/2.png',
    description : 'Parte reproductora de las plantas, compuesta generalmente de cáliz, corola, estambres y pistilos; presenta formas y colores muy variados, y la mayoría de ellas emanan agradables olores.'
},
{
    name : 'FOCA',
    image : imgBase +'f/3.png',
    description : 'Mamífero acuático que habita fundamentalmente en costas marinas de clima frío. Tiene el cuerpo en forma de pez, las extremidades semejan aletas y la cabeza es parecida a la de un perro.'
},
{
    name : 'GATO',
    image : imgBase +'g/1.png',
    description : 'Animal doméstico de cabeza redonda y orejas triangulares, cola y bigotes largos, cubierto de pelo suave y abundante, y con agudas uñas. Presenta garras para cazar ratones y despedazar los alimentos.'
},
{
    name : 'GUITARRA',
    image : imgBase +'g/2.png',
    description : 'Instrumento musical de cuerdas, cuyo cuerpo, generalmente de madera, está constituido por una caja plana y ovalada, más estrecha en el centro y con un agujero en la tapa anterior, a partir del cual sale un brazo provisto en su extremo superior de clavijas que sirven para afinar.'
},
{
    name : 'GALLITO',
    image : imgBase +'g/3.png',
    description : 'El gallito de las rocas o tunqui (quechua: tunki) (Rupicola peruviana) es una especie de ave paseriforme de la familia Cotingidae. Es el ave nacional del Perú. Habita en la región amazónica. Su pariente más cercano es el gallo de roca guayanés (Rupicola rupicola) y es notable por la increíble belleza de su plumaje.'
},
{
    name : 'HELADO',
    image : imgBase +'h/1.png',
    description : 'Que tiene hielo o está muy frío.'
},
{
    name : 'HORMIGA',
    image : imgBase +'h/2.png',
    description : ' Insecto de variadas especies, de diferentes colores y tamaños. Tiene la cabeza, el tórax y el abdomen abultados y el resto del cuerpo estrecho; presenta dos antenas y patas largas.'
},
{
    name : 'HELICÓPTERO',
    image : imgBase +'h/3.png',
    description : 'Aparato de aviación que se sostiene en el aire y se impulsa hacia adelante por medio de hélices horizontales. Admite pocos pasajeros y puede bajar y subir verticalmente.'
},
{
    name : 'IGLESIA',
    image : imgBase +'i/1.png',
    description : 'Templo donde se celebra el culto religioso.'
},
{
    name : 'IMÁN',
    image : imgBase +'i/2.png',
    description : 'Cuerpo que tiene la propiedad de atraer a otros; está formado por dos polos, de uno de los cuales salen líneas de fuerza magnética. Estas líneas conforman el campo magnético de dicho cuerpo. Un efecto similar puede producirse por corrientes eléctricas.'
},
{
    name : 'IGUANA',
    image : imgBase +'i/3.png',
    description : 'Reptil de América parecido al lagarto, pero de tamaño muy grande. De color verdoso oscuro, posee una cresta espinosa alta en el cuello y una bolsa o saco en la garganta. Se alimenta de hierbas y es totalmente inofensivo.'
},
{
    name : 'JIRAFA',
    image : imgBase +'j/1.png',
    description : 'Mamífero rumiante que vive en África y se distingue por su cuello largo y delgado. Tiene la cabeza pequeña, con dos cuernos poco desarrollados, y las patas anteriores más largas que las posteriores. Su color es gris claro, con manchas de un rubio oscuro.'
},
{
    name : 'JAGUAR',
    image : imgBase +'j/2.png',
    description : ' Mamífero carnicero oriundo de América, de gran tamaño, pelaje generalmente amarillo con manchas negras, excepto en el pecho y abdomen que son blancos.'
},
{
    name : 'JABALÍ',
    image : imgBase +'j/3.png',
    description : 'Variedad salvaje de cerdo, más grande que este, de cabeza más alargada y de hocico prolongado, provisto de grandes colmillos, cuya piel, muy gruesa, está cubierta de un pelaje tupido de color gris.'
},
{
    name : 'KIWI',
    image : imgBase +'k/1.png',
    description : 'Los kiwis (Apteryx del gr. "sin alas") son un clado de aves paleognatas compuesto por cinco especies endémicas de Nueva Zelanda. Son aves no voladoras pequeñas, aproximadamente del tamaño de una gallina.'
},
{
    name : 'KOALA',
    image : imgBase +'k/2.png',
    description : 'Animal mamífero que vive en Australia, de aspecto parecido al de un oso de pequeño tamaño. Carece de cola, tiene orejas grandes y hocico ancho y corto. Su pelaje es de color gris rojizo.'
},
{
    name : 'KARATE',
    image : imgBase +'k/3.png',
    description : 'Arte marcial y deporte de origen japonés que consiste en dar golpes secos con el borde de la mano, con los codos o con los pies.'
},
{
    name : 'LUNA',
    image : imgBase +'l/1.png',
    description : 'Satélite de la Tierra de forma redonda que alumbra por la luz de los rayos solares que se reflejan en su superficie.'
},
{
    name : 'LLAMA',
    image : imgBase +'l/2.png',
    description : 'Mamífero rumiante doméstico de abundante pelo que vive en América del Sur. Tiene la cabeza mediana, las orejas puntiagudas y los ojos grandes. Su cuello es largo y erguido, las patas son delgadas y la cola corta.'
},
{
    name : 'LÚCUMA',
    image : imgBase +'l/3.png',
    description : 'El lúcumo (Pouteria lucuma) es la especie más extendida y comercialmente más valiosa de Pouteria. Es un árbol de la familia de las sapotáceas, originaria y nativa de los valles andinos del Perú.'
},
{
    name : 'MANZANA',
    image : imgBase +'m/1.png',
    description : 'Fruto del manzano, con forma de globo y una hendidura en cada polo. Tiene la pulpa blanca, jugosa, con sabor agridulce y algunas semillas en el centro; su cáscara es muy fina, de color rojo, verde o amarillo.'
},
{
    name : 'MAÍZ',
    image : imgBase +'m/2.png',
    description : 'Planta herbácea originaria de América, de tallos rectos y largos, hojas alargadas, planas y puntiagudas.'
},
{
    name : 'MARIPOSA',
    image : imgBase +'m/3.png',
    description : 'nsecto de vistosos colores presente en nuestros jardines y campos.'
},
{
    name : 'NUBE',
    image : imgBase +'n/1.png',
    description : 'Masa de color blanco o gris suspendida en la atmósfera, constituida por goticas que resultan de la condensación del vapor de agua. Por su forma las nubes se clasifican en cirros, cúmulos, estratos y nimbos.'
},
{
    name : 'NUTRIA',
    image : imgBase +'n/2.png',
    description : 'Mamífero carnívoro de cuerpo alargado, pelaje espeso y suave, patas cortas con dedos unidos por membranas, de cola larga y piel muy apreciada, que vive a orillas de los ríos.'
},
{
    name : 'NEVADO',
    image : imgBase +'n/3.png',
    description : 'Que está cubierto de nieve paisaje nevado. Montaña cubierta de nieves perpetuas.'
},
{
    name : 'ÑU',
    image : imgBase +'n1/1.png',
    description : 'Género de antílopes de gran tamaño que habitan fundamentalmente en África. La cabeza del ñu es parecida a la del toro; tiene la crin corta y los cuernos curvados hacia delante y hacia arriba.'
},
{
    name : 'ÑANDÚ',
    image : imgBase +'n1/2.png',
    description : 'Avestruz americano que se diferencia del de origen africano por tener tres dedos en cada pata y ser más pequeño. Mide aproximadamente 1,65 m de altura.'
},
{
    name : 'ÑUSTA',
    image : imgBase +'n1/3.png',
    description : 'Ñusta era el nombre quechua para las REINAS O PRINCESA s en el Imperio inca.'
},
{
    name : 'OSO',
    image : imgBase +'o/1.png',
    description : 'Mamífero de gran tamaño y pelaje abundante de color oscuro. Tiene la cabeza grande, con ojos pequeños; sus extremidades, fuertes y gruesas, se apoyan en cinco dedos con uñas duras, en forma de ganchos.'
},
{
    name : 'OJOS',
    image : imgBase +'o/2.png',
    description : 'Órgano de la vista del hombre y los animales, que está en la cara. Su forma es similar a la de una esfera.'
},
{
    name : 'OREJAS',
    image : imgBase +'o/3.png',
    description : 'Nombre que recibe cada una de las dos partes externas del oído de la mayoría de los mamíferos, que sobresalen a los lados de la cabeza.'
},
{
    name : 'PUMA',
    image : imgBase +'p/1.png',
    description : 'Mamífero carnicero americano parecido al tigre, pero de pelo suave y de un solo color que puede variar en sus tonalidades, desde el gris amarillento hasta el rojizo.'
},
{
    name : 'PAPAGAYO',
    image : imgBase +'p/2.png',
    description : 'Ave originaria de los países tropicales, que resulta vistosa por el color amarillento, verde y rojo encarnado de su plumaje; sus patas están provistas de uñas fuertes que le sirven para agarrar; su pico es corvo y fuerte también.'
},
{
    name : 'PINGÜINO',
    image : imgBase +'p/3.png',
    description : 'Ave de la región polar sur, de patas cortas con dedos unidos por membranas. Tiene facilidad para nadar, pero no para volar. Posee el dorso y las alas negras, y el pecho blanco.'
},
{
    name : 'QUESO',
    image : imgBase +'q/1.png',
    description : 'Producto alimenticio que se obtiene haciendo fermentar y cuajar la leche, a la que luego se le quita el agua.'
},
{
    name : 'QUENA',
    image : imgBase +'q/2.png',
    description : 'La quena (en quechua: qina) es un instrumento de viento de bisel, usado de modo tradicional por los habitantes de los Andes centrales. La quena es tradicionalmente de caña o madera y tiene un total de siete agujeros, seis al frente y uno atrás, para el pulgar.'
},
{
    name : 'QUÍMICA',
    image : imgBase +'q/3.png',
    description : 'Es la ciencia que estudia tanto la composición, estructura y propiedades de la materia como los cambios que ésta experimenta durante las reacciones químicas y su relación con la energía.'
},
{
    name : 'RATÓN',
    image : imgBase +'r/1.png',
    description : 'Mamífero roedor de pequeño tamaño, de pelo blanco o gris, patas cortas y cola larga. Es muy fecundo y ágil.'
},
{
    name : 'RANA',
    image : imgBase +'r/2.png',
    description : ' Animal vertebrado anfibio, con patas traseras muy desarrolladas para saltar, cabeza triangular unida directamente al tronco, boca grande y ojos saltones.'
},
{
    name : 'RUEDA',
    image : imgBase +'r/3.png',
    description : 'Pieza circular que gira en torno a su eje.'
},
{
    name : 'SOL',
    image : imgBase +'s/1.png',
    description : 'Estrella con luz propia, alrededor de la cual giran la Tierra y los otros planetas que forman parte de nuestro sistema solar.'
},
{
    name : 'SOFÁ',
    image : imgBase +'s/2.png',
    description : 'Asiento grande con respaldo y brazos, hecho para ser utilizado por más de una persona a la vez.'
},
{
    name : 'SILLA',
    image : imgBase +'s/3.png',
    description : 'Asiento con respaldo que, por lo general, cuenta con cuatro patas, a veces tiene brazos y en ella solo cabe una persona.'
},
{
    name : 'TOMATE',
    image : imgBase +'t/1.png',
    description : 'Fruto de huerto, de superficie lisa y brillante de color verde o rojo, según su grado de madurez, de pulpa jugosa y semillas planas de color amarillo.'
},
{
    name : 'TITÍ',
    image : imgBase +'t/2.png',
    description : 'Tití es el nombre vulgar de diferentes especies de primates americanos (platirrinos)'
},
{
    name : 'TUCÁN',
    image : imgBase +'t/3.png',
    description : 'Los ranfástidos (Ramphastidae), conocidos comúnmente como tucanes, diotedé, o diostedé, son una familia de aves piciformes que se caracterizan por poseer un pico muy desarrollado y de vivos colores. Miden entre 18 y 63 cm.'
},
{
    name : 'UVA',
    image : imgBase +'u/1.png',
    description : ' Fruto comestible de la parra; tiene forma redonda u ovalada y es de color verde claro o morado. Posee una pulpa muy jugosa y dulce.'
},
{
    name : 'UÑA',
    image : imgBase +'u/2.png',
    description : 'Lámina dura y delgada que nace y crece en la parte superior de las extremidades de los dedos.'
},
{
    name : 'UNICORNIO',
    image : imgBase +'u/3.png',
    description : 'Animal imaginario, con figura de caballo, que tiene un cuerno recto en medio de la frente.'
},
{
    name : 'VACA',
    image : imgBase +'v/1.png',
    description : 'La vaca, en el caso de la hembra, o toro en el caso del macho, es un mamífero artiodáctilo de la familia de los bóvidos'
},
{
    name : 'VENADO',
    image : imgBase +'v/2.png',
    description : ' Mamífero rumiante, esbelto y ligero, de color pardo rojizo y cuernos en forma de ramas.'
},
{
    name : 'VOLCÁN',
    image : imgBase +'v/3.png',
    description : 'Elevación del terreno por la que salen gases y materiales muy calientes que proceden del interior de la Tierra.'
},
{
    name : 'WATERPOLO',
    image : imgBase +'w/1.png',
    description : 'El waterpolo o polo acuático es un deporte que se practica en una piscina, en la cual se enfrentan dos equipos. El objetivo del juego es marcar el mayor número de goles en la portería del equipo contrario, durante el tiempo que dura el partido.'
},
{
    name : 'WAPITÍ',
    image : imgBase +'w/2.png',
    description : 'El uapití, wapití o ciervo canadiense (Cervus canadensis) es una especie de mamífero artiodáctilo de la familia de los cérvidos que vive en América del Norte, Asia central y oriental.'
},
{
    name : 'WINDSURF',
    image : imgBase +'w/3.png',
    description : 'El surf a vela, windsurf o tabla a vela es una modalidad del deporte a vela que consiste en desplazarse en el agua sobre una tabla algo similar a una de surf, provista de una vela.'
},
{
    name : 'XILÓFONO',
    image : imgBase +'x/1.png',
    description : 'Instrumento musical de percusión formado por varias tablillas de madera de diferente longitud que, al ser golpeadas por dos piezas, producen sonidos correspondientes a las diversas notas de la escala musical.'
},
{
    name : 'YOYO',
    image : imgBase +'y/1.png',
    description : ' Juguete constituido por un disco ahuecado que deja en el centro un eje, al cual se le coloca un hilo o cuerda fina elástica, que lo hace subir o bajar si se enrolla o desenrolla.'
},
{
    name : 'YEGUA',
    image : imgBase +'y/2.png',
    description : 'Hembra del caballo.'
},
{
    name : 'YACARÉ',
    image : imgBase +'y/3.png',
    description : 'Caiman es un género de crocodilios de la familia de los aligatóridos, conocidos vulgarmente como yacarés o caimanes.'
},
{
    name : 'ZORRO',
    image : imgBase +'z/1.png',
    description : 'Mamífero carnicero de abundante pelaje color pardo, cabeza ancha, hocico puntiagudo, patas cortas y cola larga y gruesa, que habita en diferentes zonas climáticas, según la especie.'
},
{
    name : 'ZAPATO',
    image : imgBase +'z/2.png',
    description : 'Prenda de vestir que cubre el pie o parte de este, con una o varias piezas, generalmente de piel, aunque pueden ser de tela, plástico u otro material, sujetas a una suela resistente que protege la parte inferior de esa extremidad.'
},
{
    name : 'ZAMPOÑA',
    image : imgBase +'z/3.png',
    description : 'La zampoña es un instrumento de viento compuesto de varios tubos ahuecados por un extremo y cerrados por el otro, dispuestos en forma vertical en una o dos hileras.'
},
];



        })();