# gronQA Workflow - Instrukcja Pracy

Ten projekt wykorzystuje automatyczny obieg zmian (CI/CD) oparty na GitHub Actions i GitHub Pages.

## 1. Środowisko Produkcyjne (Live)
*   **Gałąź:** `master`
*   **Adres:** **https://gronka.pl**
*   Po każdym wypchnięciu zmian (`git push`) lub połączeniu zmian (Merge) do gałęzi `master`, GitHub Actions automatycznie buduje projekt i publikuje go.

## 2. Rozwiązanie problemu "Pustej Strony"
Jeśli strona wyświetla się jako pusta, upewnij się, że w ustawieniach repozytorium na GitHub:
1. Wejdź w **Settings** -> **Pages**.
2. W sekcji **Build and deployment** -> **Source** wybierz **GitHub Actions** (zamiast "Deploy from a branch").
3. Poczekaj na zakończenie ostatniego workflow w zakładce **Actions**.

## 3. Praca lokalna
Aby sprawdzić zmiany na własnym komputerze:
1. Uruchom komendę: `npm run dev`
2. Strona będzie dostępna pod adresem: `http://localhost:5173`

---
*Instrukcja zaktualizowana przez Gemini CLI.*
*Ostatnia weryfikacja: 19.05.2026*
