"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ParticipantesControlles_1 = require("../controllers/ParticipantesControlles");
class ParticipanteRotes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ParticipantesControlles_1.participandoController.list);
    }
}
const participanteRotes = new ParticipanteRotes();
exports.default = participanteRotes.router;
