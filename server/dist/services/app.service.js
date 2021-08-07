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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const blcoksinfos_repo_1 = require("../repository/blcoksinfos.repo");
const cahche_1 = require("./cahche");
let AppService = class AppService {
    constructor(blockInfoRepo, cacheService) {
        this.blockInfoRepo = blockInfoRepo;
        this.cacheService = cacheService;
    }
    async getBlockInfo() {
        return this.blockInfoRepo.getBlockInfo().then(date => date.slice(0, 50));
    }
    async getBlockRowInfo(hash) {
        let resp = this.cacheService.get(hash);
        if (resp === undefined) {
            resp = await this.blockInfoRepo.getBlockRowInfo(hash);
            this.cacheService.set(hash, resp);
        }
        return resp;
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [blcoksinfos_repo_1.BlockInfoRepo,
        cahche_1.CacheService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map