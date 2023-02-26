import { type Preset, type PresetOptions } from 'unocss'
import { variants } from '@catppuccin/palette'

export interface PresetCatppuccinOptions extends PresetOptions {
  defaultFlavour?: keyof typeof variants
  prefix?: string
}

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
      colors: {
        [prefix]: {
          ...flavoured,
          ...palette,
        },
      },
    },
  }
}

export default presetCatppuccin
