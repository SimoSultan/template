import type { MATERIAL_SYMBOLS } from './constants'

export type MaterialIconStyle = 'outlined' | 'rounded' | 'sharp'
export type MaterialIconGrade = -25 | 0 | 200
export type MaterialIconWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700'
export type MaterialIconOpticalSize = 20 | 24 | 40 | 48
export type MaterialIconFontSize = number
export type DefaultIconProps = {
  style: MaterialIconStyle
  grade: MaterialIconGrade
  fontWeight: MaterialIconWeight
  opticalSize: MaterialIconOpticalSize
  fontSize: MaterialIconFontSize
}

export type MaterialSymbols = (typeof MATERIAL_SYMBOLS)[number]
