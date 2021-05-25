export default class Users{
    constructor(id,email,imageURL,displayName,phoneNumber){
        this.setId(id);
        this.setEmail(email);
        this.setImageURL(imageURL);
        this.setDisplayName(displayName);
        this.setPhoneNumber(phoneNumber);
    }

    getId(){
        return this.id;
    }
    setId(id){ this.id=id;}

    getEmail(){
        return this.email;
    }
    setEmail(email){ this.email=email;}

    getImageURL(){
        return this.imageURL;
    } 
    setImageURL(imageURL){ this.imageURL=imageURL;}

    getDisplayName(){
        return this.displayName;
    }
    setDisplayName(displayName){ this.displayName  = displayName;}

    getPhoneNumber(){
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}