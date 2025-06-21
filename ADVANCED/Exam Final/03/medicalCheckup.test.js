import { expect } from "chai";
import medicalCheckup from "./medicalCheckup.js";

describe("Tests for medicalCheckup object", function () {

    describe("scheduleAppointment()", function () {

        it("should throw error if location is not Sofia", function () {
            expect(() => medicalCheckup.scheduleAppointment(40, 30, "Plovdiv")).to.throw("The location of this clinic is not in the correct city!");
        });

        it("should return does not meet requirements message", function () {
            let result = medicalCheckup.scheduleAppointment(20, 60, "Sofia");
            expect(result).to.equal("This clinic does not meet your requirements!");
        });

        it("should return meets requirements message", function () {
            const result = medicalCheckup.scheduleAppointment(35, 40, "Sofia");
            expect(result).to.equal("This clinic meets the requirements, with capacity for 35 patients at 40$ per checkup.");
        });

        it("should throw error for invalid parameter types", function () {
            expect(() => medicalCheckup.scheduleAppointment("30", 50, "Sofia")).to.throw("Invalid Information!");
            expect(() => medicalCheckup.scheduleAppointment(30, "50", "Sofia")).to.throw("Invalid Information!");
            expect(() => medicalCheckup.scheduleAppointment(30, 50, "")).to.throw("Invalid Information!");
        });
    });

    describe("additionalServices()", function () {
        it("should throw error for invalid input types", function () {
            expect(() => medicalCheckup.additionalServices("blood", ["general"], true)).to.throw("Invalid Information!");
            expect(() => medicalCheckup.additionalServices(["blood"], "general", true)).to.throw("Invalid Information!");
            expect(() => medicalCheckup.additionalServices(["blood"], ["general"], "yes")).to.throw("Invalid Information!");
        });

        it("should calculate cost without insurance", function () {
            let result = medicalCheckup.additionalServices(["blood", "urine"], ["general", "specialist"], false);
            expect(result).to.equal("You spend 335$ for lab tests and consultations!");
        });

        it("should calculate cost with insurance", function () {
            let result = medicalCheckup.additionalServices(["blood", "urine"], ["general"], true);
            expect(result).to.equal("You spend 108$ for lab tests and consultations with 20% insurance discount!");
        });

        it("should ignore unknown services", function () {
            let result = medicalCheckup.additionalServices(["blood", "xray"], ["general", "dermatology"], false);
            expect(result).to.equal("You spend 120$ for lab tests and consultations!");
        });
    });

    describe("roomDistribution()", function () {
        it("should throw error for invalid types or negative values", function () {
            expect(() => medicalCheckup.roomDistribution(-5, 10)).to.throw("Invalid Information!");
            expect(() => medicalCheckup.roomDistribution("40", 10)).to.throw("Invalid Information!");
            expect(() => medicalCheckup.roomDistribution(40, "10")).to.throw("Invalid Information!");
            expect(() => medicalCheckup.roomDistribution(40, -2)).to.throw("Invalid Information!");
        });

        it("should return rearranging message if less than 4 patients per room", function () {
            let result = medicalCheckup.roomDistribution(6, 3); 
            expect(result).to.equal("There is only 2 patient in every room, consider rearranging.");
        });

        it("should return proper distribution message if >= 4 per room", function () {
            let result = medicalCheckup.roomDistribution(20, 4); 
            expect(result).to.equal("You have 4 rooms with 5 patients in each room.");
        });

        it("should round patients per room correctly", function () {
            let result = medicalCheckup.roomDistribution(17, 4); 
            expect(result).to.equal("You have 4 rooms with 4 patients in each room.");
        });
    });
});
