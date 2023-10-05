import { environment } from './../../../environments/environment';
import JSEncrypt     from "jsencrypt"

export const encrypt = (text : string) =>{
  const encryption  = new JSEncrypt()
  encryption.setPublicKey( environment.ENC_KEY);
  return encryption .encrypt(text);
}

export const decrypt = (text : string) =>{
  const decrypt  = new JSEncrypt()
  decrypt.setPublicKey( environment.ENC_KEY );
  return decrypt.encrypt(text);
}


export const checkValidEmail = (email : string) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
