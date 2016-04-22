Proceso sin_titulo
	Escribir 'Escoja producto'
	Leer selector
	Escribir 'Ingrese dinero'
	Leer dinero
	Segun selector  Hacer
		1:
			Si dinero>=500 Entonces
				producto<-'chocolate'
				cambio<-dinero-500
			Sino
				producto<-'No puede comprar producto'
			FinSi
		2:
			Si dinero>=400 Entonces
				producto<-'galleta'
				cambio<-dinero-400
			Sino
				producto<-'No puede comprar producto'
			FinSi
		3:
			Si dinero>=100 Entonces
				producto<-'chicle'
				cambio<-dinero-100
			Sino
				producto<-'No puede comprar producto'
			FinSi
		De Otro Modo:
			producto<-'No selecciono producto'
	FinSegun
	Escribir 'Producto comprado: ' producto
	Escribir 'Cambio: ' cambio
FinProceso

