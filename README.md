# Browserslist config of Gravity UI packages family

## Install

```bash
npm i --save-dev @gravity-ui/browserslist-config
```

Add config to `package.json` in `browserslist` section:

```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config"
  ]
}
```

You can specify additional browsers based on your audience, like:
```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config",
    "Chrome >= 100",
    "Firefox >= 100"
  ]
}
```

## Usage

Package provides production version of browserslist.
