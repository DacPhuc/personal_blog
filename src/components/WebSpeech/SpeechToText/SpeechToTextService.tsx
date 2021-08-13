export class SpeechToTextService {
  private speechRecognition: SpeechRecognition;

  constructor() {
    const SpeechRecognition: any = window["webkitSpeechRecognition"];

    this.speechRecognition = new SpeechRecognition();
    this.speechRecognition.continuous = false;
    this.speechRecognition.lang = "en-US";
    this.speechRecognition.interimResults = false;
    this.speechRecognition.maxAlternatives = 1;
  }

  onResult = (callback: (result: string, isFinal: boolean) => void) => {
    this.speechRecognition.onresult = (event: SpeechRecognitionEvent) => {
      if (!event.results) {
        return;
      }

      const lastResult = event.results[event.results.length - 1];
      if (!lastResult.isFinal) {
        callback("...", false);
        return;
      }

      callback(lastResult[0].transcript.split(".").join(""), true);
    };
  };

  onStart = (callback: () => void) => {
    this.speechRecognition.onspeechstart = () => callback();
  };

  onEnd = (callback: () => void) => {
    this.speechRecognition.onend = () => callback();
  };

  start = () => {
    this.speechRecognition.start();
  };

  stop = () => {
    this.speechRecognition.stop();
  };
}
