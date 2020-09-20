/**
 * Authentication/user session related common functions & constants
 */
import { useEffect, useState } from "react";

import { pick } from "lodash";
import { isNull, isUndefined } from "util";
import { History } from "history";

const RESPONSE_LOGIN_FAIL = "Failed to Login"; // Common Response for Login Failure (Remove on proper login flow)
const SESSION_KEY: string = "user-session"; // local-storage key for save session

export interface ILoginParams {
    username: string;
    password: string;
}

interface IKeyValueObject {
    [key: string]: any;
}

interface ILoginResponseData {
    token: string;
    user: IKeyValueObject;
}

export let authenticated = false; // Current authentication status of the logged in user
export let userSession: IKeyValueObject = {}; // User Session data
export let isAdminType: boolean = false; // User type of the logged in user

/**
 * Custom function to mimic server response wait time
 * @param ms - Time in Milliseconds
 */
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

/**
 * Login Authentication function
 * @param authParams - username, password contained object.
 */
export const login = async (authParams: ILoginParams) => {
    await sleep(3000);
    const { username, password } = authParams;
    // Dummy User Login Response Object
    const dummyLoginResponseObj = {
        token: "1X-45xNm-7mklIpOZ",
        user: {
            username,
            fullName: `${username}`,
            isAdmin: username === "admin",
            role: username === "admin" ? "Admin" : "User"
        }
    };
    switch (username) {
        case "user":
            if (password !== "Abc@1234") {
                throw Error(RESPONSE_LOGIN_FAIL);
            } else {
                createSession(dummyLoginResponseObj);
            }
            return dummyLoginResponseObj.user;
        case "admin":
            if (password !== "Abc@1234") {
                throw Error(RESPONSE_LOGIN_FAIL);
            } else {
                createSession(dummyLoginResponseObj);
            }
            return dummyLoginResponseObj.user;
        default:
            throw Error(RESPONSE_LOGIN_FAIL);
    }
};

/**
 * Remove session object localStorage data on logout.
 * @param routeHistory - History object for routing.
 * @param redirect (Optional) - Redirecting path.
 */
export const logout = (routeHistory: History, redirect?: string): void => {
    localStorage.removeItem(SESSION_KEY);
    authenticated = false;
    if (redirect) {
        routeHistory.push(redirect);
    }
};

/**
 * Checks if token exists in localstorage & updates authenticated flag.
 * If authenticated checks the user authority state, i.e admin or not.
 */
export const checkAuth = (): void => {
    const session = getSession();
    if (session && !isUndefined(session)) {
        authenticated = session.hasOwnProperty("token") && session.token ? true : false;
        checkIsAdmin();
    } else {
        authenticated = false;
    }
};

/**
 * Update global scope user session object with session data.
 * @param session - session object
 */
const updateUserSession = (session: IKeyValueObject): void => {
    userSession.id = session && session.id ? session.id : "";
    userSession.username = session && session.username ? session.username : "";
    userSession.fullName = session && session.fullName ? session.fullName : "";
    userSession.isAdmin = session && session.isAdmin ? Boolean(session.isAdmin) : false;
    userSession.token = session && session.token ? session.token : "";
    userSession.role = session && session.role ? session.role : "";
};

/**
 * Create a session object in localStorage
 * @param loginResponseData - Response data from authentication
 */
const createSession = (loginResponseData: ILoginResponseData): void => {
    const { token, user } = pick(loginResponseData, ["token", "user"]);
    const session = { token, ...user };
    updateUserSession(session);
    localStorage.setItem(SESSION_KEY, JSON.stringify(userSession));
    authenticated = true;
    isAdminType = Boolean(user.isAdmin);
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

/**
 * Checks whether the user is admin type & updates the isAdminType flag
 */
export const checkIsAdmin = (): void => {
    isAdminType = isAdminUser();
};

/**
 * Returns a boolean flag indicating whether user is an admin or not.
 */
export const isAdminUser = (): boolean => {
    const session = getSession();
    let isAdmin = false;
    if (session && !isUndefined(session)) {
        isAdmin = session.hasOwnProperty("isAdmin") ? Boolean(session.isAdmin) : false;
    } else {
        isAdmin = false;
    }
    return isAdmin;
};

/**
 * React hook to handle session from browser storage
 * @param sessionKey - Browser storage key. Default is set to the key `user-session`
 * @returns If there is a session in your browser storage then it will be returned. If there is no session, it will return null.
 *
 * Usage - This hook is useful in scenarios where you need to listen to session changes in functional components
 *
 * import { useSession } from "session/auth";
 *
 * ...
 * <FC>
 *  const { session } = useSession();
 * </FC>
 */
export const useSession = () => {
    const [state, setState] = useState<any>(getSession);

    const syncState = (event: StorageEvent) => {
        if (event.key === SESSION_KEY) {
            setState(getSession);
        }
    };

    useEffect(() => {
        window.addEventListener("storage", syncState);
        return () => {
            window.removeEventListener("storage", syncState);
        };
    }, []);

    return { session: state };
};
