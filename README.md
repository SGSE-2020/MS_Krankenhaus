# MS_Krankenhaus

### Schnittstellen

- **Bank**: bezahlen von Rechnungen
- **Apotheke**: übermitteln von Rezepten
- **Hausarzt**: überweisung von Patienten
- **Parkplätze**: reservieren von Parkplätzen

### User Stories

#### Grundfunktionen

##### Einloggen

Es ist möglich sich als registrierter Benutzer einzuloggen. Zusätzlich kann ein Einloggen als Gastuser möglich sein.

| Name      | Rolle | In meiner Rolle möchte ich | so dass                               | Akzeptanz        | Priorität |
| --------- | ----- | -------------------------- | ------------------------------------- | ---------------- | --------- |
| Einloggen | User  | mich einloggen             | ich auf meinen Account zugreifen kann | anmelden möglich | muss      |

##### Ausloggen

Es ist zu jeder Zeit möglich sich aus der Anwendung auszuloggen.

| Name      | Rolle | In meiner Rolle möchte ich | so dass                            | Akzeptanz        | Priorität |
| --------- | ----- | -------------------------- | ---------------------------------- | ---------------- | --------- |
| Ausloggen | User  | mich ausloggen             | ich nicht dauerhaft angemeldet bin | abmelden möglich | muss      |

##### Impressum

Das Impressum muss jeder Zeit erreichbar sein. Es enthält den Namen des Betreibers, Adresse und Kontaktmöglichkeiten.

| Name               | Rolle | In meiner Rolle möchte ich        | so dass                                                      | Akzeptanz           | Priorität |
| ------------------ | ----- | --------------------------------- | ------------------------------------------------------------ | ------------------- | --------- |
| Impressum anzeigen | User  | mir das Impressum anzeigen lassen | ich weitere Informationen zum Betreiber des Dienstes erhalte | Impressum einsehbar | muss      |

##### Hilfe

Die Hilfe zur Anwendung muss jederzeit erreichbar sein.

| Name           | Rolle | In meiner Rolle möchte ich    | so dass                                   | Akzeptanz       | Priorität |
| -------------- | ----- | ----------------------------- | ----------------------------------------- | --------------- | --------- |
| Hilfe anzeigen | User  | mir die Hilfe anzeigen lassen | ich Probleme möglichst alleine lösen kann | Hilfe einsehbar | muss      |

#### Termine

| Name               | Rolle    | In meiner Rolle möchte ich                  | so dass                                                      | Akzeptanz           | Priorität |
| ------------------ | -------- | ------------------------------------------- | ------------------------------------------------------------ | :------------------ | --------- |
| Termin anvordern   | User     | mir einen Termin anfordern können           | ein Termin gegeben werden kann                               | Termin anfordern    | muss      |
| Termin verschieben | User     | einen bestehenden Termin verschieben können | einen bestehenden Termin ein neuer Zeitpunkt zugewiesen wird | Termin verschiebbar | soll      |
| Termin absagen     | User     | einen Termin absagen können                 | sodass ein vorhandener Termin wieder entfernt wird           | Termin löschen      | muss      |
| Termin bestätigen  | Personal | Einen Termin bestätigen können              | um Patienten Termine zuweisen zu können                      | Termin zuweisen     | muss      |



#### Veranstalltungen

| Name                     | Rolle    | In meiner Rolle möchte ich          | so dass                                                      | Akzeptanz               | Prioritöt |
| ------------------------ | -------- | ----------------------------------- | ------------------------------------------------------------ | :---------------------- | --------- |
| Veranstalltung erstellen | Personal | eine Veranstallung erstellen können | User sich über bevorstehende Veanstallungen informieren können | Veranstallung erstellen | kann      |

#### Überweisung

| Name                    | Rolle | In meiner Rolle möchte ich                          | so dass                                   | Akzeptanz               | Priorität |
| ----------------------- | ----- | --------------------------------------------------- | ----------------------------------------- | :---------------------- | --------- |
| Überweisung übermitteln | User  | eine Überweisung von meinem Arzt übermitteln können | meine Überweisung verarbeitet werden kann | Überweisung übermitteln | muss      |
| Überweisung laden       | User  | Überweisung zu einen anderen Arzt/Lrankenhaus laden | ich meinen Arzt wecheln kann              | Überweisung laden       | soll      |

#### Essen

| Name            | Rolle               | In meiner Rolle möchte ich | so dass              | Akzeptanz               | Prioritöt |
| --------------- | ------------------- | -------------------------- | -------------------- | :---------------------- | --------- |
| Essen bestellen | stationärer Patient | Essen bestellen können     | mir mein Wunschessen | Essen aus Liste wählbar | kann      |