``` bat
  FOR /F "tokens=*" %G IN ('DIR /B /AD /S bin') DO rmdir /s /q %G
  FOR /F "tokens=*" %G IN ('DIR /B /AD /S obj') DO rmdir /s /q %G
````
