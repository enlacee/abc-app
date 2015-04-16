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
    image : imgBase +'c/1.png',
    description : 'El cóndor andino, cóndor de los Andes o simplemente cóndor (Vultur gryphus) es una especie de ave de la familia Cathartidae que habita en Sudamérica.'
},
{
    name : 'CUY',
    image : imgBase +'c/2.png',
    description : 'Cavia porcellus es una especie híbrida doméstica de roedor histricomorfo de la familia Caviidae, resultado del cruce de varias especies del género Cavia realizado en la región andina de América del Sur.'
},
{
    name : 'CHINCHILLA',
    image : imgBase +'c/3.png',
    description : 'Chinchilla es un género de roedores histricomorfos de la familia Chinchillidae conocidos vulgarmente como chinchillas. Es endémico de la mitad sur de los Andes.'
},
{
    name : 'DADO',
    image : imgBase +'d/1.png',
    description : 'Un dado es un objeto de forma poliédrica (aunque la RAE en su definición solo prevé que sean cúbicos) preparado para mostrar un resultado aleatorio cuando es lanzado sobre una superficie horizontal.'
},
{
    name : 'DELFÍN',
    image : imgBase +'d/2.png',
    description : 'Los delfínidos (Delphinidae), llamados comúnmente delfines oceánicos (para distinguirlos de los platanistoideos o delfines de río), son una familia de cetáceos odontocetos bastante heterogénea, que comprende unas 34 especies.'
},
{
    name : 'DINOSAURIO',
    image : imgBase +'d/3.png',
    description : 'Los dinosaurios (Dinosauria, deinos sauros, \'lagarto terrible\') son un grupo (clado) de reptiles (saurópsidos) que aparecieron durante el período Triásico, hace unos 231 millones de años. Fueron los vertebrados terrestres dominantes durante 135 millones de años.'
},
{
    name : 'EDIFICIO',
    image : imgBase +'e/1.png',
    description : 'Un edificio es una construcción dedicada a albergar distintas actividades humanas: vivienda, templo, teatro, comercio, etc.'
},
{
    name : 'ELEFANTE',
    image : imgBase +'e/2.png',
    description : 'Los elefantes o elefántidos (Elephantidae) son una familia de mamíferos placentarios del orden Proboscidea. Antiguamente se clasificaban, junto con otros animales de piel gruesa.'
},
{
    name : 'ERIZO',
    image : imgBase +'e/3.png',
    description : 'Los erinacinos (Erinaceinae), conocidos vulgarmente como erizos, son una subfamilia de pequeños mamíferos cubiertos de púas; pertenecen al orden Erinaceomorpha, aunque antiguamente eran considerados del orden Insectivora, hoy en día obsoleto.'
},
{
    name : 'FRESA',
    image : imgBase +'f/1.png',
    description : 'Fragaria, llamado comúnmente fresa o frutilla, es un género de plantas rastreras estoloniferas de la familia Rosaceae. Agrupa unos 400 taxones descritos, de los cuales solo unos 20 están aceptados.'
},
{
    name : 'FLOR',
    image : imgBase +'f/2.png',
    description : 'La flor es la estructura reproductiva característica de las plantas llamadas espermatofitas o fanerógamas. La función de una flor es producir semillas a través de la reproducción sexual. Para las plantas, las semillas son la próxima generación, y sirven como el principal medio a través del cual las especies se perpetúan y se propagan.'
},
{
    name : 'FOCA',
    image : imgBase +'f/3.png',
    description : 'Los fócidos o focas verdaderas (Phocidae) son una familia de mamíferos pinnípedos marinos adaptados a vivir en medios acuáticos la mayor parte del tiempo. El término en portugués y castellano "foca" deriva directamente del latín phoca.'
},
{
    name : 'GATO',
    image : imgBase +'g/1.png',
    description : 'El gato o gato doméstico (Felis silvestris catus) y coloquialmente llamado minino,1 es una subespecie de mamífero carnívoro de la familia Felidae. El gato está en convivencia cercana al ser humano desde hace unos 9500 años,2 periodo superior al estimado anteriormente, que oscilaba entre 3500 y 8000 años.'
},
{
    name : 'GUITARRA',
    image : imgBase +'g/2.png',
    description : 'La guitarra es un instrumento musical de cuerda pulsada, compuesto de una caja de madera, un mástil sobre el que va adosado el diapasón o trastero generalmente con un agujero acústico en el centro de la tapa (boca), y seis cuerdas. Sobre el diapasón van incrustados los trastes, que permiten las diferentes notas. Su nombre específico es guitarra clásica, guitarra española, guitarra criolla o guitarra acústica.'
},
{
    name : 'GALLITO',
    image : imgBase +'g/3.png',
    description : 'El gallito de las rocas o tunqui (quechua: tunki) (Rupicola peruviana) es una especie de ave paseriforme de la familia Cotingidae. Es el ave nacional del Perú. Habita en la región amazónica. Su pariente más cercano es el gallo de roca guayanés (Rupicola rupicola) y es notable por la increíble belleza de su plumaje.'
},
{
    name : 'HELADO',
    image : imgBase +'h/1.png',
    description : 'En su forma más simple, el helado o crema helada es un postre congelado hecho de agua, leche, crema de leche o natilla combinadas con saborizantes, edulcorantes o azúcar.'
},
{
    name : 'HORMIGA',
    image : imgBase +'h/2.png',
    description : 'Los formícidos (Formicidae), conocidos comúnmente como hormigas, son una familia de insectos sociales que, como las avispas y las abejas, pertenecen al orden de los himenópteros.'
},
{
    name : 'HELICÓPTERO',
    image : imgBase +'h/3.png',
    description : 'Un helicóptero es una aeronave que es sustentada y propulsada por uno o más rotores horizontales, cada uno formado por dos o más palas. Los helicópteros están clasificados como aeronaves de alas giratorias, para distinguirlos de las aeronaves de ala fija.'
},
{
    name : 'IGLESIA',
    image : imgBase +'i/1.png',
    description : 'Iglesia es la denominación del templo destinado al culto religioso público en el cristianismo. Cada edificio con esa función recibe la misma denominación que la asamblea1 o reunión de fieles que acuden a él y que la institución eclesiástica, así como otras acepciones.'
},
{
    name : 'IMÁN',
    image : imgBase +'i/2.png',
    description : 'Un imán es un cuerpo o dispositivo con un magnetismo significativo, de forma que atrae a otros imanes y/o metales, ferromagnéticos (por ejemplo, hierro, cobalto, níquel y aleaciones de estos). Puede ser natural o artificial.'
},
{
    name : 'IGUANA',
    image : imgBase +'i/3.png',
    description : 'Iguana es un género de reptiles escamosos de la familia Iguanidae nativos de zonas tropicales de Centroamérica, Sudamérica y el Caribe.'
},
{
    name : 'JIRAFA',
    image : imgBase +'j/1.png',
    description : 'La jirafa (Giraffa camelopardalis) es una especie de mamífero artiodáctilo de la familia Giraffidae propio de África. Es la más alta de todas las especies de animales terrestres existentes. Puede alcanzar una altura de 5,8 metros y un peso que varía entre 750 y 1600 kg.'
},
{
    name : 'JAGUAR',
    image : imgBase +'j/2.png',
    description : 'El jaguar, yaguar o yaguaretéN (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera y la única de las cuatro especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león.'
},
{
    name : 'JABALÍ',
    image : imgBase +'j/3.png',
    description : 'El jabalí (Sus scrofa) es un mamífero artiodáctilo de la familia de los suidos presente en Europa, aunque hay también subespecies en América, África y Asia. El jabalí se puede encontrar en la península Ibérica, donde su población es abundante y es considerado como pieza de caza mayor.'
},
{
    name : 'KIWI',
    image : imgBase +'k/1.png',
    description : 'Los kiwis (Apteryx del gr. "sin alas") son un clado de aves paleognatas compuesto por cinco especies endémicas de Nueva Zelanda. Son aves no voladoras pequeñas, aproximadamente del tamaño de una gallina.'
},
{
    name : 'KOALA',
    image : imgBase +'k/2.png',
    description : 'El koala (Phascolarctos cinereus) es una especie de marsupial diprotodonto de la familia Phascolarctidae, arborícola con hábitos de baja actividad, similares a los de un perezoso.'
},
{
    name : 'KARATE',
    image : imgBase +'k/3.png',
    description : 'El karate-do (‘el camino de la mano vacía’) es un arte marcial tradicional de las Islas Ryūkyū de Japón.'
},
{
    name : 'LUNA',
    image : imgBase +'l/1.png',
    description : 'La Luna es el único satélite natural de la Tierra. Con un diámetro ecuatorial de 3474 km1 es el quinto satélite más grande del Sistema Solar.'
},
{
    name : 'LLAMA',
    image : imgBase +'l/2.png',
    description : 'La llama (Lama glama) (en aimara qwara) es un mamífero artiodáctilo doméstico de la familia Camelidae, abundante en la Puna o Altiplano de los Andes de Argentina, Bolivia, Chile, Ecuador y Perú.'
},
{
    name : 'LÚCUMA',
    image : imgBase +'l/3.png',
    description : 'El lúcumo (Pouteria lucuma) es la especie más extendida y comercialmente más valiosa de Pouteria. Es un árbol de la familia de las sapotáceas, originaria y nativa de los valles andinos del Perú.'
},
{
    name : 'MANZANA',
    image : imgBase +'m/1.png',
    description : 'La manzana es una fruta pomácea comestible, fruto del manzano doméstico.'
},
{
    name : 'MAÍZ',
    image : imgBase +'m/2.png',
    description : 'El maíz (Zea mays) es una especie de gramínea anual originaria de América e introducida en Europa en el siglo XVII. Actualmente, es el cereal con el mayor volumen de producción a nivel mundial.'
},
{
    name : 'MARIPOSA',
    image : imgBase +'m/3.png',
    description : 'Los lepidópteros (Lepidoptera, del griego «lepis», escama, y «pteron», ala) son un orden de insectos holometábolos, casi siempre voladores, conocidos comúnmente como mariposas; las más conocidas son las mariposas diurnas, pero la mayoría de las especies son nocturnas.'
},
{
    name : 'NUBE',
    image : imgBase +'n/1.png',
    description : 'Una nube es un hidrometeoro que consiste en una masa visible formada por cristales de nieve o gotas de agua microscópicas suspendidas en la atmósfera. Las nubes dispersan toda la luz visible y por eso se ven blancas.'
},
{
    name : 'NUTRIA',
    image : imgBase +'n/2.png',
    description : 'Los lutrinos (Lutrinae), conocidos comúnmente como nutrias, son una subfamilia de mamíferos carnívoros de la gran familia Mustelidae. Existen 13 especies de nutrias repartidas en 7 géneros, con una distribución de la población prácticamente mundial.'
},
{
    name : 'NEVADO',
    image : imgBase +'n/3.png',
    description : 'Que está cubierto de nieve paisaje nevado. Montaña cubierta de nieves perpetuas.'
},
{
    name : 'ÑU',
    image : imgBase +'n1/1.png',
    description : 'Connochaetes es un género de mamíferos artiodáctilos de la subfamilia Alcelaphinae. Son antílopes de África que incluyen al ñu negro (Connochaetes gnou) y al ñu azul (Connochaetes taurinus) como sus únicas especies. '
},
{
    name : 'ÑANDU',
    image : imgBase +'n1/2.png',
    description : 'Los ñandúes (Rhea) son aves paleognatas endémicas de Sudamérica, existiendo dos especies.1 No obstante, algunos autores clasifican al ñandú de Darwin (Rhea pennata) como Pterocnemia pennata.'
},
{
    name : 'ÑUSTA',
    image : imgBase +'n1/3.png',
    description : 'Ñusta era el nombre quechua para las REINAS O PRINCESA s en el Imperio inca.'
},
{
    name : 'OSO',
    image : imgBase +'o/1.png',
    description : 'Los úrsidos (Ursidae) son una familia de mamíferos carnívoros conocidos comúnmente como osos. Son animales de gran tamaño, generalmente omnívoros ya que, a pesar de su temible dentadura, comen frutos, raíces e insectos, además de carne'
},
{
    name : 'OJOS',
    image : imgBase +'o/2.png',
    description : 'Los ojos son órganos visuales que detectan la luz y la convierten en impulsos electroquímicos que viajan a través de neuronas. La célula fotoreceptora más simple de la visión consciente asocia la luz al movimiento.'
},
{
    name : 'OÍDOS',
    image : imgBase +'o/3.png',
    description : 'El oído es un conjunto de órganos cuyas funciones principales son dotar de equilibrio y audición al cuerpo de los humanos o animales.'
},
{
    name : 'PUMA',
    image : imgBase +'p/1.png',
    description : 'El puma, león de montaña, león o pantera (Puma concolor), es un mamífero carnívoro de la familia Felidae nativo de América. Este gran felino vive en más lugares que cualquier otro mamífero salvaje terrestre.'
},
{
    name : 'PAPAGAYO',
    image : imgBase +'p/2.png',
    description : 'Psittacoidea es una de las tres superfamilias del orden Psittaciformes. Contiene unas 330 especies de psitacoideos o loros típicos.'
},
{
    name : 'PINGÜINO',
    image : imgBase +'p/3.png',
    description : 'Los pingüinos (familia Spheniscidae, orden Sphenisciformes) son un grupo de aves marinas, no voladoras, que se distribuyen únicamente en el Hemisferio Sur, sobre todo en sus altas latitudes.'
},
{
    name : 'QUESO',
    image : imgBase +'q/1.png',
    description : 'El queso es un alimento sólido elaborado a partir de la leche cuajada de vaca, cabra, oveja, búfala, camello u otros mamíferos rumiantes. La leche es inducida a cuajarse usando una combinación de cuajo (o algún sustituto) y acidificación.'
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
    description : 'Mus es un género de roedores miomorfos de la familia Muridae que incluye la mayoría de los roedores llamados comúnmente ratones, si bien el nombre de ratón se usa para varias especies más pertenecientes a otros géneros.'
},
{
    name : 'RANA',
    image : imgBase +'r/2.png',
    description : 'Los anuros son un grupo de anfibios, con rango taxonómico de orden, conocidos vulgarmente como ranas y sapos.'
},
{
    name : 'RUEDA',
    image : imgBase +'r/3.png',
    description : 'La rueda es una pieza mecánica circular que gira alrededor de un eje. Puede ser considerada una máquina simple, y forma parte del conjunto denominado elementos de máquinas.'
},
{
    name : 'SOL',
    image : imgBase +'s/1.png',
    description : 'Es una estrella del tipo espectral G2 que se encuentra en el centro del Sistema Solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario.'
},
{
    name : 'SOFÁ',
    image : imgBase +'s/2.png',
    description : 'Un sofá es un mueble utilizado para sentarse confortablemente más de una persona. Se encuentran generalmente en el recibidor o el salón y/o la sala de la casa.'
},
{
    name : 'SILLA',
    image : imgBase +'s/3.png',
    description : 'La silla es un mueble cuya finalidad es servir de asiento a una persona. Suele tener cuatro patas, aunque puede haber de una, dos, tres o más.'
},
{
    name : 'TOMATE',
    image : imgBase +'t/1.png',
    description : 'Solanum lycopersicum, conocido comúnmente como jitomate, tomate o tomatera. Es una especie de la familia de las solanáceas originaria de América (Perú o México) y cultivada en todo el mundo.'
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
    description : 'La uva es una fruta obtenida de la vid. Las uvas vienen en racimos y son pequeñas y dulces. Se comen frescas o se utilizan para producir agraz, mosto, vino y vinagre.'
},
{
    name : 'UÑA',
    image : imgBase +'u/2.png',
    description : 'La uña es una estructura anexa de la piel localizada en las regiones distales de los miembros. Se conoce también como garra y pezuña en los animales.'
},
{
    name : 'UNICORNIO',
    image : imgBase +'u/3.png',
    description : 'El unicornio es una criatura mitológica representada habitualmente como un caballo blanco con patas de antílope, barba de chivo y un cuerno en la frente.'
},
{
    name : 'VACA',
    image : imgBase +'v/1.png',
    description : 'La vaca, en el caso de la hembra, o toro en el caso del macho, es un mamífero artiodáctilo de la familia de los bóvidos'
},
{
    name : 'VENADO',
    image : imgBase +'v/2.png',
    description : 'Los cérvidos (Cervidae) son una familia de mamíferos rumiantes que incluye los ciervos o venados. Su tamaño es variable, siendo el alce el mayor (hasta 450 kg)'
},
{
    name : 'VOLCÁN',
    image : imgBase +'v/3.png',
    description : 'Un volcán (del nombre del dios mitológico romano Vulcano) es una estructura geológica por la que emergen magma en forma de lava, ceniza volcánica y gases provenientes del interior de la Tierra.'
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
    description : 'Es un instrumento musical de percusión.'
},
{
    name : 'YOYO',
    image : imgBase +'y/1.png',
    description : 'El yo-yo es un juguete formado por un disco de madera, de plástico o de otros materiales con una ranura profunda en el centro de todo el borde, alrededor de la cual se enrolla un cordón que, anudado a un dedo se hace subir y bajar alternativamente.'
},
{
    name : 'YEGUA',
    image : imgBase +'y/2.png',
    description : 'El caballo (Equus ferus caballus) es un mamífero perisodáctilo domesticado de la familia de los équidos. Es un herbívoro solípedo de gran porte, cuello largo y arqueado, poblado por largas crines.'
},
{
    name : 'YACARÉ',
    image : imgBase +'y/3.png',
    description : 'Caiman es un género de crocodilios de la familia de los aligatóridos, conocidos vulgarmente como yacarés o caimanes.'
},
{
    name : 'ZORRO',
    image : imgBase +'z/1.png',
    description : 'Los vulpinos (Vulpini) son una tribu de mamíferos carnívoros incluidos en la familia de los cánidos. Se conocen comúnmente como zorros, zorras, raposos o raposas.'
},
{
    name : 'ZAPATO',
    image : imgBase +'z/2.png',
    description : 'El zapato es un accesorio de esemen de caballolla vestimenta hecho con la intención de proveer protección y comodidad al pie mientras realiza actividades varias. '
},
{
    name : 'ZAMPOÑA',
    image : imgBase +'z/3.png',
    description : 'La zampoña es un instrumento de viento compuesto de varios tubos ahuecados por un extremo y cerrados por el otro, dispuestos en forma vertical en una o dos hileras.'
},
];



        })();