import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";
import { StartFunc as FormLoadStartFunc } from "../Show/ToDom/FormLoad.js";

let jVarCommonKToken = ConfigObject.TokenName;
let jVarLocalStorageKeyName = ConfigObject.LocalStorageKeyName;
let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let jFStartFunc = async () => {
    // CheckUserFuncsjFStartFunc({
    //     inUserKey: jVarLocalStorageKeyName,
    //     inKTokenKey: jVarCommonKToken
    // });

    await FormLoadStartFunc({ inProjectName: jVarCommonProjectName });

    await ShowOnDomStartFunc();
};

jFStartFunc().then(() => {
});