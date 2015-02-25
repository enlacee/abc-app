## copy files

PATH_DESTINATION="/Users/Bitalik/Documents/acopitan/develoweb/app-abc/www"
PATH_SOURCE="/Users/Bitalik/Documents/acopitan/develoweb/abc/src/"


echo "===init process..."

echo "1 ) STEP ONE ";
echo "Delete files".
echo " rm -r $PATH_DESTINATION ";
rm -r $PATH_DESTINATION

echo "2 ) STEP TWO";
echo "Copying files ";
echo " cp -r "$PATH_SOURCE" "$PATH_DESTINATION
cp -r $PATH_SOURCE $PATH_DESTINATION

echo "...end-process===";
