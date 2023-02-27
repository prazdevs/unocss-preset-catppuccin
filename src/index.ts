import { type Preset, type PresetOptions } from 'unocss'
import { variants } from '@catppuccin/palette'

export interface PresetCatppuccinOptions extends PresetOptions {
  /**
   * Adds the colours from this flavour accessible from `-ctp-color` directly.
   */
  defaultFlavour?: keyof typeof variants

  /**
   * Override default color prefix. Use `false` to remove it completely.
   */
  prefix?: string | false
}

/**
 * UnoCSS preset to extend theme with Catppuccin colours.
 * @param options preset options
 */
export const presetCatppuccin = (options: PresetCatppuccinOptions = {}): Preset => {
  const {
    defaultFlavour,
    prefix = 'ctp',
  } = options

  const palette = Object.entries(variants).reduce((ctp, [variant, labels]) => ({
    ...ctp,
    [variant]: Object.entries(labels).reduce((a, [label, { hex }]) => ({
      ...a,
      [label]: hex,
    }), {}),
  }), {})

  const flavoured = defaultFlavour
    ? Object.entries(variants[defaultFlavour]).reduce((a, [label, { hex }]) => ({
      ...a,
      [label]: hex,
    }), {})
    : {}

  return {
    name: 'unocss-preset-catppuccin',
    theme: {
      colors: prefix 
        ? { [prefix]: { ...flavoured, ...palette } }
        : { ...flavoured, ...palette }
    },
  }
}

export default presetCatppuccin
