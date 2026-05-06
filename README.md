# Cooperative Escape Site

Static promotional site for Cooperative Escape.

## Local preview

Open `index.html` in a browser, or serve the directory with any static server.

## GitHub Pages

Recommended setup:

1. Push this repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Set **Source** to `GitHub Actions`.
5. Push to `main`, or run the **Deploy GitHub Pages** workflow manually.

## Support Link

Create a repository variable named `SUPPORT_URL`.

Example:

```text
https://ko-fi.com/yourname
```

The deploy workflow writes that value into `config.json` before publishing the site.
For local preview, `script.js` falls back to `https://ko-fi.com/` when `config.json` is not present.
