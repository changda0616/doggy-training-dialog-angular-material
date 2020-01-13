import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogTempComponent } from './dialog-temp/dialog-temp.component';
import { IDialogData } from './Domain/IDialogData';
import { HttpClient } from '@angular/common/http';
import { finalize, switchMap, filter, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isDialogOpened: boolean;

  api = 'http://localhost:3000/dialogData';

  title = 'Angular-Demo2';

  apiData: IDialogData[];
  dialogData: IDialogData;

  // 注意
  //    - 使用 NgModule 要記得在 app.module.ts 中引用 FormsModule
  //    - inputName 必須與 app.compoent.html 上 [(ngmodel)] = 'inputName' 名稱一樣
  //    - 因為沒有使用到 ngif 或 ngfor 相關動態操作，所以 static 可以設為 true 在 ngOnInit 時期取得變數內容
  // 補充
  //    - 如果 tslint 檢查出現 Missing semicolon (semicolon)，那可能是您忘記在結尾加 ; 符號
  // @ViewChild('inputName', { static: true }) inputName: NgModule;

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.getData('')
      .subscribe((value: IDialogData[]) => {
        this.apiData = value;
      });
  }

  /**
   * 透過 API Get 取得資料集合
   *
   * @private
   * @param string url：要帶在 api 後面的查詢條件
   * @returns 回傳訪問 API 回來的資料內容
   */
  private getData(url: string) {
    return this.http.get(this.api + '?name_like= '+ url).pipe(
      finalize(() => {
        console.log('complete');  // 每一個 request 收到成功 response 隨即結束
      })
    );
  }

  /**
   * 使用者點擊開啟 Dialog 元件按鈕
   *
   * @param Event event 點擊事件物件
   */
  openDialog(data: IDialogData): void {
    this.isDialogOpened = true;
    this.dialogData = data;
  }

  handleConfirm(data: IDialogData) {
    this.http.put(this.api + '/' + data.id, data).pipe(
      switchMap(_ => this.getData('')),
      catchError(error => {
        alert('更新失敗');
        return of(this.apiData);
      }),
      finalize(() => {this.isDialogOpened = false;})
    ).subscribe((value: IDialogData[]) => { // result 是此關閉事件的物件並不是 dialog-temp 組件傳來的內容
      this.apiData = value;
    });
  }
}
