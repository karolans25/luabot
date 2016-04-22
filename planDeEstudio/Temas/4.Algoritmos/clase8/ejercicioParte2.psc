Proceso sin_titulo
	Leer selector
	Leer dinero
	Segun selector Hacer
		1:
			Si dinero >= 500 Entonces
				producto <- 'chocolate'
			Sino
				producto <- 'No puede comprar producto'
			FinSi
		2:
			Si dinero >= 400 Entonces
				producto <- 'galleta'
			Sino
				producto <- 'No puede comprar producto'
			FinSi
		3:
			Si dinero >= 100 Entonces
				producto <- 'chicle'
			Sino
				producto <- 'No puede comprar producto'
			FinSi
		De Otro Modo:
			producto <- 'No selecciono producto'
	FinSegun
	Escribir producto
FinProceso

