# PWA Setup Instructions

Your app has been configured as a Progressive Web App (PWA)! 🎉

## How to Install on Your Phone

### For iPhone/iPad (Safari):
1. Open Safari and navigate to your app's URL
2. Tap the Share button (square with arrow pointing up)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" in the top-right corner
5. The app icon will appear on your home screen

### For Android (Chrome):
1. Open Chrome and navigate to your app's URL
2. Tap the three-dot menu in the top-right corner
3. Tap "Add to Home Screen" or "Install App"
4. Tap "Add" or "Install"
5. The app icon will appear on your home screen

## Customizing Your PWA

### App Icons
Replace the placeholder icons in the `/public` folder:
- `icon-192x192.svg` - Small icon (192x192px)
- `icon-512x512.svg` - Large icon (512x512px)

**Recommended:** Convert your existing `logo.webp` to PNG format and create two versions:
```bash
# You can use an online tool like https://www.iloveimg.com/convert-to-png
# or use ImageMagick:
magick convert public/logo.webp -resize 192x192 public/icon-192x192.png
magick convert public/logo.webp -resize 512x512 public/icon-512x512.png
```

Then update `public/manifest.json` to use PNG files instead of SVG.

### App Name and Colors
Edit `public/manifest.json` to customize:
- `name`: Full app name
- `short_name`: Name shown under icon
- `theme_color`: Browser toolbar color
- `background_color`: Splash screen background

### Metadata
Edit `app/layout.tsx` to update:
- `title`: Browser tab title
- `description`: App description for search engines

## Development

The PWA features are **disabled in development mode** to avoid caching issues. To test PWA functionality:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Open the app in your browser and check for the "Install" prompt

## Features

- ✅ Installable on home screen
- ✅ Works offline (after first visit)
- ✅ Fast loading with service worker caching
- ✅ Full-screen experience (no browser UI)
- ✅ Native app-like feel

## Troubleshooting

- **No install prompt?** Make sure you're using HTTPS (or localhost for testing)
- **Changes not showing?** Clear your browser cache and reload
- **Icons not appearing?** Make sure the icon files exist in `/public` folder
