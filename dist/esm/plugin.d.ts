import { IDatePicker, DatePickerOptions } from './definitions';
export declare class DatePicker implements IDatePicker {
    show(options: DatePickerOptions): Promise<{
        value: string;
    }>;
}
