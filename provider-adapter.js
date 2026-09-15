/** @typedef {'OpenAI'|'Claude'|'Gemini'} Provider */
/** @typedef {{id:string,date:Date,model:string,input:number,output:number,total:number,cost:number,status:string,type:string}} UsageRecord */
/** @typedef {{provider:Provider,records:UsageRecord[],limit:number,lastUpdated:Date}} UsageSnapshot */

/**
 * Contract for future live and imported usage sources. Phase 1 deliberately
 * provides no network implementation; mock-data.js is the active source.
 */
export class ProviderAdapter {
  /** @param {Provider} provider */
  constructor(provider){ this.provider=provider; }
  /** @returns {Promise<UsageSnapshot>} */
  async getUsage(){ throw new Error(`${this.provider} integration is not available in Phase 1`); }
}
