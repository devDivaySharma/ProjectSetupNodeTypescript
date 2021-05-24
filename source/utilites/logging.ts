
const getCurrentTimeStamp = () =>{
    return new Date().toISOString();
}


const info = (namespace: string, message: string, object?: any) => {
    if(object){
        console.info(`[${namespace}] , [INFO] - [${getCurrentTimeStamp()}], [${message}] `,object);
    }else {
        console.info(`[${namespace}] , [INFO] -  [${getCurrentTimeStamp()}], [${message}] `);
    }
}

const error = (namespace: string, message: string, object?: any) => {
    if(object){
        console.error(`[${namespace}] ,[ERROR] - [${getCurrentTimeStamp()}], [${message}] `,object);
    }else {
        console.error(`[${namespace}] ,[ERROR] - [${getCurrentTimeStamp()}], [${message}] `);
    }
}

const warn = (namespace: string, message: string, object?: any) => {
    if(object){
        console.warn(`[${namespace}] ,[WARN] - [${getCurrentTimeStamp()}], [${message}] `,object);
    }else {
        console.warn(`[${namespace}] ,[WARN] - [${getCurrentTimeStamp()}], [${message}] `);
    }
}

const debug = (namespace: string, message: string, object?: any) => {
    if(object){
        console.debug(`[${namespace}] ,[DEBUG] - [${getCurrentTimeStamp()}], [${message}] `,object);
    }else {
        console.debug(`[${namespace}] ,[DEBUG] - [${getCurrentTimeStamp()}], [${message}] `);
    }
}

export default { 
    info,
    warn,
    error,
    debug
}