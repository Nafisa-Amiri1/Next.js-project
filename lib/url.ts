import qs from "query-string";

interface UrlQueryParams {
    Params: string;
    Key: string;
    Value: string;
}

interface RemoveQueryParams {
    Params: string;
    KeysToRemove: string[];
}

// این تابع (formUrlQuery)مسعول آپدیت کردن Query Params داخل  URL است  
export const formUrlQuery = ({ Params, Key, Value }: UrlQueryParams) => { 
    const queryString = qs.parse(Params);

    queryString[Key] = Value;
    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString,
     });
}; 

export const removeKeysFromUrlQuery = ({
    Params,
    KeysToRemove,
}: RemoveQueryParams) => { 
    const queryString = qs.parse(Params);

    KeysToRemove.forEach((key) => {
        delete queryString[key];
    });

    return qs.stringifyUrl(
        {
        url: window.location.pathname,
        query: queryString,
        },
        { skipNull: true },
        
    );
}; 