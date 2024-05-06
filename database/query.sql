DROP TABLE IF EXISTS EJERCICIOS;


CREATE TABLE EJERCICIOS(
	nombre varchar (30),
	series varchar (20),
	repeticiones varchar (50),
	descanso varchar (30)


);

INSERT INTO EJERCICIOS VALUES ('ejercicio1', '3', '3', '2');
INSERT INTO EJERCICIOS VALUES ('ejercicio2', '4', '5', '3');
INSERT INTO EJERCICIOS VALUES ('ejercicio3', '3', '3', '2');

SELECT * FROM EJERCICIOS;


SELECT NOW();
