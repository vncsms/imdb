import crypto from "crypto";

export function getInsecureSHA1ofJSON(input: string){
  return crypto.createHash('sha1')
               .update(JSON.stringify(input))
               .update(Date())
               .digest('hex');
}