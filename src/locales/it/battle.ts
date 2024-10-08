import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} è apparso.",
  "trainerAppeared": "{{trainerName}}\nvuole combattere!",
  "trainerAppearedDouble": "{{trainerName}}\nvogliono combattere!",
  "trainerSendOut": "{{trainerName}} manda in campo\n{{pokemonName}}!",
  "singleWildAppeared": "È apparso {{pokemonName}} selvatico!",
  "multiWildAppeared": "Sono apparsi {{pokemonName1}}\ne {{pokemonName2}} salvatici!",
  "playerComeBack": "Rientra, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} ha ritirato {{pokemonName}}!",
  "playerGo": "Vai! {{pokemonName}}!",
  "trainerGo": "{{trainerName}} manda in campo {{pokemonName}}!",
  "switchQuestion": "Vuoi cambiare\n{{pokemonName}}?",
  "trainerDefeated": "Hai sconfitto\n{{trainerName}}!",
  "moneyWon": "Hai vinto {{moneyAmount}}₽",
  "moneyPickedUp": "Hai raccolto ₽{{moneyAmount}}!",
  "pokemonCaught": "Preso! {{pokemonName}} è stato catturato!",
  "addedAsAStarter": "{{pokemonName}} è stato\naggiunto agli starter!",
  "partyFull": "La tua squadra è al completo.\nVuoi liberare un Pokémon per far spazio a {{pokemonName}}?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "Vai! {{pokemonName}}!",
  "hitResultCriticalHit": "Brutto colpo!",
  "hitResultSuperEffective": "È superefficace!",
  "hitResultNotVeryEffective": "Non è molto efficace…",
  "hitResultNoEffect": "Non ha effetto su {{pokemonName}}!",
  "hitResultOneHitKO": "KO con un colpo!",
  "attackFailed": "Ma ha fallito!",
  "attackMissed": "{{pokemonNameWithAffix}}\nevita l’attacco!",
  "attackHitsCount": "Colpito {{count}} volta/e!",
  "rewardGain": "Ricevi\n{{modifierName}}!",
  "expGain": "{{pokemonName}} ha guadagnato\n{{exp}} Punti Esperienza!",
  "levelUp": "{{pokemonName}} è salito al\nlivello {{level}}!",
  "learnMove": "{{pokemonName}} impara\n{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} vorrebbe imparare\n{{moveName}}.",
  "learnMoveLimitReached": "Tuttavia, {{pokemonName}}\nconosce già quattro mosse.",
  "learnMoveReplaceQuestion": "Vuoi che ne dimentichi una e al suo\nposto apprenda {{moveName}}?",
  "learnMoveStopTeaching": "Vuoi smettere di fargli imparare\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} non ha imparato\n{{moveName}}.",
  "learnMoveForgetQuestion": "Quale mossa deve dimenticare?",
  "learnMoveForgetSuccess": "{{pokemonName}} ha dimenticato la mossa\n{{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, @d{15}e@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}ta-daaaa!",
  "learnMoveAnd": "E…",
  "levelCapUp": "Il livello massimo\nè aumentato a {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} non è ancora implementata e non può essere selezionata.",
  "moveNoPP": "Non ci sono PP rimanenti\nper questa mossa!",
  "moveDisabled": "{{moveName}} è disabilitata!",
  "noPokeballForce": "Una forza misteriosa\nimpedisce l'uso delle Poké Ball.",
  "noPokeballTrainer": "Non puoi catturare\nPokémon di altri allenatori!",
  "noPokeballMulti": "Puoi lanciare una Poké Ball\nsolo quando rimane un singolo Pokémon!",
  "noPokeballStrong": "Il Pokémon avversario è troppo forte per essere catturato!\nDevi prima indebolirlo.",
  "noEscapeForce": "Una forza misteriosa\nimpedisce la fuga.",
  "noEscapeTrainer": "Non puoi sottrarti\nalla lotta con un'allenatore!",
  "noEscapePokemon": "{{moveName}} di {{pokemonName}}\npreviene la {{escapeVerb}}!",
  "runAwaySuccess": "Scampato pericolo!",
  "runAwayCannotEscape": "Non puoi fuggire!",
  "escapeVerbSwitch": "cambiando",
  "escapeVerbFlee": "fuggendo",
  "notDisabled": "{{moveName}} di {{pokemonName}} non è più\ndisabilitata!",
  "turnEndHpRestore": "{{pokemonName}} ha recuperato dei PS.",
  "hpIsFull": "{{pokemonName}} ha già\ntutti i PS!",
  "skipItemQuestion": "Sei sicuro di non voler prendere nessun oggetto?",
  "itemStackFull": "The stack for {{fullItemName}} is full.\nYou will receive {{itemName}} instead.",
  "eggHatching": "Oh?",
  "ivScannerUseQuestion": "Vuoi usare lo scanner di IV su {{pokemonName}}?",
  "stealEatBerry": "{{pokemonName}} ha rubato e mangiato\nla {{berryName}} di {{targetName}}!",
  "ppHealBerry": "{{pokemonNameWithAffix}} recupera i PP della mossa {{moveName}}\ncon la sua {{berryName}}!",
  "hpHealBerry": "{{pokemonNameWithAffix}} ristabilisce la sua salute\ncon la sua {{berryName}}!",
  "wildPokemonWithAffix": "{{pokemonName}} selvatico",
  "foePokemonWithAffix": "{{pokemonName}} avversario",
  "useMove": "{{pokemonNameWithAffix}} usa {{moveName}}!",
  "drainMessage": "Viene prelevata energia\n da{{pokemonName}}!",
  "regainHealth": "{{pokemonName}} ha rigenerato\npunti salute!",
  "fainted": "{{pokemonNameWithAffix}} non è più in\ngrado di combattere!",
  "statsAnd": "e",
  "stats": "statistiche",
  "statRose_one": "{{pokemonNameWithAffix}}'s {{stats}} è aumentato/a!",
  "statRose_other": "{{pokemonNameWithAffix}}'s {{stats}} rose!",
  "statSharplyRose_one": "{{pokemonNameWithAffix}}'s {{stats}} è aumentato/a molto!",
  "statSharplyRose_other": "{{pokemonNameWithAffix}}'s {{stats}} sharply rose!",
  "statRoseDrastically_one": "{{pokemonNameWithAffix}}'s {{stats}} è aumentato/a drasticamente!",
  "statRoseDrastically_other": "{{pokemonNameWithAffix}}'s {{stats}} rose drastically!",
  "statWontGoAnyHigher_one": "{{pokemonNameWithAffix}}'s {{stats}} non può aumentare più di così!",
  "statWontGoAnyHigher_other": "{{pokemonNameWithAffix}}'s {{stats}} won't go any higher!",
  "statFell_one": "{{pokemonNameWithAffix}}'s {{stats}} è diminuito/a!",
  "statFell_other": "{{pokemonNameWithAffix}}'s {{stats}} fell!",
  "statHarshlyFell_one": "{{pokemonNameWithAffix}}'s {{stats}} è diminuito/a molto!",
  "statHarshlyFell_other": "{{pokemonNameWithAffix}}'s {{stats}} harshly fell!",
  "statSeverelyFell_one": "{{pokemonNameWithAffix}}'s {{stats}} è diminuito/a drasticamente!",
  "statSeverelyFell_other": "{{pokemonNameWithAffix}}'s {{stats}} severely fell!",
  "statWontGoAnyLower_one": "{{pokemonNameWithAffix}}'s {{stats}} non può diminuire più di così!",
  "statWontGoAnyLower_other": "{{pokemonNameWithAffix}}'s {{stats}} won't go any lower!",
  "transformedIntoType": "{{pokemonName}} diventa\ndi tipo {{type}} type!",
  "retryBattle": "Vuoi riprovare dall'inizio della lotta?",
  "unlockedSomething": "{{unlockedThing}}\nè stato/a sbloccato/a.",
  "congratulations": "Congratulazioni!",
  "beatModeFirstTime": "{{speciesName}} ha completato la modalità {{gameMode}} per la prima volta!\nHai ricevuto {{newModifier}}!",
  "ppReduced": "I PP della mossa {{moveName}} di\n{{targetName}} sono stati ridotti di {{reduction}}!",
} as const;
