# Qualitätssicherung – 27.10.2026

## Automatisiert

- `npm run build`: TypeScript-Prüfung und Vite-Produktionsbuild erfolgreich.
- `npm test`: 5 Tests erfolgreich (vollständiger JSON-Rundlauf; beschädigte, unbekannte und zu grosse Importe; Umordnung einschliesslich Grenzen; HTML-Escaping gegen aktive Inhalte; doppelte IDs).

## Manuell im In-App-Browser

- Startseite visuell bei ca. 674 Pixeln Fensterbreite geprüft: Typografie, Illustration, zweispaltiger Einstieg und reduzierte Navigation.
- Szeneneinstieg öffnet den vollständigen Katalog; „Nacht“ in das Atelier übernommen.
- Leitfrage eingegeben und in der Werkstatt unverändert angezeigt.
- Storyboard-Abschnitt angelegt, Titel und Inhalt eingetragen und in der Vorschau angezeigt.
- Seite neu geladen: Leitfrage, Szenenauswahl, Abschnittstitel und Inhalt wiederhergestellt.
- Anschliessend die Test-Leitfrage, Test-Szene und den Test-Abschnitt über die Oberfläche entfernt.
- Themenzugang geöffnet; Thema „Faust und die Grenzen der Wissenschaft“ gewählt und als aktive Auswahl angezeigt.
- Labor: Vers 358 gewählt und passende Annotation angezeigt.
- Labor: Margarete gewählt und zugehörige Beziehungen angezeigt.
- Labor: Entscheidung „Unbehagen ernst nehmen“ gewählt und hypothetische Folge angezeigt.
- Labor: Vergleichsregler auf 80 gestellt; Gewichte A 20 % / B 80 % angezeigt.
- Labor: Kerker in der Zeitleiste gewählt; Zusammenfassung und Kapitel-29-Link angezeigt.
- Labor: Quizantwort B gewählt; positive und begründete Rückmeldung angezeigt.
- Mobile Navigation über Menüschaltfläche geöffnet und zur Navigation genutzt.

## Grenzen

Keine Prüfung auf echten Smartphones oder mit verschiedenen Screenreadern. Responsive CSS-Umbrüche sind für 1100, 850 und 600 Pixel implementiert; manuelle visuelle Prüfung erfolgte im verfügbaren Browserfenster. GitHub-Actions-Deployment ist vorbereitet, wurde jedoch nicht gegen ein neues Repository ausgeführt. Der HTML-Export und JSON-Import sind auf Modellebene getestet; ein vollständiger Dateidialog-Rundlauf wurde nicht manuell geprüft.

Quellenstand und Grenzen der generierten Webspecial-Vorschau sind in README.md dokumentiert. Inhaltsangaben und didaktische Deutungsangebote bleiben für einen schulischen Einsatz redaktionell prüfbar.


## Erweiterungsprüfung: Denkwege und Lovable

- Acht automatisierte Tests: zusätzlich Briefing mit philosophischem Thema, eigenen Notizen, ausgewählten Szenen, Storyboard und wechselndem Belegprüfstatus; leere Projekte erzeugen offene Angaben; alle 30 Denkwege haben eindeutige Titel und gültige Szenenverweise.
- Im Browser den Denkweg „Schuld im Konjunktiv: das moralische Pech“ geöffnet; philosophisches Werkzeug, Gegenprobe, Formidee und vier Originaltextlinks angezeigt.
- Thema, Leitfrage und Szenen getrennt übernommen; Werkstatt zeigt unverändert die Leitfrage und vier ausgewählte Szenen.
- „Mit Lovable bauen“ geöffnet: acht Schritte, Materialstand, Quellenhinweise und Briefing aus dem aktuellen Projekt angezeigt.
- „Briefing kopieren“ getestet: Erfolgsmeldung im Browser angezeigt.
- Kein Lovable-Projekt angelegt und keine Daten an Lovable übertragen. Die Anleitung und Briefingerstellung sind die implementierte Funktion.
- GitHub Pages wurde nach der Erstlieferung erfolgreich aktiviert; der Workflow baut und veröffentlicht Änderungen auf main automatisch.
