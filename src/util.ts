const Name = "AllowList";
const Version = "1.0.0";
const Creador = "SalasCris"
const unixTime = require('unix-time');

export class Plugin{
    static Name(){
        return Name;
    }
    static Version(){
        return Version;
    }
    static Creador(){
        return Creador;
    }
}

export enum TypePrint{
    log,
    info,
    warn,
    err,
    ok
}

export async function Print(msg: string, type: TypePrint = TypePrint.info) {
    switch(type){
        case TypePrint.err:{
            console.error(`[${Plugin.Name()}] `.magenta + msg.red);
            break;
        }
        case TypePrint.warn:{
            console.warn(`[${Plugin.Name()}] `.magenta + msg.yellow);
            break;
        }
        case TypePrint.info:{
            console.info(`[${Plugin.Name()}] `.magenta + msg.white);
            break;
        }
        case TypePrint.log:{
            console.log(`[${Plugin.Name()}] `.magenta + msg.gray);
            break;
        }
        case TypePrint.ok:{
            console.log(`[${Plugin.Name()}] `.magenta + msg.green);
            break;
        }
    }
}

export function TimeToDate(timestamp: number){
	let date = new Date(timestamp * 1000);
	return date.getDate()+
	"/"+(date.getMonth()+1)+
	"/"+date.getFullYear()+
	" "+date.getHours()+
	":"+date.getMinutes()+
	":"+date.getSeconds();
}

export function Time(){
    return unixTime(new Date());
}