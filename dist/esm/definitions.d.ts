declare global {
    interface PluginRegistry {
        DatePickerPlugin?: IDatePicker;
    }
}
export interface DatePickerOptions {
    mode: 'date' | 'time';
    title: string;
    date: string;
    min?: string;
    max?: string;
    is24Hours?: boolean;
    theme?: string;
    cancelText?: string;
    okText?: string;
    cancelButtonColor?: string;
    okButtonColor?: string;
    titleTextColor?: string;
    titleBgColor?: string;
}
export interface IDatePicker {
    show(options: DatePickerOptions): Promise<{
        value: string;
    }>;
}
