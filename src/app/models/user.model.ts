export class User {
    _id? :string;
    fisrtname: string;
    lastname: string;
    brith_date:string;
    email :string;
    password: string;
    tel : number;
    devices : any[];
    _role:  string;
    extra_data : any;
    active: boolean;
    created_at: Date;

    constructor(model? ){ 
       if(!model){
           model={}
       } 
        this ._id = model._id;
        this.fisrtname = model.firstname;
        this.lastname = model.lastname;
        this.brith_date = model.brith_date;
        this.email = model.email;
        this._role= model._role;
        this.password = model.password;
        this.devices = model.devices;
        this.tel = model.tel;
        this.active = model.active;
        this.extra_data = model.extra_data;
    }

    /**
     * 
     constructor(model: any = null) {
        if ( model ) {
            Object.keys(model).forEach( k => {
                if ( this.hasOwnProperty(k) || (k === '_id') ) {
                  this[k] = model[k];
                }
            });
        }
    }
}
     */
}