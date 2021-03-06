import { Component } from '@angular/core';
import * as QRCode from 'qrcode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrcode-angular';

  async downloadQRCode() {
    const myQRCode = await QRCode.toDataURL('SUA URL AQUI VANDRIM', { errorCorrectionLevel: 'H' });

    var link = document.createElement('a');
    link.href = myQRCode;
    link.download = 'meuQrCode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
