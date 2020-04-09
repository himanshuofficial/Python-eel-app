import eel
eel.init('web')
@eel.expose
def concatenation(a,b):
   return a + b

@eel.expose
def add(a,b):
   return float(a) + float(b)

@eel.expose
def sub(a,b):
   return float(a) - float(b)

@eel.expose
def multiply(a,b):
   return float(a)*float(b)
eel.start('main.html',mode= '/usr/bin/firefox',host= '127.0.0.1', port= 8080,size=(1000, 600))