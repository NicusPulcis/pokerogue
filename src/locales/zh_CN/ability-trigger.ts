import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{pokemonName}}的{{abilityName}}\n抵消了反作用力！",
  "badDreams": "{{pokemonName}}被折磨着！",
  "costar": "{{pokemonName}}复制了{{allyName}}的能力变化！",
  "iceFaceAvoidedDamage": "{{pokemonName}}因为{{abilityName}}\n避免了伤害！",
  "perishBody": "{{pokemonName}}'s {{abilityName}}\nwill faint both pokemon in 3 turns!",
  "poisonHeal": "{{pokemonName}}'s {{abilityName}}\nrestored its HP a little!",
  "trace": "{{pokemonName}}复制了{{targetName}}的\n{{abilityName}}！",
  "windPowerCharged": "受{{moveName}}的影响，{{pokemonName}}提升了能力！",
  "quickDraw":"因为速击效果发动，\n{{pokemonName}}比平常出招更快了！",
  "blockItemTheft": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents item theft!",
  "typeImmunityHeal": "{{pokemonNameWithAffix}}'s {{abilityName}}\nrestored its HP a little!",
  "nonSuperEffectiveImmunity": "{{pokemonNameWithAffix}} avoided damage\nwith {{abilityName}}!",
  "postDefendDisguise": "{{pokemonNameWithAffix}}'s disguise was busted!",
  "moveImmunity": "It doesn't affect {{pokemonNameWithAffix}}!",
  "reverseDrain": "{{pokemonNameWithAffix}} sucked up the liquid ooze!",
  "postDefendTypeChange": "{{pokemonNameWithAffix}}'s {{abilityName}}\nmade it the {{typeName}} type!",
  "postDefendContactDamage": "{{pokemonNameWithAffix}}'s {{abilityName}}\nhurt its attacker!",
  "postDefendAbilitySwap": "{{pokemonNameWithAffix}} swapped\nabilities with its target!",
  "postDefendAbilityGive": "{{pokemonNameWithAffix}} gave its target\n{{abilityName}}!",
  "postDefendMoveDisable": "{{pokemonNameWithAffix}}'s {{moveName}}\nwas disabled!",
  "pokemonTypeChange": "{{pokemonNameWithAffix}} transformed into the {{moveType}} type!",
  "postAttackStealHeldItem": "{{pokemonNameWithAffix}} stole\n{{defenderName}}'s {{stolenItemType}}!",
  "postDefendStealHeldItem": "{{pokemonNameWithAffix}} stole\n{{attackerName}}'s {{stolenItemType}}!",
  "copyFaintedAllyAbility": "{{pokemonNameWithAffix}}'s {{abilityName}} was taken over!",
  "intimidateImmunity": "{{pokemonNameWithAffix}}'s {{abilityName}} prevented it from being Intimidated!",
  "postSummonAllyHeal": "{{pokemonNameWithAffix}} drank down all the\nmatcha that {{pokemonName}} made!",
  "postSummonClearAllyStats": "{{pokemonNameWithAffix}}'s stat changes\nwere removed!",
  "postSummonTransform": "{{pokemonNameWithAffix}} transformed\ninto {{targetName}}!",
  "protectStat": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents lowering its {{statName}}!",
  "statusEffectImmunityWithName": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents {{statusEffectName}}!",
  "statusEffectImmunity": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents status problems!",
  "battlerTagImmunity": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents {{battlerTagName}}!",
  "forewarn": "{{pokemonNameWithAffix}} was forewarned about {{moveName}}!",
  "frisk": "{{pokemonNameWithAffix}} frisked {{opponentName}}'s {{opponentAbilityName}}!",
  "postWeatherLapseHeal": "{{pokemonNameWithAffix}}'s {{abilityName}}\nrestored its HP a little!",
  "postWeatherLapseDamage": "{{pokemonNameWithAffix}} is hurt\nby its {{abilityName}}!",
  "postTurnLootCreateEatenBerry": "{{pokemonNameWithAffix}} harvested one {{berryName}}!",
  "postTurnHeal": "{{pokemonNameWithAffix}}'s {{abilityName}}\nrestored its HP a little!",
  "fetchBall": "{{pokemonNameWithAffix}} found a\n{{pokeballName}}!",
  "healFromBerryUse": "{{pokemonNameWithAffix}}'s {{abilityName}}\nrestored its HP!",
  "arenaTrap": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents switching!",
  "postBattleLoot": "{{pokemonNameWithAffix}} picked up\n{{itemName}}!",
  "postFaintContactDamage": "{{pokemonNameWithAffix}}'s {{abilityName}}\nhurt its attacker!",
  "postFaintHpDamage": "{{pokemonNameWithAffix}}'s {{abilityName}}\nhurt its attacker!",
  "postSummonPressure": "{{pokemonNameWithAffix}} is exerting its Pressure!",
  "postSummonMoldBreaker": "{{pokemonNameWithAffix}} breaks the mold!",
  "postSummonAnticipation": "{{pokemonNameWithAffix}} shuddered!",
  "postSummonTurboblaze": "{{pokemonNameWithAffix}} is radiating a blazing aura!",
  "postSummonTeravolt": "{{pokemonNameWithAffix}} is radiating a bursting aura!",
  "postSummonDarkAura": "{{pokemonNameWithAffix}} is radiating a Dark Aura!",
  "postSummonFairyAura": "{{pokemonNameWithAffix}} is radiating a Fairy Aura!",
  "postSummonNeutralizingGas": "{{pokemonNameWithAffix}}'s Neutralizing Gas filled the area!",
  "postSummonAsOneGlastrier": "{{pokemonNameWithAffix}} has two Abilities!",
  "postSummonAsOneSpectrier": "{{pokemonNameWithAffix}} has two Abilities!",
  "postSummonVesselOfRuin": "{{pokemonNameWithAffix}}'s Vessel of Ruin lowered the {{statName}}\nof all surrounding Pokémon!",
  "postSummonSwordOfRuin": "{{pokemonNameWithAffix}}'s Sword of Ruin lowered the {{statName}}\nof all surrounding Pokémon!",
  "postSummonTabletsOfRuin": "{{pokemonNameWithAffix}}'s Tablets of Ruin lowered the {{statName}}\nof all surrounding Pokémon!",
  "postSummonBeadsOfRuin": "{{pokemonNameWithAffix}}'s Beads of Ruin lowered the {{statName}}\nof all surrounding Pokémon!",
} as const;
