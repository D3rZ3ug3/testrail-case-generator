"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addACase = exports.getAllCases = exports.addASection = exports.getAllSections = void 0;
const fetchGET = async (link) => {
    return await fetch(link, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " +
                btoa("noah.fasser@magna.com" +
                    ":" +
                    "/Ns4eBBTv6bKxHBg8QUO-AewqYYFcZE/Hkhrr44lp"),
        },
    });
};
const fetchPOST = async (link, data) => {
    return await fetch(link, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " +
                btoa("noah.fasser@magna.com" +
                    ":" +
                    "/Ns4eBBTv6bKxHBg8QUO-AewqYYFcZE/Hkhrr44lp"),
        },
        body: JSON.stringify(data)
    });
};
const getAllSections = async () => {
    const response = await fetchGET("https://testrail.magna.global/index.php?/api/v2/get_sections/5&suite_id=13");
    let data = await response.json();
    console.log("Fetch Sections successful!");
    return data;
};
exports.getAllSections = getAllSections;
const addASection = async (name) => {
    const response = await fetchPOST("https://testrail.magna.global/index.php?/api/v2/add_section/5", { "name": name, "suite_id": 13, "parent_id": 3037 });
    return response.json();
};
exports.addASection = addASection;
const getAllCases = async () => {
    const response = await fetchGET("https://testrail.magna.global/index.php?/api/v2/get_cases/5&suite_id=13");
    let data = await response.json();
    console.log("Fetch Cases successful!");
    return data;
};
exports.getAllCases = getAllCases;
const addACase = async (section_id, title, steps) => {
    const response = await fetchPOST(`https://testrail.magna.global/index.php?/api/v2/add_case/${section_id}`, { "section_id": section_id, "title": title, "custom_steps": steps });
    return response.json();
};
exports.addACase = addACase;
//# sourceMappingURL=apiMethods.js.map