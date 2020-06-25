#!/bin/bash

serve()
{
	rm build.yaml
	pub get
	webdev serve
}

build()
{
	cp release.yaml build.yaml
	pub get
	webdev build
}

help()
{
	echo "This script helps serve and build ThreeDart."
	echo "To serve ThreeDart for quick development use './run serve'."
	echo "To build ThreeDart for deployment use './run build'."
}

if [$1 == "serve"] then
	serve()
elif [$1 == "build"] then
    build()
else
	help()
fi
