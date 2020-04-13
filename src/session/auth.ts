import { isNull, isUndefined } from "util";

const SESSION_KEY: string = "user-session"; // local-storage key for save session

export let authenticated = false; // Current authentication status of the logged in user

/**
 * Checks if token exists in localstorage & updates authenticated flag.
 */
export const checkAuth = () => {
    const session = getSession();
    if (session && !isUndefined(session)) {
        authenticated = session.hasOwnProperty("token") && session.token ? true : false;
    } else {
        authenticated = false;
    }
};

/**
 * Returns the session object stored in localStorage
 */
const getSession = (): any => {
    let sessionJson: any = localStorage.getItem(SESSION_KEY);
    if (sessionJson && !isNull(sessionJson)) {
        const session = JSON.parse(sessionJson);
        return session;
    }
    return null;
};
