import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{abilityName}} di {{pokemonName}}\nl'ha protetto dal contraccolpo!",
  "badDreams": "{{pokemonName}} è tormentato dagli incubi!",
  "costar": "{{pokemonName}} ha copiato le modifiche alle statistiche di {{allyName}}!",
  "iceFaceAvoidedDamage": "{{pokemonName}} ha evitato\ni danni grazie a {{abilityName}}!",
  "trace": "{{pokemonName}} ha copiato {{abilityName}} di\n{{targetName}}!",
  "windPowerCharged": "Venire colpito da {{moveName}} ha caricato {{pokemonName}}!",
  "quickDraw":"{{pokemonName}} può agire per primo, grazie a Colpolesto!",
  "disguiseAvoidedDamage" : "{{pokemonName}} è stato smascherato!",
} as const;
