Proceso sin_titulo
	Escribir "Fecha por radiocarbono"
	Escribir "Introduzca el porcentaje del carbono-14"
	Leer carbonoFinal
	vidaMedia = 5730
	tiempo <- (-vidaMedia)*ln(carbonoFinal)/ln(2)
	Escribir "La edad de la muestra es: "
	Escribir tiempo , " años"
FinProceso

