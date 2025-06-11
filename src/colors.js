// material_colors.js

export const googleBlueHexColors = [
  "#E8F0FE", "#D2E3FC", "#AECBFA", "#8AB4F8", "#669DF6",
  "#4285F4", "#1A73E8", "#1967D2", "#185ABC", "#174EA6"
];

export const googleRedHexColors = [
  "#FCE8E6", "#FAD2CF", "#F6AEA9", "#F28B82", "#EE675C",
  "#EA4335", "#D93025", "#C5221F", "#B31412", "#A50E0E"
];

export const googleGreenHexColors = [
  "#E6F4EA", "#CEead6", "#A8DAB5", "#81C995", "#5BB974",
  "#34A853", "#1E8E3E", "#188038", "#137333", "#0D652D"
];

export const googleYellowHexColors = [
  "#FEF7E0", "#FEEFC3", "#FDE293", "#FDD663", "#FCC934",
  "#FBBC04", "#F9AB00", "#F29900", "#EA8600", "#E37400"
];

export const googleOrangeHexColors = [
  "#FEEFE3", "#FEDFC8", "#FDC69C", "#FCAD70", "#FA903E",
  "#FA7B17", "#E8710A", "#D56E0C", "#C26401", "#B06000"
];

export const googlePinkHexColors = [
  "#FDE7F3", "#FDCFE8", "#FBA9D6", "#FF8BCB", "#FF63B8",
  "#F439A0", "#E52592", "#D01884", "#B80672", "#9C166B"
];

export const googlePurpleHexColors = [
  "#F3E8FD", "#E9D2FD", "#D7AEFB", "#C58AF9", "#AF5CF7",
  "#A142F4", "#9334E6", "#8430CE", "#7627BB", "#681DA8"
];

export const googleCyanHexColors = [
  "#E4F7FB", "#CBF0F8", "#A1E4F2", "#78D9EC", "#4ECDE6",
  "#24C1E0", "#12B5CB", "#129EAF", "#098591", "#007B83"
];

export const googleMagentaHexColors = [
  "#F6E9F8", "#FACBFF", "#F4B5FB", "#F882FF", "#EE5FFA",
  "#DA36E8", "#C61AD9", "#AA00B8", "#8A0E9E", "#68098A"
];

export const googleElectricHexColors = [
  "#E7FDFD", "#BAFFFF", "#80F9F9", "#5EF1F2", "#30E2EA",
  "#2BDDE5", "#03B6BE", "#009099", "#007282", "#005B70"
];

export function getStandardDeviation(arr) {
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  const variance = arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length;
  return Math.sqrt(variance);
}