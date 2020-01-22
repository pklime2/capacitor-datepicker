import { Plugins } from '@capacitor/core';
const { DatePickerPlugin } = Plugins;
export class DatePicker {
    show(options) {
        return DatePickerPlugin.show(options);
    }
}
//# sourceMappingURL=plugin.js.map