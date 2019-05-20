import { EMPLOYEE_UPDATE } from "./types";
export const employeUpdate = ({ prop, value })  => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};