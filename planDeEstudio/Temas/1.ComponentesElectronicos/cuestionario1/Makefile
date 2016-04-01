doc = cuestionario1

pdf: $(doc).tex
	pdflatex -shell-escape $(doc).tex

view: $(doc).pdf
	evince $(doc).pdf

all: $(doc).tex
	pdflatex -shell-escape $(doc).tex
	evince $(doc).pdf

clear:
	rm $(doc).log $(doc).pdf $(doc).aux\
		$(doc).out $(doc).toc
