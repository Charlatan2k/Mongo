# Reto1

Buscar un documento por su ID

En el filtro de consulta, ingresamos:

{ "\_id": ObjectId("ID_del_documento") }

En mi caso, sería:

{ "\_id": ObjectId("656679e346394e80a051cb71") }
Buscar un documento por alguno de sus campos

Por ejemplo, buscando por el campo "name" sería:

{ "name": "Octavio" }

Buscar un documento y proyectar sólo un campo

En este caso tenemos el apartado de Project en las opciones del dialogo Find donde podemos especificar que campos queremos mostrar y con que valor. Por ejemplo si quiero del documento con id 0 mostrar solo el nombre podría introducir esto

{ "name": 1, "\_id": 0 }

Modificar un documento

Para esto podemos simplemente mostrar todos los documentos y darle al botón del lápiz y editar los campos del documento o buscar por el dialogo de find y mostrar el documento especifico y de ahí editar.

Eliminar un documento

Igual que modificar tenemos la opción de mostrar todos los documentos y darle al botón de eliminar o buscar el documento especifico y de ahi eliminarlo.

Recuerda que estos ejemplos asumen que estás utilizando el campo \_id para identificar de manera única tus documentos en MongoDB.
