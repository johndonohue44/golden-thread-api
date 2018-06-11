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
const repository_1 = require("@loopback/repository");
let Card = class Card extends repository_1.Entity {
    getId() {
        return this.id;
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true
    }),
    __metadata("design:type", Number)
], Card.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true
    }),
    __metadata("design:type", String)
], Card.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true
    }),
    __metadata("design:type", Number)
], Card.prototype, "number", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true
    }),
    __metadata("design:type", Number)
], Card.prototype, "expiry_day", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true
    }),
    __metadata("design:type", Number)
], Card.prototype, "expiry_month", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true
    }),
    __metadata("design:type", String)
], Card.prototype, "secure_code", void 0);
Card = __decorate([
    repository_1.model({
        name: "card"
    })
], Card);
exports.Card = Card;
//# sourceMappingURL=card.js.map