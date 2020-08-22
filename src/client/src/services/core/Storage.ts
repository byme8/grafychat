export class PersistentStorageService {

    set(key: string, value: any){
        let json = JSON.stringify(value);
        localStorage.setItem(key, json)
    }

    get<TValue>(key: string) : TValue | null{
        let json = localStorage.getItem(key);

        if (json === null) {
            return null
        }

        return JSON.parse(json) as TValue
    }
    
}


export let PersistentStorage = new PersistentStorageService()