doc = guieDeveloper


pdf: $(doc).tex
	pdflatex -shell-escape $(doc).tex

view: $(doc).pdf
	evince $(doc).pdf

all: $(doc).tex
	pdflatex -shell-escape $(doc).tex
	evince $(doc).pdf

init:
	mkdir src imag
	touch src/section1.tex
	cp ~/basededatos/LaTeX/apuntes/plantilla.tex $(doc).tex

clear:
	rm $(doc).log $(doc).pdf $(doc).aux\
		$(doc).out $(doc).toc
		
latex-v:
	evince ~/basededatos/libros/LaTeX/LaTeX_2014.pdf &

latex-simbol:
	gpicview ~/basededatos/LaTeX/imag/ &
