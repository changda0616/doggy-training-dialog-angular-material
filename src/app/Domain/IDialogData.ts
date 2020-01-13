/**
 * Dialog 視窗傳遞用資料物件定義
 *  - [姓名、身高、體重]
 */
export interface IDialogData {
  id: number,
  /* 姓名 */
  name: string;
  /* 身高 */
  height: number;
  /* 體重 */
  weight: number;
}
