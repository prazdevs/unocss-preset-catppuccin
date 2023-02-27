<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/unocss/unocss">UnoCSS</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/template/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/template?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/template/issues"><img src="https://img.shields.io/github/issues/catppuccin/template?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/template/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/template?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/previews/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/previews/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/previews/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/previews/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/previews/mocha.webp"/>
</details>

## Usage

1. Install the package:
```sh
pnpm i -D unocss-preset-catppuccin
```
2. Add the preset to the UnoCSS config:
```ts
// unocss.config.ts
import { defineConfig, presetUno } from 'unocss'
import presetCatppuccin from 'unocss-preset-catppuccin'

export default {
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetCatppuccin(),
      ],
    }),
  ],
}
```
3. (_optional_) Configuration parameters can be passed to the preset:
    - `defaultFlavour`: will register colors from passed flavour under `-ctp-color` directly.
    - `prefix`: change the default `ctp` prefix to whatever suits you.

4. Use the new colors! They are registered under `-ctp-<flavour>-<color>`. 
```html
<div class="bg-ctp-mocha-base">
  <span class="text-ctp-mocha-red">
    I'm a mocha red text on a base background
  </span>
</div>
```

## 💝 Thanks to

- [PraZ](https://github.com/prazdevs)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.png?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
