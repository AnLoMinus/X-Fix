# 📦 נוהל הוצאת גרסה (Releasing)

מסמך זה מתאר את התהליך עבור מנהלי הפרויקט להוצאת גרסה חדשה של X-Fix.

## שלבים

1.  **בדיקות (Testing):**
    *   ודא שכל הבדיקות עוברות ושהפרויקט נבנה בהצלחה (`npm run build`).
    *   בדוק את הפונקציונליות העיקרית ידנית.

2.  **עדכון גרסה:**
    *   עדכן את מספר הגרסה בקובץ `package.json`.
    *   עדכן את מספר הגרסה בקובץ `VERSION`.
    *   עדכן את `CHANGELOG.md` עם תאריך השחרור.

3.  **יצירת Commit:**
    ```bash
    git add .
    git commit -m "chore: release v1.0.1"
    ```

4.  **תיוג (Tagging):**
    ```bash
    git tag v1.0.1
    git push origin main --tags
    ```

5.  **GitHub Release:**
    *   ה-GitHub Action יזהה את ה-Push ויבצע פריסה אוטומטית ל-GitHub Pages.
    *   צור Release חדש בממשק של GitHub עם הערות מה-Changelog.
