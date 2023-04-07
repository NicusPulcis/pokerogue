import { default as BattleScene } from '../battle-scene';
import UiHandler from './uiHandler';
import BattleMessageUiHandler from './battle-message-ui-handler';
import CommandUiHandler from './command-ui-handler';
import PartyUiHandler from './party-ui-handler';
import FightUiHandler from './fight-ui-handler';
import MessageUiHandler from './message-ui-handler';
import ConfirmUiHandler from './confirm-ui-handler';
import ModifierSelectUiHandler from './modifier-select-ui-handler';
import BallUiHandler from './ball-ui-handler';
import SummaryUiHandler from './summary-ui-handler';

export enum Mode {
  MESSAGE = 0,
  COMMAND,
  FIGHT,
  BALL,
  CONFIRM,
  MODIFIER_SELECT,
  PARTY,
  SUMMARY
};

const transitionModes = [
  Mode.PARTY,
  Mode.SUMMARY
];

export default class UI extends Phaser.GameObjects.Container {
  private mode: Mode;
  private handlers: UiHandler[];
  private overlay: Phaser.GameObjects.Rectangle;

  constructor(scene: BattleScene) {
    super(scene, 0, scene.game.canvas.height / 6);

    this.mode = Mode.MESSAGE;
    this.handlers = [
      new BattleMessageUiHandler(scene),
      new CommandUiHandler(scene),
      new FightUiHandler(scene),
      new BallUiHandler(scene),
      new ConfirmUiHandler(scene),
      new ModifierSelectUiHandler(scene),
      new PartyUiHandler(scene),
      new SummaryUiHandler(scene)
    ];
  }

  setup() {
    for (let handler of this.handlers) {
      handler.setup();
    }
    this.overlay = this.scene.add.rectangle(0, 0, this.scene.game.canvas.width / 6, this.scene.game.canvas.height / 6, 0);
    this.overlay.setOrigin(0, 0);
    (this.scene as BattleScene).uiContainer.add(this.overlay);
    this.overlay.setVisible(false);
  }

  getHandler() {
    return this.handlers[this.mode];
  }

  getMessageHandler() {
    return this.handlers[Mode.MESSAGE] as BattleMessageUiHandler;
  }

  processInput(keyCode: integer) {
    this.getHandler().processInput(keyCode);
  }

  showText(text: string, delay?: integer, callback?: Function, callbackDelay?: integer, prompt?: boolean) {
    const handler = this.getHandler();
    if (handler instanceof MessageUiHandler)
      (handler as MessageUiHandler).showText(text, delay, callback, callbackDelay, prompt);
    else
      this.getMessageHandler().showText(text, delay, callback, callbackDelay, prompt);
  }

  clearText() {
    const handler = this.getHandler();
    if (handler instanceof MessageUiHandler)
      (handler as MessageUiHandler).clearText();
    else
      this.getMessageHandler().clearText();
  }

  setCursor(cursor: integer): boolean {
    const changed = this.getHandler().setCursor(cursor);
    if (changed)
      this.playSelect();

    return changed;
  }

  playSelect() {
    this.scene.sound.play('select');
  }

  playError() {
    this.scene.sound.play('error');
  }

  private setModeInternal(mode: Mode, clear: boolean, args: any[]): Promise<void> {
    return new Promise(resolve => {
      if (this.mode === mode) {
        resolve();
        return;
      }
      const doSetMode = () => {
        this.getHandler().clear();
        this.mode = mode;
        this.getHandler().show(args);
        resolve();
      };
      if (transitionModes.indexOf(this.mode) > -1 || transitionModes.indexOf(mode) > -1) {
        this.overlay.setAlpha(0);
        this.overlay.setVisible(true);
        this.scene.tweens.add({
          targets: this.overlay,
          alpha: 1,
          duration: 250,
          onComplete: () => {
            this.scene.time.delayedCall(250, () => {
              doSetMode();
              this.scene.tweens.add({
                targets: this.overlay,
                alpha: 0,
                duration: 250,
                onComplete: () => this.overlay.setVisible(false)
              });
            });
          }
        });
      } else
        doSetMode();
    });
  }

  setMode(mode: Mode, ...args: any[]): Promise<void> {
    return this.setModeInternal(mode, true, args);
  }

  setModeWithoutClear(mode: Mode, ...args: any[]): Promise<void> {
    return this.setModeInternal(mode, false, args);
  }
}