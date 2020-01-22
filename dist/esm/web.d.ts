import { WebPlugin } from '@capacitor/core';
import { IDatePicker, DatePickerOptions } from './definitions';
export declare class DatePickerPluginWeb extends WebPlugin implements IDatePicker {
    constructor();
    show(options: DatePickerOptions): Promise<{
        value: string;
    }>;
}
declare const DatePickerPlugin: DatePickerPluginWeb;
export { DatePickerPlugin };
