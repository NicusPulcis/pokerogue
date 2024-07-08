import { TranslationEntries } from "#app/interfaces/locales";

export const pokemonSummary: TranslationEntries = {
  "pokemonInfo": "宝可梦信息",
  "status": "状态",
  "powerAccuracyCategory": "威力\n命中率\n类别",
  "type": "属性",
  "unknownTrainer": "未知",
  "ot": "训练师",
  "nature": "性格",
  "metAtLv": "相遇于Lv.",
  "expPoints": "经验值",
  "nextLv": "下一级",
  "cancel": "取消",

  "memoString": "{{natureFragment}} 性格,\n{{metFragment}}",
  "metFragment": {
    "normal": "相遇于Lv.{{level}},\n{{biome}}.",
    "apparently": "命中注定般地 相遇于Lv.{{level}},\n{{biome}}.",
  },
} as const;
