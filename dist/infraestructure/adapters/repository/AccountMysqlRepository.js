"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateAccountPort_1 = require("../../../aplication/ports/account/CreateAccountPort");
const UpdateAccountPort_1 = require("../../../aplication/ports/account/UpdateAccountPort");
const GetAccountPort_1 = require("../../../aplication/ports/account/GetAccountPort");
class AccountMysqlRepository {
    create(body) {
        return `the result is: ${JSON.stringify(body)}`;
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
        return {
            getById: 'getted by id ok -> ' + id,
        };
    }
}
exports.default = AccountMysqlRepository;
//# sourceMappingURL=AccountMysqlRepository.js.map