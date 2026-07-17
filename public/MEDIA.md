# Media Workflow

Drop real files into the paths below — no code changes needed. Everything
currently falls back to a colored gradient placeholder (images) or stays
blank (video) until the matching file exists at that exact path.

## How it works

- Images use a `MediaImage` component that tries to load the real file and
  silently falls back to the gradient placeholder on a 404 — so partial
  uploads never break the layout.
- Audio tracks are loaded directly by the `<audio>` element; a missing file
  just means that track won't play (browser console will show a 404).
- The hero video is a plain `<video>` tag; a missing file just shows the
  dark gradient background underneath.

## Video

| Path | Used in | Notes |
|---|---|---|
| `public/video/hero-loop.mp4` | Hero background | Loops silently by default (has a sound toggle). Landscape, ~10–20s loop, keep file size reasonable (<10MB) since it autoplays. |

## Audio

Path: `public/audio/<track-name>.mp3` — one file per track, referenced in
`src/lib/site-data.ts` under `ALBUMS[].tracks[].src`.

| Album | Tracks |
|---|---|
| Midnight Frequencies | `afterglow.mp3`, `static-bloom.mp3`, `halflight.mp3`, `echo-chamber.mp3` |
| Glass Horizon | `tidewalk.mp3`, `neon-rain.mp3`, `glass-horizon.mp3` |
| Corner Booth EP | `corner-booth.mp3`, `late-checkout.mp3`, `ren.mp3` |

## Images

| Folder | Used in | Recommended aspect ratio |
|---|---|---|
| `public/albums/` | Album covers (Music page/section) | 1:1 (square) |
| `public/art/` | Art Gallery grid + lightbox | 4:5 (portrait) |
| `public/shop/` | Shop product photos | 1:1 (square) |

Exact filenames are defined in `src/lib/site-data.ts` — search for
`ALBUMS`, `ARTWORKS`, and `PRODUCTS` to see the full list and add/rename
entries there if you add or remove pieces.

## Adding a brand-new item (not just replacing a file)

1. Add the file to the right `public/` subfolder.
2. Add a matching entry in `src/lib/site-data.ts` (copy an existing object
   in `ALBUMS`, `ARTWORKS`, or `PRODUCTS` and point its `image`/`cover`
   field at the new path).
3. That's it — the grids/players render from that data automatically.
