const St = imports.gi.St;
const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;
const Shell = imports.gi.Shell;
const Lang = imports.lang;
const Gettext = imports.gettext.domain('gnome-shell');
const _ = Gettext.gettext;
 
function changeUserMenu() {
    let children = this.menu._getMenuItems();
    let destroy = false;
    for (let i = 0; i < children.length; i++) {
        let item = children[i];
        if (!destroy) { 
            if (item.label) {
                let _label = item.label.get_text();
                if (_label == _("Lock Screen")) {
                    destroy = true;
                    item.destroy();
                }
            }
        } else 
             item.destroy();
    }
}
 

function init() {
    let statusMenu = Main.panel._statusArea.userMenu;
    changeUserMenu.call(statusMenu);
}

function enable() { }

function disable() { }

