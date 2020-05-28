1. dónde está el método de petición
R// en Headers : Request Method: GET
2. el código de la respuesta (recuerda que 200 es OK) 
R// Status Code: 200 
3. en las cabeceras de la petición busca una llamada user-agent, ¿qué puedes decir de su contenido? 
R// Esta la informacion del navegador en el que se realizo la peticion.
4. la respuesta del servidor en JSON
R// {"count":2,"next":null,"previous":null,"results":[{"name":"Beru Whitesun lars","height":"165","mass":"75","hair_color":"brown","skin_color":"light","eye_color":"blue","birth_year":"47BBY","gender":"female","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/5/","http://swapi.dev/api/films/6/"],"species":[],"vehicles":[],"starships":[],"created":"2014-12-10T15:53:41.121000Z","edited":"2014-12-20T21:17:50.319000Z","url":"http://swapi.dev/api/people/7/"},{"name":"San Hill","height":"191","mass":"unknown","hair_color":"none","skin_color":"grey","eye_color":"gold","birth_year":"unknown","gender":"male","homeworld":"http://swapi.dev/api/planets/57/","films":["http://swapi.dev/api/films/5/"],"species":["http://swapi.dev/api/species/34/"],"vehicles":[],"starships":[],"created":"2014-12-20T17:58:17.049000Z","edited":"2014-12-20T21:17:50.484000Z","url":"http://swapi.dev/api/people/77/"}]
al recargar la página aparecen un montón de peticiones en la pestaña Network, ¿sabrías filtrar solo las que son de AJAX? Pista: antes de fetch las peticiones se hacían con el objeto XMLHttpRequest (XHR
R// Si.
