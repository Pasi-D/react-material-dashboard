import React, {
    FC,
    createContext,
    Dispatch,
    ReactNode,
    useState,
    SetStateAction
} from "react";

interface ITopAppBarContextProps {
    heading: string;
    setHeading: (heading: string) => void | Dispatch<SetStateAction<string>>;
}

const DEFAULT_HEADING = "Dashboard";

const initialContext: ITopAppBarContextProps = {
    setHeading: () => {},
    heading: DEFAULT_HEADING
};

export const TopAppBarContext = createContext<ITopAppBarContextProps>(initialContext);

interface ITopAppBarCtxProviderProps {
    children: ReactNode;
}

const TopAppBarCtxProvider: FC<ITopAppBarCtxProviderProps> = ({ children }) => {
    // TopAppbar Header
    const [heading, setHeading] = useState(DEFAULT_HEADING);

    return (
        <TopAppBarContext.Provider value={{ setHeading, heading }}>
            {children}
        </TopAppBarContext.Provider>
    );
};

export default TopAppBarCtxProvider;
