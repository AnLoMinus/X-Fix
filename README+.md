# 🛠️ X-Fix | מנוע הפתרונות

[![רישיון](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![גרסה](https://img.shields.io/badge/Version-1.0.0-green.svg)](VERSION)
[![סטטוס](https://img.shields.io/badge/Status-Active-success.svg)](ROADMAP.md)

**X-Fix** היא פלטפורמה אוניברסלית לפתרון בעיות המשלבת מאגר פתרונות אנושי שנאצר בקפידה יחד עם בינה מלאכותית מתקדמת (Google Gemini) ליצירת פתרונות בזמן אמת. המערכת מספקת מענה מהיר בתחומי הבריאות, הטכנולוגיה, הבית והלוגיסטיקה.

---

## 🚀 תכונות מרכזיות

*   **⚡ חיפוש מהיר:** איתור פתרונות מיידי מתוך מאגר סטטי מהיר במיוחד.
*   **🤖 בינה מלאכותית:** אינטגרציה מלאה עם Google Gemini 3 לייצור פתרונות מותאמים אישית כשאין פתרון במאגר.
*   **📱 עיצוב רספונסיבי:** חווית משתמש מודרנית ונקייה המותאמת לכל מכשיר.
*   **🔒 פרטיות:** עבודה בתצורת Client-Side מלאה ללא שמירת מידע בשרתים צד ג'.
*   **🌐 קוד פתוח:** נבנה כדי לשרת את הקהילה ולקבל תרומות מהקהילה.

---

## 🛠️ התקנה והרצה

### דרישות קדם
*   Node.js גרסה 18 ומעלה.
*   מפתח API של Google Gemini (ניתן להשיג ב-[Google AI Studio](https://aistudio.google.com/)).

### הוראות התקנה

1.  **שכפול המאגר:**
    ```bash
    git clone https://github.com/AnLoMinus/X-Fix.git
    cd X-Fix
    ```

2.  **התקנת תלויות:**
    ```bash
    npm install
    ```

3.  **הגדרת משתני סביבה:**
    צור קובץ `.env` והוסף את המפתח שלך:
    ```env
    VITE_API_KEY=your_api_key_here
    ```

4.  **הרצת שרת פיתוח:**
    ```bash
    npm run dev
    ```

---

## 📚 תיעוד ומדריכים

*   [יומן גרסאות (CHANGELOG)](CHANGELOG.md)
*   [מפת דרכים (ROADMAP)](ROADMAP.md)
*   [מדריך לתורמים (CONTRIBUTING)](CONTRIBUTING.md)
*   [קוד התנהגות (CODE OF CONDUCT)](CODE_OF_CONDUCT.md)
*   [אבטחת מידע (SECURITY)](SECURITY.md)

---

## 🤝 יצירת קשר ותמיכה

נתקלתם בבעיה? יש לכם רעיון לשיפור?
אנא עיינו ב-[מדריך התמיכה](SUPPORT.md) או פתחו [Issue חדש](https://github.com/AnLoMinus/X-Fix/issues).

---

## 📜 רישיון

פרויקט זה מופץ תחת רישיון MIT. לפרטים נוספים עיינו בקובץ [LICENSE](LICENSE).

**נבנה באהבה על ידי AnLoMinus.**
