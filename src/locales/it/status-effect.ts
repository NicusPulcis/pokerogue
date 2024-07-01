import { StatusEffectTranslationEntries } from "#app/interfaces/locales.js";

export const statusEffect: StatusEffectTranslationEntries = {
  none: {
    name: "Nessuno",
    description: "",
    obtain: "",
    obtainSource: "",
    activation: "",
    overlap: "",
    heal: ""
  },
  poison: {
    name: "Veleno",
    description: "avvelenato",
    obtain: "{{pokemonNameWithAffix}}\nè stato avvelenato!",
    obtainSource: "{{pokemonNameWithAffix}}\nè stato avvelenato da {{sourceText}}!",
    activation: "{{pokemonNameWithAffix}} subisce danni per\nvia del veleno!",
    overlap: "{{pokemonNameWithAffix}} è\ngià avvelenato!",
    heal: "{{pokemonNameWithAffix}} non\nè più avvelenato!"
  },
  toxic: {
    name: "Iperavvelenamento",
    description: "iperavvelenato",
    obtain: "{{pokemonNameWithAffix}}\nè stato iperavvelenato!",
    obtainSource: "{{pokemonNameWithAffix}}\nè stato iperavvelenato da {{sourceText}}!",
    activation: "{{pokemonNameWithAffix}} subisce danni per\nvia dell'iperavvelenamento!",
    overlap: "{{pokemonNameWithAffix}} è\ngià iperavvelenato!",
    heal: "{{pokemonNameWithAffix}} non\nè più iperavvelenato!"
  },
  paralysis: {
    name: "Paralisi",
    description: "paralizzato",
    obtain: "{{pokemonNameWithAffix}} è stato paralizzato,\npotrebbe non riuscire a muoversi!",
    obtainSource: "{{pokemonNameWithAffix}} è stato paralizzato da {{sourceText}},\npotrebbe non riuscire a muoversi!",
    activation: "{{pokemonNameWithAffix}} è paralizzato!\nNon riesce a muoversi!",
    overlap: "{{pokemonNameWithAffix}} è\ngià paralizzato!",
    heal: "{{pokemonNameWithAffix}} non\nè più paralizzato!"
  },
  sleep: {
    name: "Sonno",
    description: "addormentato",
    obtain: "{{pokemonNameWithAffix}}\nsi è addormentato!",
    obtainSource: "{{pokemonNameWithAffix}}\nsi è addormentato per via di {{sourceText}}!",
    activation: "{{pokemonNameWithAffix}} dorme.",
    overlap: "{{pokemonNameWithAffix}} sta\ngià dormendo!",
    heal: "{{pokemonNameWithAffix}} si è svegliato!"
  },
  freeze: {
    name: "Congelamento",
    description: "congelato",
    obtain: "{{pokemonNameWithAffix}}\nè stato congelato!",
    obtainSource: "{{pokemonNameWithAffix}}\nè stato congelato da {{sourceText}}!",
    activation: "{{pokemonNameWithAffix}} è\ncongelato!",
    overlap: "{{pokemonNameWithAffix}} è\ngià congelato!",
    heal: "{{pokemonNameWithAffix}} non\nè più congelato!"
  },
  burn: {
    name: "Scottatura",
    description: "scottato",
    obtain: "{{pokemonNameWithAffix}}\nè stato scottato!",
    obtainSource: "{{pokemonNameWithAffix}}\nè stato scottato da {{sourceText}}!",
    activation: "{{pokemonNameWithAffix}} subisce danni\nper via della scottatura!",
    overlap: "{{pokemonNameWithAffix}} è\ngià scottato!",
    heal: "{{pokemonNameWithAffix}} non\nè più scottato!"
  },
} as const;
