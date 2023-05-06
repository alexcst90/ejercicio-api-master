
creamos una red 
docker network create mynetwor

ejecutamos para levantar nuestra DB
docker run --name cstmongodb-container --hostname cstmongodb-container -d -p 27017:27017 --network cstnetwork mongo

2023-05-06 13:15:15 {"t":{"$date":"2023-05-06T19:15:15.306Z"},"s":"F", 
 "c":"CONTROL",  "id":20574,   "ctx":"-","msg":"Error during global initialization","attr":
 {"error":{"code":2,"codeName":"BadValue","errmsg":"The \"verbose\" option string cannot contain any characters other than \"v\""}}}