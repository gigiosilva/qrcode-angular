import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.scss']
})
export class Teste2Component implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
