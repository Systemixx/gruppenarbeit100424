## Projektbeschreibung: Einfache Notizanwendung (JavaScript-Version)

## Ziel:
Entwickeln Sie eine Node.js-Anwendung, die es Benutzern ermöglicht, ihre Notizen über eine Befehlszeilenschnittstelle (CLI) zu verwalten. Dieses Projekt konzentriert sich darauf, grundlegende Programmierfähigkeiten durch einfache Textmanipulation und Dateiverwaltung in JavaScript zu verstärken, ohne komplexe Datenstrukturen oder Objekte zu verwenden.

## Kernfunktionalität:
Notizverwaltungsfunktionen:
Ermöglichen Sie Benutzern das Hinzufügen neuer Notizen, indem sie nur den Textinhalt als einfache Zeichenkette angeben.
Implementieren Sie die Funktionalität, um alle gespeicherten Notizen anzuzeigen, wobei der Inhalt dargestellt wird.
Erlauben Sie Benutzern, Notizen zu löschen, indem sie den exakten Inhalt der zu löschenden Notiz angeben.

## Ansatz zur Datenspeicherung:
Verwenden Sie eine einfache Textdatei, um die Notizen zu speichern. Nutzen Sie Zeilenumbrüche, um einzelne Notizen voneinander zu trennen.
Stellen Sie die Persistenz von Notizen über Neustarts der Anwendung hinweg sicher, indem Sie die Datei lesen und in sie schreiben.

## JavaScript-Spezifika:
Nutzen Sie die eingebauten Fähigkeiten von JavaScript für die Interaktion mit dem Dateisystem und die Zeichenkettenmanipulation, um die Notizverwaltungsfunktionen zu implementieren.
Detaillierte Schritte:

## Einrichten des Projekts:
Initialisieren Sie ein neues Node.js-Projekt. Erstellen Sie eine Hauptskriptdatei (z.B. app.js), in der die Logik der Notizanwendung enthalten sein wird.
Verwenden Sie das fs Modul von Node.js für die erforderlichen Dateiinteraktionen zum Speichern und Verwalten der Notizen.

## Erstellen von Notizoperationen:
Entwickeln Sie Funktionen zum Hinzufügen, Anzeigen und Löschen von Notizen. Behandeln Sie Notizen als einzelne Zeichenketten und nutzen Sie Zeilenumbrüche, um sie in der Speicherdatei voneinander zu trennen.
Beim Hinzufügen einer Notiz fügen Sie den Textinhalt direkt zur Datei hinzu, gefolgt von einem Zeilenumbruch.
Um Notizen anzuzeigen, lesen Sie den Inhalt der Datei und teilen Sie ihn an den Zeilenumbrüchen, um jede Notiz einzeln anzuzeigen.
Um eine Notiz zu löschen, lesen Sie den gesamten Dateiinhalt, entfernen Sie die entsprechende Notiz und speichern Sie die aktualisierte Liste von Notizen zurück in die Datei.

## CLI für Benutzerinteraktionen:
Verwenden Sie das readline Modul oder ein äquivalentes Modul, um eine einfache CLI für Benutzereingaben und Befehlsausführungen über das Terminal zu implementieren. Implementieren Sie Befehle, die Benutzer ausführen können, um Notizen hinzuzufügen, anzuzeigen oder zu löschen.
Implementieren Sie eine Eingabevalidierung, um sicherzustellen, dass Benutzereingaben den erwarteten Anforderungen entsprechen.

## Fehlerbehandlung und Feedback:
Integrieren Sie eine grundlegende Fehlerbehandlung, insbesondere für Dateioperationen, um Probleme geschickt zu bewältigen. Geben Sie den Benutzern ein klares Feedback nach jeder Operation, egal ob erfolgreich oder fehlerhaft.

## Testen der Anwendung:
Testen Sie die Anwendung manuell, um sicherzustellen, dass alle Funktionalitäten – das Hinzufügen, Anzeigen und Löschen von Notizen – wie beabsichtigt funktionieren. Beachten Sie besondere Fälle, wie das Löschen einer Notiz, die nicht existiert, um sicherzustellen, dass die Anwendung diese Fälle angemessen handhabt.