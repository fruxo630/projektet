# Hur Projektet gick

Även fast det blev en time-crunch så kändes projektet bra. Varje sida gjorde så som jag ville och jag kunde få css koden att fungera på vardera sida.

## Navbars

Det svåraste jag tyckte var att göra är de två navbars som jag har använt mig av. Den första vilket är den som man ser om man är på datorn eller på större skärmar behövde jag använda en annan persons kod för att göra. Jag hade idéen på hur jag ville det skulle se ut men det var svårt att få den att bli bra.

Tack vare det så använde jag mig av [denna video](https://www.youtube.com/watch?v=PwWHL3RyQgk) för att kunna göra den stora navbaren. Den blev precis som tänkt och jag kunde också ändra till den så att den blev så som jag ville att den skulle bli. Förutom att ändra färgerna så att det blev bra så använde jag också detta:

```css
.border1, .border2, .border3, .border4 {
    border-radius: 10px;
}

.border5 {
    border-radius: 10px 10px 0px 0px;
}
```

Detta gjorde att jag kunde ändra hur varje knapp skulle se ut när man gör en hover på den. Samtidigt så kunde jag också lägga in den stora listan för varje planet som jag hade för "Other Planets" och använda mig av border-radius för att den ska fungera och inte förstöra sig själv när jag fixade så de andra knapparna fick rundare hörn.

När det väl kom till den minimerade listan så ville jag använda en kod som var responsive även hur liten skärmen var, även om man använde sig av en surfplatta eller av en telefon. Jag ville också att den inte skulle gå sönder om man har en mycket mindre skärm.

Det svåraste att göra var att fixa så att den undre navbaren blev rätt och fungerade när man gör en hover över "General", "Inner" eller "Outer".

```css
.subnav-content-small a {
    float: left;
    color: white;
    text-decoration: none;
}

.subnav-content-small a:hover {
    background-color: white;
    color: black;
}
```

När jag väl fått subnavbaren att bli fixerad under den övre navbaren så kunde jag använda mig av denna kod där jag fixar så att länkarna till varje sida är placerade rätt, detta gjorde jag genom att använda float som gör att all content går till vänster och sedan ger den färgen vit och ingen dekoration på texten samt att när man gör en hover så blir bakgrundsfärgen vit istället för röd och färgen på texten går över till svart.

## Content

Nästa problem jag stötte på var när jag skulle skriva min content.

```html
<div class="content-bottom">
    <div class="first-div">
        <img src="images/solar-system.jpg" alt="Solar System" class="planet-img">
    </div>
<div class="second-div">
    <div class="planet-info">
        <h2>What we know</h2>
        <p>Texten</p>
    </div>
</div>
</div>
```

Större delen av min content blev formaterad med denna kod, där jag använder mig av två stycken divs för att sedan ändra med css så att en av den div:n är på vänster sida och den andra med text är på höger sida.

```css
.planet-img {
    width: 500px;
    height: 510px;
    justify-self: center;
    border-radius: 1rem;
    border: 10px solid #AF5344;
    object-fit: cover;
}

.planet-info {
    width: 550px;
    height: 500px;
    background: #5E6170;
    padding: 1rem;
    color: white;
    border-radius: 1rem;
}
```

Efter det så använde jag bara den kod som behövdes för att göra så båda mina borders som jag hade tänkt att använda var rätt storlek på width och height samt har samma border-radius. Jag hade redan tänkt att göra så att bilden blir tillräckligt stor och att använda mig av object-fit: cover; för att göra så att bilden ser bra ut oavsett hur ens width eller height är, annars blir den ihoptryckt och inte bra. Sedan ville jag också ha en yttre border runtom bilden för att göra så den ser bättre ut och det gick finfint.

```css
.title {
    display: none;
}

.navbar, .home {
    display: none;
}
```

Jag visste att det skulle bli problem för mobil versionen eftersom jag inte ville använda samma navbar just för att den skulle gå sönder, samt att jag inte kunde använda mig av bilden, så istället så använde jag display och none för att ta bort dem helt när skärmen blir mycket mindre, och istället bara har text samt bordern med text så att jag fortfarande kan visa det som är mest användbart, alltså informationen.

## Footer

```css
footer {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background-color: #514352;
    color: white;
    padding: 2rem;
    text-align: center;
}
```

Det var svårt att få min footer att bli bra. Jag visste att jag kunde använda mig av flex och justify content för att få till så att mitt namn, "about me" page, kontakt information och last updated att bli bra men jag visste inte helt när jag gjorde den om jag skulle använda mig av space-between eller nån annan. Jag satte mig dock på det och det blev väldigt bra.

Jag använde också en minimerad footer för att kunna göra informationen enklare att se på mindre skärmar just eftersom att flex och space-between hade inte fungerat alls på mobil skärm eller ens en surfplatta.

Jag ville kunna använda mig av en liten wrapper runt allt jag hade på sidan, alltså navbar, content och footer eftersom att det skulle göra så att sidan inte blir helt blank så att säga.

```css
body {
    background-color: white;
    background: url(images/space-background.jpg);
    background-size: cover;
    backdrop-filter: blur(1rem);
}
```

Jag använde då denna kod för att lägga till en bakgrund för space under hela min content, och sedan göra så att den blir suddig med backdrop-filter: blur. Resultatet på denna blev väldigt bra och jag är väldigt nöjd med den. Satte också en cover på bakgrunden så att den täcker hela skärmen.

## Wrapper / bakgrund

```css
.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(100px, auto) 1fr auto;

    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;

    background-color: white;
}
```

Det bästa med sidan var när jag satte dit en div med klassen för wrapper så att jag kunde lägga till en vit bakgrund i mitten av sidan för att kunna använda space bakgrunden vid sidorna. Grid var en väldigt bra idé här att jag använde, resultatet blev verkligen värt den tiden som jag använde för att koda den.

## Back to Top Button och Javascript

```css
#myBtn {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: #5E6170;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    font-size: 18px;
}

#myBtn:hover {
    background-color: #3C323D;
}
```

Jag kunde koda hela tillbaka till topp kanppen själv eftersom att det var mycket färg, border-radius och sedan att placera den i botten av sidan  med mera. Jag kunde också lägga in min egna hover bakgrundsfärg på den och alla de värden som jag ville att min knapp skulle ha.

Det som jag inte kunde få att fungera oavsett hur mycket jag försökte var den domskript för att kunna få knappen att visa sig och inte visa sig när den väl skulle det, samt att den inte skulle permanent vara på sidan utan börja visa sig när man gör en scroll. Det gick inte hur mycket jag försökte så jag använde då [denna guiden](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp) för att kunna göra min javascript.

## Favicons / bilder

Jag använde mig av en favicon på varje sida, som ändrades för varje sida. Jag använde mig av [denna ikon](https://www.iconfinder.com/icons/3285303/astronomy_galaxy_planets_solar_space_star_universe_icon) för startsidan samt [hela denna set av ikoner](https://www.iconfinder.com/iconsets/planets-1) för de resterande.

De bilder jag använde för att kunna visa varje planet på sidorna samt solsystemet fick jag från unsplash.com och pixabay.com där jag har sökt efter fria bilder på rymden samt på varje planet, därav mestadels av de bilder är direkt från NASA. Eftersom att de är fria bilder att använda så tycker jag att jag har följt upphovsrätten på ett bra sätt och inte brutit mot den.

## Resultat

Jag tycker att sidan blev som jag hade tänkt, den ser ut så som jag planerade och koden fungerar så som tänkt. Färgtemat som jag använt mig av är jättebra tillsammans med det som ska pratas om alltså rymden och det slutade väldigt bra.

# Teckenkod

Felangiven teckenkod kan leda till många problem för till exempel en webbsida. Inom detta projekt så använde vi oss av UTF-8, vilket är den teckenkoden som gör så att å, ä och ö blir de tecken som de ska bli. Om man inte använder teckenkodning eller om jag skulle ta bort UTF-8 så finns risken att innehållet på sidan tolkas på ett sätt som kanske blir svårt att läsa eller till och med blir helt oläsbart. 

Teckenkod är viktig att den blir definerad rätt eftersom att det ska kunna ge en bra läsbarhet för människor men också kunna göra det enklare för maskiner att kunna läsa sidan.

Den teckenkodningen som jag tycker är bäst att använda är UTF-8 eftersom att man kan använda en enda kodning för att hantera nästan alla tecken som man använder på sin sida samt de tecken som man kommer att behöva.

# Etik och Integritet

Jag tycker att integritet är väldigt viktigt. Det är inte den bästa idéen att lämna ut för mycket privata detaljer på sin sida eller på någon sida som finns på internet, ett stort exempel kan vara Facebook, Twitter eller Instagram. Det finns alltid många personer i världen som kan ta den informationen och använda den för dåliga saker.

Det är också inte alltid så sjukt roligt om alla personer på internet, många av dem du inte ens känner alls, vet exakt vad du heter, vart du bor, vilket land och såna saker, det är inte direkt så sjukt bra. När det kommer till min sida så har jag bara lagt ut mitt namn, den kurs projektet skulle vara till och min kontaktinformation i form av min email eftersom jag tycker att det är all den information som publiken behöver veta. 

Jag tycker också att det är viktigt att skydda sina personuppgifter när man använder sig av olika tjänster ute på internet, just så att den informationen inte kan användas till något dåligt.

När det kommer till etik så är den lite överallt så att säga. Det finns alltid många personer på internet som tror att man kan göra vad man vill eller säga var man vill, även fast det finns regler som visar om hur man ska bete sig när man är online. Det är en jättebra sak att etik finns online, hade den inte gjort det så hade det nog blivit så mycket kaos på både sociala nätverk men också på många andra ställen, just eftersom att vi människor tror att vi kan göra precis vad vi vill.

# Webbhotell

När det kommer till webbhotell så litar jag väldigt mycket på just Github till skillnad från till exempel Loopia som jag inte tycker är bra att använda.

Anledningen till att jag vill använda Github mer än Loopia eller ett annat webbhotell är just eftersom att det är så sjukt många som redan använder Github överallt i världen för i princip vadsomhelst som har med kod att göra. Samt att vi redan nu i skolan använder oss av Github mycket.

Just detta gör att jag litar mycket mer på att just Github är bra. Loopia känns inte som att man kan lita på den, det är inte så sjukt många som använder den till skillnad från Github och den kostar även pengar att använda, vilket Github inte gör.

# Risk med att använda andras kod

Utan någon tvekan så skyddas kod av upphovsrättslagen. Det är just arbetet med att skapa den kod som blir skyddat. Man får inte använda kod någon annan har gjort utan tillåtelse.

Det kan bli väldigt många risker med att använda andras kod. Om det visar sig att man tagit någons kod utan tillåtelse så bryter man mot upphovsrättslagen och den person som ursprungligen gjorde koden kan gå till domstol med den. Detta i sig kan göra att om man förlorar i domstolen så kommer man nog få betala pengar till den som gjorde koden för den kod som man stulit, och det är inte heller en liten summa pengar.

Det är också brottsligt att ta någon annans kod utan tillåtelse vilket skulle kunna leda till stora problem för den person som tagit koden om det visar sig att den kod man använder inte är den kod man själv skapat.