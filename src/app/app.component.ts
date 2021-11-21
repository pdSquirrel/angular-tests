import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Password Generator';
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  letters = 'abcdefghijklmnopqrstuvwxyz';
  numbers = '1234567890';
  symbols = '!"#¤%&/()=?';
  password = '';

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  buttonClicked() {
    let passwordCharacters = '';

    if (this.useLetters) {
      passwordCharacters += this.letters;
    }
    if (this.useNumbers) {
      passwordCharacters += this.numbers;
    }

    if (this.useSymbols) {
      passwordCharacters += this.symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * passwordCharacters.length);
      generatedPassword += passwordCharacters[index];
    }
    this.password = generatedPassword;
  }
}
