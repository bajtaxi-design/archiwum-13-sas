const views = {
  pulpit: () => `
    <section class="grid-hero">
      <article class="scan">
        <h3>AKT ZGONU</h3>
        <p style="text-align:center;margin:6px 0 12px">Nr 188 · Piła · 13 maja 1982</p>
        <p>1. Jan Stanisław Baczyński<br>
        2. ur. 11 marca 1926 · Jazłowiec<br>
        3. zawód: ekonomista<br>
        4. zam. Chodzież, ul. Ogrodowa 22<br>
        5. zgon: 12.05.1982 · miejsce: Piła<br>
        6. godzina: brak w akcie<br>
        7. zgłaszający: Antoni Adam Wilczek · laborant</p>
        <p style="margin-top:10px">Żona: Helena née Morozowicz</p>
        <span class="badge">[P] DOWÓD GŁÓWNY · 1982 · rekonstrukcja pól, nie skan</span>
      </article>
      <article class="card">
        <div class="kicker">USC PIŁA · AKT NR 188 · SPORZĄDZONY 13.05.1982</div>
        <h2 class="display">Najstarszy akt.<br>Nie późniejszy odpis.</h2>
        <p class="muted">Najstarszy zachowany zapis aktu zgonu Jana Stanisława Baczyńskiego. Ma pierwszeństwo przed odpisem zupełnym i skróconym. Pełny skan zostaje u Kustosza — tu idą pola z aktu, nie fotografia dokumentu.</p>
        <div class="sbox">
          <b>[S] SPRZECZNOŚĆ OTWARTA</b>
          <div>USC: Piła · brak godziny</div>
          <div>PARAFIA: Chodzież · 10:50 · „wylew do mózgu” · „bez sakr.”</div>
        </div>
        <div class="kv">
          <div><small>ZGON</small>12.05.1982</div>
          <div><small>GODZINA</small>BRAK DANYCH</div>
          <div><small>MIEJSCE</small>PIŁA</div>
          <div><small>ZGŁASZAJĄCY</small>ANTONI ADAM WILCZEK · LABORANT</div>
        </div>
      </article>
    </section>
    <section class="stats">
      <div class="stat"><small>MASTER INDEX</small><b>40</b><small>węzłów</small></div>
      <div class="stat"><small>DOWODY [P]</small><b>25</b><small>z locatorami</small></div>
      <div class="stat s"><small>SPRZECZNOŚCI [S]</small><b>6</b><small>otwarte</small></div>
      <div class="stat"><small>MATERIAŁY</small><b>52</b><small>PDF, skany, audio</small></div>
      <div class="stat"><small>START PUBLICZNY</small><b>12.09</b><small>2026</small></div>
    </section>
    <p class="muted" style="margin-top:16px">Dokumenty pamiętają więcej niż oficjalna historia. Cyfrowe archiwum rodu Baczyńskich herbu Sas.</p>
  `,
  porcelana: () => {
    const rows = porc.map(p => '<article class="item"><div class="meta">'+p.d+' · '+p.k+' · '+p.t+'</div><h3>'+p.h+'</h3><p>'+p.p+'</p></article>').join('');
    return '<div class="kicker">AP PIŁA / PEŁNY ZRZUT / REALITY LOCK</div><h2 class="display">Baczyński.<br>Majątek.<br>Likwidacja?</h2><p class="muted">Chronologia z 14 tomów i 652 stron. Każdy punkt prowadzi do locatora. OCR służy do wyszukiwania — dowodem pozostaje obraz dokumentu.</p><div class="nums" style="margin-top:16px"><div class="stat"><small>TOMY</small><b>14</b></div><div class="stat"><small>STRONY</small><b>652</b></div><div class="stat"><small>ZAKRES</small><b>45–83</b><small>1945–1983</small></div><div class="stat"><small>STATUS</small><b>[P]</b><small>+ [BRAK]</small></div></div><div class="sbox"><b>[P] ROZSTRZYGNIĘCIE</b> Podział 1982 ≠ likwidacja fabryki. Dokument przygotowawczy: podział nie wymagał likwidacji komórek, zwolnień ani zatrzymania produkcji.</div><div class="sbox"><b>[BRAK]</b> Brak w tym zespole decyzji o późniejszej likwidacji ChZPiP, aktu prywatyzacji, sprzedaży majątku i dokumentacji rozbiórki.</div><div class="timeline">'+rows+'</div>';
  },
  index: () => '<div class="kicker">MASTER INDEX</div><h2 class="display">40 węzłów.<br>Locator albo nic.</h2><p class="muted">Węzeł bez źródła nie wchodzi do rdzenia. Poniżej twardy korzeń z AP Piła.</p><div class="timeline" style="margin-top:16px"><article class="item"><div class="meta">[P] PILA-P-0001 · RDZEŃ</div><h3>Wniosek dowodowy 02.05.1963</h3><p>Jan Stanisław Baczyński: ur. 11.03.1926 Jazłowiec; ekonomista; kapitan rezerwy; ChZPiP, ul. Łąkowa 2. Żona Helena, dzieci Alina i Krzysztof. Locator: AP-PILA-01, s. 20.</p></article><article class="item"><div class="meta">[P] PILA-P-0002 · RDZEŃ</div><h3>Dyrektor generalny 05.08.1981</h3><p>Protokoły 1981 rejestrują Jana Baczyńskiego jako dyrektora generalnego ChZPiP. Locator: AP-PILA-09 / AP-PILA-10.</p></article><article class="item"><div class="meta">[P] PILA-P-0003 · RDZEŃ</div><h3>666 zatrudnionych · 15.10.1948</h3><p>616 fizycznych + 50 umysłowych. Liczba dnia, nie okresu. Locator: AP-PILA-12, s. 39.</p></article><article class="item"><div class="meta">[P] PILA-P-0006 · RDZEŃ</div><h3>Zarządzenie 58/Org/82 · 19.06.1982</h3><p>Podział ChZPiP z dniem 01.07.1982: ChZPiP zakłady 1–4 oraz ZMC zakład 5. Locator: AP-PILA-03, s. 19–20.</p></article></div>',
  sprzecznosci: () => '<div class="kicker">[S] DETEKTOR</div><h2 class="display">Konflikt danych<br>pozostaje widoczny.</h2><p class="muted">System nie wybiera wygodniejszej wersji. Każda rozbieżność ma węzeł, źródło i locator.</p><div class="timeline" style="margin-top:16px">'+sprz.map((s,i)=>'<article class="item"><div class="meta"><span class="tag s">[S] 0'+(i+1)+'</span> '+s.id+' · AKTYWNY</div><h3>'+s.h+'</h3><p>'+s.p+'</p><p style="margin-top:6px">Źródło: '+s.z+' · Locator: '+s.l+'</p></article>').join('')+'</div>',
  os: () => '<div class="kicker">OŚ RODU · SAS</div><h2 class="display">Filiacja twarda.<br>Tytuł — osobno.</h2><div class="axis card" style="margin-top:16px"><p><b>Michał Baczyński</b> · Demycze · ur. 05.05 / 13.05.1896 [S] · przodownik Policji Państwowej · Siewwostłag.</p><p><b>Jan Stanisław Baczyński</b> · Jazłowiec 11.03.1926 — zgon 12.05.1982 [S miejsce/godzina] · dyrektor ChZPiP · kapitan rezerwy.</p><p><b>Helena Genowefa</b> née Morozowicz · Buczacz 13.01.1927.</p><p><b>Krzysztof Kamil Baczyński</b> · 1953.</p><p><b>Jan Michał Baczyński</b> · 04.11.1983 · Kustosz.</p><p style="margin-top:12px" class="muted">Szlachectwo h. Sas: weryfikacja w toku. Nie wpisujemy tytułu jako faktu, dopóki filiacja do wylegitymowanego Andrzeja/Andżela nie stoi na [P].</p></div>',
  czytelnia: () => '<div class="kicker">CZYTELNIA</div><h2 class="display">Materiały zostają<br>u Kustosza.</h2><p class="muted">Repo publiczne = darmowy hosting. Pełne skany i 14 tomów AP Piła nie idą na GitHub, dopóki nie zdecydujesz inaczej. Tu indeks, nie zrzut.</p><div class="timeline" style="margin-top:16px"><article class="item"><div class="meta">REJESTR OPERACYJNY · 10 STRON</div><h3>Rejestr Główny Archiwum 13 SAS v0.1</h3><p>Indeks węzłów i locatorów. Plik lokalny u Kustosza.</p></article><article class="item"><div class="meta">AP PIŁA · 14 TOMÓW · 652 STRONY</div><h3>Zrzut akt zakładowych 1945–1983</h3><p>AP-PILA-01 … AP-PILA-14. Publiczna warstwa podaje locator, nie PDF.</p></article><article class="item"><div class="meta">INWENTARYZACJA</div><h3>Szafka 1 — atlasy po dziadku</h3><p>40 stron. Poza publicznym gitem.</p></article></div>',
  lumen: () => '<div class="kicker">LUMEN J28</div><h2 class="display">Pytaj system,<br>nie internet.</h2><p class="muted">LUMEN na chatgpt.site był warstwą Czatów. Tu zasada: najpierw [P] i [R] z Archiwum. Grok / BaCZAS jest partnerem operacyjnym Kustosza — nie zastępuje aktu.</p><div class="card" style="margin-top:16px"><p>Hasło robocze</p><p class="muted" style="margin-top:8px">„Co stoi na [P] w akcie 188/1982, a co wchodzi dopiero z parafii i relacji?”</p><p class="muted" style="margin-top:12px">Odpowiedź systemowa: USC = Piła, brak godziny. Parafia = Chodzież 10:50, wylew, bez sakramentu. Relacja rodzinna o okolicznościach śmierci pozostaje [R], nie [P].</p></div>'
};
const porc = [
  {d:"1945–1947",k:"MAJĄTEK",t:"[P] 01",h:"Tablica amortyzacyjna fabryki",p:"Ewidencja majątku stałego Fabryki Porcelany. Kwoty historyczne — bez przeliczania. AP-PILA-12 · s. 7."},
  {d:"15.10.1948",k:"MAJĄTEK",t:"[P] 02",h:"666 zatrudnionych",p:"616 fizycznych + 50 umysłowych. AP-PILA-12 · s. 39."},
  {d:"02.05.1963",k:"BACZYŃSKI",t:"[P] 03",h:"Wniosek o dowód osobisty",p:"Ur. 11.03.1926 Jazłowiec; ekonomista; Łąkowa 2; kpt. rez.; Helena, Alina, Krzysztof. AP-PILA-01 · s. 20."},
  {d:"19.01.1981",k:"BACZYŃSKI",t:"[P] 04",h:"Protokół egzekutywy KZ PZPR 1/81",p:"Udział w posiedzeniu ws. strajku ostrzegawczego Solidarności. AP-PILA-09 · s. 1."},
  {d:"02.03.1981",k:"BACZYŃSKI",t:"[P] 05",h:"Tymczasowy Samorząd Robotniczy",p:"Protokół 4/81. AP-PILA-09 · s. 32–33."},
  {d:"27.03.1981",k:"BACZYŃSKI",t:"[P] 06",h:"Czterogodzinny strajk ostrzegawczy",p:"Protokół 6/81. AP-PILA-09 · s. 40–42."},
  {d:"05.08.1981",k:"BACZYŃSKI",t:"[P] 07",h:"Dyrektor generalny w protokole",p:"Wpis funkcji. AP-PILA-10 · s. 32."},
  {d:"24.08.1981",k:"BACZYŃSKI",t:"[P] 08",h:"Reforma gospodarcza i samorząd",p:"AP-PILA-10 · s. 30–31."},
  {d:"1981",k:"LIKWIDACJA",t:"[P] 09",h:"Cerpol w likwidacji",p:"Likwidacja kombinatu ≠ likwidacja ChZPiP. AP-PILA-10 · s. 23."},
  {d:"26.01–19.02.1982",k:"BACZYŃSKI",t:"[P] 10",h:"Ostatni udokumentowany ciąg posiedzeń",p:"26.01, 1.02, 10.02, 19.02 — dyrektor / dyrektor generalny. AP-PILA-13 / AP-PILA-04."},
  {d:"12.05.1982",k:"BACZYŃSKI",t:"[P]/[S] 11",h:"Śmierć Jana Stanisława Baczyńskiego",p:"USC 188/1982: 12 maja, Piła. Parafia: Chodzież. Zarządzenia podziału — miesiąc później."},
  {d:"19.06.1982",k:"PODZIAŁ",t:"[P] 12",h:"Zarządzenie 58/Org/82",p:"Podział z 1.07.1982. AP-PILA-03 · s. 19–20."},
  {d:"24.06.1982",k:"PODZIAŁ",t:"[P] 13",h:"Zarządzenie 61/Org/82",p:"ZMC Chodzież. AP-PILA-03 · s. 17."},
  {d:"30.06.1982",k:"MAJĄTEK",t:"[P] 14",h:"Dzień bilansowy podziału",p:"Składniki, zobowiązania, protokół zdawczo-odbiorczy. AP-PILA-03 · s. 18."},
  {d:"31.12.1982",k:"MAJĄTEK",t:"[P] 15",h:"Bilans ZMC, nie całego ChZPiP",p:"Majątek trwały 45 210 296 zł. AP-PILA-14 · s. 48."}
];
const sprz = [
  {id:"A13-0003",h:"Ewidencja K1 — \u201eKwiatkowski\u201d",p:"K1 wiąże Jana s. Michała ur. 1926 z pseudonimem \u201eKwiatkowski\u201d. Zapis ewidencyjny nie dowodzi treści współpracy. Brak zachowanych dokumentów pracy w tym węźle.",z:"Rejestr Główny v0.1 / IPN",l:"s. 2; karta K1"},
  {id:"A13-0009",h:"Numeracja 183/1982 kontra 188/1982",p:"Dla tego samego zgonu występują dwa numery. Sprzeczność numeracji otwarta.",z:"Rejestr Główny v0.1",l:"s. 4; Korzenie2.pdf; skan 110"},
  {id:"A13-0010",h:"Parafia Chodzież — godz. 10:50",p:"Wpis parafialny: 12.05.1982, 10:50, Chodzież, \u201ewylew\u201d. Koliduje z miejscem Piła i brakiem godziny w USC.",z:"księga parafialna",l:"s. 5; skan 255"},
  {id:"A13-0012",h:"Michał Stanisław — 05.05 / 13.05.1896",p:"Funkcjonariusz PP, Demycze, NKWD. Dwie daty urodzenia w źródłach.",z:"metryka / IPN 786/OP/2025",l:"s. 5"},
  {id:"J28-0018",h:"WBH — konflikt sygnatur",p:"Ten sam wątek rozkazu personalnego: III-311-17 i III-427-23. Rozstrzygnięcie wymaga fotografii naklejki albo strony z sygnaturą.",z:"WBH / CAW",l:"RK-002"},
  {id:"J28-0023",h:"AP Piła — data 12.05.1926",p:"Przy kopertach 822/3039 zapis \u201eur. 12.05.1926, syn Michała\u201d koliduje z rdzeniem 11.03.1926.",z:"AP Piła",l:"822/3039; odp. 24.08.2026"}
];
const titles = {pulpit:"Pulpit",porcelana:"Porcelana",index:"Master Index",sprzecznosci:"Sprzeczności",os:"Oś rodu",czytelnia:"Czytelnia",lumen:"LUMEN J28"};
const viewEl = document.getElementById("view");
const titleEl = document.getElementById("title");
const nav = document.getElementById("nav");
function show(name) {
  const key = views[name] ? name : "pulpit";
  viewEl.innerHTML = views[key]();
  titleEl.textContent = titles[key];
  nav.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.view === key));
  location.hash = key;
  nav.classList.remove("open");
  window.scrollTo(0,0);
}
nav.addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(b.dataset.view); });
document.getElementById("menuBtn").onclick = () => nav.classList.toggle("open");
show((location.hash || "#pulpit").slice(1));
