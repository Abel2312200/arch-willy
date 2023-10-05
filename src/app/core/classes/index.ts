import * as uuid from "uuid";

export class UUID {

  private _uuid?: string;
  private static  INSTANCE : UUID;

  private constructor () {

  }

  public static getInstance() : UUID {

    if(this.INSTANCE == null)
       this.INSTANCE  = new UUID();
    return this.INSTANCE;
  }

  private setUuid(uuid : string){
    return this._uuid = uuid;
  }



  // Static
  generate() {
    return  this.setUuid(uuid.v4())
  }


}
