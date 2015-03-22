<h1>installation</h1>


<p>Ladda hem den Rails applikationen. Kör sedan igång den i rubymine.</p>
<a href="https://github.com/em222iv/API_app">Länk till rails app </a>
<h4>i terminalen skriver du dessa kommandon: </h4>
<p>
 - bundle install,
 -rails s,
 -rake db:setup,
</p>

<p>Du har nu seedat upp några olika användare, men ingen annan data.</p>
<p>Du har två användare som du kan testa med:</p>
<p>"testare1" och "testare2", båda med lösenordet: "password"</p>

<h4>Skriv "User.all" i terminalen och välj en av deras Key attribut. Du kommer behöva skriva in det i angular-appen</h4>

<h3>angular</h3>

<p>ladda hem applikationen och öppna den i webstorm.</p>
<p>-installera node och bower med: npm install node.js, och sedan npm install bower</p>
<p>ingen nodeserver behövs startas</p>

<p>Öppna servicefilen(~/app/service/serivce.js) och skriv in nyckeln du tagit av valfri user till varibalen "auth" som ligger högst upp.</p>
<p> öppna nu index-filen och logga in med någon av test-användarna i appliaktion<p/>

