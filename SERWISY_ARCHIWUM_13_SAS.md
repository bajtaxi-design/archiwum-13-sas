# ARCHIWUM 13 SAS — mapa serwisów publicznych

Stan porządkowania: 20.10.2026. Dokument określa **role i odsyłacze**, nie potwierdza synchronizacji zawartości ani dostępności stron w każdej przeglądarce.

## Publiczne wejścia

| Priorytet | Nazwa w menu | Adres | Zadanie |
| --- | --- | --- | --- |
| 1 | Archiwum 13 SAS — portal główny | https://strona-baczas.bajtax.chatgpt.site/ | Źródła, kwerendy, genealogia, fotografie, artykuły, przegląd sprzeczności |
| 2 | Jan Stanisław Baczyński — biografia | https://jan-stanislaw-baczynski.jbaczynski1.chatgpt.site/ | Osobny życiorys i dokumentacja osoby |
| 3 | Łańcuch dowodowy — indeks techniczny | https://archiwum-13-sas-lancuch-dowodowy.vercel.app/ | Uporządkowane ustalenia, locatory i rozbieżności; odrębne wdrożenie Vercel |

Adresy 1 i 2 podał właściciel projektu. Treść portalu 1 została odczytana publicznie; zawartości strony 2 nie udało się niezależnie sprawdzić. Wdrożenie 3 ma status Vercel READY, co samo w sobie nie potwierdza poprawnego wyświetlania strony.

## Jedna nazwa, różne odpowiedzialności

- **ARCHIWUM 13 SAS** to wspólny szyld. Używamy go w tytułach nawigacji i opisach powiązanych witryn.
- **Portal główny** jest punktem orientacyjnym dla odwiedzających. Nie zakładamy, że kod portalu znajduje się w tym repozytorium.
- **Biografia Jana** ma własny adres. Nie kopiujemy automatycznie materiału z biografii do pozostałych witryn.
- **Łańcuch dowodowy** jest osobnym publicznym wdrożeniem, nie prywatnym repozytorium skanów.
- **To repozytorium** (`bajtaxi-design/archiwum-13-sas`) to publiczny kod oraz indeks, nie magazyn oryginałów. Jego katalog `jan-stanislaw-baczynski/` pozostaje odrębny od strony biograficznej na `chatgpt.site`.
- **Prywatna aplikacja** pozostaje poza publicznym menu, bez ekspozycji prywatnego adresu API, danych logowania lub plików.

## Stały schemat publicznej nawigacji

**Portal główny** → **Biografia Jana** → **Łańcuch dowodowy**

Nie tworzymy kolejnych równorzędnych „stron głównych”. Na każdej witrynie docelowo powinien być widoczny link do portalu głównego oraz pozostałych serwisów — ale edycje witryn `chatgpt.site` wymagają odrębnego dostępu do ich edytora. Ten PR zmienia **wyłącznie publiczne repozytorium GitHub**.

## Szlak Ułański SAS13 — ścieżka zwiedzania

Nazwa jest metaforą rodzinnej pamięci i sposobem **nawigowania między istniejącymi materiałami**, a nie nazwą udowodnionego szlaku wojskowego.

| Etap | Widoczna nazwa | Dokąd prowadzi |
| --- | --- | --- |
| 1 | Kresy | `#os` — istniejąca oś rodu |
| 2 | Michał | Portal główny; odwiedzający wybiera w nim dział „Michał” |
| 3 | Jan | Osobna witryna biograficzna Jana Stanisława |
| 4 | Chodzież i porcelana | `#porcelana` — historia przedsiębiorstwa |
| 5 | Dowody [P] | `#index` — publiczny Master Index i locatory |
| 6 | Sprzeczności [S] | `#sprzecznosci` — rejestr otwartych rozbieżności |
| 7 | Prawdziwe Oblicze J3 | `#j3` — cztery znaczenia monogramu rodowego: trzech Janów, JB, 13 oraz J → MB |

**Geneza J3 — objaśnienie autora symbolu:**

- **J3 / J³** — trzech Janów i ciągłość trzech pokoleń.
- **JB** — wspólny znak inicjałów autora, jego dziadka i pradziadka, zgodnie z jego relacją.
- **13** — liczba łącząca monogram ze znakiem Archiwum 13 SAS.
- **J → MB** — zamierzony efekt graficzny po obróceniu/przekształceniu litery J; wymaga dopiero opracowania w logotypie, nie jest automatyczną cechą każdego kroju pisma.

To **autorska wykładnia znaku**, nie samodzielny dowód filiacji, potwierdzenie historycznej nazwy jednostki ani sygnatura archiwalna. Imiona, daty i pokrewieństwo wymagają odrębnych źródeł [P].

**Nawigacja:** przystanki lokalne używają `location.hash`; obsługa `hashchange` umożliwia przejścia oraz cofanie w przeglądarce. Linki zewnętrzne otwierają się w nowej karcie i nie wykonują żadnej synchronizacji danych. Dla strony Michała nie zakładamy niezweryfikowanego głębokiego linku — prowadzi do portalu.

**Kontrola wydania:** testy składni i działających przejść w przeglądarce/iPhonie są wymagane przed scaleniem PR; zapis plików do gałęzi sam nie stanowi takiego testu.

## Metoda źródłowa i granice prywatności

- Oznaczenia: `[P]` dokument, `[R]` relacja, `[I]` interpretacja, `[H]` hipoteza, `[S]` sprzeczność, `[Z]` zadanie.
- Obraz dokumentu i transkrypcja to odrębne warstwy. Nie oznaczamy samego OCR jako dowodu `[P]`.
- Brak dokumentu albo błąd dostępności strony **nie dowodzi** niczego o sprawie historycznej.
- Bez osobnej autoryzacji nie publikujemy pełnych skanów, danych osobowych żyjących osób ani prywatnej korespondencji.
- Link nie oznacza automatycznego przeniesienia, połączenia baz danych ani integracji z ChatGPT.

## Publikacja i powrót

1. Weryfikować zawartość PR na gałęzi roboczej.
2. Sprawdzić wyświetlanie na iPhonie i laptopie oraz to, czy wszystkie trzy odsyłacze otwierają właściwe witryny.
3. Zweryfikować konfigurację Vercel przed scaleniem: połączenie repozytorium z projektem może powodować nowy build i zastąpić wcześniej wdrożoną wersję HTML.
4. Dopiero po potwierdzeniu zmian dopuścić merge/release. Powrót: odwrócić commit nawigacji lub przywrócić ostatnie sprawdzone wdrożenie. Nie zmieniać baz danych.

Koszt nowych płatnych usług: **0 zł**. Ta mapa nie wymaga Supabase, płatnych API ani nowych kont.
