
import { Menu } from "./claient/claient.js"; 
import { GetPeopleList, GetCallRecords, SearchPeoplebyName, SearchPeoplebyAge,FindingHazard } from "./utils/utils.js";


let menu = Menu()
    switch (menu) {
        case "1":
            await GetPeopleList();
            break;
        case "2":
            await GetCallRecords();
            break;
        case "3":
            await SearchPeoplebyName();
            break;
        case "4":
            await SearchPeoplebyAge();
            break;
        case "5":
            break;


    }

await FindingHazard()