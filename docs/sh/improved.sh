
## 01
# sed -i '' -e 's/<!DOCTYPE html>/anbtext/g' 1_0.html

## 02
# sed -i '' -e 's/<!DOCTYPE html>\n<html>/anbtext/g' 1_0.html


## sed  's/<!DOCTYPE html>/&/p' 1_0.html

## basic
#sed -e 's/<!DOCTYPE html>/hello/' 1_0.html

## reemplazar sin generar salida
#sed -i '' -e 's/<!DOCTYPE html>/hello/' 1_0.html

## remmplazar todas las apariciones (g) aquí usamos : de separador
#sed -i '' -e 's:<!DOCTYPE html>:hello:g' 1_0.html

## Espresiones regulares
# sed -e 's/<.*>//g' 1_0.html

## 
sed -e 's/<[^>]*>//g' 1_0.html