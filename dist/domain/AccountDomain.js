"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountDomain {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    createCvu(cvu, alias) {
        this.cvu = cvu;
        this.alias = alias;
        return this;
    }
}
exports.default = AccountDomain;
//# sourceMappingURL=AccountDomain.js.map