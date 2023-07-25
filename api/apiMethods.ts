import { API_EMAIL, API_KEY } from "../authentication";
import { SUITE_ID } from "../testrailId";

const fetchGET = async (link:string) => {
    return await fetch(
        link,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic " +
              btoa(
                API_EMAIL +
                  ":" +
                  API_KEY
              ),
          },
        }
      );
}

const fetchPOST = async (link:string, data:any) => {
    return await fetch(
        link,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic " +
              btoa(
                API_EMAIL +
                  ":" +
                  API_KEY
              ),
          },
          body: JSON.stringify(data)
        }
      );
}

export const getAllSections = async () => {
    const response = await fetchGET("https://testrail.magna.global/index.php?/api/v2/get_sections/5&suite_id=" + SUITE_ID);
    let data = await response.json();
  
    console.log("Fetch Sections successful!");
    return data;
};

export const addASection = async (name: string) => {
    const response = await fetchPOST("https://testrail.magna.global/index.php?/api/v2/add_section/5", {"name": name, "suite_id": SUITE_ID});
    return response.json();
}

export const getAllCases = async () => {
    const response = await fetchGET("https://testrail.magna.global/index.php?/api/v2/get_cases/5&suite_id=" + SUITE_ID);
    let data = await response.json();
  
    console.log("Fetch Cases successful!");
    return data;
};

export const addACase = async (section_id: number, title:string, steps: string) => {
    const response = await fetchPOST(`https://testrail.magna.global/index.php?/api/v2/add_case/${section_id}`, {"section_id": section_id, "title": title, "custom_steps": steps});
    
    return response.json();
}