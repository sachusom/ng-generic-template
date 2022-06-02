/**
 * To only allow numbers in input field.
 * @author Vishnu Somanath
 * @version 1.0.0
 * @return {void}
 * @example
 * <input type="text" [nggtAllowOnlyNumbers] />
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AutofillMonitor } from '@angular/cdk/text-field';

@Directive({
    selector: '[nggtAllowOnlyNumbers]'
})
export class AllowOnlyNumbersDirective {

    private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
    // Allow key codes for special events. Reflect :
    // Backspace, tab, end, home
    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];

    constructor(
        private el: ElementRef,
        private controlDir: NgControl,
        private autofillMonitor: AutofillMonitor) {
        this.monitorAutofill();
    }

    @Input() nggtAllowOnlyNumbers: any;

    /* DOM Listeners */
    @HostListener('paste', ['$event']) onPaste(e: any): void {
        // get and validate data from clipboard
        let value = '';
        const windowBox = window as any;
        if (windowBox.clipboardData && windowBox.clipboardData.getData) {
            // --- used for Internet Explorer
            value = windowBox.clipboardData.getData('Text');
        } else {
            // ----used for Chrome and Firefox
            value = e.clipboardData.getData('text/plain');
        }
        const pastedNumber = value.replace(/\D/g, '');
        this.controlDir.control?.setValue(pastedNumber);
        e.preventDefault();
    }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent): void {
        // Allow Backspace, tab, end, home, left arrow and right arrow keys
        if (this.specialKeys.indexOf(event.key) !== -1 ||
            // Allow: Ctrl+V and Command+V
            (event.key === 'v' && event.ctrlKey === true)) {
            return;
        }
        const current: string = this.el.nativeElement.value;
        // We need this because the current value on the DOM element
        // is not yet updated with the value from this event
        const next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }

    private monitorAutofill(): void {
        this.autofillMonitor.monitor(this.el).subscribe(data => {
            this.controlDir.control?.setValue(null);
        });
    }
}
