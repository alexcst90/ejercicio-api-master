# ejercicio-api-master
Ejercicio a desarrollar para el Master en Full Stack Web Development


1.  creamos una red para tener visivilidad entre los contenedores
docker network create cstnetwork

2.  ejecutamos "docker run" para levantar nuestra DB.
docker run --name cstmongodb-container --hostname cstmongodb-container -d -p 27017:27017 --network cstnetwork -v /Users/mongodb/mongo-volume/:/data/cstdb mongo

3. importamos la db adjunta en el proyecto.
users.json

4. En consola nos ubicamos en el fichero en el cual se encuestra nuestro archivo Dockerfile y ejecutamos.
docker build -t test/node-api .

5. ejecutamos el comando "docker run" para desplegar nuestra imagen.

docker run -p 8080:8080 -d --name ejercicio-api-master --network cstnetwork test/node-api

