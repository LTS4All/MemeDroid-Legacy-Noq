# Memedroid Legacy for iOS

Native **Objective-C** client for iPhone 4 / iPad 2 / iOS 9.3.5.

## Why Objective-C

Swift cannot target iOS 6. This app uses UIKit + ARC + `NSURLConnection` so it
still builds the way App Store apps did in 2012–2016.

## Requirements

| Xcode | What you can ship |
| --- | --- |
| 4.6 – 7.3 | iOS 6.0 deployment target, armv7, run on iPhone 4 |
| 8 – 10 | iOS 8/9 devices, including 9.3.5 iPhone 4S / iPad 2 |
| 11+ | Source still compiles; set the lowest deployment target the IDE allows |

## Setup

1. Open `MemedroidLegacy.xcodeproj`
2. Edit `Classes/MDAPIClient.h` and set `kMDAPIBaseURL` to the Memedroid Legacy
   website (the one that serves `/api/feed`).
3. Select an iPhone 4 / iPad 2 / iOS 9.3.5 device, Build & Run.

HTTP is allowed (`NSAllowsArbitraryLoads`) so a LAN origin works while testing.

## Architecture

- `MDAPIClient` — JSON + JPEG over `NSURLConnection` (iOS 5+)
- `MDFeedViewController` — `UITableViewController` + `UIRefreshControl`
- `MDDetailViewController` — scroll view, comments
- `MDGenerateViewController` — caption overlay, no WebP, no Swift

Images are JPEG. iOS 6 and iOS 9 UIKit cannot decode WebP.

## API

```
GET {base}/api/feed?g=trending|latest|top|classics|random
GET {base}/api/meme/{id}
GET {base}/api/templates
```

Unofficial Memedroid login lives on the website (theabbie/memedroid contract).
The phone app reads the public JPEG feed only.
