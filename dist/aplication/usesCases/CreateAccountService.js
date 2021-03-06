"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const CreateAccountPort_1 = require("../ports/account/CreateAccountPort");
const GetAccountPort_1 = require("../ports/account/GetAccountPort");
const AccountDomain_1 = require("../../domain/AccountDomain");
let CreateAccountService = class CreateAccountService {
    constructor(_getAccountRepository, _createAccountRepository) {
        this._getAccountRepository = _getAccountRepository;
        this._createAccountRepository = _createAccountRepository;
    }
    create(body) {
        const { id } = body;
        let accountDB = this._getAccountRepository.getById(id);
        if (!accountDB) {
            accountDB = this._createAccountRepository.create(body);
        }
        const account = new AccountDomain_1.default(accountDB.id, accountDB.attributes);
        return account;
    }
};
CreateAccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('account-repository-token')),
    __param(1, (0, common_1.Inject)('account-repository-token')),
    __metadata("design:paramtypes", [Object, Object])
], CreateAccountService);
exports.default = CreateAccountService;
//# sourceMappingURL=CreateAccountService.js.map