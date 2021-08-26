export default class TextToSpeechService {
  speechSynthesis: SpeechSynthesis;
  msg: SpeechSynthesisUtterance;

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.msg = new SpeechSynthesisUtterance();
    this.msg.volume = 1;
    this.msg.rate = 1;
    this.msg.pitch = 2;
    this.msg.lang = "en-US";
  }

  public speak = (msg: string) => {
    this.msg.text = msg;
    this.msg.onend = (event: SpeechSynthesisEvent) => {
      console.log(
        "Utterance has finished being spoken after " +
          event.elapsedTime +
          " seconds."
      );
    };

    const voices = this.speechSynthesis.getVoices();
    this.msg.voice = voices[0];

    this.speechSynthesis.speak(this.msg);
  };

  public get isSpeaking(): boolean {
    return this.speechSynthesis.speaking;
  }

  public abortCurrentSpeak = (): void => {
    this.speechSynthesis.cancel();
  };
}
