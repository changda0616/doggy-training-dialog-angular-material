# Angular-Demo2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

- Run `json-server -w db.json` for a db json db server. api server Navigate to `http://localhost:3000/`.

## angular-demo2

1. 請製作一個含有編輯功能的 `dialog` 元件
   - 如果找不到 `@angular/material` 模組，您可以嘗試使用以下指令安裝模組套件到專案中
     - `npm install --save @angular/material` 
     - 安裝 `material` 模組另外還必須要安裝其相依套件 `@angular/cdk`
     - 安裝完成後記得要到 `app.module.ts` 當中引用模組 
       - `MatDialogModule`
       - `MatInputModule`
       - `MatButtonModule`
     - 並且在 `providers` 內加入以下設定
       - `{ provide: MatDialogRef, useValue: {} },`
       - `{ provide: MAT_DIALOG_DATA, useValue: {} }`
2. `dialog` 元件中，要有三個編輯的欄位，分別為 [姓名、身高、體重]
3. 並且不要讓 `dialog` 元件能夠直接更改外部傳來的物件。
4. 另外，在此 `dialog` 的下方會有三個按鈕，[確定、重置、取消]
   - 執行過程中可能會有此錯誤
     - > Found the synthetic property @panelState. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.
   - 可以使用以下指令補上套件參考
     - `npm install --save @angular/animations` 
     - 安裝完成後記得要到 `app.module.ts` 當中引用模組 `BrowserAnimationsModule`
5. 當在 `dialog` 上按下確定按鈕後，發出 `post request` 更新本地的 `db`
6. 在更新資料成功後，關閉 `dialog`，如果更新資料沒有成功，請出現 `alert` 提示使用者。
7. 若使用者按下取消按鈕，直接將 `dialog` 關閉。
8. 若使用者按下重置按鈕，請將 `dialog` 內的資料重置。

## 補充參考

- [Angular Material Dialog 官方文件](https://material.angular.io/components/dialog/overview)
- [讓自訂的Component可以使用ngModel的方法](https://dotblogs.com.tw/wellwind/2017/03/20/angular-advanced-customize-component-with-ngmodel)
- [Angular 2 ngForm 中的 ngModel、[ngModel]、[(ngModel)]](https://blog.csdn.net/u010730126/article/details/70799099)
- [動態載入元件](https://ithelp.ithome.com.tw/articles/10206447)
- [Share Dialog](https://ithelp.ithome.com.tw/articles/10206586)
