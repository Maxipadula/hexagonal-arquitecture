"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateAccountPort_1 = require("../../../aplication/ports/account/CreateAccountPort");
const UpdateAccountPort_1 = require("../../../aplication/ports/account/UpdateAccountPort");
const GetAccountPort_1 = require("../../../aplication/ports/account/GetAccountPort");
class AccountMysqlRepository {
    create(body) {
        return {
            id: body.id || 1,
            attributes: body.data || { 'foo': 'bar' }
        };
    }
    update() {
        return {
            updated: 'updated ok',
        };
    }
    getAll() {
        return {
            updated: 'get all ok',
        };
    }
    getById(id) {
        console.log('Id Not found');
        return false;
    }
}
exports.default = AccountMysqlRepository;
//# sourceMappingURL=AccountMysqlRepository.js.map