# gronQA Workflow - Instrukcja Pracy

Ten projekt wykorzystuje profesjonalny obieg zmian (CI/CD) oparty na gałęziach.

## 1. Środowisko Staging (Podgląd)
*   **Gałąź:** `dev`
*   Wszystkie nowe zmiany i poprawki są wprowadzane na tej gałęzi.
*   **Vercel Preview:** Po każdym `git push` na tę gałąź, Vercel wygeneruje unikalny link podglądu (widoczny w panelu Vercel w zakładce *Deployments*).
*   Możesz sprawdzić zmiany pod tym linkiem bez wpływu na główną stronę `gronqa.pl`.

## 2. Środowisko Produkcyjne (Live)
*   **Gałąź:** `master` (lub `main`)
*   To jest wersja strony, którą widzą klienci pod adresem **https://gronqa.pl**.
*   Zmiany trafiają tutaj tylko po Twojej wyraźnej prośbie o "Merge do mastera".

## 3. Praca lokalna
Aby sprawdzić zmiany na własnym komputerze:
1. Uruchom komendę: `npm run dev`
2. Strona będzie dostępna pod adresem: `http://localhost:5173`

---
*Instrukcja przygotowana przez Twojego asystenta AI.*
