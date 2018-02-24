class Address {
  constructor(
    public street?: string,
    public number?: number,
    public city?: string,
    public state?: string,
    public postalcode?: number,
    public active?:boolean
  ) {
  }
}


export default Address;
