# FAUST DIGITAL – Ein Klassiker, viele Perspektiven

Responsive Lern- und Produktionsumgebung zu Goethes *Faust I* für die Maturastufe. React, TypeScript, Vite und Tailwind CSS; vollständig im Browser, ohne Konten, Backend, kostenpflichtige Dienste oder API-Schlüssel.

## Starten

Voraussetzung: Node.js 24 LTS und npm.

```sh
npm ci
npm run dev
```

Die im Terminal ausgegebene lokale Adresse öffnen. Produktionsversion:

```sh
npm test
npm run build
npm run preview
```

`dist/` enthält die veröffentlichbare statische Anwendung. `index.html` bitte über einen Webserver öffnen, nicht per `file://`. Nach dem Laden arbeitet die Anwendung ohne API-Verbindung. Eine Offline-Installation / ein Service Worker ist nicht enthalten; Originaltextlinks erfordern Internet.

## Funktionsumfang

- Ausstellungsartige Startseite mit zwei Zugängen.
- Durchsuchbarer Katalog mit allen 28 Werkabschnitten von Zueignung bis Kerker, Figuren, Motiven, offenen Analysefragen und direkten Gutenberg-Kapitellinks.
- Szenenmodus und Themenmodus mit 20 philosophischen Denkwegen, zehn klassischen Themen sowie frei formulierbarem Thema; sechs Arbeitsschritte mit dauerhaft gespeicherten Notizen.
- Werkstatt mit Titel, Leitfrage, Zielpublikum, Szenenauswahl, Textbelegen, überprüfbarem Quellenstatus, Medien- und Interaktionsplanung.
- Bearbeitbares und mit Pfeiltasten-Schaltflächen umordnbares Storyboard sowie umordnbare Textbelege.
- Vorschau und eigenständiger HTML-Export aus dem Storyboard, einschliesslich Textbelegen und Quellen.
- Sechs funktionierende Interaktionsdemos: Versannotation, Figurenbeziehungen, kontrafaktischer Entscheidungsbaum, gewichteter Inszenierungsvergleich, Handlungszeitleiste und Quiz mit begründeten Rückmeldungen.
- Zehn selbst eingeschätzte Projektkriterien und drei Reflexionsfelder, ohne Benotung.
- Automatische lokale Speicherung, manuelles Speichern, vollständiger JSON-Export und validierter Import mit Rückfrage vor dem Ersetzen.

## Arbeitsweise und Datensicherung

Ein aktiver Projektstand wird im `localStorage` unter `faust-digital-project-v1` gespeichert, inklusive Ateliernotizen, Belegen, Storyboard, Planung, Checkliste und Reflexion. Die Bereiche teilen denselben Projektstand. Ein Wechsel zwischen den beiden Modi löscht keine Einträge. Ein neuer inhaltlicher Ausgangspunkt kann in Atelier und Werkstatt bearbeitet werden.

Mit **JSON exportieren** lassen sich beliebig viele Projektstände getrennt sichern. **Importieren** lädt einen solchen Stand zurück. Die Datei wird vor der Übernahme geprüft (Version, Typen, Grössen, IDs und Datenstruktur); der aktuelle Stand kann im Importdialog vorher exportiert werden. Fehlerhafte lokale Daten werden nicht automatisch überschrieben. Die Schaltfläche **Speichern** übernimmt in diesem Fall bewusst den aktuell sichtbaren Stand.

Browserdaten können durch private Fenster, Browserwechsel, gelöschte Websitedaten oder eine geänderte Domain verloren gehen. Daher regelmässig JSON-Sicherungen erstellen. Daten werden von der Anwendung nicht an einen Server übertragen. Schriftarten sind Systemschriften; keine Analytics, keine externen Bild- oder Schriftanfragen. Externe Textlinks führen zu den angegebenen Quellen.

## Eigenes Webspecial mit Codex weiterentwickeln

1. Leitfrage, Belege, Quellen und Storyboard ausarbeiten.
2. **Vorschau** öffnen und die Argumentationsfolge prüfen.
3. **HTML-Entwurf exportieren** sowie eine Projekt-JSON speichern.
4. Beide Dateien in ein eigenes Codex-Projekt übernehmen, beispielsweise mit dem Auftrag: „Entwickle aus diesem Storyboard ein Webspecial. Setze die geplanten Medien und Interaktionen um. Erhalte Belege und Quellen; kennzeichne unbestätigte Aussagen.“

Die generierte Vorschau ist bewusst eine einfache Struktur. Sie erfindet keine Medien, keine fertig analysierten Belege und keine funktionierenden Interaktionen für den Entwurf. Der HTML-Export enthält die geplanten Interaktionen als sichtbare Hinweise. Die funktionsfähigen Beispiele stehen im Labor zur Verfügung.

## GitHub Pages veröffentlichen

1. Den **Inhalt dieses Projektordners** in ein eigenes GitHub-Repository übernehmen (Repository-Wurzel enthält `package.json`).
2. Standardbranch `main` verwenden, oder den Branch in `.github/workflows/deploy.yml` anpassen.
3. Unter **Settings → Pages → Build and deployment → Source** die Option **GitHub Actions** wählen.
4. Auf `main` pushen oder den Workflow **Deploy to GitHub Pages** manuell starten.
5. Der Workflow installiert mit `npm ci`, testet, baut und veröffentlicht `dist/`. Die URL erscheint im Deployment-Ergebnis.

`base: './'` unterstützt Repository-Unterpfade und eigene Domains. Die Navigation nutzt URL-Fragmente statt Serverrouten; ein SPA-Fallback ist deshalb nicht nötig. Die Anwendung ist unter https://patrickfischerksa.github.io/faust-digital/ veröffentlicht. Änderungen auf `main` werden automatisch gebaut und veröffentlicht. Vor öffentlicher Freigabe die institutionellen Vorgaben zum Hosting prüfen.

## Struktur

```text
src/
  App.tsx                 Navigation, Seiten, lokaler Projektzustand
  model.ts                Datenmodell, Importvalidierung, HTML-Export, Umordnung
  model.test.ts           Datenrundlauf, ungültige Importe, Export-Sicherheit
  data/faust.ts           Zentraler Szenen-, Themen-, Zitat- und Kriterienkatalog
  components/
    UI.tsx                Beschriftete Formulare, Überschriften, Quellenlinks
    Workshop.tsx          Planung, Belegsammlung, Storyboard und Vorschau
    Lab.tsx               Sechs Demos und Figurenbeziehungen
    TopicCatalog.tsx      Suchbare Denkwege, Gegenproben und Übernahme
    LovableGuide.tsx      Schrittfolge und personalisiertes Briefing
  data/topics.ts          Philosophische Denkwege und Begriffsweiterlektüre
  lovable.ts              Projektstand als strukturiertes Lovable-Briefing
  lovable.test.ts         Vollständigkeit des Briefings und Szenenverweise
  download.ts             Gemeinsame lokale Datei-Downloads
  style.css               Tailwind-Integration, Gestaltung und responsive Regeln
.github/workflows/deploy.yml
```

Weitere Werke können durch einen weiteren Datenkatalog und eine Werkauswahl ergänzt werden. Das Datenmodell ist für Version 1 auf Faust-Szenen-IDs begrenzt; vor einer Erweiterung IDs und Importmigration gemeinsam anpassen. Reine React-Textdarstellung und HTML-Escaping verhindern, dass importierte Inhalte als Skripte ausgeführt werden.

## Textgrundlage und didaktische Entscheidungen

Primärtext: Johann Wolfgang von Goethe: **Faust: Eine Tragödie** (1808), Onlineausgabe Projekt Gutenberg, angegebene Druckgrundlage Reclam 1971:
https://projekt-gutenberg.org/authors/johann-wolfgang-von-goethe/books/faust-eine-tragoedie/

Am 27.10.2026 wurde die Kapitelübersicht samt Linkstruktur überprüft (Kapitel 2–29; Kapitel 1 ist die Titelseite). Die Katalogtitel sind teilweise für die Navigation vereinheitlicht (z. B. Studierzimmer I/II); Kapitelnummern sind keine Versnummern. Zueignung und Vorspiel sind Werkabschnitte, keine Szenen der Binnenhandlung. Die angegebenen Handlungsbereiche sind redaktionelle Orientierung, keine originale Aktgliederung.

Das Zitat der Startseite und die sechs Laborverse stammen aus **Nacht**, V. 354–359. Wortlaut mit der Gutenberg-Ausgabe, Verszählung mit Wikisource abgeglichen:
https://de.wikisource.org/wiki/Faust_-_Der_Trag%C3%B6die_erster_Teil

Orthografie und Interpunktion können zwischen Ausgaben variieren; im Labor folgt der Wortlaut Gutenberg, die Nummerierung Wikisource. Die Anwendung enthält keine erfundenen Originalzitate oder zusätzlichen Versangaben. Selbst eingetragene Belege starten ungeprüft und werden erst durch eigene Bestätigung als selbst geprüft angezeigt. Änderungen an Wortlaut oder Fundstelle setzen diesen Status zurück. Die Prosaszene „Trüber Tag. Feld“ benötigt einen Abschnittsnachweis statt erfundener Verse.

Inhaltsangaben und Analysefragen sind redaktionelle, KI-unterstützt erstellte Lernimpulse, keine Forschungszitate. Figurennetz und Annotationen sind offene Deutungsangebote. Der Entscheidungsbaum ist ausdrücklich kontrafaktisch, der Inszenierungsvergleich zeigt erfundene Gestaltungsentwürfe. Der Quiz bewertet begründbares Textverständnis, keine umstrittene Gesamtinterpretation. Historische Kontexte und heutige Vergleiche sollen im eigenen Projekt getrennt ausgewiesen werden.

## Barrierearmut und Qualitätssicherung

Semantische Navigation, beschriftete Formularfelder, sichtbare Fokusmarkierungen, Sprunglink, Tastaturbedienung über native Buttons und Formulare, Statusmeldungen, Importdialog mit Escape und Fokusbegrenzung, responsive Umbrüche und Berücksichtigung von `prefers-reduced-motion`. Änderungen sind ohne Drag-and-drop möglich. Kein Anspruch auf formale WCAG-Zertifizierung; besonders der vollständige Einsatz mit verschiedenen Screenreadern bleibt separat zu prüfen.

Automatisierte Tests prüfen JSON-Rundlauf, beschädigte und übergrosse Importe, doppelte IDs, Umordnungsgrenzen und HTML-Escaping. `npm run build` prüft TypeScript und erzeugt die statische Produktionsversion. Manuelle Browserprüfungen sind im mitgelieferten `QA.md` dokumentiert.


## Erweiterung: Philosophische Denkwege und Lovable

Der Themenkatalog bietet standardmässig 20 neue Denkwege aus Erkenntnis, Ethik, Freiheit und Selbst, Zeit und Existenz, Welt und Medien sowie Metaphysik. Suchfeld und Denkfeldfilter erschliessen die Auswahl; die zehn klassischen Ausgangsthemen bleiben verfügbar. Jeder Denkweg enthält eine zugespitzte Frage, ein kurz erläutertes philosophisches Werkzeug, eine ernsthafte Gegenprobe, passende Originaltextlinks und eine digitale Formidee. Thema, Leitfrage und Ausgangsszenen werden getrennt übernommen; ein Themenwechsel überschreibt keine bestehende Leitfrage oder Szenenauswahl. Die Übernahme einer vorgeschlagenen Leitfrage ist ausdrücklich als Ersetzen beschriftet, wenn bereits eine existiert.

Die Begriffe sind heutige Lesewerkzeuge und redaktionelle Denkexperimente. Sie behaupten weder ein philosophisches System Goethes noch historische Einflüsse. Für ausgewählte Begriffe sind geprüfte englischsprachige Artikel der Stanford Encyclopedia of Philosophy verlinkt: Moral Luck, Personal Autonomy, Personal Identity, Paternalism, Speech Acts und Foreknowledge and Free Will (Linkprüfung 27.10.2026). Sie ersetzen keine eigene Textanalyse.

Unter **Werkstatt → Mit Lovable bauen** führen acht Schritte von der redaktionellen These über einen Musterabschnitt zu Interaktionen, Prüfung und Veröffentlichung. Inspiriert ist diese Dramaturgie vom bestehenden Produktionsatelier der Berlin-Thriller-Werkstatt; Faust-Inhalte, Gegenproben und Projektanbindung sind eigenständig ausgearbeitet.

Das personalisierte Briefing enthält den gesamten aktuellen Arbeitsstand: Titel, Leitfrage, Publikum, Modus, Thema, passende Denkimpulse, ausgewählte Szenen, sechs Arbeitsnotizen, alle Belege mit selbst gesetztem Prüfstatus, Storyboard, Medien- und Interaktionsplanung und Quellen. Fehlendes Material bleibt sichtbar offen. Das Briefing kann kopiert oder als `.txt` heruntergeladen werden. Drei Folgeprompts unterstützen Interaktionsbau, Dramaturgie und mobile Bedienbarkeit. Es werden keine Daten automatisch an Lovable geschickt. Die Projekt-JSON bleibt das Format zum verlustfreien Speichern in FAUST DIGITAL; sie ist kein garantierter Lovable-Projektimport.

Lovable ist ein optionaler externer Dienst, der ein eigenes Konto und Build-Credits verwendet. Die Lernplattform selbst bleibt kostenlos, ohne Anmeldung und ohne API-Schlüssel. Eine Lovable-Verbindung oder ein kostenpflichtiger Dienst wurde nicht eingerichtet. Werkzeughinweise wurden am 27.10.2026 mit den offiziellen Quellen abgeglichen:

- https://docs.lovable.dev/introduction/getting-started
- https://docs.lovable.dev/prompting/prompting-one
- https://lovable.dev/blog/lovable-file-uploads

Bestehende lokale Projekte und JSON-Dateien bleiben mit Datenformat Version 1 kompatibel. Die neuen Themen werden wie bisher als Titel gespeichert; das Briefing wird daraus und aus den Projektdaten bei jedem Öffnen neu erzeugt.
