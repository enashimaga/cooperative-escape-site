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

The workflow also passes `enablement: true` to `actions/configure-pages`, which lets the action initialize Pages on the first deployment when the repository allows it.

## Support Link

The site uses the official Ko-fi floating widget for `enashimaga`.

## Download Link

The download CTA points to the latest public release asset:

```text
https://github.com/enashimaga/cooperative-escape-site/releases/latest/download/Cooperative-Escape-Windows.exe
```

Keep the asset filename stable across releases:

```text
Cooperative-Escape-Windows.exe
```

Release tags can still change, such as `v0.2.0`, `v0.2.1`, and `v0.3.0`.

## Publishing a Download

1. Build the Windows executable in the private game repository.
2. Rename or copy the executable to `Cooperative-Escape-Windows.exe`.
3. Open this public site repository on GitHub.
4. Go to **Releases**.
5. Click **Draft a new release**.
6. Set a tag such as `v0.2.0`.
7. Attach `Cooperative-Escape-Windows.exe`.
8. Publish the release.

The site link does not need to change for future releases as long as the attached asset keeps the same filename.
